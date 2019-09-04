'use strict';

// =====================
// = DATABASE SETTINGS =
// =====================
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

// async function query (q) {
//   const client = await pool.connect()
//   let res
//   try {
//     await client.query('BEGIN')
//     try {
//       res = await client.query(q)
//       await client.query('COMMIT')
//     } catch (err) {
//       await client.query('ROLLBACK')
//       throw err
//     }
//   } finally {
//     client.release()
//   }
//   return res
// }
//
// const testDB = async (event, context, callback) => {
// 	console.log(event)
// 	try {
// 	      const { rows } = await query("select * from pg_tables")
// 	      console.log(JSON.stringify(rows[0]))
// 	      var response = {
// 	          "statusCode": 200,
// 	          "headers": {
// 	              "Content-Type" : "application/json"
// 	          },
// 	          "body": JSON.stringify(rows),
// 	          "isBase64Encoded": false
// 	      };
// 	      callback(null, response);
// 	} catch (err) {
// 	      console.log('Database ' + err)
// 	      callback(null, 'Database ' + err);
// 	}
// };

const testPG = (request, response) => {
	pool.query('SELECT * FROM pg_tables', (error, results) => {
		if (error) {
			throw error
		}
		response.status(200).json(results.rows)
	})
}

const runQuery = (query, callback) => {
	var queryMsg = query;
	//console.log(queryMsg)

	pool.query(queryMsg, (error, results) => {
		if (error) {
			throw error
		}
		callback(results.rows);
	})
}

const getUsers = (callback) => {
	pool.query('SELECT * FROM public."User"', (error, results) => {
		if (error) {
			throw error
		}
		callback(results.rows);
	})
}

const getAccounts = (callback) => {
	pool.query('SELECT * FROM public."Account"', (error, results) => {
		if (error) {
			throw error
		}
		callback(results.rows);
	})

}

const getEmails = (callback) => {
	pool.query('SELECT "email" FROM public."User"', (error, results) => {
		if (error) {
			throw error
		}
		callback(results.rows);
	})
}

const getAddons = (callback) => {
	pool.query('SELECT * FROM public."Addon"', (error, results) => {
		if (error) {
			throw error
		}
		callback(results.rows);
	})
}

const getSuperUsers = (callback) => {
	pool.query('SELECT * FROM public."SuperUser"', (error, results) => {
		if (error) {
			throw error
		}
		callback(results.rows);
	})
}

const getUserPreference = (callback) => {
	pool.query('SELECT * FROM public."UserPreference"', (error, results) => {
		if (error) {
			throw error
		}
		callback(results.rows);
	})
}

const getUserByEmail = (emailAddress, callback) => {
	var queryMsg = 'SELECT * FROM public."User" WHERE email = LOWER(\'' + emailAddress + '\');';
	//console.log(queryMsg)

	pool.query(queryMsg, (error, results) => {
		if (error) {
			throw error
		}
		callback(results.rows);
	})
}

// ================================
// = CONVERT EMAIL ADDRESS TO IDS =
// ================================

//From email get user ID
const getUsersByEmail = (emailAddress, callback) => {
	var queryMsg = 'SELECT * FROM public."User" WHERE LOWER(email) = LOWER(\'' + emailAddress + '\');'

	pool.query(queryMsg, (error, results) => {
		if (error) {
			throw error
		}

		callback(results.rows);
	})
}

//TODO:CREATE FUNCTION FOR THIS
//with userID get user preferences

//TODO:CREATE FUNCTION FOR THIS
//with userID get user superuser user ID if SuperUser
const getAccountsSuperByUserID = (userID, callback) => {
	var queryMsg = 'SELECT * FROM public."SuperUser" WHERE public."SuperUser"."userID" = '+ userID +';'

	pool.query(queryMsg, (error, results) => {
		if (error) {
			throw error
		}

		callback(results.rows);
	})
}

//TODO:CREATE FUNCTION FOR THIS
//with userID get account the user belongs.
const getAccountsByUserID = (userID, callback) => {
	var queryMsg = 'SELECT "accountID" FROM public."AccountUser" WHERE "userID" = ' + userID + ';'

	pool.query(queryMsg, (error, results) => {
		if (error) {
			throw error
		}

		callback(results.rows);
	})
}

//TODO:CREATE FUNCTION FOR THIS
//with userID get user user map user ID


const getTable = (table, callback) => {

	var queryMsg = 'SELECT * FROM public."' + table + '"';
	//console.log(queryMsg)

	pool.query(queryMsg, (error, results) => {
		if (error) {
			throw error
		}
		callback(results.rows);
	})
}

const getRowFromTable = (table, row, callback) => {

	var queryMsg = 'SELECT "' + fromSingleValueToValues(row) + '" FROM public."' + table + '"';
	//console.log(queryMsg)

	pool.query(queryMsg, (error, results) => {
		if (error) {
			throw error
		}
		callback(results.rows);
	})
}

const getInnerJoin = (fields, firstTable, firstIdentifier, secondTable, secondIdentifier, callback) => {

	var queryMsg = 'Select "' + fields + '" from public."' + firstTable + '", public."' + secondTable + '" Where public."' + firstTable + '".' + firstIdentifier + ' = public."' + secondTable + '".' + secondIdentifier + ';'
	//console.log(queryMsg)

	pool.query(queryMsg, (error, results) => {
		if (error) {
			throw error
		}
		callback(results.rows);
	})
}


const updateRow = (table, column, value, identifierColumn, identifier, callback) => {

	var queryMsg = 'UPDATE public."' + table + '" SET ' + '"' + column + '" = "' + value + '"' + ' WHERE ' + identifierColumn + '= "' + identifier + '";';

	pool.query(queryMsg, (error, results) => {
		if (error) {
			throw error
		}
		callback(results.rows);
	})

}

const insertRow = (table, columns, values, callback) => {

	var queryMsg = 'INSERT INTO public."' + table + '" (' + columns + ') VALUES (' + fromSingleValueToValues(values) + ');';
	pool.query(queryMsg, (error, results) => {
		if (error) {
			throw error
		}
		callback(results.rows);
	})


}

// function addSingleQuoteToFields(fieldsToAddQuote) {

// 	let values = fieldsToAddQuote.split(',');
// 	let newvalues = "";
// 	values.forEach(function (element) {
// 		newvalues += "'" + element + "',";
// 	});

// 	newvalues = newvalues.substring(0, newvalues.length - 1); //trim last coma
// 	return newvalues;
// }


const test = function () {
	console.log('The test works');
	return 'It does?';
}


const fromSingleValueToValues = function (valuesOrValues) {

	if (valuesOrValues.includes(",")) {
		var values = valuesOrValues.split(',');
		var result = "";

		values.forEach(function (value) {
			value = value.trim() //We remove any extra space used between values

			result += '"' + value + '",';

		});
		result = result.substring(0, result.length - 1) //Remove last comma 
		return result;

	}
	else { //Since the input has no comma, it is a single value. 
		return '"' + valuesOrValues + '"';
	}
}

//SELECT "firstName", "emailAddress" FROM public."User";

//
// const getUserById = (request, response) => {
//   const id = parseInt(request.params.id)
//
//   pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(200).json(results.rows)
//   })
// }
//
// const createUser = (request, response) => {
//   const { name, email } = request.body
//
//   pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(201).send(`User added with ID: ${result.insertId}`)
//   })
// }
//
// const updateUser = (request, response) => {
//   const id = parseInt(request.params.id)
//   const { name, email } = request.body
//
//   pool.query(
//     'UPDATE users SET name = $1, email = $2 WHERE id = $3',
//     [name, email, id],
//     (error, results) => {
//       if (error) {
//         throw error
//       }
//       response.status(200).send(`User modified with ID: ${id}`)
//     }
//   )
// }
//
// const deleteUser = (request, response) => {
//   const id = parseInt(request.params.id)
//
//   pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(200).send(`User deleted with ID: ${id}`)
//   })
// }




module.exports = {
	testPG,
	runQuery,
	getUsers,
	getAccounts,
	getEmails,
	getAddons,
	getSuperUsers,
	getUserPreference,
	getUserByEmail,
	getUsersByEmail,
	getAccountsSuperByUserID,
	getAccountsByUserID,
	getTable,
	getRowFromTable,
	getInnerJoin,
	updateRow,
	insertRow,
	test,
	fromSingleValueToValues,
	// getUserById,
	// createUser,
	// updateUser,
	// deleteUser
}