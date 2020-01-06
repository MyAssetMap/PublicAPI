'use strict';

const config = require('../config');
const util = require('../util');

const pg = require('pg')
const pool = new pg.Pool(config.dbPool)

const DB = require('./db')

module.exports = class General {

  static testDB(callback) {
    var thisClass = this;
    DB.runQuery(pool, 'SELECT tablename FROM pg_tables WHERE schemaname != \'pg_catalog\' AND schemaname != \'information_schema\';', callback);
  }

  static getUsers(callback) {
    var thisClass = this;
    DB.runQuery(pool, 'SELECT * FROM public."User"', callback);
  }

  static getAccounts(callback) {
    var thisClass = this;
    DB.runQuery(pool, 'SELECT * FROM public."Account"', callback);
  }

  static getEmails(callback) {
    var thisClass = this;
    DB.runQuery(pool, 'SELECT "email" FROM public."User"', callback);
  }

  static getAddons(callback) {
    var thisClass = this;
    DB.runQuery(pool, 'SELECT * FROM public."Addon"', callback);
  }
}