var Game = function(boardString) {
  // if board string provided,

  if (boardString.length == 16) {
    // then use board string
  }
  else {
    // generate random board
  }
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


