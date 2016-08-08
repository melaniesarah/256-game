var Game = function(boardString) {
  var boardArray;
  if (typeof boardString !== 'undefined') {
    boardArray = boardString.split('');
  } else {
    boardArray = this.generateBoard();
  }
  this.boardArray = boardArray;
  this.boardHash = this.toHash();
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

 Game.prototype.nestedArray = function() {
  var nestedArray = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
  for (i=0; i<=3; i++) {
    for (j=0; j<=3; j++) {
      nestedArray[i][j] = this.boardArray[i*4+j];
    }
   }
  return nestedArray;
 }

 Game.prototype.toHash = function() {
   var boardHash = {};
   boardHash['a'] = this.boardArray[0];
   var c = 'a'
    for (i=1; i<=15; i++) {
      c = nextChar(c);
      boardHash[c] = this.boardArray[i];
   }
   return boardHash;
}

function nextChar(c) {
    return String.fromCharCode(c.charCodeAt(0) + 1);
}

game = new Game();
console.log(game.nestedArray());
console.log(game.toHash());






