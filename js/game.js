var Game = function(boardString) {
  this.boardMatrix = [];
  this.tempBoard = [];
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

Game.prototype.boardToMatrix = function() {
  this.boardMatrix = [];
  for (i=0; i<4; i++) {
    this.boardMatrix.push(this.tempBoard.slice((i*4), ((i+1)*4)));
  }
}


Game.prototype.matrixToBoard = function() {
  this.board = [].concat.apply([], this.boardMatrix )

}

Game.prototype.reverseRows = function() {
  var tempMatrix = [];
  this.boardMatrix.forEach(function(row) {
    tempMatrix.push(row.reverse())
  })
  this.boardMatrix = tempMatrix
}


Game.prototype.swipeLeft = function() {
  this.tempBoard = this.board;
  this.boardToMatrix();
  this.reverseRows();

  this.swipe();

  this.reverseRows();
  this.matrixToBoard();
}

Game.prototype.swipeRight = function() {
  this.tempBoard = this.board;
  this.boardToMatrix();
  original_board = this.boardMatrix;

   original_board.forEach(function(row, i){
      row.forEach(function(col, y){
        if(row[y] == row[y + 1]){
          row[y] = col + col
          row[y + 1] = 0
        }
      })
   })
  newBoard = []
  original_board.forEach(function(row, i){
    arr = []
    row.forEach(function(col, y){
        if(col != 0){
          arr.push(col)
        
        }else{
          arr.unshift(0)
        }
        
        if(arr.length == 4){
          newBoard.push(arr)
        }
    })
  })
  this.board = newBoard
  return this.board
}

Game.prototype.swipeUp = function() {
  this.tempBoard = this.board;
  this.boardToMatrix();
  this.transpose();
  this.reverseRows();

  this.swipe();

  this.reverseRows();
  this.transpose();
  this.matrixToBoard();
}

Game.prototype.swipeDown = function() {
  this.tempBoard = this.board;
  this.boardToMatrix();
  this.transpose();

  this.swipe();

  this.transpose();
  this.matrixToBoard();
}

Game.prototype.transpose = function() {
  var array = this.boardMatrix;
  this.boardMatrix = array[0].map(function(col, i) {
    return array.map(function(row) {
        return row[i]
    })
  });
}