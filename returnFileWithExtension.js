var fs = require('fs');
var path = require('path');

module.exports = function(dirname, extension, callback){

	var filteredFiles = [];

	fs.readdir(dirname, function(err, list){
		if(err) {
			return callback(err);
		} else {
			filteredFiles = list.filter(function(value){
				return path.extname(value) === "." + extension;
			})
			callback(null, filteredFiles);
		}
	});
}


