var express = require('express');
var Mongodb = require('mongodb');
var bodyParser = require('body-parser');
var MongoClient = Mongodb.MongoClient;
var app = express();
var col = 'PollCollection';

app.use(express.static(__dirname+"/public"));
app.use(bodyParser.json())



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
		/*db.collection(col).find().toArray(function(err, data){
			if(err){
				throw err;
			}
			console.log(data[0].emps);
		})*/
		
		app.post('/create', function(req, res){
			console.log(req.body)
			db.collection(col).insert(req.body, function(err, data){
				if(err){
					res.send({success: false})
//					throw err;
					console.log(err)
					console.log("some error occurred on server")
				}
				console.log('Poll inserted successfully')
				res.send({success: true})
			});
		});
		
		app.get("/list", function(req, res){
			db.collection(col).find().toArray(function(err, data){
				if(err){
					res.send({success: false, message: "some error occurred in fetching data"})
				}
				console.log(data);
				res.send({success: true, pollList: data})
			})
		})

		
		
	})
})