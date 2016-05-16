var http = require("http");
var url = process.argv[2];
var alldata = "";

http.get(url, function(response){
	
	response.setEncoding("utf8");

	response.on('data', function(data){
		alldata += data;
	})

	response.on('end', function(){
		console.log(alldata.split("").length);
		console.log(alldata);
	})

})
