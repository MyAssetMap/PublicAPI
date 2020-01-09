'use strict';

const config = require('../config');
const util = require('../util');

const pg = require('pg')
const pool = new pg.Pool(config.pgPool)

const DB = require('./db')

module.exports = class PostGIS {
  
  static testPG(callback) {
    var thisClass = this;
    DB.runQuery(pool, 'SELECT tablename FROM pg_tables WHERE schemaname != \'pg_catalog\' AND schemaname != \'information_schema\';', callback);
  }

  static insertLayer(payload, callback) {
    var thisClass = this;
  
    var mapID = payload.mapID;
    var type = payload.type;
    var layerID = payload.layerID;
    var geometry = JSON.stringify(payload.geom);
    var properties = JSON.stringify(payload.prop);
  
    if (properties == null) {
      console.log('No Properties passed');
    }
  
    var tableName = `"public"."layer_`+mapID+((type != '') ? '_'+type : type)+`"`;
    tableName = tableName.toLowerCase();
  
    var sqlCreate = `CREATE TABLE IF NOT EXISTS `+tableName+` (
      "id" serial,
      "layer" integer,
      "geom" geometry,
      "prop" json,
      PRIMARY KEY ("id")
    );`;
  
    DB.runQuery(pool, sqlCreate, function(error, result) {
      if (error) return callback(true, result)
    
      var sqlQuery = `INSERT INTO `+tableName+` (layer, geom, prop)
      VALUES
      (
        '`+layerID+`',
        ST_TRANSFORM(ST_SetSRID(ST_GeomFromGeoJSON('`+geometry+`'),4326),4326),
        '`+properties+`'
      )`;
      return DB.runQuery(pool, sqlQuery, callback)
    });
  }
  
  // ============================
  // = DATA PROPERTY MANAGEMENT =
  // ============================
  static getPropertyField(layerID, propName, callback) {
    var thisClass = this;
    
    propName = propName.toLowerCase();
    
    DB.getTableWhere(pool, 'LayerProperty', ['layer','name'], [layerID, propName], function(error, props) {
      if (error) return callback(true, props);
      
      if (Array.isArray(props)) {
        if (props.length == 0) return callback(false, false);
        if (props.length == 1) return callback(false, props[0]);
        if (props.length >= 2) return callback(true, 'More than one property found for this ID.');
      }
      callback(error, props)
    })
  }
  
  static createProperty(layerID, propName, propType, propValue, propDefault, callback) {
    var thisClass = this;
    
    propName = propName.toLowerCase();
    
    //Fix propValue
    if (!util.isValidJSON(propValue)) propValue = JSON.stringify(propValue);
    
    //Default type is text
    if (propType == null) propType = 'text';
    
    //Check if the propType Exists for layerID
    thisClass.getPropertyField(layerID, propName, function(error, result) {
      if (error) return callback(true, result)
      
      if (result !== false) return callback(true, 'A property for this name (`'+propName+'`) and layer already exists.');
      
      DB.getRowFromTableWhere(pool, 'LayerPropertyKey', 'id', 'name', propType, function(error, propTypeID) {
        if (error) return callback(true, propTypeID);
        
        if (!Array.isArray(propTypeID) || propTypeID.length != 1) {
          return callback(true, 'Property Field Type (`type`) is invalid.');
        }else propTypeID = propTypeID[0].id;
      
        return DB.insertRow(pool, 'LayerProperty', ['layer','type','name','value','default'], [layerID, propTypeID, propName, propValue, propDefault], callback);
      })
    });
  }
  
  static updateProperty(layerID, propName, propType, propValue, propDefault, callback) {
    var thisClass = this;
    
    propName = propName.toLowerCase();
    
    //Fix propValue
    if (!util.isValidJSON(propValue)) propValue = JSON.stringify(propValue);
    
    //Check for anything to update
    if (propType == null && propValue == null & propDefault == null) return callback(true,'Please specify a `type`, `value`, or `default` to update for this layerID.');
    
    //Check if the propType Exists for layerID
    thisClass.getPropertyField(layerID, propName, function(error, result) {
      if (error) return callback(true, result)
      
      if (result === false) return callback(true, 'The property with this name (`'+propName+'`) does not exist.');
      
      var changes = {}
      if (propValue != null) changes.value = propValue;
      if (propDefault != null) changes.default = propDefault;
      if (propType == null) {
        return DB.bulkUpdateRow(pool, 'LayerProperty', changes, ['layer','name'], [layerID, propName], callback);
      }else{
        DB.getRowFromTableWhere(pool, 'LayerPropertyKey', 'id', 'name', propType, function(error, propTypeID) {
          if (error) return callback(true, propTypeID);
        
          if (!Array.isArray(propTypeID) || propTypeID.length != 1) {
            propTypeID = 0; //return callback(false, 'User Preference Key (`key`) is invalid.');
          }else propTypeID = propTypeID[0].id;
        
          if (result.type != propTypeID) changes.type = propTypeID;
      
          return DB.bulkUpdateRow(pool, 'LayerProperty', changes, ['layer','name'], [layerID, propName], callback);
        })
      }
    });
  }

// ==================================
// = FEATURE AND GEOJSON MANAGEMENT =
// ==================================
  static updateFeature(mapID, type, featureID, geom, prop, callback) {
    var thisClass = this;
  
    if (mapID == null) callback(true, 'Map ID (`mapID`) must be provided.');
    if (type == null) type = 'user';
    if (featureID == null) callback(true, 'Feature ID (`featureID`) must be provided.');
    if (geom == null && prop == null) callback(true, 'GEOJSON Geometry or Properties (`json`) must be provided.');
  
    var geometry = JSON.stringify(geom);
    var properties = JSON.stringify(prop);
  
    var tableName = `"public"."layer_`+mapID+((type != '') ? '_'+type : type)+`"`;
    tableName = tableName.toLowerCase();
  
    var sqlQuery = ''
    if (geom != null)       sqlQuery += `UPDATE  `+tableName+` SET "geom" = ST_TRANSFORM(ST_SetSRID(ST_GeomFromGeoJSON('`+geometry+`'),4326),4326) WHERE "id"=`+featureID+';';
    if (properties != null) sqlQuery += `UPDATE  `+tableName+` SET "prop" = '`+properties+`' WHERE "id"=`+featureID+';';
    return DB.runQuery(pool, sqlQuery, callback)
  }

  static deleteLayer(mapID, type, layerID, callback) {
    var thisClass = this;
  
    if (mapID == null) callback(true, 'Map ID (`mapID`) must be provided.');
    if (type == null) type = 'user';
    if (layerID == null) callback(true, 'Layer ID (`layerID`) must be provided.');
  
    var tableName = `layer_`+mapID+((type != '') ? '_'+type : type);
    tableName = tableName.toLowerCase();
  
    return DB.deleteTableWhere(pool,tableName, 'layer', layerID, callback)
  }

  static deleteFeature(mapID, type, featureID, callback) {
    var thisClass = this;
  
    if (mapID == null) callback(true, 'Map ID (`mapID`) must be provided.');
    if (type == null) type = 'user';
    if (featureID == null) callback(true, 'Feature ID (`featureID`) must be provided.');
  
    var tableName = `layer_`+mapID+((type != '') ? '_'+type : type);
    tableName = tableName.toLowerCase();
  
    return DB.deleteTableWhere(pool,tableName, 'id', featureID, callback)
  }


  static getGlobalLayers(mapID, callback) {
    var thisClass = this;
    var finalReturn = [];
    
    DB.getTableWhere(pool, 'LayerGroup','mapID',0,function(error,groups) {
      if (error) return callback(true, groups);
    
      // finalReturn.push(groups);
    
      var itemsProcessed = 0;
      groups.forEach(function(group) {
        // console.log(group);
        let groupID = group['id'];
      
        //PreProcess
        var processedGroup = group;
      
        if (processedGroup.label !== null)
          processedGroup.id = processedGroup.label.toLowerCase() + '_' + processedGroup.id.toString();
      
        processedGroup.group = "dataLayer"
      
        delete processedGroup.ownerID;
        delete processedGroup.mapID;
        delete processedGroup.groupID;
      
        DB.getTableWhere(pool, 'Layer','groupID',groupID, function(error,layers) {
          if (error) return callback(true, layers);
        
          if (layers.length <= 0) {
            itemsProcessed++;
            return;
          }
        
          var processedLayers = [];
          var sourceList = [];
          var sourceConversionList = {};
          layers.forEach(layer => {
          
            sourceList.push(layer.source);
          
            if (processedGroup.label !== null) {
              layer.id = processedGroup.label.toLowerCase() + '_' + layer['source-layer'].toLowerCase() + '_' + layer.id.toString();
          
              sourceConversionList[layer.source] = processedGroup.label.toLowerCase() + '_' + layer['source-layer'].toLowerCase() + '_' + layer.source.toString();
          
              layer.source = processedGroup.label.toLowerCase() + '_' + layer['source-layer'].toLowerCase() + '_' + layer.source.toString();
            }

            delete layer.label;
            delete layer.ownerID;
            delete layer.groupID;
          
            processedLayers.push({ 
              beforeLayer: null,
              layer: layer
            })
          })
        
          DB.getTableWhere(pool, 'LayerSource','id',sourceList, function(error,layersources) {
            if (error) return callback(true, layersources);
          
            var processedSource = [];
        
            layersources.forEach(layerSource => {
              layerSource.id = sourceConversionList[layerSource.id];
            
              processedSource.push(layerSource)
            })
          
            //Add the template
            var groupPayload = {
              toc: processedGroup,
              sourcesArray: processedSource,
              layersArray: processedLayers
            };
          
            finalReturn.push(groupPayload);
          
            itemsProcessed++;
            if (itemsProcessed === groups.length) {
              //NOW THAT EVERYTHING IS DONE, CONTINUE.
              callback(false, finalReturn);
            }
          })
        })
      })
    });
  }
}
