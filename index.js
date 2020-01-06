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
//   if (req.header('Auth-DEV') == config.auth.DEV) auth = true;
//   if (req.header('Auth-PROD') == config.auth.PROD) auth = true;
//
//   if (!auth) {
//     APIReturn(res,
//       false, 'Unauthorized'
//     )
//   }
  return auth;
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

app.get('/', function(req, res) {
  if (!checkAPIKey(req, res)) return;

  return APIReturn(res,
    true, 'Welcome to the MY ASSET MAP endpoint v1.0'
  )
})

//ADD COL
//'ALTER TABLE "User" ADD COLUMN "passwordHash" VARCHAR;'

//UPDATE TABLE FIELD VALUE
//'ALTER TABLE "User" ADD COLUMN "passwordHash" VARCHAR;'


// WHERE "id" = 1
//Default
// app.get('/run', function (req, res) {
// 	db.runQuery(
// 		'UPDATE "User" SET "passwordHash" = \'secure!\';'
// 		,function(data) {
// 			return APIReturn(res,
// 				true,'Query has been run!',data
// 			)
// 		}
// 	);
// })

// =========================
// = HANDLER FOR LAYER API =
// =========================
// app.get('/layer/mvt/:layerName/:zoom/:x/:y', function(req, res) {
//   if (!checkAPIKey(req, res)) return;
//   var payload = {
//     layer: req.params.layerName,
//     z: req.params.zoom,
//     x: req.params.x,
//     y: req.params.y,
//   }
//
//   Q.PostGIS.getMVTLayer(payload, function(error, result) {
//     if (error) return APIReturn(res,false, result)
//
//     return APIReturn(res,
//       true, 'MVT has been generated.', result
//     )
//   })
// })




// =================
// = GET ENDPOINTS =
// =================


app.get('/postgis', function(req, res) {
  if (!checkAPIKey(req, res)) return;

  Q.PostGIS.testPG(function(error,result) {
    if (error) return APIReturn(res,false, result)
    
    return APIReturn(res,
      true, 'DatabaseInfo.', result
    )
  })
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


app.get('/users', function(req, res) {
  if (!checkAPIKey(req, res)) return;

  Q.General.getUsers(function(error,users) {
    if (error) return APIReturn(res,false, users)
    
    return APIReturn(res,
      true, 'User information has been returned.', users
    )
  });
})

// app.get('/emails', function(req, res) {
//   if (!checkAPIKey(req, res)) return;
//
//   db.getEmails(function(error,emails) {
//     if (error) return APIReturn(res,false, emails)
//
//     return APIReturn(res,
//       true, 'Emails information has been returned.', emails
//     )
//   });
// })

app.get('/accounts', function(req, res) {
  if (!checkAPIKey(req, res)) return;

  Q.General.getAccounts(function(error,accounts) {
    if (error) return APIReturn(res,false, accounts)
    
    return APIReturn(res,
      true, 'Accounts information has been returned.', accounts
    )
  });
})

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

app.get('/superusers', function(req, res) {
  if (!checkAPIKey(req, res)) return;

  Q.General.getSuperUsers(function(error,accounts) {
    if (error) return APIReturn(res,false, accounts)
    
    return APIReturn(res,
      true, 'Super User preference has been returned.', accounts
    )
  });
})

app.get('/userpreference', function(req, res) {
    if (!checkAPIKey(req, res)) return;
    
    checkAuthentication(req, res, function(isLoggedIn, userID) {
      if (!isLoggedIn) return authRequired(res, userID);

      Q.User.getUserPreference(userID, function(error,preferences) {
      if (error) return APIReturn(res,false, preferences)
    
        return APIReturn(res,
          true, 'User preference information has been returned.', preferences
        )
      });
    })
})

app.get('/layers/public', function(req, res) {
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

  // ==================
  // = POST ENDPOINTS =
  // ==================

//LAYERS
app.post('/layer/geojson/create', function(req, res) {
  if (!checkAPIKey(req, res)) return;
  
  checkAuthentication(req, res, function(isLoggedIn, userID) {
    if (!isLoggedIn) return authRequired(res, userID);
  
    var mapID = req.body.mapID
    var type = req.body.type;
    var layerID = util.processLayerID(req.body.layerID);
    var json = req.body.json;
  
    if (mapID == null) return APIReturn(res,false, 'Map ID (`mapID`) must be supplied.');
    if (layerID == null) return APIReturn(res,false, 'Layer ID (`layerID`) must be supplied.');

    if (type == null) type = 'user';//return APIReturn(res,false, 'Layer Type (`type`) be supplied.');
    if (!['global','org','user'].includes(type)) return APIReturn(res,false, 'Layer Type (`type`) is invalid: '+type);
  
    if (json == null || json == '') return APIReturn(res,false, 'GEOJSON (`json`) must be supplied.');
    console.log(json);
    if (typeof json === 'string') {
      var geoJSON = JSON.parse(json);
    }else if (typeof json === 'object') {
      var geoJSON = json;
    }
    
    if (geoJSON.type == 'FeatureCollection') {
      geoJSON.features.forEach(function(feature) {
        if (feature.type != 'Feature') return APIReturn(res,false, 'GEOJSON have invalid features: '+feature.type);
    
        var geometry = feature.geometry;
        var properties = feature.properties;

        var payload = {mapID: mapID, type: type, layerID: layerID, geom: geometry, prop: properties};

        Q.PostGIS.insertLayer(payload, function(error, result) {
          if (error) return APIReturn(res,false, result)

          return APIReturn(res,
            true, 'GEOJson has been created.', result
          )
        })

        //console.log(type,geometry,properties);
      })
    }else return APIReturn(res,false, 'Type of GEOJSON Data: '+geoJSON.type+' is not supported.');
  });
});

//LAYERS
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

//LAYERS
app.post('/layer/geojson/get', function(req, res) {
  if (!checkAPIKey(req, res)) return;
  
  checkAuthentication(req, res, function(isLoggedIn, userID) {
    if (!isLoggedIn) return authRequired(res, userID);
    
    var mapID = req.body.mapID
    var type = req.body.type;
    var layerID = util.processLayerID(req.body.layerID);
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

//LAYERS
app.post('/layer/geojson/delete', function(req, res) {
  if (!checkAPIKey(req, res)) return;
  
  checkAuthentication(req, res, function(isLoggedIn, userID) {
    if (!isLoggedIn) return authRequired(res, userID);
    
    var mapID = req.body.mapID
    var type = req.body.type;
    var layerID = util.processLayerID(req.body.layerID);
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

//USER Groups
app.post('/group/add', function(req, res) {
  if (!checkAPIKey(req, res)) return;
  
  checkAuthentication(req, res, function(isLoggedIn, userID) {
    if (!isLoggedIn) return authRequired(res, userID);

    var payload = {
      userID: userID,
      label: req.body.label,
      color: req.body.color
    };

    Q.Layer.createUserGroup(payload, function(error, result) {
      if (error) return APIReturn(res,false, result)

      return APIReturn(res,
        true, 'User Group has been created.', result
      )
    })
  })
});

//USER Groups


//USER Groups
app.post('/group/delete', function(req, res) {
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

//LAYERS
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

app.post('/layer/order', function(req, res) {
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

app.post('/layer/update', function(req, res) {
  if (!checkAPIKey(req, res)) return;
  
  checkAuthentication(req, res, function(isLoggedIn, userID) {
    if (!isLoggedIn) return authRequired(res, userID);
  
    return APIReturn(res,
      true, 'Layer updating is not yet built.', userID
    )
  })
});

app.post('/layer/delete', function(req, res) {
  if (!checkAPIKey(req, res)) return;
  
  checkAuthentication(req, res, function(isLoggedIn, userID) {
    if (!isLoggedIn) return authRequired(res, userID);
  
    // var userID = req.body.userID;
    var layerID = util.processLayerID(req.body.layerID);

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

app.post('/users/add', function(req, res) {
  if (!checkAPIKey(req, res)) return;
  
  checkAuthentication(req, res, function(isLoggedIn, userID) {
    if (!isLoggedIn) return authRequired(res, userID);
  

    // console.log(req.body);
    if (typeof req.body.email == 'undefined') return APIReturn(res, false, 'Email address must be provided.')
    if (typeof req.body.password == 'undefined') return APIReturn(res, false, 'Password must be provided.')

    var emailAddress = req.body.email;
    var password = req.body.password;
    var passwordHash = password;

    Q.User.getUserByEmail(emailAddress, function(error,users) {
      if (error) return APIReturn(res, false, users)
    
      console.log('USERS')
      console.log(users)
      if (users.length !== 0) {
        var user = users[0];

        console.log(user.passwordHash);
        console.log(password);

        if (user.passwordHash == password) {
          return APIReturn(res,
            true, 'User has been located and authenticated.', users
          )
        } else {
          return APIReturn(res,
            true, 'Password is incorrect.' //,users
          )
        }

      } else {
        return APIReturn(res,
          false, 'Email address is not associated with an account.'
        )
      }
    });
  })
})

app.post('/users/login', function(req, res) {
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
        
      db.createUser(req.body.UUID,req.body.firstName,req.body.lastName, function(error,users) {
        if (error) return APIReturn(res, false, users)
        
        console.log(users);
        
        return APIReturn(res,
          true, 'UUID created! User has been created.'
        )
      })
    }
  });
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

module.exports.handler = serverless(app);
