var express = require('express');
var app = express();
var server = require('http').createServer(app);
// var js = require('./gameJs.js');

server.listen('3000');

app.get ('/', function(req, res ){
  req.sendFile(__dirname + '/gameJs.js');
  res.sendFile(__dirname + '/v2.html');
});