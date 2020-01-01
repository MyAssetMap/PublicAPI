'use strict';

const https = require('https');

// ========================
// = CUSTOM LOGIC QUERIES =
// ========================
const getJSONByLayerID = (mapID, type, layerID, callback) => {
  
  if (mapID == null) callback(true, 'Map ID (`mapID`) must be provided.');
  if (type == null) type = 'user';
  if (layerID == null) callback(true, 'Layer ID (`layerID`) must be provided.');
  
  var APIUrl = 'https://tiles.myassetmap.com/v1/geojson/layer_'+mapID+'_'+type+'?geom_column=geom&columns=prop%2Cid&&filter=layer%20%3D%20'+layerID;
  
  https.get(APIUrl, (resp) => {
    let data = '';

    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      var jsonReturn = JSON.parse(data);
      console.log(jsonReturn.explanation);
      
      callback(false,jsonReturn)
    });

  }).on("error", (e) => {
    callback(false,'API Error: '+e.message)
  });
}

const getJSONByFeatureID = (mapID, type, featureID, callback) => {
  
  if (mapID == null) callback(true, 'Map ID (`mapID`) must be provided.');
  if (type == null) type = 'user';
  if (featureID == null) callback(true, 'Feature ID (`featureID`) must be provided.');
  
  var APIUrl = 'https://tiles.myassetmap.com/v1/geojson/layer_'+mapID+'_'+type+'?geom_column=geom&columns=prop&filter=id%20%3D%20'+featureID;
  
  https.get(APIUrl, (resp) => {
    let data = '';

    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      var jsonReturn = JSON.parse(data);
      console.log(jsonReturn.explanation);
      
      callback(false,jsonReturn)
    });

  }).on("error", (e) => {
    callback(false,'API Error: '+e.message)
  });
}

module.exports = {
  getJSONByLayerID,
  getJSONByFeatureID
}
