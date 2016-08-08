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

Game.prototype.move = function(direction){
  // var storageArray = this.nestedArray();
  var tempArray = this.nestedArray();
  if (direction === 'right') {
    // start with the first row
    console.log(this.nestedArray());
    for (i=0; i<=3; i++) {
      var count = 0;
      while (tempArray[i][3] === 0 && count < 4) {
        tempArray[i][3] = tempArray[i][2];
        tempArray[i][2] = tempArray[i][1];
        tempArray[i][1] = tempArray[i][0];
        tempArray[i][0] = 0;
        count += 1;
      }
      count = 0;
      while (tempArray[i][2] === 0 && count < 3) {
        tempArray[i][2] = tempArray[i][1];
        tempArray[i][1] = tempArray[i][0];
        tempArray[i][0] = 0;
        count += 1;
      }
      if (tempArray[i][1] === 0) {
        tempArray[i][1] = tempArray[i][0];
        tempArray[i][0] = 0;
      }
    console.log(tempArray);
    }
  }
}

function nextChar(c) {
    return String.fromCharCode(c.charCodeAt(0) + 1);
}

// game = new Game();
// console.log(game.nestedArray());
// console.log(game.toHash());

// move logic - start with swipe right
// start with the first row
//  if number on far right side is non-zero, leave in place
// else shift all numbers over one place, put a zero at the far left side and move on to 2nd position


game = new Game();
game.move('right');

