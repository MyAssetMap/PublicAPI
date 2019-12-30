'use strict';

const config = require('./config');
const util = require('./util');

// =====================
// = DATABASE SETTINGS =
// =====================
const pg = require('pg')
const pool = new pg.Pool(config.pgPool)
// ========================
// = CUSTOM LOGIC QUERIES =
// ========================

const testPG = (callback) => {
  runQuery('SELECT * FROM pg_tables', callback);
}

// ============================
// = PROCESS DATA AND SAVE IT =
// ============================
const getMVTLayer = (payload, callback) => {
  
  var table = payload['table'];
  var z = payload['z'];
  var x = payload['x'];
  var x = payload['y'];
  
  var geom_column = 'geom';
  var columns = '';//'column,'
  var filter = '';
  
  let bounds = merc.bbox(params.x, params.y, params.z, false, '900913')

  var sqlQuery = `
  SELECT 
    ST_AsMVT(q, '${table}', 4096, 'geom')
  
  FROM (
    SELECT
    ${columns ? `${columns},` : ''}
      ST_AsMVTGeom(
        ST_Transform(${geom_column}, 3857),
        ST_MakeBox2D(ST_Point(${bounds[0]}, ${bounds[1]}), ST_Point(${
    bounds[2]
  }, ${bounds[3]}))
      ) geom

    FROM (
      SELECT
        ${columns ? `${columns},` : ''}
        ${geom_column},
        srid
      FROM 
        ${table},
        (SELECT ST_SRID(${geom_column}) AS srid FROM ${
    table
  } LIMIT 1) a
        
      WHERE       
        ST_transform(
          ST_MakeEnvelope(${bounds.join()}, 3857), 
          srid
        ) && 
        ${geom_column}

        -- Optional Filter
        ${filter ? `AND ${filter}` : ''}
    ) r

  ) q
  `;
  
  runQuery(sqlQuery, callback);
}

//TODO:CREATE FUNCTION FOR THIS
//with userID get user user map user ID

const insertLayer = (payload, callback) => {
  
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
  
  runQuery(sqlCreate, function(error, result) {
    if (error) return callback(true, result)
    
    var sqlQuery = `INSERT INTO `+tableName+` (layer, geom, prop)
    VALUES
    (
      '`+layerID+`',
      ST_TRANSFORM(ST_SetSRID(ST_GeomFromGeoJSON('`+geometry+`'),4326),4326),
      '`+properties+`'
    )`;
    return runQuery(sqlQuery, callback)
  });
}

const updateFeature = (mapID, type, featureID, geom, prop, callback) => {
  
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
  return runQuery(sqlQuery, callback)
}

const deleteLayer = (mapID, type, layerID, callback) => {
  
  if (mapID == null) callback(true, 'Map ID (`mapID`) must be provided.');
  if (type == null) type = 'user';
  if (layerID == null) callback(true, 'Layer ID (`layerID`) must be provided.');
  
  var tableName = `layer_`+mapID+((type != '') ? '_'+type : type);
  tableName = tableName.toLowerCase();
  
  return deleteTableWhere(tableName, 'layer', layerID, callback)
}

const deleteFeature = (mapID, type, featureID, callback) => {
  
  if (mapID == null) callback(true, 'Map ID (`mapID`) must be provided.');
  if (type == null) type = 'user';
  if (featureID == null) callback(true, 'Feature ID (`featureID`) must be provided.');
  
  var tableName = `layer_`+mapID+((type != '') ? '_'+type : type);
  tableName = tableName.toLowerCase();
  
  return deleteTableWhere(tableName, 'id', featureID, callback)
}


const getGlobalLayers = (mapID, callback) => {
  var finalReturn = [];
    
  getTableWhere('LayerGroup','mapID',0,function(error,groups) {
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
      
      getTableWhere('Layer','groupID',groupID, function(error,layers) {
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
        
        getTableWhere('LayerSource','id',sourceList, function(error,layersources) {
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
  
    getMVTLayer,
    getGlobalLayers,
  
    insertLayer,
    updateFeature,
    deleteLayer,
    deleteFeature,
  
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
