'use strict';

const config = require('../tools/config');
const util = require('../tools/util');

const DB = require('./db')

const PostGIS = require('./postgis')
const General = require('./general')
const Layer = require('./layer')
const User = require('./user')

const test = () => {
  console.log('It works!');
}

module.exports = {
  DB: DB,
  PostGIS: PostGIS,
  General: General,
  Layer: Layer,
  User: User,
  test: test
}