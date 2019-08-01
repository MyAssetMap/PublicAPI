'use strict';

const serverless = require('serverless-http');
const express = require('express');
const bodyParser = require("body-parser");

const app = express()

// ============
// = SETTINGS =
// ============
app.set('json replacer', null); // property transformation rules
app.set('json spaces', 4); // number of spaces for indentation

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// =============
// = FUNCTIONS =
// =============

function APIReturn(res,success,message,data) {
	if (typeof data == 'undefined') {
		res.json({
			success: success,
			message: message
		})
	}else{
		res.json({
			success: success,
			message: message,
			data: data
		})
	}
	
}

// =====================
// = DATABASE SETTINGS =
// =====================
const db = require('./queries')


// =============
// = ENDPOINTS =
// =============
app.get('/dbinfo', db.testPG)

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
app.get('/run', function (req, res) {
	db.runQuery(
		'UPDATE "User" SET "passwordHash" = \'secure!\';'
		,function(data) {
			APIReturn(res,
				true,'Query has been run!',data
			)
		}
	);
})

app.get('/', function (req, res) {
	
	APIReturn(res,
		true,'Welcome to the MY ASSET MAP endpoint v1.0'
	)
})

app.get('/users', function (req, res) {
	db.getUsers(function(users) {
		// console.log('USERS')
		// console.log(users)
	
		APIReturn(res,
			true,'User information has been returned.',users
		)
	});
})

app.post('/users/add', function (req, res) {
	// console.log(req.body);
	if (typeof req.body.email == 'undefined') return APIReturn(res,false,'Email address must be provided.')
	if (typeof req.body.password == 'password') return APIReturn(res,false,'Password must be provided.')
	
	var emailAddress = req.body.email;
	var password = req.body.password;
	
	var passwordHash = password;
	
	db.getUserByEmail(emailAddress, function(users) {
		console.log('USERS')
		console.log(users)
		if (users.length !== 0) {
			var user = users[0];
			
			console.log(user.passwordHash);
			console.log(password);
			
			if (user.passwordHash == password) {
				APIReturn(res,
					true,'User has been located and authenticated.',users
				)
			}else{
				APIReturn(res,
					true,'Password is incorrect.'//,users
				)
			}
			
		}else{
			APIReturn(res,
				false,'Email address is not associated with an account.'
			)
		}
	
		
	});
})

app.post('/users/login', function (req, res) {
	console.log(req.body);
	if (typeof req.body.email == 'undefined') return APIReturn(res,false,'Email address must be provided.')
	if (typeof req.body.password == 'undefined') return APIReturn(res,false,'Password must be provided.')
		
	
	var emailAddress = req.body.email;
	var password = req.body.password;
	
	var passwordHash = password;
	
	db.getUserByEmail(emailAddress, function(users) {
		console.log('USERS')
		console.log(users)
		if (users.length !== 0) {
			var user = users[0];
			
			console.log(user.passwordHash);
			console.log(password);
			
			if (user.passwordHash == password) {
				APIReturn(res,
					true,'User has been located and authenticated.',users
				)
			}else{
				APIReturn(res,
					true,'Password is incorrect.'//,users
				)
			}
			
		}else{
			APIReturn(res,
				false,'Email address is not associated with an account.'
			)
		}
	
		
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
