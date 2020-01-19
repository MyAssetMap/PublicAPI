const https = require('https');

const Q = require('./queries/')
// ========================
// = CUSTOM LOGIC QUERIES =
// ========================

module.exports = class GEOJSONTILES {
  
  static getJSONByLayerID(mapID, type, layerID, callback) {
  
    if (mapID == null) callback(true, 'Map ID (`mapID`) must be provided.');
    if (type == null) type = 'user';
    if (layerID == null) callback(true, 'Layer ID (`layerID`) must be provided.');
    
    let tableName = 'layer_'+mapID+'_'+type;
  
    var APIUrl = 'https://tiles.myassetmap.com/v1/geojson/'+tableName+'?geom_column=geom&columns=prop%2Cid&&filter=layer%20%3D%20'+layerID;
  
    https.get(APIUrl, (resp) => {
      let data = '';

      // A chunk of data has been recieved.
      resp.on('data', (chunk) => {
        data += chunk;
      });

      // The whole response has been received. Print out the result.
      resp.on('end', () => {
        var jsonReturn = JSON.parse(data);
        
        if (jsonReturn.type != 'FeatureCollection') return callback(false,jsonReturn)
          
        if (typeof jsonReturn.features === 'object') {
          if (Array.isArray(jsonReturn.features)) {
            
            //Calculate Correct Fields
            Q.PostGIS.getPropertyField(layerID, null, function (error, properties) {
              if (error) return callback(true,properties);
              
              for (var i = 0; i < jsonReturn.features.length; i++) {
                var feature = jsonReturn.features[i];
                
                if (feature.type !== 'Feature') continue; 
                if (typeof feature.properties !== 'object') continue;
                if (typeof feature.properties.prop !== 'object') continue;
                
                var props = feature.properties.prop;
                
                properties.forEach(function (prop) {
                  if (typeof props[prop.key] === 'undefined') props[prop.key] = prop.default;
                })
                //Overwrite the props
                jsonReturn.features[i].properties.prop = props;
                // delete jsonReturn.features[i].properties.prop;
              }
              
              if (i === jsonReturn.features.length) {
                //NOW THAT EVERYTHING IS DONE, CONTINUE.
                return callback(false, jsonReturn);
              }
            })
          }else callback(false,jsonReturn)
        }else callback(false,jsonReturn)
      });

    }).on("error", (e) => {
      callback(false,'API Error: '+e.message)
    });
  }

  static getJSONByFeatureID(mapID, type, featureID, callback) {
  
    if (mapID == null) callback(true, 'Map ID (`mapID`) must be provided.');
    if (type == null) type = 'user';
    if (featureID == null) callback(true, 'Feature ID (`featureID`) must be provided.');
    
    let tableName = 'layer_'+mapID+'_'+type;
  
    var APIUrl = 'https://tiles.myassetmap.com/v1/geojson/'+tableName+'?geom_column=geom&columns=prop&filter=id%20%3D%20'+featureID;
  
    https.get(APIUrl, (resp) => {
      let data = '';

      // A chunk of data has been recieved.
      resp.on('data', (chunk) => {
        data += chunk;
      });

      // The whole response has been received. Print out the result.
      resp.on('end', () => {
        var jsonReturn = JSON.parse(data);
        if (jsonReturn.type != 'FeatureCollection') return callback(false,jsonReturn)
          
        if (typeof jsonReturn.features === 'object') {
          if (Array.isArray(jsonReturn.features)) {
            Q.PostGIS.getLayerByFeatureID(tableName, featureID, function(error, layerID) {
              if (error) return callback(true,layerID);
              
              //Calculate Correct Fields
              Q.PostGIS.getPropertyField(layerID, null, function (error, properties) {
                if (error) return callback(true,properties);
              
                for (var i = 0; i < jsonReturn.features.length; i++) {
                  var feature = jsonReturn.features[i];
                
                  if (feature.type !== 'Feature') continue; 
                  if (typeof feature.properties !== 'object') continue;
                  if (typeof feature.properties.prop !== 'object') continue;
                
                  var props = feature.properties.prop;
                
                  properties.forEach(function (prop) {
                    if (typeof props[prop.key] === 'undefined') props[prop.key] = prop.default;
                  })
                  //Overwrite the props
                  jsonReturn.features[i].properties.prop = props;
                }
              
                if (i === jsonReturn.features.length) {
                  //NOW THAT EVERYTHING IS DONE, CONTINUE.
                  return callback(false, jsonReturn);
                }
              })
            })
            
          }else callback(false,jsonReturn)
        }else callback(false,jsonReturn)
      });

    }).on("error", (e) => {
      callback(false,'API Error: '+e.message)
    });
  }
}


