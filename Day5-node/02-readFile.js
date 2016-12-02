var fs = require('fs');

/*var content = fs.readFileSync('temp');

console.log("Start write file data");
console.log(content.toString());
console.log("End write file data");*/


fs.readFile('01-basic.js', function(err, content){
	if(err){
		throw err;
	}
	console.log("file read complete")
	console.log(content.toString())
})

console.log("after readFile function")