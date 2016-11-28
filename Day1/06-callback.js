var fileReader = function(callback){
	console.log("Reading file");
	callback();
}

var fileWriter = function(){
	console.log("Writing file")
}



fileReader(fileWriter);
