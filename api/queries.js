'use strict';

// =====================
// = DATABASE SETTINGS =
// =====================
const pg = require('pg')
const pool = new pg.Pool({
    database: 'myassetmapv2_db',
    user: 'Javier_root',
    host: 'myassetmapv2.c7tqiynvcd79.us-east-1.rds.amazonaws.com',
    password: 'javierroot123',
    port: 5432,
    ssl: true,
    max: 20, // set pool max size to 20
    min: 4, // set min pool size to 4
    idleTimeoutMillis: 1000, // close idle clients after 1 second
    connectionTimeoutMillis: 1000, // return an error after 1 second if connection could not be established
})

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

const getUserIDByUUID = (UUID, callback) => {getRowFromTableWhere('User','id','cognitoUUID',UUID,callback);}

const createUser = (UUID, firstName, lastName, callback) => {
  runQuery('INSERT INTO public."User" ("cognitoUUID","firstName","lastName") VALUES  (\'' + UUID + '\',\'' + firstName + '\',\'' + lastName + '\');', callback);
}

const createGroup = (payload, callback) => {
    // ownerID: ownerID,
    // mapID: mapID,
    // groupID: groupID,
    // label: label,
    // description: description,
    // canExpand: canExpand,
    // canOrgView: canOrgView,
    // canOrgEdit: canOrgEdit,
      insertRow(
        'LayerGroup',
        ["ownerID", "mapID", "groupID", "label", "description", "canExpand", "canOrgView", "canOrgEdit"],
        [payload.ownerID, payload.mapID, payload.groupID, payload.label, payload.description, payload.canExpand, payload.canOrgView, payload.canOrgEdit],
        callback
      );
      //});
  
}

const createLayer = (payload, callback) => {
  // insertRow(
  //   'LayerSource',
  //   ["type"],
  //   ["vector"],  //
    // function(error, sourceID) {
    //   if (error) return callback(true, sourceID);
    //
      
      insertRow(
        'Layer',
        ["ownerID", "groupID", "type", "source", "source-layer", "label", "interactive", "minzoom", "layout", "paint", "metadata"],
        [payload.ownerID, payload.groupID, payload.type, 0, payload.sourceLayer, payload.label, payload.interactive, payload.minzoom, payload.layout, payload.paint, payload.metadata],
        callback
      );
      //});
  
}

// ================================
// = CONVERT EMAIL ADDRESS TO IDS =
// ================================

//From email get user ID
const getUsersByEmail = (emailAddress, callback) => {
  runQuery('SELECT * FROM public."User" WHERE LOWER(email) = LOWER(\'' + emailAddress + '\');', callback);
}

//TODO:CREATE FUNCTION FOR THIS
//with userID get user preferences

//TODO:CREATE FUNCTION FOR THIS
//with userID get user superuser user ID if SuperUser
const getAccountsSuperByUserID = (userID, callback) => {getTableWhere('SuperUser','userID',userID,callback)}

//TODO:CREATE FUNCTION FOR THIS
//with userID get account the user belongs.
const getAccountsByUserID = (userID, callback) => {getRowFromTableWhere('AccountUser','accountID','userID',userID,callback)}

//TODO:CREATE FUNCTION FOR THIS
//with userID get user user map user ID


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
  console.log(queryMsg)
  
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
  runQuery('SELECT "' + fromSingleValueToValues(row) + '" FROM public."' + table + '"', callback);
}

const getTableWhere = (table, fieldName, value, callback) => {
  if (!Array.isArray(value)) {
    runQuery('SELECT * FROM public."' + table + '" WHERE "' + fieldName + '" = ' + value + ';', callback);
  }else{
    runQuery('SELECT * FROM public."' + table + '" WHERE "' + fieldName + '" IN (' + value.join(', ') + ');', callback);
  }
}

const getRowFromTableWhere = (table, row, fieldName, value, callback) => {
  runQuery('SELECT "' + fromSingleValueToValues(row) + '" FROM public."' + table + '" WHERE "' + fieldName + '" = ' + value + ';', callback);
}

const getInnerJoin = (fields, firstTable, firstIdentifier, secondTable, secondIdentifier, callback) => {
  runQuery('Select "' + fields + '" from public."' + firstTable + '", public."' + secondTable + '" Where public."' + firstTable + '".' + firstIdentifier + ' = public."' + secondTable + '".' + secondIdentifier + ';', callback);
}

const updateRow = (table, column, value, identifierColumn, identifier, callback) => {
  runQuery('UPDATE public."' + table + '" SET ' + '"' + column + '" = "' + value + '"' + ' WHERE ' + identifierColumn + '= "' + identifier + '";', callback);
}

const insertRow = (table, columns, values, callback) => {
  runQuery('INSERT INTO public."' + table + '" (' + fromSingleValueToValues(columns,'"') + ') VALUES (' + fromSingleValueToValues(values) + ') RETURNING id;', callback);
}

// function addSingleQuoteToFields(fieldsToAddQuote) {

// 	let values = fieldsToAddQuote.split(',');
// 	let newvalues = "";
// 	values.forEach(function (element) {
// 		newvalues += "'" + element + "',";
// 	});

// 	newvalues = newvalues.substring(0, newvalues.length - 1); //trim last coma
// 	return newvalues;
// }

const processValue = function(value,char = `'`) {
  if (typeof value === 'string') {
    value = value.trim(); //We remove any extra space used between values
  }else if (typeof value === 'object') {
    value = JSON.stringify(value); //We remove any extra space used between values
  }
  if (value === null) {
    value = "null";
  }else if (value === '') {
    value = char+char;
  }else if (isNaN(value)) value = char + value + char;
  
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
  } else if (typeof valuesOrValues === 'string') return processValue(valuesOrValues);
}

//SELECT "firstName", "emailAddress" FROM public."User";

//
// const getUserById = (request, response) => {
//   const id = parseInt(request.params.id)
//
//   pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(200).json(results.rows)
//   })
// }
//
// const createUser = (request, response) => {
//   const { name, email } = request.body
//
//   pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(201).send(`User added with ID: ${result.insertId}`)
//   })
// }
//
// const updateUser = (request, response) => {
//   const id = parseInt(request.params.id)
//   const { name, email } = request.body
//
//   pool.query(
//     'UPDATE users SET name = $1, email = $2 WHERE id = $3',
//     [name, email, id],
//     (error, results) => {
//       if (error) {
//         throw error
//       }
//       response.status(200).send(`User modified with ID: ${id}`)
//     }
//   )
// }
//
// const deleteUser = (request, response) => {
//   const id = parseInt(request.params.id)
//
//   pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(200).send(`User deleted with ID: ${id}`)
//   })
// }


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
    getUsersByEmail,
    createUser,
    getAccountsSuperByUserID,
    getAccountsByUserID,
    getGlobalLayers,
  
    createGroup,
    createLayer,
  
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
