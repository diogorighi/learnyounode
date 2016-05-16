var fs = require('fs');
var path = require('path');

var dir = process.argv[2];
var ext = process.argv[3];
var filteredFiles = [];

fs.readdir(dir, function(err, list){
	filteredFiles = list.filter(function(value){
		return path.extname(value) === "." + ext;
	})

	for(var i = 0; i < filteredFiles.length; i++){
		console.log(filteredFiles[i]);
	}

});
