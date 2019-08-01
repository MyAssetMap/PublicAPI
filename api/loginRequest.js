'use strict';

const pg = require('pg')
const pool = new pg.Pool({
  database: 'myassetmapv2_db',
  user: 'Javier_root',
  host: 'myassetmapv2.c7tqiynvcd79.us-east-1.rds.amazonaws.com',
  password: 'javierroot123',
  port: 5432,
  ssl: true,
  max: 20, // set pool max size to 20
  min: 4, // set min pool size to 4
  idleTimeoutMillis: 1000, // close idle clients after 1 second
  connectionTimeoutMillis: 1000, // return an error after 1 second if connection could not be established
})

async function query (q) {
  const client = await pool.connect()
  let res
  try {
    await client.query('BEGIN')
    try {
      res = await client.query(q)
      await client.query('COMMIT')
    } catch (err) {
      await client.query('ROLLBACK')
      throw err
    }
  } finally {
    client.release()
  }
  return res
}

module.exports.submit = async (event, context, callback) => {
	
	
	try {
	      const { rows } = await query("select * from pg_tables")
	      console.log(JSON.stringify(rows[0]))
	      var response = {
	          "statusCode": 200,
	          "headers": {
	              "Content-Type" : "application/json"
	          },
	          "body": JSON.stringify(rows),
	          "isBase64Encoded": false
	      };
	      callback(null, response);
	    } catch (err) {
	      console.log('Database ' + err)
	      callback(null, 'Database ' + err);
	    }
	
  // return {
  //   statusCode: 200,
  //   body: JSON.stringify(
  //     {
  //       message: 'Go Serverless v1.0! Your function executed successfully!',
  //       input: event,
  //     },
  //     null,
  //     2
  //   ),
  // };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
