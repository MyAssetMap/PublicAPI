'use strict';

const config = require('../tools/config');
const util = require('../tools/util');

// =====================
// = DATABASE SETTINGS =
// =====================
const pg = require('pg')
const pool = new pg.Pool(config.dbPool)

const DB = require('./db')

module.exports = class Layer {
  // ========================
  // = CUSTOM LOGIC QUERIES =
  // ========================
  
  // ===================================
  // = TOC AND GENERAL LAYER FUNCTIONS =
  // ===================================
  static createLayer(payload, callback) {
    var thisClass = this;
      //Create Group First
    var label = payload.label;
    var description = payload.description;
    var canExpand = payload.canExpand;
    var canOrgView = payload.canOrgView;
    var canOrgEdit = payload.canOrgEdit;
  
    if (label == null) return callback(true, 'Label (`label`) must be supplied.');
    if (description == null) description = '';
    if (canExpand == null) canExpand = false;
    if (canOrgView == null) canOrgView = false;
    if (canOrgEdit == null) canOrgEdit = false;

    var userID = payload.userID;
    var mapID = payload.mapID;
    var groupID = payload.groupID;
    var type = payload.type;
  
    if (userID == null) return callback(true, 'User ID (`userID`) must be supplied.');
    if (mapID == null) return callback(true, 'Map ID (`mapID`) must be supplied.');
    if (groupID == null) groupID = 0;
    if (type == null) return callback(true, 'Type (`type`) must be supplied.');
  
    DB.insertRow(pool,
      'LayerGroup',
      ["ownerID", "mapID", "groupID", "source-label", "label", "description", "canExpand", "canOrgView", "canOrgEdit"],
      [userID, mapID, groupID, util.toSlug(label), label, description, canExpand, canOrgView, canOrgEdit],
      function(error, groupID) {
        if (error) return callback(true, groupID);
        console.log('GroupID:',groupID)
      
        thisClass.setupLayer(payload, groupID, function(error, setupLayer) {
          if (error) callback(error, setupLayer);
        
          var newLayerName = util.toSlug(label) + '_' + groupID.toString();
          callback(false, newLayerName)
        })
      }
    );
  }

  static setupLayer(payload, groupID, callback) {
    var thisClass = this;

    //Group
    var userID = payload.userID;
    if (userID == null) return callback(true, 'User ID (`userID`) must be supplied.');

    //Layer
    var sourceLayer = payload.sourceLayer;
    var sourceType = payload.sourceType;
    var interactive = payload.interactive
    var minzoom = payload.minzoom;
    var layout = payload.layout;
    var paint = payload.paint;
    var metadata = payload.metadata;
  
    var label = payload.label;
    var type = payload.type;
    var description = payload.description;
    var canExpand = payload.canExpand;
    var canOrgView = payload.canOrgView;
    var canOrgEdit = payload.canOrgEdit;

    if (sourceType == null) return callback(true, 'Source Type (`sourceType`) must be supplied.');
    if (!['global','org','user','image'].includes(sourceType)) sourceType = "vector";
  
    if (label == null) return callback(true, 'Label (`label`) must be supplied.');
    if (type == null) return callback(true, 'Type (`type`) must be supplied.');
    if (description == null) description = '';
    if (canExpand == null) canExpand = false;
    if (canOrgView == null) canOrgView = false;
    if (canOrgEdit == null) canOrgEdit = false;

    //Create Layer
    DB.insertRow(pool,
      'Layer',
      ["ownerID", "groupID", "type", "source-layer", "label", "interactive", "minzoom", "layout", "paint", "metadata"],
      [userID, groupID, type, sourceLayer, label, interactive, minzoom, layout, paint, metadata],
      function(error, layerID) {
        if (error) return callback(true, layerID);
        console.log('LayerID:',layerID)
      
        //Create Layer Source
        thisClass.setupSubLayers(layerID, type, 
          function(error, subSymbolID) {
            if (error) return callback(true, subSymbolID);
      
            var sourceFields = ["type","layerID"];
            var sourceValues = [sourceType,layerID];
            //Create Layer Source
            DB.insertRow(pool,
              'LayerSource',
              sourceFields,
              sourceValues,
              function(error, sourceID) {
                if (error) return callback(true, sourceID);
                console.log('SourceID:',sourceID)
          
                //Add to User List Data
                DB.appendToJSONRow(pool,
                  'User',
                  'userLayers',
                  '[['+groupID+',{}]]',
                  'id',
                  userID,
                  function(error, userRowID) {
                    if (error) return callback(true, userRowID);
                    console.log('UserRowID:',userRowID)
                    callback(false, groupID)
                  }
                )
              }
            )
          }
        )
      }
    )
  }

  static setupSubLayers(layerID, type, callback) {
    var thisClass = this;
    if (layerID == null) return callback(true, 'Sublayers could not be setup as layerID was not defined.');
  
    DB.insertRow(pool,
      'LayerSublayer',
      ["layerID","key","type","label"],
      [layerID,"symbol","symbol","Symbol"],
      function(error, subSymbolID) {
        if (error) return callback(true, subSymbolID);
        console.log('Sublayer_SymboldID:',subSymbolID)
      
        if (type != 'fill') return callback(false, 'Sublayers have been added!');
      
        DB.insertRow(pool,
          'LayerSublayer',
          ["layerID","key","type","label"],
          [layerID,"outline","line","Outline"],
          function(error, subSymbolID) {
            if (error) return callback(true, subSymbolID);
            console.log('Sublayer_SymboldID:',subSymbolID)
          
            callback(false, 'Sublayers have been added!');
          }
        )
      }
    )
  }

  static updateLayerOrder(userID, order, deleteGroups, callback) {
    var thisClass = this;

    if (deleteGroups == null) deleteGroups = true;
  
    if (order == null) return callback(true, 'Layer & Group Order Object (`order`) must be supplied.');
  
    //Add to User List Data
    DB.getRowFromTableWhere(pool, 'User',['userLayers'],'id',userID,function(error,users) {
      if (error) return callback(true, users);
    
      if (!users.length) return callback(true, 'No data was found for this userID');
      users.forEach(function(user) {
        const userLayers = user.userLayers;
      
        if (!userLayers.length) return callback(true, 'No user layers exist.');
        //Create a userLayers reference object with the keys.
        var userRef = {};
        userLayers.forEach(function(layer) {
          var layerTitle = layer[0];
          var layerCustomize = layer[1];
        
          if (typeof layerTitle !== 'object') {
            userRef[layer[0]] = layer;
          }else{
            if (layerTitle.groupId != null) {
              userRef[layerTitle.groupId] = layer;
            }
          }
        })
      
        var newUserLayers = [];
      
        if (!Array.isArray(order)) return callback(true, 'Order object passed must be an array.');
        //For each order item passed, see if it is a valid key in the reference object. If it is, append it to the new element, and delete it from the ref object.
        order.forEach(function(orderItem) {
          //console.log('orderItem',orderItem);
        
          if (orderItem.group != null) {
            if (userRef[orderItem.group] != null) {
              var groupObj = userRef[orderItem.group];
            
              //Wipe out the existing children relationships.
              groupObj[0].children = {groupIds: [],layerIds: []};
            
              if (orderItem.children != null) {
                if (typeof orderItem.children === 'object') {
                
                  if (groupObj[0].children == null) groupObj[0].children = {groupIds: [],layerIds: []};
                
                  orderItem.children.forEach(function(child) {
                    if (child.group != null) {
                      groupObj[0].children.groupIds.push(child.group);
                    }
                    if (child.layer != null){
                      groupObj[0].children.layerIds.push(util.extractLayerInt(child.layer));
                    }
                  })
                }
              }
              newUserLayers.push(groupObj);
              delete userRef[orderItem.group];
            }else console.error('orderItem: Group Passed does not exist: '+orderItem.group)
          }else if (orderItem.layer != null) {
            var layerID = util.extractLayerInt(orderItem.layer);
            if (userRef[layerID] != null) {
              newUserLayers.push(userRef[layerID]);
              delete userRef[layerID];
            }else console.error('orderItem: Layer Passed does not exist: '+orderItem.layer)
          }
        })
        //Now, check the reference object for any items that were not in the order object passed.
        userRef.forEach(function(layer, key) {
          //console.log('Not in order:',layer);
        
          var layerTitle = layer[0];
          var layerCustomize = layer[1];

          if (typeof layerTitle !== 'object') {//Just a layer
            newUserLayers.push(layer);
          }else if (layerTitle.groupId == null) {//Manually defined layers
            newUserLayers.push(layer);
          }else {
            if (!deleteGroups) {
              newUserLayers.push(layer);
              console.log('Unused Group: '+layerTitle.groupId);
            
            }else {
              //Skip Groups
              console.log('Deleted Group: '+layerTitle.groupId);
            }
          }
        })
      
        DB.updateRow(pool, 'User','userLayers',newUserLayers,'id',userID,function(error,users) {
          if (error) return callback(true, users);
        
          return callback(false, newUserLayers);
        })
      })
    })
  }

  static deleteLayer(groupID, callback) {
    var thisClass = this;

      //Get Layer Group from ID
    DB.getTableWhere(pool, 'LayerGroup','id',groupID,function(error,groups) {
      if (error) return callback(true, groups);
    
      // finalReturn.push(groups);
      if (!groups.length) return callback(true, 'Layer Group ID (`'+groupID+'`) does not exist!');
    
      DB.deleteTableWhere(pool, 'LayerGroup','id',groupID, function(error,del_layerGroup) {
        if (error) return callback(true, del_layerGroup);

        callback(false, del_layerGroup);
      })
    })
  }
  
  static getGroupByID(currentKey, groupID, callback) {
    var thisClass = this;
    var finalReturn = [];
    
    DB.getTableWhere(pool, 'LayerGroup','id',groupID,function(error,groups) {
      if (error) return callback(true, currentKey, groupID, groups);
    
      // finalReturn.push(groups);
      if (!groups.length) return callback(false, currentKey, groupID, finalReturn);
    
      groups.forEach(function(group) {
        // console.log(group);
        let ownerID = group['ownerID'];
        let mapID = group['mapID'];
      
        //PreProcess
        var processedGroup = group;
      
        if (processedGroup.label !== null)
          processedGroup.id = processedGroup['source-label'] + '_' + processedGroup.id.toString();
      
        processedGroup.group = "dataLayer"
      
        delete processedGroup.ownerID;
        delete processedGroup.mapID;
        delete processedGroup.groupID;
      
        DB.getTableWhere(pool, 'Layer','groupID',groupID, function(error,layers) {
          if (error) return callback(true, currentKey, groupID, layers);
        
          //If Layer group exists, but has no layers.
          if (!layers.length) {
            //Add the template
            var groupPayload = {
              toc: processedGroup,
              sourcesArray: [],
              layersArray: []
            };
          
            finalReturn.push(groupPayload);
            return callback(false, currentKey, groupID, finalReturn);
          }
        
          var layersProcessed = 0;
        
          var processedLayers = [];
        
          layers.forEach(layer => {
            var layerID = layer.id;
          
            var layerLabel = '';
            if (processedGroup.label !== null) {
              layerLabel = layer['source-layer'] + '_';
            
              layer.id = layerLabel + layer.id.toString();
              layer.source = layerLabel + 'source';
            }
          
            layer.metadata.label = layer.label;
            delete layer.label;
            delete layer.ownerID;
            delete layer.groupID;
          
            var processedLayer = { 
              beforeLayer: null,
              layer: layer
            };
            DB.getTableWhere(pool, 'LayerSublayer','layerID',layerID, function(error,layersubs) {
              if (error) return callback(true, currentKey, groupID, layersubs);
            
              layersubs.forEach(subLayer => {
                var sublayerID = subLayer.layerID;
                var sublayerKey = subLayer.key;
          
                subLayer.id = layer.id +'_' +sublayerKey;
                subLayer["source-layer"] = layer["source-layer"];
                subLayer.source = layerLabel + 'source';
            
                subLayer.metadata.label = subLayer.label;
                delete subLayer.layerID;
                delete subLayer.key;
                delete subLayer.label;
          
                processedLayer[sublayerKey] = subLayer;
              })
            
              processedLayers.push(processedLayer);
          
              DB.getTableWhere(pool, 'LayerSource','layerID',layerID, function(error,layersources) {
                if (error) return callback(true, currentKey, groupID, layersources);
          
                var processedSource = [];
          
                layersources.forEach(layerSource => {
                  var layerID = layerSource.layerID;
            
                  layerSource.id = layerLabel + 'source';
              
                  delete layerSource.layerID;
                  if (layerSource.type == 'image') {
                    delete layerSource.tiles;
                    delete layerSource.maxzoom;
                    
                    if (layerSource.coordinates == '') layerSource.coordinates = [[-180,0],[-179,1],[-179,1],[-180,0]];
                    if (layerSource.url == '') layerSource.url = 'https://my-asset-map-data.s3.amazonaws.com/client_data/mam_constants/empty.png';
                  }else {
                    delete layerSource.coordinates;
                    delete layerSource.url;
                  }
            
                  if (['global','org','user'].includes(layerSource.type)) {
                    var layerName = 'layer_'+mapID+'_'+layerSource.type;
                    layerSource.type = 'vector';
                    layerSource.tiles = ['https://tiles.myassetmap.com/v1/mvt/'+layerName+'/{z}/{x}/{y}?columns=prop%2Cid&filter=layer%20%3D%20'+layerID];
                  
                    //Overwrite each of the source layers to be the correct value needed for the tiling server.
                    processedLayer.forEach(function( layer, key) {
                      if (processedLayer[key] != null && typeof processedLayer[key] === 'object') {
                        processedLayer[key]['source-layer'] = layerName;
                      }
                    })
                  }
            
                  processedSource.push(layerSource)
                })
          
                layersProcessed++;
                if (layersProcessed === layers.length) {
              
                  //format the payload
                  var groupPayload = {
                    toc: processedGroup,
                    sourcesArray: processedSource,
                    layersArray: processedLayers
                  };
              
                  finalReturn.push(groupPayload);
              
                  //NOW THAT EVERYTHING IS DONE, CONTINUE.
                  callback(false, currentKey, groupID, finalReturn);
                }
              })
            })
          })
        })
      })
    });
  }

  static getGlobalLayers(mapID, callback) {
    var thisClass = this;
    var finalReturn = [];
    
    DB.getTableWhere(pool, 'LayerGroup','mapID',0,function(error,groups) {
      if (error) return callback(true, groups);
    
      // finalReturn.push(groups);
    
      if (!groups.length) return callback(false, finalReturn);
    
      var itemsProcessed = 0;
      groups.forEach(function(group) {
      
        thisClass.getGroupByID(0, group.id, function(error, currentKey, layerTitle, layerTOC) {
          if (error) return callback(true,layerTOC);
        
          finalReturn.push(layerTOC);

          itemsProcessed++;
          if (itemsProcessed === groups.length) {
            //NOW THAT EVERYTHING IS DONE, CONTINUE.
            callback(false, finalReturn);
          }
        })
      })
    });
  }

  static getLayers(mapID, userID, callback) {
    var thisClass = this;
    var finalReturn = {};
  
    DB.getRowFromTableWhere(pool, 'User',['userLayers'],'id',userID,function(error,users) {
      if (error) return callback(true, users);
    
      if (!users.length) return callback(false, finalReturn);
      users.forEach(function(user) {
        const userLayers = user.userLayers;
      
        if (!userLayers.length) return callback(false, finalReturn);
        var itemsProcessed = 0;
        var currentKey = 0;
        userLayers.forEach(function(layer) {
        
          var layerTitle = layer[0];
          var layerCustomize = layer[1];
          
          thisClass.getGroupByID(currentKey, layerTitle, function(error,currentKey,layerTitle,layerTOC) {
            if (error) {
              console.error('TOC ERROR',layerTitle,layerTOC);
              finalReturn[currentKey] = layerTitle;
            }else{
              if (layerTOC.length !== 0) {
                console.log('TOC',layerTitle,layerTOC);
                finalReturn[currentKey] = layerTOC;
              }
            }

            itemsProcessed++;
            if (itemsProcessed === userLayers.length) {
          
              //NOW THAT EVERYTHING IS DONE, CONTINUE.
              thisClass.finalGroupsProcess(finalReturn, function(error, processedReturn) {
                if (error) return callback(true, processedReturn);
                
                callback(false, {user: processedReturn});
              })
            }
          })
          currentKey++;
        })
      })
    })
  }
  
  static getLayerInfo(layerID, callback) {
    var thisClass = this;
    var finalReturn = {};
  
    DB.getTableWhere(pool, 'Layer','id',layerID,function(error,layer) {
      if (error) return callback(true, layer);
    
      if (layer.length !== 1) return callback(false, false);
      
      layer = layer[0];
      
      finalReturn.ownerID = layer.ownerID;
      finalReturn.groupID = layer.groupID;

      //Get Group
      DB.getTableWhere(pool, 'LayerGroup','id',layer.groupID,function(error,group) {
        if (error) return callback(true, group);
        
        if (group.length !== 1) return callback(false, false);
        
        group = group[0];
        
        finalReturn.mapID = group.mapID;
        
        callback(false,finalReturn);
        
      })
    })
  }
  
  static finalGroupsProcess(userGroups, callback) {
    var processedLayers = 0;
    // console.log('Processing Begins');
    userGroups.forEach(function(userLayer, key) {
      
      if (typeof userLayer === 'object' && typeof userLayer.groupId !== 'undefined' && typeof userLayer.children !== 'undefined') {
        // console.error('PP',userLayer);

        var layerIDs = userLayer.children.layerIds;
  
        if (Array.isArray(layerIDs)) {
          var layerIDKey = 0;
          var itemsProcessed = 0;
          var totalItems = layerIDs.length;
          if (totalItems == 0) processedLayers++;
          
          layerIDs.forEach(function(gLayerID) {
            DB.getRowFromTableWhere(pool, 'LayerGroup', 'source-label', 'id', gLayerID, function(error, layerLabel) {
              // console.error('LL',gLayerID,layerLabel);
              if (error) {
                layerIDs[layerIDKey] = gLayerID;
              }else{
                if (!Array.isArray(layerLabel) || (Array.isArray(layerLabel) && layerLabel.length == 0)) {
                  layerIDs[layerIDKey] = gLayerID;
                }else {
                  var layerIDString = layerLabel[0]['source-label'] + '_' + gLayerID.toString();
                  if (!layerIDs.includes(layerIDString)) {
                    layerIDs[layerIDKey] = layerIDString;
                  }else{
                    layerIDs.splice(layerIDKey, 1);
                  }
                }
              }
              
              itemsProcessed++;
              if (itemsProcessed === totalItems) {
                
                userGroups[key].children.layerIds = layerIDs;
                // console.log('++ Group',userLayer)
                processedLayers++;
              }
              // console.log(processedLayers === Object.size(userGroups),processedLayers,Object.size(userGroups));
              if (processedLayers === Object.size(userGroups)) {

                //NOW THAT EVERYTHING IS DONE, CONTINUE.
                callback(false, userGroups);
              }
              layerIDKey++;
            })
          })
        }
      }else{
        // console.log('++ Layer',userLayer)
        processedLayers++;
      }
      
      // console.log(processedLayers === Object.size(userGroups),processedLayers,Object.size(userGroups));
      if (processedLayers === Object.size(userGroups)) {

        //NOW THAT EVERYTHING IS DONE, CONTINUE.
        callback(false, userGroups);
      }
    })
  }
  
  // =======================
  // = TOC GROUP FUNCTIONS =
  // =======================
  static updateLayerGroup(layerGroupID, payload, callback) {
    DB.bulkUpdateRow(pool, 'LayerGroup', payload, 'id', layerGroupID, callback)
  }
  
  // ===================
  // = LAYER FUNCTIONS =
  // ===================
  static updateLayer(layerID, payload, callback) {
    DB.bulkUpdateRow(pool, 'Layer', payload, 'id', layerID, callback)
  }
  
  // ======================
  // = SUBLAYER FUNCTIONS =
  // ======================
  static updateSublayer(layerID, key, payload, callback) {
    DB.bulkUpdateRow(pool, 'LayerSublayer', payload, ['layerID','key'], [layerID,key], callback)
  }
  
  // ====================
  // = SOURCE FUNCTIONS =
  // ====================
  static updateLayerSource(layerID, payload, callback) {
    DB.bulkUpdateRow(pool, 'LayerSource', payload, 'layerID', layerID, callback)
  }
  
}
