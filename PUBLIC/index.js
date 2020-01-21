'use strict';

// ============================
// = DECLARATION OF CONSTANTS =
// ============================
const serverless = require('serverless-http');
const express = require('express');
const bodyParser = require("body-parser");

// ==============================
// = DATABASE ENDPOINT SETTINGS =
// ==============================
const app = express();
const config = require('./tools/config.js');
const util = require('./tools/util.js');

const Q = require('./queries/')

const tiles = require('./tools/tiles')
const s3 = require('./tools/s3')

// ============
// = SETTINGS =
// ============
app.set('json replacer', null); // property transformation rules
app.set('json spaces', 4); // number of spaces for indentation

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({
  extended: true
})); // Switched from false to true by javier 8/17/2019

app.use(bodyParser.json());

// =============
// = FUNCTIONS =
// =============

function APIReturn(res, success, message, data) {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Credentials', true);
  
  res.set('Cache-Control', 'no-cache, must-revalidate, max-age=0');

  if (typeof data == 'undefined') {
    res.json({
      success: success,
      message: message
    })
  } else {
    res.json({
      success: success,
      message: message,
      data: data
    })
  }
}

function authRequired(res, reason) {
  APIReturn(res, 
    false, 'You are not authenticated to use this endpoint.', reason
  )
}

function checkAPIKey(req, res, scope) {
  
  var auth = false;
  
  var APIKey = null;
  if (req.header('Authorization') != null) {
    APIKey = req.header('Authorization');
  }else if (req.query.apiKey != null) {
    APIKey = req.query.apiKey;
  }
  console.log('API Key: '+APIKey);
  
  if (typeof config.apiKeys[APIKey] === 'undefined') {
    auth = false;
  }else{
    auth = true;

    req.token = config.apiKeys[APIKey];
    console.log('API Authentication: ',config.apiKeys[APIKey])
    
    //Check Scope of Call for Permission
    if (typeof scope !== 'undefined') {
      if (!req.token.scope.includes(scope)) {
        APIReturn(res,
          false, 'Unauthorized for the scope: '+scope
        )
        return false;
      }
    }
  }
  
  req.auth = auth;
  
  if (!auth) {
    APIReturn(res,
      false, 'Unauthorized'
    )
  }
  return auth;
}

function checkAuthentication(req, res, callback) {
  // var userUUID = null;
  // var userUUID_GET = req.query.userID;
  // var userUUID_POST = req.body.userID;
  //
  // if (userUUID_GET != null) {
  //   userUUID = userUUID_GET;
  // }else if (userUUID_GET == null && userUUID_POST != null) {
  //   userUUID = userUUID_POST;
  // }
  //
  // if (userUUID == null || typeof userUUID == 'undefined') return APIReturn(res, false, 'Authentication Failed: User UUID (`userID`) was not passed.');
  //
  // Q.User.getUserIDByUUID(userUUID, function(error, userID) {
  //   console.log('userID',userUUID,userID);
  //   return callback(!error, userID);
  // });
}

// ===========
// = GENERAL =
// ===========

app.get('/', function(req, res) {
  if (!checkAPIKey(req, res)) return;

  return APIReturn(res,
    true, 'Welcome to the MY ASSET MAP public endpoint. You have successfully authenticated as '+req.token.name, req.token
  )
})

// ================================================
// = LAYER DATA (GEOJSON, FEATURES, & PROPERTIES) =
// ================================================

// ========== = GEOJSON = ==========
app.post('/layer/geojson/get', function(req, res) {
  if (!checkAPIKey(req, res,'geojson.read')) return;
    
  var mapID = req.body.mapID
  var type = req.body.type;
  var layerID = util.extractLayerInt(req.body.layerID);
  var featureID = req.body.featureID;

  if (mapID == null) return APIReturn(res,false, 'Map ID (`mapID`) must be supplied.');
  if (layerID == null && featureID == null) return APIReturn(res,false, 'Layer ID (`layerID`) or Feature ID (`featureID`) must be supplied.');

  if (type == null) type = 'user';//return APIReturn(res,false, 'Layer Type (`type`) be supplied.');
  if (!['global','org','user'].includes(type)) return APIReturn(res,false, 'Layer Type (`type`) is invalid: '+type);

  if (layerID != null) {
    //console.log(geoJSON);
    tiles.getJSONByLayerID(mapID, type, layerID, function(error, result) {
      if (error) return APIReturn(res,false, result)

      return APIReturn(res,
        true, 'GEOJson for this layer has been returned.', result
      )
    })
  }else if (featureID != null) {
    //console.log(geoJSON);
    tiles.getJSONByFeatureID(mapID, type, featureID, function(error, result) {
      if (error) return APIReturn(res,false, result)

      return APIReturn(res,
        true, 'GEOJson for this feature has been returned.', result
      )
    })
  }
});

// ========== = MVT = ==========
app.get('/layer/mvt/get/:mapID/:layerID/:z/:x/:y', function(req, res) {
  if (!checkAPIKey(req, res,'mvt.read')) return;
    
  var mapID = req.body.mapID
  var type = req.body.type;
  var layerID = util.extractLayerInt(req.body.layerID);

  if (mapID == null) return APIReturn(res,false, 'Map ID (`mapID`) must be supplied.');
  if (layerID == null) return APIReturn(res,false, 'Layer ID (`layerID`) must be supplied.');

  if (type == null) type = 'user';//return APIReturn(res,false, 'Layer Type (`type`) be supplied.');
  if (!['global','org','user'].includes(type)) return APIReturn(res,false, 'Layer Type (`type`) is invalid: '+type);

  if (layerID != null) {
    //console.log(geoJSON);
    tiles.getMVTByLayerID(mapID, type, layerID, function(error, result) {
      if (error) return APIReturn(res,false, result)

      return APIReturn(res,
        true, 'MVT for this layer has been returned.', result
      )
    })
  }
});








module.exports.handler = serverless(app);