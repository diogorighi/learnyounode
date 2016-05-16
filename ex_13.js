var http = require("http");
var url = require("url");
var port = process.argv[2];

var server = http.createServer(function(req, res){
	var method = req.method.toUpperCase();
	var parsedUrl = url.parse(req.url, true);
	var urlpath = parsedUrl.pathname;
	var isoDate = parsedUrl.query.iso;

	// console.log('parsedUrl: ', parsedUrl);
	// console.log('urlpath: ', urlpath);
	// console.log('isoDate: ', isoDate);

	console.log(isoDate);

	if( method === "GET" && urlpath === "/api/parsetime" && isoDate){
		
		var date = new Date(isoDate);

		res.writeHead(200, { 'Content-Type': 'application/json' });
		res.write(JSON.stringify({
       "hour": date.getHours(),
       "minute": date.getMinutes(),
       "second": date.getSeconds()
     }))
		
		res.end();
	} else if( method === "GET" && urlpath === "/api/unixtime" && isoDate){

		var date = new Date(isoDate);

		res.writeHead(200, { 'Content-Type': 'application/json' });
		res.write(JSON.stringify({
       "unixtime": date.getTime()
     }))
		res.end();
	} else {
		res.writeHead(404);
		res.end();
	}
});

server.listen(port, function(){
	console.log("Listening on port: " + port);
})
