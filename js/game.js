var Game = function(boardString) {
  var boardString = typeof boardString !== 'undefined' ? boardString : this.generateBoard();
  this.boardHash = this.toHash(boardString);
}

Game.prototype.generateBoard = function() {
  var myArray = [2,4];
  var number;
  var index;
  var BoardArray = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

  for (i=1; i<=2; i++) {
    // sample from myArray (can only populate the board with a 2 or 4)
    number = myArray[Math.floor(Math.random() * 2)];
    // sample from board array to put location of number
    index = Math.floor(Math.random() * 16);
    BoardArray[index] = number;
   }
   return BoardArray;
 }

 Game.prototype.toHash = function(boardArray) {
   var BoardHash = {};
   BoardHash['a'] = boardArray[i];
   var c = 'a'
    for (i=1; i<=15; i++) {
      c = nextChar(c);
      BoardHash[c] = boardArray[i];
   }
   return BoardHash;
}

function nextChar(c) {
    return String.fromCharCode(c.charCodeAt(0) + 1);
}
