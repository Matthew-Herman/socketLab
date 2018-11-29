const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
app.use(express.static('public'));
// server code goes here!
// first listen for connection using io.on
// then... within callback, use socket.on, socket.emit, socket.broadcast, etc.
// NOTE THAT WE ARE LISTENING WITH server, NOT app!

let player1Pos = 10;
let player2Pos = 10;

io.on('connect', function(socket) {
  // send initial position to newly connected socket
  socket.emit('initialPosition', {
    "player1Pos": player1Pos+"px",
    "player2Pos": player1Pos+"px"
  });
  
  socket.on('move1', function(m) {
    player1Pos += 5;
    io.sockets.emit('player1Moved', player1Pos);
  })
  
  socket.on('move2', function(m) {
    player2Pos += 5;
    io.sockets.emit('player2Moved', player2Pos);
  })
});



// listen player1Btn click event

// listen player2Btn click event


server.listen(process.env.PORT);


/*
// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/public/index.html');
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
*/