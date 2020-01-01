'use strict';

const config = require('./config');
const util = require('./util');

// =====================
// = DATABASE SETTINGS =
// =====================
const pg = require('pg')
const pool = new pg.Pool(config.dbPool)

function toSlug(str) {
  var res = str.toLowerCase();
  res = res.replace(/ /g, "-");
  return res;
}

function generateRandomString(length, numOnly) {
  const allCapsAlpha = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"]; 
  const allLowerAlpha = [..."abcdefghijklmnopqrstuvwxyz"]; 
  const allNumbers = [..."0123456789"];

  var base = [...allNumbers];
  if (!numOnly) {
    base = [...base,...allCapsAlpha,...allLowerAlpha]
  }
  return [...Array(length)]
   .map(i => base[Math.random()*base.length|0])
   .join('');
}

// ========================
// = CUSTOM LOGIC QUERIES =
// ========================

const testPG = (callback) => {
  runQuery('SELECT * FROM pg_tables', callback);
}

const getUsers = (callback) => {
  runQuery('SELECT * FROM public."User"', callback);
}

const getAccounts = (callback) => {
  runQuery('SELECT * FROM public."Account"', callback);
}

const getEmails = (callback) => {
  runQuery('SELECT "email" FROM public."User"', callback);
}

const getAddons = (callback) => {
  runQuery('SELECT * FROM public."Addon"', callback);
}

const getSuperUsers = (callback) => {
  runQuery('SELECT * FROM public."SuperUser"', callback);
}

const getUserPreference = (callback) => {
  runQuery('SELECT * FROM public."UserPreference"', callback);
}

const getUserByEmail = (emailAddress, callback) => {
  runQuery('SELECT * FROM public."User" WHERE LOWER(email) = LOWER(\'' + emailAddress + '\');', callback);
}

const getUserByID = (userID, callback) => {
  getTableWhere('User','id',userID,function(error, userID) {
    if (error) return callback(true, userID);
    
    if (userID == '' || userID == 0 || userID == []) return callback(true, 'No user found for this ID.');
    
    if (Array.isArray(userID)) {
      if (userID.length == 0) return callback(true, 'No user found for this ID.');
      if (userID.length == 1) return callback(false, userID[0]);
      if (userID.length >= 2) return callback(true, 'More than one user found for this ID.');
    }
    callback(error, userID)
  })
}

const loginUpdate = (userID, callback) => {
  updateRow("User", "lastLogin", 'TODAY()', "id", userID, callback)
}

const getUserPayload = (userID, callback) => {
  var isActive,
    superID = [],
    accountID = [],
    mapID = [];

  getUserByID(userID, function(error,user) {
    if (error) return callback(true, user);

    console.log('User',user);
    isActive = !user.isDisabled;

    //LastLogin Update
    loginUpdate(userID, function(error, data) {
      getAccountsSuperByUserID(userID, function(error,data) {
        if (error) return callback(true, data);
        console.log(data);

        data.forEach(function(entry) {
          superID.push(entry.ID);
        });

        getAccountsByUserID(userID, function(error,data) {
          if (error) return callback(true, data);
          console.log(data);

          data.forEach(function(entry) {
            accountID.push(entry.accountID);
          });

          getMapsByAccountID(accountID, function(error,data) {
            if (error) return callback(true, data);
            console.log(data);

            data.forEach(function(entry) {
              mapID.push(entry.id);
            });

            superID.sort();
            accountID.sort();
            mapID.sort();

            callback(false, {
              isActive: isActive,
              
              profile: {
                userID: userID,
                firstName: user.firstName,
                lastName: user.lastName,
                displayName: user.firstName+' '+user.lastName
              },

              superUserID: superID,
              accountID: accountID,
              mapID: mapID
            })
          })
        })
      })
    })
  });
}

const getUserIDByUUID = (UUID, callback) => {
  if (UUID == '' || UUID == 0) return callback(true, 'User authentication information was not sent.');
  
  getRowFromTableWhere('User','id','cognitoUUID',UUID,function(error, userID) {
    if (error) return callback(true, userID);
    if (userID == '' || userID == 0 || userID == []) return callback(true, 'No user found for this UUID.');
    
    if (Array.isArray(userID)) {
      if (userID.length == 0) return callback(true, 'No user found for this UUID.');
      if (userID.length == 1) return callback(false, userID[0].id);
      if (userID.length >= 2) return callback(true, 'More than one user found for this UUID.');
    }
    callback(error, userID)
  });
  
}

const createUser = (UUID, firstName, lastName, callback) => {
  insertRow('User',["cognitoUUID","firstName","lastName","lastLogin","dateCreated"],[UUID,firstName,lastName,"TODAY()","TODAY()"], callback);
  // runQuery('INSERT INTO public."User" ("cognitoUUID","firstName","lastName") VALUES  (\'' + UUID + '\',\'' + firstName + '\',\'' + lastName + '\');', callback);
}

const createGroup = (payload, callback) => {
      insertRow(
        'LayerGroup',
        ["ownerID", "mapID", "groupID", "label", "description", "canExpand", "canOrgView", "canOrgEdit"],
        [payload.ownerID, payload.mapID, payload.groupID, payload.label, payload.description, payload.canExpand, payload.canOrgView, payload.canOrgEdit],
        callback
      );
}

const createUserGroup = (payload, callback) => {
  var userID = payload.userID;
  
  var label = payload.label;
  var color = payload.color;
  var parentID = payload.parentID;
  
  if (label == null) return callback(true, 'Label (`label`) must be supplied.');
  if (color == null) color = '#f2f2f2';
  
  var groupID = generateRandomString(10);
  
  //Add to User List Data
  appendToJSONRow(
    'User',
    'userLayers',
    [[
      {
        label: label,
        color: color,
        parent: parentID,
        groupId: groupID,
        layerIds: []
      },
      {}
    ]],
    'id',
    userID,
    function(error, userRowID) {
      if (error) return callback(true, userRowID);
      console.log('UserGroupID:',groupID)
      callback(false, groupID)
    }
  );
}

const deleteUserGroup = (groupID, callback) => {
  
  if (groupID == null) return callback(true, 'Group ID (`groupID`) must be supplied.');
  
  
  
  //Add to User List Data
  getRowFromTableWhere('User',['userLayers'],'id',userID,function(error,users) {
    if (error) return callback(true, users);
    
    if (!users.length) return callback(false, finalReturn);
    users.forEach(function(user) {
      const userLayers = user.userLayers;
      
      if (!userLayers.length) return callback(false, finalReturn);
      
      userLayers.forEach(function(layer) {
        
        var layerTitle = layer[0];
        var layerCustomize = layer[1];
    
        if (typeof layerTitle === 'object') {//LAYER OR GROUP
          if (layerTitle.groupId != null) {
            if (layerTitle.groupId == groupID) {
              deleteFromJSONRow(
                'User',
                'userLayers',
                layer,
                'id',
                userID,
                function(error, userRowID) {
                  if (error) return callback(true, userRowID);
                  console.log('UserGroupID:',groupID)
                  callback(false, groupID)
                }
              );
            }
          }
        }
      })
    })
  })
}

const createLayer = (payload, callback) => {
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
  
  insertRow(
    'LayerGroup',
    ["ownerID", "mapID", "groupID", "label", "description", "canExpand", "canOrgView", "canOrgEdit"],
    [userID, mapID, groupID, label, description, canExpand, canOrgView, canOrgEdit],
    function(error, groupID) {
      if (error) return callback(true, groupID);
      console.log('GroupID:',groupID)
      
      setupLayer(payload, groupID, function(error, setupLayer) {
        if (error) callback(error, setupLayer);
        
        var newLayerName = toSlug(label) + '_' + groupID.toString();
        callback(false, newLayerName)
      })
    }
  );
}

const setupLayer = (payload, groupID, callback) => {

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
  if (!['global','org','user'].includes(sourceType)) sourceType = "vector";
  
  if (label == null) return callback(true, 'Label (`label`) must be supplied.');
  if (type == null) return callback(true, 'Type (`type`) must be supplied.');
  if (description == null) description = '';
  if (canExpand == null) canExpand = false;
  if (canOrgView == null) canOrgView = false;
  if (canOrgEdit == null) canOrgEdit = false;

  //Create Layer
  insertRow(
    'Layer',
    ["ownerID", "groupID", "type", "source-layer", "label", "interactive", "minzoom", "layout", "paint", "metadata"],
    [userID, groupID, type, sourceLayer, label, interactive, minzoom, layout, paint, metadata],
    function(error, layerID) {
      if (error) return callback(true, layerID);
      console.log('LayerID:',layerID)
      
      //Create Layer Source
      insertRow(
        'LayerSublayer',
        ["layerID","key","type","label"],
        [layerID,"symbol","symbol","Symbol"],
        function(error, subSymbolID) {
          if (error) return callback(true, subSymbolID);
          console.log('Sublayer_SymboldID:',subSymbolID)
      
          //Create Layer Source
          insertRow(
            'LayerSource',
            ["type","layerID"],
            [sourceType,layerID],
            function(error, sourceID) {
              if (error) return callback(true, sourceID);
              console.log('SourceID:',sourceID)
          
              //Add to User List Data
              appendToJSONRow(
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

const updateLayerOrder = (userID, order, callback) => {

  if (order == null) return callback(true, 'Layer & Group Order Object (`order`) must be supplied.');
  
  //Add to User List Data
  getRowFromTableWhere('User',['userLayers'],'id',userID,function(error,users) {
    if (error) return callback(true, users);
    
    if (!users.length) return callback(false, finalReturn);
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
            newUserLayers.push(userRef[orderItem.group]);
            delete userRef[orderItem.group];
          }else console.error('orderItem: Group Passed does not exist: '+orderItem.group)
        }else if (orderItem.layer != null) {
          var layerID = util.processLayerID(orderItem.layer);
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
          //Skip Groups
          console.log('Deleted Group: '+layerTitle.groupId);
        }
      })
      
      updateRow('User','userLayers',newUserLayers,'id',userID,function(error,users) {
        if (error) return callback(true, users);
        
        return callback(false, newUserLayers);
      })
      // userLayers.forEach(function(layer) {
//
//         var layerTitle = layer[0];
//         var layerCustomize = layer[1];
//
//         if (typeof layerTitle === 'object') {//LAYER OR GROUP
//           if (layerTitle.groupId != null) {
//             if (layerTitle.groupId == groupID) {
//               deleteFromJSONRow(
//                 'User',
//                 'userLayers',
//                 layer,
//                 'id',
//                 userID,
//                 function(error, userRowID) {
//                   if (error) return callback(true, userRowID);
//                   console.log('UserGroupID:',groupID)
//                   callback(false, groupID)
//                 }
//               );
//             }
//           }
//         }
//       })
    })
  })
}

const deleteLayer = (groupID, callback) => {
  var finalReturn = [];

    //Get Layer Group from ID
  getTableWhere('LayerGroup','id',groupID,function(error,groups) {
    if (error) return callback(true, groups);
    
    // finalReturn.push(groups);
    if (!groups.length) return callback(true, 'Layer Group ID (`'+groupID+'`) does not exist!');
    
    deleteTableWhere('LayerGroup','id',groupID, function(error,del_layerGroup) {
      if (error) return callback(true, del_layerGroup);

      callback(false, del_layerGroup);
    })
  })
}

// ================================
// = CONVERT EMAIL ADDRESS TO IDS =
// ================================



//TODO:CREATE FUNCTION FOR THIS
//with userID get user preferences

//TODO:CREATE FUNCTION FOR THIS
//with userID get user superuser user ID if SuperUser
const getAccountsSuperByUserID = (userID, callback) => {getTableWhere('SuperUser','userID',userID,callback)}

//TODO:CREATE FUNCTION FOR THIS
//with userID get account the user belongs.
const getAccountsByUserID = (userID, callback) => {getRowFromTableWhere('AccountUser','accountID','userID',userID,callback)}

const getMapsByAccountID = (accountID, callback) => {getRowFromTableWhere('Map','id','accountID',accountID,callback)}

const getGroupByID = (currentKey, groupID, callback) => {
  var finalReturn = [];
    
  getTableWhere('LayerGroup','id',groupID,function(error,groups) {
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
        processedGroup.id = toSlug(processedGroup.label) + '_' + processedGroup.id.toString();
      
      processedGroup.group = "dataLayer"
      
      delete processedGroup.ownerID;
      delete processedGroup.mapID;
      delete processedGroup.groupID;
      
      getTableWhere('Layer','groupID',groupID, function(error,layers) {
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
            layerLabel = toSlug(processedGroup.label) + '_' + toSlug(layer['source-layer']) + '_';
            
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
          getTableWhere('LayerSublayer','layerID',layerID, function(error,layersubs) {
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
          
            getTableWhere('LayerSource','layerID',layerID, function(error,layersources) {
              if (error) return callback(true, currentKey, groupID, layersources);
          
              var processedSource = [];
          
              layersources.forEach(layerSource => {
                var layerID = layerSource.layerID;
            
                layerSource.id = layerLabel + 'source';
              
                delete layerSource.layerID;
            
                if (['global','org','user'].includes(layerSource.type)) {
                  var layerName = 'layer_'+mapID+'_'+layerSource.type;
                  layerSource.type = 'vector';
                  layerSource.tiles = ['https://tiles.myassetmap.com/v1/mvt/'+layerName+'/{z}/{x}/{y}?filter=layer%20%3D%20'+layerID];
                  
                  processedLayer.layer['source-layer'] = layerName;
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

const getGlobalLayers = (mapID, callback) => {
  var finalReturn = [];
    
  getTableWhere('LayerGroup','mapID',0,function(error,groups) {
    if (error) return callback(true, groups);
    
    // finalReturn.push(groups);
    
    if (!groups.length) return callback(false, finalReturn);
    
    var itemsProcessed = 0;
    groups.forEach(function(group) {
      
      getGroupByID(0, group.id, function(error, currentKey, layerTitle, layerTOC) {
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

const getLayers = (mapID, userID, callback) => {
  var finalReturn = {};
  
  getRowFromTableWhere('User',['userLayers'],'id',userID,function(error,users) {
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
    
        getGroupByID(currentKey, layerTitle, function(error,currentKey,layerTitle,layerTOC) {
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
            callback(false, {user: finalReturn});
          }
        })
        currentKey++;
      })
    })
  })
}

// ==========
// = GLOBAL =
// ==========

const runQuery = (queryMsg, callback) => {
  console.log('QUERY:',queryMsg)
  
  pool.query(queryMsg, (error, results) => {
    if (error) {
      callback(true, error.message)
    }else callback(false, results.rows);
  })
}

const getTable = (table, callback) => {
  runQuery('SELECT * FROM public."' + table + '"', callback);
}

const getRowFromTable = (table, row, callback) => {
  runQuery('SELECT ' + fromSingleValueToValues(row,'"') + ' FROM public."' + table + '"', callback);
}

const getTableWhere = (table, fieldName, value, callback) => {
  if (!Array.isArray(value)) {
    runQuery('SELECT * FROM public."' + table + '" WHERE "' + fieldName + '" = ' + processValue(value) + ';', callback);
  }else{
    if (value.length == 0) callback(false, [])
    runQuery('SELECT * FROM public."' + table + '" WHERE "' + fieldName + '" IN (' + fromSingleValueToValues(value) + ');', callback);
  }
}

const getRowFromTableWhere = (table, row, fieldName, value, callback) => {
  if (!Array.isArray(value)) {
    runQuery('SELECT ' + fromSingleValueToValues(row,'"') + ' FROM public."' + table + '" WHERE "' + fieldName + '" = ' + processValue(value) + ';', callback);
  }else{
    if (value.length == 0) callback(false, [])
    runQuery('SELECT ' + fromSingleValueToValues(row,'"') + ' FROM public."' + table + '" WHERE "' + fieldName + '" IN (' + fromSingleValueToValues(value) + ');', callback);
  }
}

const getInnerJoin = (fields, firstTable, firstIdentifier, secondTable, secondIdentifier, callback) => {
  runQuery('SELECT "' + fields + '" from public."' + firstTable + '", public."' + secondTable + '" Where public."' + firstTable + '".' + firstIdentifier + ' = public."' + secondTable + '".' + secondIdentifier + ';', callback);
}

const updateRow = (table, column, value, identifierColumn, identifier, callback) => {
  runQuery('UPDATE public."' + table + '" SET "' + column + '" = ' + processValue(value) + ' WHERE "' + identifierColumn + '" = \'' + identifier + '\';', callback);
}

const appendToJSONRow = (table, column, value, identifierColumn, identifier, callback) => {
  runQuery('UPDATE public."' + table + '" SET "' + column + '" = "' + column + '"::jsonb || '+processValue(value)+'::jsonb WHERE "' + identifierColumn + '" = \'' + identifier + '\';', callback);
}

const deleteFromJSONRow = (table, column, value, identifierColumn, identifier, callback) => {
  runQuery('UPDATE public."' + table + '" SET "' + column + '" = "' + column + '"::jsonb || '+processValue(value)+'::jsonb WHERE "' + identifierColumn + '" = \'' + identifier + '\';', callback);
}

const insertRow = (table, columns, values, callback) => {
  runQuery('INSERT INTO public."' + table + '" (' + fromSingleValueToValues(columns,'"') + ') VALUES (' + fromSingleValueToValues(values) + ') RETURNING id;', function(error, row) {
    if (error) return callback(true, row);
    callback(false, row[0].id)
  });
}

const deleteTableWhere = (table, fieldName, value, callback) => {
  if (!Array.isArray(value)) {
    runQuery('DELETE FROM public."' + table + '" WHERE "' + fieldName + '" = ' + processValue(value) + ';', callback);
  }else{
    if (value.length == 0) callback(false, [])
    runQuery('DELETE FROM public."' + table + '" WHERE "' + fieldName + '" IN (' + fromSingleValueToValues(value) + ');', callback);
  }
}

const processValue = function(value,char = `'`) {
  if (typeof value === 'string') {
    value = value.trim(); //We remove any extra space used between values
  }else if (typeof value === 'object') {
    value = JSON.stringify(value);
  }
  if (value === null) {
    value = "null";
  }else{
    if (value === '') {
      value = char+char;
    }else{
      if (isNaN(value)) value = char + value + char;
    }
  }
  
  return value;
}

const fromSingleValueToValues = function(valuesOrValues,char = `'`) {

  if (typeof valuesOrValues === 'object' || (typeof valuesOrValues === 'string' && valuesOrValues.includes(","))) {
    if (typeof valuesOrValues === 'object') {
      var values = valuesOrValues;
    }else var values = valuesOrValues.split(',');
    
    var result = [];

    values.forEach(function(value) {
      result.push(processValue(value,char));
    });
    
    return result.join(`, `);
  } else if (typeof valuesOrValues === 'string') return processValue(valuesOrValues,char);
}

module.exports = {
    testPG,
    runQuery,
    getUsers,
    getAccounts,
    getEmails,
    getAddons,
    getSuperUsers,
    getUserPreference,
    getUserByEmail,
    getUserIDByUUID,
    getUserByID,
    getUserPayload,
    loginUpdate,
    createUser,
    getAccountsSuperByUserID,
    getAccountsByUserID,
    getGlobalLayers,
    getLayers,
  
    createGroup,
    createUserGroup,
  
    createLayer,
    updateLayerOrder,
    deleteLayer,
  
    getTable,
    getRowFromTable,
    getTableWhere,
    getRowFromTableWhere,
  
    getInnerJoin,
    updateRow,
    insertRow,
    fromSingleValueToValues,
    // getUserById,
    // createUser,
    // updateUser,
    // deleteUser
}
