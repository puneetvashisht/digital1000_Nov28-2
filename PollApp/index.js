var express = require('express');
var Mongodb = require('mongodb');
var MongoClient = Mongodb.MongoClient;
var app = express();
var col = 'PollCollecton';

app.listen(8888, "localhost", function(err){
	if(err){
		throw err;
	}
	console.log("Server is running at localhost:8888");
	MongoClient.connect("mongodb://localhost:27017/pollapp", function(err, db){
		if(err){
			throw err;
		}
		console.log("Mongodb connection is successfully created");
		/*db.collection(col).insert({
			"emps": [
					{"name": "Puneet", "empId": "Niit2015", "salary": "500000"}
				]
		}, function(err){
			if(err){
				throw err;
			}
			console.log("inserted")
		})*/
		db.collection(col).find().toArray(function(err, data){
			if(err){
				throw err;
			}
			console.log(data[0].emps);
		})
		
	})
})