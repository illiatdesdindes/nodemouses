var http = require('http'),  
    io = require('socket.io'),// for npm, otherwise use require('./path/to/socket.io') 
    fs = require('fs')

server = http.createServer(function(req, res){ 
 // your normal server code 
});
server.listen(8080);
// socket.io 


var socket = io.listen(server); 
socket.on('connection', function(client){ 
  
  client.on('message', function(d){
      d = 'coord:' + client.sessionId + ':' + d
      client.broadcast(d)
    }) 
  client.on('disconnect', function(){
      client.broadcast('disconnect:' + client.sessionId)
    }) 
}); 
