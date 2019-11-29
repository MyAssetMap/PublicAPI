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
const db = require('./queries')
const postgis = require('./postgis')
const config = require('./config');

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

//Hello There

function toSlug(str) {
  var res = str.toLowerCase();
  res = res.replace(/ /g, "-");
  return res;
}

function APIReturn(res, success, message, data) {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Credentials', true);

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

function checkAPIKey(req, res) {
  return true;
  // console.log(req.header('Auth-DEV'));
  // console.log(req.header('Auth-PROD'));
  var auth = false;
  if (req.header('Auth-DEV') == config.auth.DEV) auth = true;
  if (req.header('Auth-PROD') == config.auth.PROD) auth = true;

  if (!auth) {
    APIReturn(res,
      false, 'Unauthorized'
    )
  }
  return auth;
}

function checkAuthentication(userID, callback) {
  const isValidUser = db.getUsersByUUID(function(users) {
    // console.log('USERS')
    // console.log(users)

    callback(true);
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
app.get('/layer/mvt/:layerName/:zoom/:x/:y', function(req, res) {
  if (!checkAPIKey(req, res)) return;
  var payload = {
    layer: req.params.layerName,
    z: req.params.zoom,
    x: req.params.x,
    y: req.params.y,
  }
  
  postgis.getMVTLayer(payload, function(error, result) {
    if (error) return APIReturn(res,false, result)
    
    return APIReturn(res,
      true, 'MVT has been generated.', result
    )
  })
})




// =================
// = GET ENDPOINTS =
// =================


app.get('/postgis', function(req, res) {
  if (!checkAPIKey(req, res)) return;

  postgis.testPG(function(error,result) {
    if (error) return APIReturn(res,false, result)
    
    return APIReturn(res,
      true, 'DatabaseInfo.', result
    )
  })
})

app.get('/db', function(req, res) {
  if (!checkAPIKey(req, res)) return;

  db.testPG(function(error,result) {
    if (error) return APIReturn(res,false, result)
    
    return APIReturn(res,
      true, 'DatabaseInfo.', result
    )
  })
})


app.get('/users', function(req, res) {
  if (!checkAPIKey(req, res)) return;

  db.getUsers(function(error,users) {
    if (error) return APIReturn(res,false, users)
    
    return APIReturn(res,
      true, 'User information has been returned.', users
    )
  });
})

app.get('/emails', function(req, res) {
  if (!checkAPIKey(req, res)) return;

  db.getEmails(function(error,emails) {
    if (error) return APIReturn(res,false, emails)
    
    return APIReturn(res,
      true, 'Emails information has been returned.', emails
    )
  });
})

app.get('/accounts', function(req, res) {
  if (!checkAPIKey(req, res)) return;

  db.getAccounts(function(error,accounts) {
    if (error) return APIReturn(res,false, accounts)
    
    return APIReturn(res,
      true, 'Accounts information has been returned.', accounts
    )
  });
})

app.get('/addons', function(req, res) {
  if (!checkAPIKey(req, res)) return;

  db.getAddons(function(error,accounts) {
    if (error) return APIReturn(res,false, accounts)
    
    return APIReturn(res,
      true, 'Addon information has been returned.', accounts
    )
  });
})

app.get('/superusers', function(req, res) {
  if (!checkAPIKey(req, res)) return;

  db.getSuperUsers(function(error,accounts) {
    if (error) return APIReturn(res,false, accounts)
    
    return APIReturn(res,
      true, 'Super User preference has been returned.', accounts
    )
  });
})

app.get('/userpreference', function(req, res) {
    if (!checkAPIKey(req, res)) return;

    db.getUserPreference(function(error,accounts) {
    if (error) return APIReturn(res,false, accounts)
    
      return APIReturn(res,
        true, 'User preference information has been returned.', accounts
      )
    });
})

app.get('/layers/public', function(req, res) {
    if (!checkAPIKey(req, res)) return;

    var mapID = 0;
    
    db.getGlobalLayers(mapID, function(error,layers) {
    if (error) return APIReturn(res,false, layers)
    
      return APIReturn(res,
        true, 'Public Layers have been returned', layers
      )
    });
})

app.get('/layers/user', function(req, res) {
    if (!checkAPIKey(req, res)) return;

    var mapID = 0;
    var userID = 0;
    
    db.getLayers(mapID, userID, function(error,layers) {
    if (error) return APIReturn(res,false, layers)
    
      return APIReturn(res,
        true, 'Public Layers have been returned', layers
      )
    });
})

  // ==================
  // = POST ENDPOINTS =
  // ==================

//LAYERS
app.post('/layer/import/json', function(req, res) {
  if (!checkAPIKey(req, res)) return;
  
  var mapID = req.body.mapID
  var type = req.body.type;
  var layerID = req.body.layerID;
  var json = req.body.json;
  
  if (mapID == null) return APIReturn(res,false, 'Map ID (`mapID`) must be supplied.');

  if (type == null) return APIReturn(res,false, 'Layer Type (`type`) be supplied.');
  if (!['global','org','user'].includes(type)) return APIReturn(res,false, 'Layer Type (`type`) is invalid: '+type);

  if (layerID == null) return APIReturn(res,false, 'Layer ID (`layerID`) must be supplied.');
  
  if (json == null || json == '') return APIReturn(res,false, 'GEOJSON (`json`) must be supplied.');
  
  var geoJSON = JSON.parse(json);
  //console.log(geoJSON);
  
  if (geoJSON.type == 'FeatureCollection') {
    geoJSON.features.forEach(function(feature) {
      if (feature.type != 'Feature') return APIReturn(res,false, 'GEOJSON have invalid features: '+feature.type);
      
      var geometry = feature.geometry;
      var properties = feature.properties;

      var payload = {mapID: mapID, type: type, layerID: layerID, geom: geometry, prop: properties};

      postgis.insertLayer(payload, function(error, result) {
        if (error) return APIReturn(res,false, result)

        return APIReturn(res,
          true, 'GEOJson has been imported.', result
        )
      })

      //console.log(type,geometry,properties);
    })
  }else return APIReturn(res,false, 'Type of GEOJSON Data: '+geoJSON.type+' is not supported.');
});

//LAYERS
app.post('/group/add', function(req, res) {
  if (!checkAPIKey(req, res)) return;
  
  var ownerID = req.body.userID;
  var mapID = req.body.mapID;
  var groupID = req.body.groupID;
  var label = req.body.label;
  var description = req.body.description;
  var canExpand = req.body.canExpand
  var canOrgView = req.body.canOrgView;
  var canOrgEdit = req.body.canOrgEdit;
  
  if (ownerID == null) return APIReturn(res,false, 'User ID (`userID`) must be supplied.');
  if (mapID == null) return APIReturn(res,false, 'Map ID (`mapID`) must be supplied.');
  if (groupID == null) groupID = 0;
  
  if (label == null) return APIReturn(res,false, 'Label (`label`) must be supplied.');
  if (description == null) description = '';
  if (canExpand == null) canExpand = false;
  if (canOrgView == null) canOrgView = false;
  if (canOrgEdit == null) canOrgEdit = false;

  var payload = {
    ownerID: ownerID,
    mapID: mapID,
    groupID: groupID,
    label: label,
    description: description,
    canExpand: canExpand,
    canOrgView: canOrgView,
    canOrgEdit: canOrgEdit,
  };

  db.createGroup(payload, function(error, result) {
    if (error) return APIReturn(res,false, result)

    return APIReturn(res,
      true, 'Group has been created.', result
    )
  })
});

//LAYERS
app.post('/layer/add', function(req, res) {
  if (!checkAPIKey(req, res)) return;
  
  var ownerID = req.body.userID;
  var groupID = req.body.groupID;
  var type = req.body.type;
  //SOURCE
  var label = req.body.label;
  var sourceLayer = req.body.sourceLayer;
  var interactive = req.body.interactive
  var minzoom = req.body.minzoom;
  var layout = req.body.layout;
  var paint = req.body.layout;
  var metadata = req.body.metadata;
  
  if (ownerID == null) return APIReturn(res,false, 'User ID (`userID`) must be supplied.');
  if (groupID == null) groupID = 0;
  if (type == null) return APIReturn(res,false, 'Type (`type`) must be supplied.');
  if (!['point','line','polygon'].includes(type)) return APIReturn(res,false, 'Layer Type (`type`) is invalid: '+type);
  
  if (label == null) return APIReturn(res,false, 'Label (`label`) must be supplied.');
  if (sourceLayer == null) sourceLayer = toSlug(label);
  if (interactive == null) interactive = true;
  if (minzoom == null) minzoom = 10;
  if (layout == null) layout = [];
  if (paint == null) paint = [];
  if (metadata == null) metadata = [];

  var payload = {
    ownerID: ownerID, 
    groupID: groupID, 
    type: type, 
    source: 0,
    sourceLayer: sourceLayer, 
    label: label, 
    interactive: interactive,
    minzoom: minzoom,
    layout: layout,
    paint: paint,
    metadata: metadata,
  };

  db.createLayer(payload, function(error, result) {
    if (error) return APIReturn(res,false, result)

    return APIReturn(res,
      true, 'Layer has been created.', result
    )
  })
});

app.post('/users/add', function(req, res) {
  if (!checkAPIKey(req, res)) return;

  // console.log(req.body);
  if (typeof req.body.email == 'undefined') return APIReturn(res, false, 'Email address must be provided.')
  if (typeof req.body.password == 'undefined') return APIReturn(res, false, 'Password must be provided.')

  var emailAddress = req.body.email;
  var password = req.body.password;
  var passwordHash = password;

  db.getUserByEmail(emailAddress, function(error,users) {
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

app.post('/users/login', function(req, res) {
  if (!checkAPIKey(req, res)) return;

  if (typeof req.body.UUID == 'undefined') return APIReturn(res, false, 'UUID of user must be provided.')

  db.getUserIDByUUID(req.body.UUID, function(error,user) {
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

app.post('/users/lookup', function(req, res) {
  if (!checkAPIKey(req, res)) return;


  var userID = 0,
    isActive,
    superID = [],
    accountID = [];

  if (typeof req.body.email == 'undefined') return APIReturn(res, false, 'Email address must be provided.')
  var email = req.body.email;

  db.getUsersByEmail(email, function(error,data) {
    if (error) return APIReturn(res, false, data)
    
    console.log(data);

    if (data.length == 0) {
      return APIReturn(res, false, 'No users matched the email address provided.');
    } else if (data.length == 1) {
      userID = data[0].ID;
      isActive = !data[0].isDisabled;
      db.getAccountsSuperByUserID(userID, function(error,data) {
        console.log(data);

        console.log();
        data.forEach(function(entry) {
          superID.push(entry.ID);
        });

        db.getAccountsByUserID(userID, function(error,data) {
          console.log(data);

          data.forEach(function(entry) {
            accountID.push(entry.accountID);
          });

          superID.sort();
          accountID.sort();

          return APIReturn(res,
            true, 'User information data obtained correctly from email address.', {
              userID: userID,
              isActive: isActive,
              superUserID: superID,
              accountsIDownBySuperUser: accountID
            }
          )
        })
      })
    } else return APIReturn(res, false, 'Multiple users matched the email address provided.');
  });
})

app.post('/selectTable', function(req, res) {
  if (!checkAPIKey(req, res)) return;


  if (typeof req.body.table == 'undefined') return APIReturn(res, false, 'Table name must be provided.')

  var table = req.body.table;

  db.getTable(table, function(error,data) {
    if (error) return APIReturn(res, false, data)

    return APIReturn(res,
      true, 'Table data obtained correctly', data

    )

  });
})

app.post('/selectRow', function(req, res) {
  if (!checkAPIKey(req, res)) return;


  if (typeof req.body.table == 'undefined') return APIReturn(res, false, 'Table name must be provided.')
  if (typeof req.body.row == 'undefined') return APIReturn(res, false, 'Row name must be provided.')

  var table = req.body.table;
  var row = req.body.row;

  db.getRowFromTable(table, row, function(error,data) {
    if (error) return APIReturn(res,false, data)
    
    return APIReturn(res,
      true, 'Row data obtained correctly', data
    )
  });
})

app.post('/innerJoin', function(req, res) {
  if (!checkAPIKey(req, res)) return;


  if (typeof req.body.fields == 'undefined') return APIReturn(res, false, 'Fields name must be provided.')
  if (typeof req.body.firstTable == 'undefined') return APIReturn(res, false, 'First Table name must be provided.')
  if (typeof req.body.firstIdentifier == 'undefined') return APIReturn(res, false, 'First Identifier name must be provided.')
  if (typeof req.body.secondTable == 'undefined') return APIReturn(res, false, 'Second Table name must be provided.')
  if (typeof req.body.secondIdentifier == 'undefined') return APIReturn(res, false, 'Second Identifier name must be provided.')

  var fields = req.body.fields;
  var firstTable = req.body.firstTable;
  var firstIdentifier = req.body.firstIdentifier;
  var secondTable = req.body.secondTable;
  var secondIdentifier = req.body.secondIdentifier;


  //This is necessary due to PostGres syntax where integers do not requiere "" 
  if (firstIdentifier != 'ID' || firstIdentifier != 'Id' || firstIdentifier != 'iD' || firstIdentifier != 'id') {
    firstIdentifier = '"' + firstIdentifier + '"';
  }

  //This is necessary due to PostGres syntax where integers do not requiere "" 
  if (secondIdentifier != 'ID' || secondIdentifier != 'Id' || secondIdentifier != 'iD' || secondIdentifier != 'id') {
    secondIdentifier = '"' + secondIdentifier + '"';
  }

  db.getInnerJoin(fields, firstTable, firstIdentifier, secondTable, secondIdentifier, function(data) {
    return APIReturn(res,
      true, 'Inner join obtained correctly', data
    )
  });
})

app.post('/updateRow', function(req, res) {
  if (!checkAPIKey(req, res)) return;


  if (typeof req.body.table == 'undefined') return APIReturn(res, false, 'Table name must be provided.')
  if (typeof req.body.column == 'undefined') return APIReturn(res, false, 'Column Table name must be provided.')
  if (typeof req.body.value == 'undefined') return APIReturn(res, false, 'Value Identifier name must be provided.')
  if (typeof req.body.identifierColumn == 'undefined') return APIReturn(res, false, 'Identifier Column Table name must be provided.')
  if (typeof req.body.identifier == 'undefined') return APIReturn(res, false, 'Identifier name must be provided.')

  var table = req.body.table;
  var column = req.body.column;
  var value = req.body.value;
  var identifierColumn = req.body.identifierColumn;
  var identifier = req.body.identifier;

  //This is necessary due to PostGres syntax where integers do not requiere "" 
  if (identifierColumn != 'ID' || identifierColumn != 'Id' || identifierColumn != 'iD' || identifierColumn != 'id') {
    identifierColumn = '"' + identifierColumn + '"';
  }

  db.updateRow(table, column, value, identifierColumn, identifier, function() {
    return APIReturn(res,
      true, 'Row updated correctly'
    )
  });

})

app.post('/insertRow', function(req, res) {
  if (!checkAPIKey(req, res)) return;


  if (typeof req.body.table == 'undefined') return APIReturn(res, false, 'Table name must be provided.')
  if (typeof req.body.columns == 'undefined') return APIReturn(res, false, 'Columns name must be provided.')
  if (typeof req.body.values == 'undefined') return APIReturn(res, false, 'Values name must be provided.')

  var table = req.body.table;
  var columns = req.body.columns;
  var values = req.body.values;

  db.insertRow(table, columns, values, function() {
    return APIReturn(res,
      true, 'Row inserted correctly'
    )
  });


})



//POST

//
// // Get Test endpoint
// app.post('/users/login', function (req, res) {
// 	console.log(req.body);
// 	// if (typeof req.body.email == 'undefined')
//
// 	return APIReturn(res,
// 		true, 'Login Works Fine', req.body
// 	)
// })
//
// // Get User endpoint
// app.get('/users/:userId', function (req, res) {
// 	console.log(req);
//
// 	const { userId, name } = req.body;
// 	return APIReturn(res,
// 		true,'User was located successfully',
// 		{
// 			userID: userId,
// 			name: name
// 		}
// 	)
// })



module.exports.handler = serverless(app);
