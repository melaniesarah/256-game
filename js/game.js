var Game = function(boardString) {
  if (boardString == null) {
    this.board = randomBoard();
  }
 else {
    if (boardString.length == 31) {
      var board = [];
      boardArray = boardString.split(",");
      boardArray.forEach(function(numString) {
        board.push(parseInt(numString));
      })
      this.board = board;
    }
    else {
      this.board = randomBoard();
    }
  }
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

Game.prototype.newTile = function() {
  var values = [2,4];
  var randLocation = Math.floor(Math.random() * 16);

  while (randLocation != 0) {
    randLocation = Math.floor(Math.random() * 16);
  }

  this.board[randLocation] = values[Math.floor(Math.random() * 2)];
  return this.board;
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



