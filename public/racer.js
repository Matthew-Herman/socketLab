// client-side js
// run by the browser each time your view template is loaded

const socket = io();

function main() {
  const player1Btn = document.querySelector('.player1Btn');
  const player2Btn = document.querySelector('.player2Btn');
  
  const player1 = document.querySelector('.player1');
  const player2 = document.querySelector('.player2');
  
  player1Btn.addEventListener('click', function() {
    socket.emit('move1', "");
  });
  player2Btn.addEventListener('click', function() {
    socket.emit('move2', "");
  });
  
  socket.on('initialPosition', function(positions) {
    player1.style.left = positions["player1Pos"];
    player2.style.left = positions["player2Pos"];
    
    console.log(positions["player1Pos"]);
    console.log(positions["player1Pos"]);
  });
  
  socket.on('newPlayerConnected', function(message) {
    console.log(message);
  });
  
  socket.on('player1Moved', function(position) {
    player1.style.left = position + 'px';
    console.log(position);
  });
  
  socket.on('player2Moved', function(position) {
    player2.style.left = position + 'px';
    console.log(position);
  });
}



document.addEventListener('DOMContentLoaded', function() {
  main();
});


                                  