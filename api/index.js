'use strict';

// ============================
// = DECLARATION OF CONSTANTS =
// ============================
const serverless = require('serverless-http');
const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const db = require('./queries')
// ============
// = SETTINGS =
// ============
app.set('json replacer', null); // property transformation rules
app.set('json spaces', 4); // number of spaces for indentation

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: true })); // Switched from false to true by javier 8/17/2019
app.use(bodyParser.json());

// =============
// = FUNCTIONS =
// =============

function APIReturn(res, success, message, data) {
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




// app.get('/', function (req, res) {
// 	APIReturn(res,
// 		true,'Welcome to the MY ASSET MAP endpoint v1.0'
// 	)
// })

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
// 			APIReturn(res,
// 				true,'Query has been run!',data
// 			)
// 		}
// 	);
// })

// =================
// = GET ENDPOINTS =
// =================

app.get('/dbinfo', db.testPG)

app.get('/', function (req, res) {
	APIReturn(res,
		true, 'Welcome to the MY ASSET MAP endpoint v1.0'
	)
})

app.get('/users', function (req, res) {
	db.getUsers(function (users) {
		APIReturn(res,
			true, 'User information has been returned.', users
		)
	});
})

app.get('/emails', function (req, res) {
	db.getEmails(function (emails) {
		APIReturn(res,
			true, 'Emails information has been returned.', emails
		)
	});
})

app.get('/accounts', function (req, res) {
	db.getAccounts(function (accounts) {
		APIReturn(res,
			true, 'Accounts information has been returned.', accounts
		)
	});
})

app.get('/addons', function (req, res) {
	db.getAddons(function (accounts) {
		APIReturn(res,
			true, 'Addon information has been returned.', accounts
		)
	});
})

app.get('/superusers', function (req, res) {
	db.getSuperUsers(function (accounts) {
		APIReturn(res,
			true, 'Super User preference has been returned.', accounts
		)
	});
})

app.get('/userpreference', function (req, res) {
	db.getUserPreference(function (accounts) {
		APIReturn(res,
			true, 'User preference information has been returned.', accounts
		)
	});
})
// ==================
// = POST ENDPOINTS =
// ==================

app.post('/users/add', function (req, res) {
	// console.log(req.body);
	if (typeof req.body.email == 'undefined') return APIReturn(res, false, 'Email address must be provided.')
	if (typeof req.body.password == 'password') return APIReturn(res, false, 'Password must be provided.')

	var emailAddress = req.body.email;
	var password = req.body.password;
	var passwordHash = password;

	db.getUserByEmail(emailAddress, function (users) {
		console.log('USERS')
		console.log(users)
		if (users.length !== 0) {
			var user = users[0];

			console.log(user.passwordHash);
			console.log(password);

			if (user.passwordHash == password) {
				APIReturn(res,
					true, 'User has been located and authenticated.', users
				)
			} else {
				APIReturn(res,
					true, 'Password is incorrect.'//,users
				)
			}

		} else {
			APIReturn(res,
				false, 'Email address is not associated with an account.'
			)
		}


	});
})

app.post('/users/login', function (req, res) {
	if (typeof req.body.email == 'undefined') return APIReturn(res, false, 'Email address must be provided.')
	if (typeof req.body.password == 'undefined') return APIReturn(res, false, 'Password must be provided.')


	var emailAddress = req.body.email;
	var password = req.body.password;
	var passwordHash = password;

	db.getUserByEmail(emailAddress, function (users) {
		console.log('USERS')
		console.log(users)
		if (users.length !== 0) {
			var user = users[0];

			console.log(user.passwordHash);
			console.log(password);

			if (user.passwordHash == password) {
				APIReturn(res,
					true, 'User has been located and authenticated.', users
				)
			} else {
				APIReturn(res,
					true, 'Password is incorrect.'//,users
				)
			}

		} else {
			APIReturn(res,
				false, 'Email address is not associated with an account.'
			)
		}


	});
})

app.post('/users/getIdsByEmail', function (req, res) {

	if (typeof req.body.emailAddress == 'undefined') return APIReturn(res, false, 'Email address must be provided.')
	var emailAddress = req.body.emailAddress;

	db.getIdsByEmail(emailAddress, function (data) {

		if (data.length == 0) {
			APIReturn(res,
				false, 'No users matched the email address provided.'

			)
		}else{
			APIReturn(res,
				true, 'User information data obtained correctly from email address.', data
			)
		}
	});

})

app.post('/selectTable', function (req, res) {

	if (typeof req.body.table == 'undefined') return APIReturn(res, false, 'Table name must be provided.')

	var table = req.body.table;

	db.getTable(table, function (data) {

		APIReturn(res,
			true, 'Table data obtained correctly', data

		)

	});
})

app.post('/selectRow', function (req, res) {

	if (typeof req.body.table == 'undefined') return APIReturn(res, false, 'Table name must be provided.')
	if (typeof req.body.row == 'undefined') return APIReturn(res, false, 'Row name must be provided.')

	var table = req.body.table;
	var row = req.body.row;

	db.getRowFromTable(table, row, function (data) {
		APIReturn(res,
			true, 'Row data obtained correctly', data
		)
	});
})

app.post('/innerJoin', function (req, res) {

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
		firstIdentifier = '\"' + firstIdentifier + '\"';
	}

	//This is necessary due to PostGres syntax where integers do not requiere "" 
	if (secondIdentifier != 'ID' || secondIdentifier != 'Id' || secondIdentifier != 'iD' || secondIdentifier != 'id') {
		secondIdentifier = '\"' + secondIdentifier + '\"';
	}

	db.getInnerJoin(fields, firstTable, firstIdentifier, secondTable, secondIdentifier, function (data) {
		APIReturn(res,
			true, 'Inner join obtained correctly', data
		)
	});
})

app.post('/updateRow', function (req, res) {

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
		identifierColumn = '\"' + identifierColumn + '\"';
	}

	db.updateRow(table, column, value, identifierColumn, identifier, function (data) {
		APIReturn(res,
			true, 'Row updated correclty correctly'
		)
	});

})

app.post('/insertRow', function (req, res) {

	if (typeof req.body.table == 'undefined') return APIReturn(res, false, 'Table name must be provided.')
	if (typeof req.body.columns == 'undefined') return APIReturn(res, false, 'Columns name must be provided.')
	if (typeof req.body.values == 'undefined') return APIReturn(res, false, 'Values name must be provided.')

	var table = req.body.table;
	var columns = req.body.columns;
	var values = req.body.values;

	db.insertRow(table, columns, values, function (data) {
		APIReturn(res,
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
// 	APIReturn(res,
// 		true, 'Login Works Fine', req.body
// 	)
// })
//
// // Get User endpoint
// app.get('/users/:userId', function (req, res) {
// 	console.log(req);
//
// 	const { userId, name } = req.body;
// 	APIReturn(res,
// 		true,'User was located successfully',
// 		{
// 			userID: userId,
// 			name: name
// 		}
// 	)
// })



module.exports.handler = serverless(app);
