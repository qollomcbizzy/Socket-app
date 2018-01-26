var express = require('express')
var app = express();
var server =require('http').createServer(app);
var io = require('socket.io')(server);


app.use(express.static(__dirname + '/node_modules'));
app.get('/',function(req,res,next){
  res.sendFile(__dirname + '/index.html');
  //'res ' object represents the http response taht the express  app use
  // 'sendFile' sends a file at a specific path specified
});

server.listen(4200)
//'server.listen' opens the port and listen for requests
