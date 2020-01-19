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
const config = require('./config');
const util = require('./util');

const Q = require('./queries/')

const tiles = require('./tiles')

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

function checkAPIKey(req, res) {
  return true;
  // console.log(req.header('Auth-DEV'));
  // console.log(req.header('Auth-PROD'));
  // var auth = false;
  // if (req.header('Auth-DEV') == config.auth.DEV) auth = true;
  // if (req.header('Auth-PROD') == config.auth.PROD) auth = true;
  //
  // if (!auth) {
  //   APIReturn(res,
  //     false, 'Unauthorized'
  //   )
  // }
  // return auth;
}

function checkAuthentication(req, res, callback) {
  var userUUID = null;
  var userUUID_GET = req.query.userID;
  var userUUID_POST = req.body.userID;
  
  if (userUUID_GET != null) {
    userUUID = userUUID_GET;
  }else if (userUUID_GET == null && userUUID_POST != null) {
    userUUID = userUUID_POST;
  }
  
  if (userUUID == null || typeof userUUID == 'undefined') return APIReturn(res, false, 'Authentication Failed: User UUID (`userID`) was not passed.');
  
  Q.User.getUserIDByUUID(userUUID, function(error, userID) {
    console.log('userID',userUUID,userID);
    return callback(!error, userID);
  });
}

// ===========
// = GENERAL =
// ===========

app.get('/', function(req, res) {
  if (!checkAPIKey(req, res)) return;

  return APIReturn(res,
    true, 'Welcome to the MY ASSET MAP endpoint v1.0'
  )
})

app.get('/db', function(req, res) {
  if (!checkAPIKey(req, res)) return;

  Q.General.testDB(function(error,result) {
    if (error) return APIReturn(res,false, result)
    
    return APIReturn(res,
      true, 'DatabaseInfo.', result
    )
  })
})

app.get('/postgis', function(req, res) {
  if (!checkAPIKey(req, res)) return;

  Q.PostGIS.testPG(function(error,result) {
    if (error) return APIReturn(res,false, result)
    
    return APIReturn(res,
      true, 'DatabaseInfo.', result
    )
  })
})






// =========
// = USERS =
// =========

app.get('/addons', function(req, res) {
  if (!checkAPIKey(req, res)) return;

  checkAuthentication(req, res, function(isLoggedIn, userID) {
    //if (!isLoggedIn) return authRequired(res, userID);
  
    Q.General.getAddons(function(error,accounts) {
      if (error) return APIReturn(res,false, accounts)
    
      return APIReturn(res,
        true, 'Addon information has been returned.', accounts
      )
    });
  });
})

app.get('/accounts', function(req, res) {
  if (!checkAPIKey(req, res)) return;

  Q.General.getAccounts(function(error,accounts) {
    if (error) return APIReturn(res,false, accounts)
    
    return APIReturn(res,
      true, 'Accounts information has been returned.', accounts
    )
  });
})

app.get('/users', function(req, res) {
  if (!checkAPIKey(req, res)) return;

  Q.General.getUsers(function(error,users) {
    if (error) return APIReturn(res,false, users)
    
    return APIReturn(res,
      true, 'User information has been returned.', users
    )
  });
})

app.get('/superusers', function(req, res) { //TODO: REMOVE THIS OF FIX IT
  if (!checkAPIKey(req, res)) return;

  Q.General.getSuperUsers(function(error,accounts) {
    if (error) return APIReturn(res,false, accounts)
    
    return APIReturn(res,
      true, 'Super User preference has been returned.', accounts
    )
  });
})

// ========== = USER INFO = ==========
    app.get('/user/init', function(req, res) {
      if (!checkAPIKey(req, res)) return;
    
      checkAuthentication(req, res, function(isLoggedIn, userID) {
        if (isLoggedIn) {
            // return authRequired(res, userID);
          Q.User.getUserPayload(userID, function(error, userPayload) {
            if (error) return APIReturn(res, false, userPayload)
            
            return APIReturn(res,
              true, 'User information obtained successfully.', userPayload
            )
          })
        }else{
          Q.User.createUser(req.query.userID,"–","–", function(error,userID) {
            if (error) return APIReturn(res, false, userID)
              
            Q.User.getUserPayload(userID, function(error, userPayload) {
              if (error) return APIReturn(res, false, userPayload)
            
              return APIReturn(res,
                true, 'User did not exist. User has been created.', userPayload
              )
            })
          })
        }
      })
    })
    
    app.get('/users/init', function(req, res) {
      if (!checkAPIKey(req, res)) return;
    
      checkAuthentication(req, res, function(isLoggedIn, userID) {
        if (isLoggedIn) {
            // return authRequired(res, userID);
          Q.User.getUserPayload(userID, function(error, userPayload) {
            if (error) return APIReturn(res, false, userPayload)
            
            return APIReturn(res,
              true, 'User information obtained successfully.', userPayload
            )
          })
        }else{
          Q.User.createUser(req.query.userID,"–","–", function(error,userID) {
            if (error) return APIReturn(res, false, userID)
              
            Q.User.getUserPayload(userID, function(error, userPayload) {
              if (error) return APIReturn(res, false, userPayload)
            
              return APIReturn(res,
                true, 'User did not exist. User has been created.', userPayload
              )
            })
          })
        }
      })
    })

    app.post('/user/login', function(req, res) { //TODO: REMOVE THIS IF NEEDED. IS USERS/INIT THE SAME THING?
      if (!checkAPIKey(req, res)) return;
    
      if (typeof req.body.UUID == 'undefined') return APIReturn(res, false, 'UUID of user must be provided.')
    
      Q.User.getUserIDByUUID(req.body.UUID, function(error,user) {
        if (error) return APIReturn(res, false, user)
       
        console.log(user)
        if (user != 0) {
         
          return APIReturn(res,
            false, 'UUID located!', user
          )
    
        } else {
          if ((typeof req.body.firstName == 'undefined') || (typeof req.body.lastName == 'undefined')) return APIReturn(res, false, 'User does not exist. To create, supply firstName and lastName of user.')
           
          Q.User.createUser(req.body.UUID,req.body.firstName,req.body.lastName, function(error,users) {
            if (error) return APIReturn(res, false, users)
           
            console.log(users);
           
            return APIReturn(res,
              true, 'UUID created! User has been created.'
            )
          })
        }
      });
    })

// ========== = USER PREFERENCES = ==========
    app.post('/user/preferences/add', function(req, res) {
        if (!checkAPIKey(req, res)) return;
    
        checkAuthentication(req, res, function(isLoggedIn, userID) {
          if (!isLoggedIn) return authRequired(res, userID);
    
          var key = req.body.key;
          var prefName = req.body.name;
          var prefValue = req.body.value;
    
          if (userID == null) return APIReturn(res,false, 'User ID (`userID`) must be supplied.');
          if (prefValue == null) return APIReturn(res,false, 'Value (`value`) must be supplied.');
    
          Q.User.createUserPreferences(userID, key, prefName, prefValue, function(error,preferences) {
          if (error) return APIReturn(res,false, preferences)
    
            return APIReturn(res,
              true, 'User preferences have been created.', preferences
            )
          });
        })
    })

    app.post('/user/preferences/get', function(req, res) {
        if (!checkAPIKey(req, res)) return;
    
        checkAuthentication(req, res, function(isLoggedIn, userID) {
          if (!isLoggedIn) return authRequired(res, userID);
    
          var key = req.body.key;
    
          if (userID == null) return APIReturn(res,false, 'User ID (`userID`) must be supplied.');
    
          Q.User.getUserPreferences(userID, key, function(error,preferences) {
          if (error) return APIReturn(res,false, preferences)
    
            return APIReturn(res,
              true, 'User preferences have been returned.', preferences
            )
          });
        })
    })

    app.post('/user/preferences/update', function(req, res) {
        if (!checkAPIKey(req, res)) return;
    
        checkAuthentication(req, res, function(isLoggedIn, userID) {
          if (!isLoggedIn) return authRequired(res, userID);
    
          var prefID = req.body.prefID;
          var prefName = req.body.name;
          var prefValue = req.body.value;
    
          if (userID == null) return APIReturn(res,false, 'User ID (`userID`) must be supplied.');
          if (prefID == null) return APIReturn(res,false, 'User Preference ID (`prefID`) must be supplied.');
          if (prefName == null && prefValue == null) return APIReturn(res,false, 'Name OR Value (`name`,`value`) must be supplied.');
          
          var updates = {};
          if (prefName != null) updates.name = prefName;
          if (prefValue != null) updates.value = prefValue;
    
          Q.User.updateUserPreferences(prefID, updates, function(error,preferences) {
          if (error) return APIReturn(res,false, preferences)
    
            return APIReturn(res,
              true, 'User preferences have been updated.', preferences
            )
          });
        })
    })
    
    app.post('/user/preferences/delete', function(req, res) {
        if (!checkAPIKey(req, res)) return;
    
        checkAuthentication(req, res, function(isLoggedIn, userID) {
          if (!isLoggedIn) return authRequired(res, userID);
    
          var prefID = req.body.prefID;
    
          if (userID == null) return APIReturn(res,false, 'User ID (`userID`) must be supplied.');
          if (prefID == null) return APIReturn(res,false, 'User Preference ID (`prefID`) must be supplied.');
    
          Q.User.deleteUserPreferences(prefID, function(error,preferences) {
          if (error) return APIReturn(res,false, preferences)
    
            return APIReturn(res,
              true, 'User preferences have been deleted.', preferences
            )
          });
        })
    })

// ========== = USER LAYERS = ==========
    app.get('/layers/user', function(req, res) {
      if (!checkAPIKey(req, res)) return;
      
      checkAuthentication(req, res, function(isLoggedIn, userID) {
        if (!isLoggedIn) return authRequired(res, userID);
        
        var mapID = req.query.mapID;
      
        if (mapID == null) mapID = 0;
        if (userID == null) return APIReturn(res,false, 'User ID (`userID`) must be supplied.');
      
        Q.Layer.getLayers(mapID, userID, function(error,layers) {
        if (error) return APIReturn(res,false, layers)
      
          return APIReturn(res,
            true, 'User Layers have been returned for user #'+userID, layers
          )
        });
        
      })
    })

    app.get('/layers/public', function(req, res) { //TODO: REMOVE THIS OF FIX IT
      if (!checkAPIKey(req, res)) return;
      checkAuthentication(req, res, function(isLoggedIn, userID) {
        if (!isLoggedIn) return authRequired(res, userID);
        
        var mapID = 0;
      
        Q.Layer.getGlobalLayers(mapID, function(error,layers) {
        if (error) return APIReturn(res,false, layers)
      
          return APIReturn(res,
            true, 'Public Layers have been returned', layers
          )
        });
      });
    })

    app.post('/layers/order', function(req, res) {
      if (!checkAPIKey(req, res)) return;
      
      checkAuthentication(req, res, function(isLoggedIn, userID) {
        if (!isLoggedIn) return authRequired(res, userID);
        
        var orderObj = req.body.order;
        var deleteGroups = req.body.delete;
        
        Q.Layer.updateLayerOrder(userID, orderObj, deleteGroups, function(error, result) {
          if (error) return APIReturn(res,false, result)
    
          return APIReturn(res,
            true, 'User Layers & Groups has been reordered.', result
          )
        })
      })
    });

// ========== = USER GROUPS = ==========
    app.post('/group/add', function(req, res) {
      if (!checkAPIKey(req, res)) return;
      
      checkAuthentication(req, res, function(isLoggedIn, userID) {
        if (!isLoggedIn) return authRequired(res, userID);
    
        var payload = {
          userID: userID,
          label: req.body.label,
          color: req.body.color
        };
    
        Q.User.createUserGroup(payload, function(error, result) {
          if (error) return APIReturn(res,false, result)
    
          return APIReturn(res,
            true, 'User Group has been created.', result
          )
        })
      })
    });

    app.post('/group/delete', function(req, res) { //TODO: REMOVE THIS OF INTEGRATE IT FULLY. CURRENTLY USING /LAYER/ORDER FOR THE SAME CAPABILITY.
      if (!checkAPIKey(req, res)) return;
      
      checkAuthentication(req, res, function(isLoggedIn, userID) {
        if (!isLoggedIn) return authRequired(res, userID);
        
        var groupID = req.body.groupID;
        
        Q.Layer.deleteUserGroup(userID, groupID, function(error, result) {
          if (error) return APIReturn(res,false, result)
    
          return APIReturn(res,
            true, 'User Group has been deleted.', result
          )
        })
      })
    });






// ========================================
// = LAYER AND LAYER GROUP/TOC MANAGEMENT =
// ========================================

// ========== = LAYER GROUPS (TOC) = ==========
    app.post('/layer/add', function(req, res) {
      if (!checkAPIKey(req, res)) return;
    
      checkAuthentication(req, res, function(isLoggedIn, userID) {
        if (!isLoggedIn) return authRequired(res, userID);
    
        // var userID = req.body.userID;
        var mapID = req.body.mapID;
        var groupID = req.body.groupID;
        var type = req.body.type;
    
        //SOURCE
        var label = req.body.label;
        var sourceType = req.body.sourceType;
        var sourceLayer = req.body.sourceLayer;
        var interactive = req.body.interactive
        var minzoom = req.body.minzoom;
        var layout = req.body.layout;
        var paint = req.body.paint;
        var metadata = req.body.metadata;
    
        if (userID == null) return APIReturn(res,false, 'User ID (`userID`) must be supplied.');
        if (groupID == null) groupID = 0;
        if (type == null) return APIReturn(res,false, 'Type (`type`) must be supplied.');
    
        if (sourceType == null) return APIReturn(res,false, 'Source Type (`sourceType`) must be supplied.');
        if (!['global','org','user'].includes(sourceType)) return APIReturn(res,false, 'Layer Source Type (`sourceType`) is invalid: '+type);
    
        if (!['line','fill','circle','polygon','point'].includes(type)) return APIReturn(res,false, 'Layer Type (`type`) is invalid: '+type);
        if (type == 'point') type = 'circle';
        if (type == 'polygon') type = 'fill';
    
        if (label == null) return APIReturn(res,false, 'Label (`label`) must be supplied.');
        if (sourceLayer == null) sourceLayer = util.toSlug(label);
        if (interactive == null) interactive = true;
        if (minzoom == null) minzoom = 8;
        if (layout == null) layout = {"visibility": "none"};
        if (paint == null) paint = {};
        if (metadata == null) metadata = {};
    
        var payload = {
          userID: userID, 
          mapID: mapID,
          groupID: groupID, 
          type: type, 
    
          label: label, 
          sourceType: sourceType,
          sourceLayer: sourceLayer, 
          interactive: interactive,
          minzoom: minzoom,
          layout: layout,
          paint: paint,
          metadata: metadata,
        };
    
        Q.Layer.createLayer(payload, function(error, result) {
          if (error) return APIReturn(res,false, result)
    
          return APIReturn(res,
            true, 'Layer has been created.', result
          )
        })
      })
    });
    
    app.post('/layer/update', function(req, res) {
      if (!checkAPIKey(req, res)) return;
    
      checkAuthentication(req, res, function(isLoggedIn, userID) {
        if (!isLoggedIn) return authRequired(res, userID);
        
        var layerGroupID = util.extractLayerInt(req.body.layerID);
    
        if (layerGroupID == null) return APIReturn(res,false, 'Layer Group ID (`layerID`) must be supplied.');
        if (isNaN(layerGroupID)) return APIReturn(res,false, 'Layer Group ID (`layerID`) is being passed in the incorrect format.');
        
        var payload = {};
        if (req.body.mapID != null)       payload.mapID = req.body.mapID
        if (req.body.label != null)       payload.label = req.body.label
        if (req.body.description != null) payload.description = req.body.description
        if (req.body.canOrgView != null)  payload.canOrgView = req.body.canOrgView
        if (req.body.canOrgEdit != null)  payload.canOrgEdit = req.body.canOrgEdit
    
        Q.Layer.updateLayerGroup(layerGroupID, payload, function(error, result) {
          if (error) return APIReturn(res,false, result)
    
          return APIReturn(res,
            true, 'Layer Group (TOC) has been updated.', result
          )
        })
      })
    });
    
    app.post('/layer/delete', function(req, res) {
      if (!checkAPIKey(req, res)) return;
    
      checkAuthentication(req, res, function(isLoggedIn, userID) {
        if (!isLoggedIn) return authRequired(res, userID);
    
        // var userID = req.body.userID;
        var layerID = util.extractLayerInt(req.body.layerID);
    
        if (layerID == null) return APIReturn(res,false, 'Layer Group ID (`layerID`) must be supplied.');
        if (isNaN(layerID)) return APIReturn(res,false, 'Layer Group ID (`layerID`) is being passed in the incorrect format.');
    
        Q.Layer.deleteLayer(layerID, function(error, result) {
          if (error) return APIReturn(res,false, result)
    
          return APIReturn(res,
            true, 'Layer has been deleted.', result
          )
        })
      })
    });

// ========== = LAYER = ==========
    app.post('/layer/add/layer', function(req, res) {
      if (!checkAPIKey(req, res)) return;
    
      checkAuthentication(req, res, function(isLoggedIn, userID) {
        if (!isLoggedIn) return authRequired(res, userID);
    
        // var userID = req.body.userID;
        var mapID = req.body.mapID;
        var groupID = req.body.groupID;
        var type = req.body.type;
    
        //SOURCE
        var label = req.body.label;
        var sourceType = req.body.sourceType;
        var sourceLayer = req.body.sourceLayer;
        var interactive = req.body.interactive
        var minzoom = req.body.minzoom;
        var layout = req.body.layout;
        var paint = req.body.paint;
        var metadata = req.body.metadata;
    
        if (userID == null) return APIReturn(res,false, 'User ID (`userID`) must be supplied.');
        if (groupID == null) groupID = 0;
        if (type == null) return APIReturn(res,false, 'Type (`type`) must be supplied.');
    
        if (sourceType == null) return APIReturn(res,false, 'Source Type (`sourceType`) must be supplied.');
        if (!['global','org','user'].includes(sourceType)) return APIReturn(res,false, 'Layer Source Type (`sourceType`) is invalid: '+type);
    
        if (!['line','fill','circle','polygon','point'].includes(type)) return APIReturn(res,false, 'Layer Type (`type`) is invalid: '+type);
        if (type == 'point') type = 'circle';
        if (type == 'polygon') type = 'fill';
    
        if (label == null) return APIReturn(res,false, 'Label (`label`) must be supplied.');
        if (sourceLayer == null) sourceLayer = util.toSlug(label);
        if (interactive == null) interactive = true;
        if (minzoom == null) minzoom = 8;
        if (layout == null) layout = {"visibility": "none"};
        if (paint == null) paint = {};
        if (metadata == null) metadata = {};
    
        var payload = {
          userID: userID, 
          mapID: mapID,
          groupID: groupID, 
          type: type, 
    
          label: label, 
          sourceType: sourceType,
          sourceLayer: sourceLayer, 
          interactive: interactive,
          minzoom: minzoom,
          layout: layout,
          paint: paint,
          metadata: metadata,
        };
    
        Q.Layer.createLayer(payload, function(error, result) {
          if (error) return APIReturn(res,false, result)
    
          return APIReturn(res,
            true, 'Layer has been created.', result
          )
        })
      })
    });
    
    app.post('/layer/update/layer', function(req, res) {
      if (!checkAPIKey(req, res)) return;
    
      checkAuthentication(req, res, function(isLoggedIn, userID) {
        if (!isLoggedIn) return authRequired(res, userID);
        
        var layerID = util.extractLayerInt(req.body.layerID);
    
        if (layerID == null) return APIReturn(res,false, 'Layer ID (`layerID`) must be supplied.');
        if (isNaN(layerID)) return APIReturn(res,false, 'Layer ID (`layerID`) is being passed in the incorrect format.');
        
        var payload = {};
        if (req.body.groupID != null)     payload.groupID = req.body.groupID
        if (req.body.label != null)       payload.label = req.body.label
        if (req.body.interactive != null) payload.interactive = req.body.interactive
        if (req.body.minzoom != null)     payload.minzoom = req.body.minzoom
        if (req.body.layout != null)      payload.layout = req.body.layout
        if (req.body.paint != null)       payload.paint = req.body.paint
        if (req.body.metadata != null)    payload.metadata = req.body.metadata
        if (req.body.filter != null)      payload.filter = req.body.filter
    
        Q.Layer.updateLayer(layerID, payload, function(error, result) {
          if (error) return APIReturn(res,false, result)
    
          return APIReturn(res,
            true, 'Layer has been updated.', result
          )
        })
      })
    });
    
    app.post('/layer/delete/layer', function(req, res) {
      if (!checkAPIKey(req, res)) return;
    
      checkAuthentication(req, res, function(isLoggedIn, userID) {
        if (!isLoggedIn) return authRequired(res, userID);
    
        // var userID = req.body.userID;
        var layerID = util.extractLayerInt(req.body.layerID);
    
        if (layerID == null) return APIReturn(res,false, 'Layer ID (`layerID`) must be supplied.');
        if (isNaN(layerID)) return APIReturn(res,false, 'Layer ID (`layerID`) is being passed in the incorrect format.');
    
        Q.Layer.deleteLayer(layerID, function(error, result) {
          if (error) return APIReturn(res,false, result)
    
          return APIReturn(res,
            true, 'Layer has been deleted.', result
          )
        })
      })
    });

// ========== = LAYER SUBLAYER = ==========
    app.post('/layer/add/sublayer', function(req, res) {
      if (!checkAPIKey(req, res)) return;
    
      checkAuthentication(req, res, function(isLoggedIn, userID) {
        if (!isLoggedIn) return authRequired(res, userID);
    
        // var userID = req.body.userID;
        var mapID = req.body.mapID;
        var groupID = req.body.groupID;
        var type = req.body.type;
    
        //SOURCE
        var label = req.body.label;
        var sourceType = req.body.sourceType;
        var sourceLayer = req.body.sourceLayer;
        var interactive = req.body.interactive
        var minzoom = req.body.minzoom;
        var layout = req.body.layout;
        var paint = req.body.paint;
        var metadata = req.body.metadata;
    
        if (userID == null) return APIReturn(res,false, 'User ID (`userID`) must be supplied.');
        if (groupID == null) groupID = 0;
        if (type == null) return APIReturn(res,false, 'Type (`type`) must be supplied.');
    
        if (sourceType == null) return APIReturn(res,false, 'Source Type (`sourceType`) must be supplied.');
        if (!['global','org','user'].includes(sourceType)) return APIReturn(res,false, 'Layer Source Type (`sourceType`) is invalid: '+type);
    
        if (!['line','fill','circle','polygon','point'].includes(type)) return APIReturn(res,false, 'Layer Type (`type`) is invalid: '+type);
        if (type == 'point') type = 'circle';
        if (type == 'polygon') type = 'fill';
    
        if (label == null) return APIReturn(res,false, 'Label (`label`) must be supplied.');
        if (sourceLayer == null) sourceLayer = util.toSlug(label);
        if (interactive == null) interactive = true;
        if (minzoom == null) minzoom = 8;
        if (layout == null) layout = {"visibility": "none"};
        if (paint == null) paint = {};
        if (metadata == null) metadata = {};
    
        var payload = {
          userID: userID, 
          mapID: mapID,
          groupID: groupID, 
          type: type, 
    
          label: label, 
          sourceType: sourceType,
          sourceLayer: sourceLayer, 
          interactive: interactive,
          minzoom: minzoom,
          layout: layout,
          paint: paint,
          metadata: metadata,
        };
    
        Q.Layer.createLayer(payload, function(error, result) {
          if (error) return APIReturn(res,false, result)
    
          return APIReturn(res,
            true, 'Layer has been created.', result
          )
        })
      })
    });
    
    app.post('/layer/update/sublayer', function(req, res) {
      if (!checkAPIKey(req, res)) return;
    
      checkAuthentication(req, res, function(isLoggedIn, userID) {
        if (!isLoggedIn) return authRequired(res, userID);
        
        var layerID = util.extractLayerInt(req.body.layerID);
        var key = req.body.key;
        
        if (layerID == null) return APIReturn(res,false, 'Sublayer ID (`layerID`) must be supplied.');
        if (isNaN(layerID)) return APIReturn(res,false, 'Sublayer ID (`layerID`) is being passed in the incorrect format.');
    
        if (key == null) return APIReturn(res,false, 'Sublayer Key (`key`) must be supplied.');
        
        var payload = {};
        if (req.body.type != null)        payload.type = req.body.type
        if (req.body.label != null)       payload.label = req.body.label
        if (req.body.interactive != null) payload.interactive = req.body.interactive
        if (req.body.minzoom != null)     payload.minzoom = req.body.minzoom
        if (req.body.layout != null)      payload.layout = req.body.layout
        if (req.body.paint != null)       payload.paint = req.body.paint
        if (req.body.metadata != null)    payload.metadata = req.body.metadata
    
        Q.Layer.updateSublayer(layerID, key, payload, function(error, result) {
          if (error) return APIReturn(res,false, result)
    
          return APIReturn(res,
            true, 'Sublayer has been updated.', result
          )
        })
      })
    });
    
    app.post('/layer/delete/sublayer', function(req, res) {
      if (!checkAPIKey(req, res)) return;
    
      checkAuthentication(req, res, function(isLoggedIn, userID) {
        if (!isLoggedIn) return authRequired(res, userID);
    
        // var userID = req.body.userID;
        var layerID = util.extractLayerInt(req.body.layerID);
    
        if (layerID == null) return APIReturn(res,false, 'Layer Group ID (`layerID`) must be supplied.');
        if (isNaN(layerID)) return APIReturn(res,false, 'Layer Group ID (`layerID`) is being passed in the incorrect format.');
    
        Q.Layer.deleteLayer(layerID, function(error, result) {
          if (error) return APIReturn(res,false, result)
    
          return APIReturn(res,
            true, 'Layer has been deleted.', result
          )
        })
      })
    });
    
// ========== = LAYER SOURCE = ==========
    app.post('/layer/update/source', function(req, res) {
      if (!checkAPIKey(req, res)) return;
    
      checkAuthentication(req, res, function(isLoggedIn, userID) {
        if (!isLoggedIn) return authRequired(res, userID);
        
        var layerID = util.extractLayerInt(req.body.layerID);
    
        if (layerID == null) return APIReturn(res,false, 'Layer ID (`layerID`) must be supplied.');
        if (isNaN(layerID)) return APIReturn(res,false, 'Layer ID (`layerID`) is being passed in the incorrect format.');
        
        var payload = {};
        if (req.body.type != null)        payload.type = req.body.type
        if (req.body.tiles != null)       payload.tiles = req.body.tiles
        if (req.body.maxzoom != null)     payload.maxzoom = req.body.maxzoom
    
        Q.Layer.updateLayerSource(layerID, payload, function(error, result) {
          if (error) return APIReturn(res,false, result)
    
          return APIReturn(res,
            true, 'Layer Source has been updated.', result
          )
        })
      })
    });






// ================================================
// = LAYER DATA (GEOJSON, FEATURES, & PROPERTIES) =
// ================================================

// ========== = GEOJSON = ==========
app.post('/layer/geojson/add', function(req, res) {
  if (!checkAPIKey(req, res)) return;
  
  checkAuthentication(req, res, function(isLoggedIn, userID) {
    if (!isLoggedIn) return authRequired(res, userID);
  
    var mapID = req.body.mapID
    var type = req.body.type;
    var layerID = util.extractLayerInt(req.body.layerID);
    var json = req.body.json;
  
    if (mapID == null) return APIReturn(res,false, 'Map ID (`mapID`) must be supplied.');
    if (layerID == null) return APIReturn(res,false, 'Layer ID (`layerID`) must be supplied.');

    if (type == null) type = 'user';//return APIReturn(res,false, 'Layer Type (`type`) be supplied.');
    if (!['global','org','user'].includes(type)) return APIReturn(res,false, 'Layer Type (`type`) is invalid: '+type);
  
    if (json == null || json == '') return APIReturn(res,false, 'GEOJSON (`json`) must be supplied.');
    
    var tableName = `"public"."layer_`+mapID+((type != '') ? '_'+type : type)+`"`;
    tableName = tableName.toLowerCase();
    
    Q.PostGIS.processGEOJSON(tableName, layerID, json, function(error, result) {
      if (error) return APIReturn(res, false, result)
      
      return APIReturn(res,
        true, 'GEOJSON has been imported successfully to layer: '+req.body.layerID
      )
    });
  });
});

app.post('/layer/geojson/get', function(req, res) {
  if (!checkAPIKey(req, res)) return;
  
  checkAuthentication(req, res, function(isLoggedIn, userID) {
    if (!isLoggedIn) return authRequired(res, userID);
    
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
});

app.post('/layer/geojson/update', function(req, res) {
  if (!checkAPIKey(req, res)) return;
  
  checkAuthentication(req, res, function(isLoggedIn, userID) {
    if (!isLoggedIn) return authRequired(res, userID);
  
    var mapID = req.body.mapID
    var type = req.body.type;
    var featureID = req.body.featureID;
    var json = req.body.json;
  
    if (mapID == null) return APIReturn(res,false, 'Map ID (`mapID`) must be supplied.');
    if (featureID == null) return APIReturn(res,false, 'Feature ID (`featureID`) must be supplied.');

    if (type == null) type = 'user';//return APIReturn(res,false, 'Layer Type (`type`) be supplied.');
    if (!['global','org','user'].includes(type)) return APIReturn(res,false, 'Layer Type (`type`) is invalid: '+type);
  
    if (json == null || json == '') return APIReturn(res,false, 'GEOJSON (`json`) must be supplied.');
    var geoJSON = JSON.parse(json);
    //console.log(geoJSON);
  
    if (geoJSON.type != 'Feature') return APIReturn(res,false, 'Please only pass one GEOJSON feature to endpoint for updating.');

    var geometry = geoJSON.geometry;
    var properties = geoJSON.properties;

    Q.PostGIS.updateFeature(mapID, type, featureID, geometry, properties, function(error, result) {
      if (error) return APIReturn(res,false, result)

      return APIReturn(res,
        true, 'Feature has been updated.', result
      )
    })
  });
});

app.post('/layer/geojson/delete', function(req, res) {
  if (!checkAPIKey(req, res)) return;
  
  checkAuthentication(req, res, function(isLoggedIn, userID) {
    if (!isLoggedIn) return authRequired(res, userID);
    
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
      Q.PostGIS.deleteLayer(mapID, type, layerID, function(error, result) {
        if (error) return APIReturn(res,false, result)

        return APIReturn(res,
          true, 'Data for this layer has been deleted.', result
        )
      })
    }else if (featureID != null) {
      //console.log(geoJSON);
      Q.PostGIS.deleteFeature(mapID, type, featureID, function(error, result) {
        if (error) return APIReturn(res,false, result)

        return APIReturn(res,
          true, 'Data for this feature has been deleted.', result
        )
      })
    }
  });
});

// ========== = DATA PROPS = ==========
app.post('/layer/properties/add', function(req, res) {
  if (!checkAPIKey(req, res)) return;
  
  checkAuthentication(req, res, function(isLoggedIn, userID) {
    if (!isLoggedIn) return authRequired(res, userID);
  
    var layerID = util.extractLayerInt(req.body.layerID);
    var propKey = req.body.key;
    var propName = req.body.name;
    
    var propType = req.body.type;
    var propValue = req.body.value;
    var propDefault = req.body.default;

    if (layerID == null) return APIReturn(res,false, 'Layer ID (`layerID`) must be supplied.');
    
    if (propName == null) return APIReturn(res,false, 'Property Name (`name`) must be supplied.');
    if (propName == '') return APIReturn(res,false, 'Property Name (`name`) cannot be empty');
    
    if (propKey == null) propKey = util.toSlug(propName);
    
    // if (propValue == null) propValue = '';

    Q.PostGIS.createProperty(layerID, propKey, propName, propType, propValue, propDefault, function(error, result) {
      if (error) return APIReturn(res,false, result)

      return APIReturn(res,
        true, 'Property has been created.', {id: result, key: propKey, name: propName}
      )
    })
  });
});

app.post('/layer/properties/get', function(req, res) {
  if (!checkAPIKey(req, res)) return;
  
  checkAuthentication(req, res, function(isLoggedIn, userID) {
    if (!isLoggedIn) return authRequired(res, userID);
  
    var layerID = util.extractLayerInt(req.body.layerID);
    var propKey = req.body.key;

    if (layerID == null) return APIReturn(res,false, 'Layer ID (`layerID`) must be supplied.');
    
    // if (propName == null) return APIReturn(res,false, 'Property Name (`name`) must be supplied.');
    // if (propName == '') return APIReturn(res,false, 'Property Name (`name`) cannot be empty');

    Q.PostGIS.getPropertyField(layerID, propKey, function(error, result) {
      if (error) return APIReturn(res,false, result)
        
        if (result === false) return APIReturn(res, false, 'The property with this key (`'+propKey+'`) does not exist.');

      return APIReturn(res,
        true, 'Property information has been returned.', result
      )
    })
  });
});

app.post('/layer/properties/update', function(req, res) {
  if (!checkAPIKey(req, res)) return;
  
  checkAuthentication(req, res, function(isLoggedIn, userID) {
    if (!isLoggedIn) return authRequired(res, userID);
  
    var layerID = util.extractLayerInt(req.body.layerID);
    var propKey = req.body.key;
    var propName = req.body.name;
    
    var propType = req.body.type;
    var propValue = req.body.value;
    var propDefault = req.body.default;

    if (layerID == null) return APIReturn(res,false, 'Layer ID (`layerID`) must be supplied.');
    
    if (propKey == null) return APIReturn(res,false, 'Property Key (`key`) must be supplied.');
    if (propKey == '') return APIReturn(res,false, 'Property Name (`key`) cannot be empty');

    Q.PostGIS.updateProperty(layerID, propKey, propName, propType, propValue, propDefault, function(error, result) {
      if (error) return APIReturn(res,false, result)

      return APIReturn(res,
        true, 'Property has been updated.', result
      )
    })
  });
});






module.exports.handler = serverless(app);