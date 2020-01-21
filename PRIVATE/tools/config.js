'use strict';

// =====================
// = CONFIG SETTINGS =
// =====================

const DBInfo = {
    user: 'Javier_root',
    host: 'myassetmapv2.c7tqiynvcd79.us-east-1.rds.amazonaws.com',
    password: 'javierroot123',
    port: 5432,
    ssl: true,
    max: 20, // set pool max size to 20
    min: 4, // set min pool size to 4
    idleTimeoutMillis: 1000, // close idle clients after 1 second
    connectionTimeoutMillis: 1000, // return an error after 1 second if connection could not be established
}

const dbPool = {
    database: 'myassetmapv2_db',
    user: DBInfo.user,
    host: DBInfo.host,
    password: DBInfo.password,
    port: DBInfo.port,
    ssl: DBInfo.ssl,
    max: DBInfo.max, // set pool max size to 20
    min: DBInfo.min, // set min pool size to 4
    idleTimeoutMillis: DBInfo.idleTimeoutMillis, // close idle clients after 1 second
    connectionTimeoutMillis: DBInfo.connectionTimeoutMillis, // return an error after 1 second if connection could not be established
}

const pgPool = {
    database: 'myassetmapv2_layers',
    user: DBInfo.user,
    host: DBInfo.host,
    password: DBInfo.password,
    port: DBInfo.port,
    ssl: DBInfo.ssl,
    max: DBInfo.max, // set pool max size to 20
    min: DBInfo.min, // set min pool size to 4
    idleTimeoutMillis: DBInfo.idleTimeoutMillis, // close idle clients after 1 second
    connectionTimeoutMillis: DBInfo.connectionTimeoutMillis, // return an error after 1 second if connection could not be established
}

const s3 = {
  bucket: "my-asset-map-data"
}

const apiKeys = {
  '3b4e26fc-e158-4c31-94b9-e6095a002696': {
    name: 'Test API Key',
    map: [1,2],
    scope: ['geojson.read','mvt.read']
  },
  'b1996719-d052-4569-a6b8-7fed48e76f26': {
    name: 'The Aurora Highlands',
    map: [2],
    scope: ['geojson.read','mvt.read']
  }
}



module.exports = {
  dbPool,
  pgPool,
  s3,
  apiKeys
}	