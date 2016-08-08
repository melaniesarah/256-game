

var Game = function(boardString) {
  // generate 2 random numbers of either 4 or 2
  console.log(boardString);
  var boardString = typeof boardString !== 'undefined' ? boardString : this.generateBoard();
  this.board = boardString;
}

Game.prototype.toString = function() {

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

   // convert Board Array to Hash
   var BoardHash = {};
   BoardHash['a'] = BoardArray[i];
   var c = 'a'
    for (i=1; i<=15; i++) {
      c = nextChar(c);
      BoardHash[c] = BoardArray[i];
   }
  return BoardHash;
}

function nextChar(c) {
    return String.fromCharCode(c.charCodeAt(0) + 1);
}



game = new Game();
console.log(game.board);
