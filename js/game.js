var Game = function(boardString) {
  var boardArray;
  if (typeof boardString !== 'undefined') {
    boardArray = boardString.split('');
  } else {
    boardArray = this.generateBoard();
  }
  this.boardArray = boardArray;
  this.boardHash = this.toHash(boardArray);
}

Game.prototype.generateBoard = function() {
  var myArray = [2,4];
  var number;
  var index;
  var boardArray = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

  for (i=1; i<=2; i++) {
    // sample from myArray (can only populate the board with a 2 or 4)
    number = myArray[Math.floor(Math.random() * 2)];
    // sample from board array to put location of number
    index = Math.floor(Math.random() * 16);
    boardArray[index] = number;
   }
   return boardArray;
 }

 Game.prototype.toHash = function(boardArray) {
   var boardHash = {};
   boardHash['a'] = boardArray[0];
   var c = 'a'
    for (i=1; i<=15; i++) {
      c = nextChar(c);
      boardHash[c] = boardArray[i];
   }
   return boardHash;
}

Game.prototype.move = function(direction){

}

function nextChar(c) {
    return String.fromCharCode(c.charCodeAt(0) + 1);
}


