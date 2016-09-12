var Game = function(boardString) {
  var board;
  if (boardString == null) {
    board = randomBoard();
  }
 else {
    if (boardString.length == 31) {
      boardArray = boardString.split(",");
      boardArray.forEach(function(numString) {
        board.push(parseInt(numString));
      })
    }
    else {
      board = randomBoard();
    }
  }
  return board
 }

 var randomBoard = function() {
  var board = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  var values = [2,4];
  var randLocation1 = Math.floor(Math.random() * 16);
  var randLocation2 = Math.floor(Math.random() * 16);

  while (randLocation1 == randLocation2) {
    randLocation2 = Math.floor(Math.random() * 16);
  }

    board[randLocation1] = values[Math.floor(Math.random() * 2)];
    board[randLocation2] = values[Math.floor(Math.random() * 2)];

    return board
 }




Game.prototype.newTile = function(board) {
  // board as an array of arrays
  // pick a random spot where there is a 0
  // pick a 2 or 4 randomly
  // place number in random spot
  // return board
}

Game.prototype.swipeLeft = function(board) {

}

Game.prototype.swipeRight = function(board) {

}

Game.prototype.swipeUp = function(board) {

}

Game.prototype.swipeDown = function(board) {

}

Game.prototype.transpose = function(board) {

}

Game.prototype.reverse = function(board) {

}


board = "0,0,0,0,2,0,0,0,0,0,4,0,0,0,0,0"
game = new Game(board)


