var express = require('express');

var server = express();
var port = 7777;
var host = "localhost";

server.get('/hello/:name', function(req, res){
	console.log(req.params.name)
	console.log("req is coming with hello url and get method");
//	res.send("<h1>Welcome "+req.params.name+"</h1>")
	res.send({success: true, message: req.params.name})
})

server.post('/hello', function(req, res){
	console.log("req is coming with hello url and post method");
	res.send({success: false})
})

server.put('/hello', function(req, res){
	console.log("req is coming with hello url and put method");
	res.send({success: false})
})

server.listen(port, host, function(err){
	if(err){
		throw err;
	}
	console.log("starting my server");
	console.log("server is running at "+host+":"+port);
});

console.log("Node server..")