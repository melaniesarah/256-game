var Game = function(boardString) {
  this.boardMatrix = [];
  this.tempBoard = [];
  if (boardString == null) {
    this.board = randomBoard();
  }
 else {
    boardArray = boardString.split(",");
    if (boardArray.length == 16) {
      var board = [];
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
  // console.log(randLocation);

  while (this.board[randLocation] != 0) {
    randLocation = Math.floor(Math.random() * 16);
  }
  this.board[randLocation] = values[Math.floor(Math.random() * 2)];

  return this.board;
}

Game.prototype.boardToMatrix = function() {
  // this.tempBoard = this.board;
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
  // this.newTile();
}

Game.prototype.swipeRight = function() {
  this.tempBoard = this.board;
  this.boardToMatrix();

  this.swipe();

  this.matrixToBoard();
  // this.newTile();
}


Game.prototype.swipeUp = function() {
  this.tempBoard = this.board;
  this.boardToMatrix();
  this.transpose();
  this.reverseRows();
  console.log(this.boardMatrix);

  this.swipe();
  console.log(this.boardMatrix);

  this.reverseRows();
  this.transpose();
  this.matrixToBoard();
  // this.newTile();
}

Game.prototype.swipeDown = function() {
  this.tempBoard = this.board;
  this.boardToMatrix();
  this.transpose();

  this.swipe();

  this.transpose();
  this.matrixToBoard();
  // this.newTile();
}

Game.prototype.swipe = function() {
  original_board = this.boardMatrix;
  var newBoard = []

   original_board.forEach(function(row, i){
    var newRow = row;
    for (k = 1; k < 5; k++) {
      if (newRow[4-k] == 0) {
        var count = 1
        while (newRow[4-k] == 0 && count < 4) {
          newRow.splice((4-k),1);
          newRow.splice(0,0,0);
          count++;
        }
      }
    }

    if (newRow[3] == newRow[2]) {
      newRow[3] = 2 * newRow[2];
      newRow.splice(2,1);
      newRow.splice(0,0,0);

      if (newRow[2] == newRow[1]) {
        newRow[2] = 2 * newRow[1];
        newRow.splice(1,1);
        newRow.splice(0,0,0);

      }
    }
    else if (newRow[2] == newRow[1]) {
      newRow[2] = 2 * newRow[1];
      newRow.splice(1,1);
      newRow.splice(0,0,0);
    }
    else if (newRow[1] == newRow[0]) {
      newRow[1] = 2 * newRow[0];
      newRow[0] = 0;
    }
    newBoard.push(newRow);

   })

  this.boardMatrix = newBoard
}

function removeElement(arrayName,arrayElement)
 {
  for(var i=0; i<arrayName.length;i++ ) {
    if(arrayName[i]===arrayElement) {
      arrayName.splice(i,1);
    }
  }
  return arrayName
}

Game.prototype.transpose = function() {
  var array = this.boardMatrix;
  this.boardMatrix = array[0].map(function(col, i) {
    return array.map(function(row) {
        return row[i]
    })
  });
}
