var strftime = require('strftime');
var net = require('net')
var port = process.argv[2];

var server = net.createServer(function (socket) {
  // socket handling logic
  socket.write(strftime('%F %R'));
  socket.write("\n");
  socket.end();
})
server.listen(port);
