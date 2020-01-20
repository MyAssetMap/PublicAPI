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



module.exports = {
  dbPool,
  pgPool,
  s3
}	