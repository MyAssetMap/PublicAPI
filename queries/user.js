'use strict';

const config = require('../config');
const util = require('../util');

const pg = require('pg')
const pool = new pg.Pool(config.dbPool)

const DB = require('./db')

module.exports = class Users {
  // ========================
  // = CUSTOM LOGIC QUERIES =
  // ========================
  static getSuperUsers(callback) {
    var thisClass = this;
    DB.runQuery(pool, 'SELECT * FROM public."SuperUser"', callback);
  }

  static getUserPreference(callback) {
    var thisClass = this;
    DB.runQuery(pool, 'SELECT * FROM public."UserPreference"', callback);
  }

  static getUserByEmail(emailAddress, callback) {
    var thisClass = this;
    DB.runQuery(pool, 'SELECT * FROM public."User" WHERE LOWER(email) = LOWER(\'' + emailAddress + '\');', callback);
  }

  static getUserByID(userID, callback) {
    var thisClass = this;
    DB.getTableWhere(pool, 'User','id',userID,function(error, userID) {
      if (error) return callback(true, userID);
    
      if (userID == '' || userID == 0 || userID == []) return callback(true, 'No user found for this ID.');
    
      if (Array.isArray(userID)) {
        if (userID.length == 0) return callback(true, 'No user found for this ID.');
        if (userID.length == 1) return callback(false, userID[0]);
        if (userID.length >= 2) return callback(true, 'More than one user found for this ID.');
      }
      callback(error, userID)
    })
  }

  static loginUpdate(userID, callback) {
    var thisClass = this;
    DB.updateRow(pool, "User", "lastLogin", 'TODAY()', "id", userID, callback)
  }

  static getUserPayload(userID, callback) {
    var thisClass = this;
    var isActive,
      superID = [],
      accountID = [],
      mapID = [];

    thisClass.getUserByID(userID, function(error,user) {
      if (error) return callback(true, user);

      console.log('User',user);
      isActive = !user.isDisabled;

      //LastLogin Update
      thisClass.loginUpdate(userID, function(error, data) {
        thisClass.getAccountsSuperByUserID(userID, function(error,data) {
          if (error) return callback(true, data);
          console.log(data);

          data.forEach(function(entry) {
            superID.push(entry.ID);
          });

          thisClass.getAccountsByUserID(userID, function(error,data) {
            if (error) return callback(true, data);
            console.log(data);

            data.forEach(function(entry) {
              accountID.push(entry.accountID);
            });

            thisClass.getMapsByAccountID(accountID, function(error,data) {
              if (error) return callback(true, data);
              console.log(data);

              data.forEach(function(entry) {
                mapID.push(entry.id);
              });

              superID.sort();
              accountID.sort();
              mapID.sort();

              callback(false, {
                isActive: isActive,
              
                profile: {
                  userID: userID,
                  firstName: user.firstName,
                  lastName: user.lastName,
                  displayName: user.firstName+' '+user.lastName
                },

                superUserID: superID,
                accountID: accountID,
                mapID: mapID
              })
            })
          })
        })
      })
    });
  }

  static getUserIDByUUID(UUID, callback) {
    var thisClass = this;
    if (UUID == '' || UUID == 0) return callback(true, 'User authentication information was not sent.');
  
    DB.getRowFromTableWhere(pool, 'User','id','cognitoUUID',UUID,function(error, userID) {
      if (error) return callback(true, userID);
      if (userID == '' || userID == 0 || userID == []) return callback(true, 'No user found for this UUID.');
    
      if (Array.isArray(userID)) {
        if (userID.length == 0) return callback(true, 'No user found for this UUID.');
        if (userID.length == 1) return callback(false, userID[0].id);
        if (userID.length >= 2) return callback(true, 'More than one user found for this UUID.');
      }
      callback(error, userID)
    });
  
  }

  static createUser(UUID, firstName, lastName, callback) {
    var thisClass = this;
    DB.insertRow(pool, 'User',["cognitoUUID","firstName","lastName","lastLogin","dateCreated"],[UUID,firstName,lastName,"TODAY()","TODAY()"], callback);
    // DB.runQuery(pool, 'INSERT INTO public."User" ("cognitoUUID","firstName","lastName") VALUES  (\'' + UUID + '\',\'' + firstName + '\',\'' + lastName + '\');', callback);
  }

  static createGroup(payload, callback) {
    var thisClass = this;
        DB.insertRow(pool, 
          'LayerGroup',
          ["ownerID", "mapID", "groupID", "label", "description", "canExpand", "canOrgView", "canOrgEdit"],
          [payload.ownerID, payload.mapID, payload.groupID, payload.label, payload.description, payload.canExpand, payload.canOrgView, payload.canOrgEdit],
          callback
        );
  }

  static createUserGroup(payload, callback) {
    var thisClass = this;
    var userID = payload.userID;
  
    var label = payload.label;
    var color = payload.color;
  
    if (label == null) return callback(true, 'Label (`label`) must be supplied.');
    if (color == null) color = '#f2f2f2';
  
    var groupID = generateRandomString(10);
  
    //Add to User List Data
    DB.appendToJSONRow(pool,
      'User',
      'userLayers',
      [[
        {
          label: label,
          color: color,
          groupId: groupID,
          children: {
            groupIds: [],
            layerIds: []
          }
        },
        {}
      ]],
      'id',
      userID,
      function(error, userRowID) {
        if (error) return callback(true, userRowID);
        console.log('UserGroupID:',groupID)
        callback(false, groupID)
      }
    );
  }
// ====================
// = ***DEPRECATED*** =
// ====================
  static deleteUserGroup(groupID, callback) {
    var thisClass = this;
  
    if (groupID == null) return callback(true, 'Group ID (`groupID`) must be supplied.');
  
  
  
    //Add to User List Data
    DB.getRowFromTableWhere(pool, 'User',['userLayers'],'id',userID,function(error,users) {
      if (error) return callback(true, users);
    
      if (!users.length) return callback(false, finalReturn);
      users.forEach(function(user) {
        const userLayers = user.userLayers;
      
        if (!userLayers.length) return callback(false, finalReturn);
      
        userLayers.forEach(function(layer) {
        
          var layerTitle = layer[0];
          var layerCustomize = layer[1];
    
          if (typeof layerTitle === 'object') {//LAYER OR GROUP
            if (layerTitle.groupId != null) {
              if (layerTitle.groupId == groupID) {
                DB.deleteFromJSONRow(pool, 
                  'User',
                  'userLayers',
                  layer,
                  'id',
                  userID,
                  function(error, userRowID) {
                    if (error) return callback(true, userRowID);
                    console.log('UserGroupID:',groupID)
                    callback(false, groupID)
                  }
                );
              }
            }
          }
        })
      })
    })
  }
  


  //TODO:CREATE FUNCTION FOR THIS
  //with userID get user preferences

  //TODO:CREATE FUNCTION FOR THIS
  //with userID get user superuser user ID if SuperUser
  static getAccountsSuperByUserID(userID, callback) {
    var thisClass = this;DB.getTableWhere(pool, 'SuperUser','userID',userID,callback)}

  //TODO:CREATE FUNCTION FOR THIS
  //with userID get account the user belongs.
  static getAccountsByUserID(userID, callback) {
    var thisClass = this;DB.getRowFromTableWhere(pool, 'AccountUser','accountID','userID',userID,callback)}

  static getMapsByAccountID(accountID, callback) {
    var thisClass = this;DB.getRowFromTableWhere(pool, 'Map','id','accountID',accountID,callback)}
}
