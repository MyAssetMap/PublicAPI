'use strict';

// =====================
// = DATABASE SETTINGS =
// =====================
const pg = require('pg')
const pool = new pg.Pool({
    database: 'myassetmapv2_layers',
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

// ============================
// = PROCESS DATA AND SAVE IT =
// ============================
const getMVTLayer = (callback, payload) => {
  
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
  //console.log(queryMsg)
  
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
  runQuery('INSERT INTO public."' + table + '" (' + fromSingleValueToValues(columns) + ') VALUES (' + fromSingleValueToValues(values) + ');', callback);
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



const fromSingleValueToValues = function(valuesOrValues) {

  if (valuesOrValues.includes(",")) {
    var values = valuesOrValues.split(',');
    var result = "";

    values.forEach(function(value) {
      value = value.trim() //We remove any extra space used between values

      result += '"' + value + '",';

    });
    result = result.substring(0, result.length - 1) //Remove last comma 
    return result;

  } else { //Since the input has no comma, it is a single value. 
    return '"' + valuesOrValues + '"';
  }
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
  
    getMVTLayer,
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
