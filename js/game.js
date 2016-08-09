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


Game.prototype.shiftRight = function(board){
  //only works on one array
  new_arr = []
  for(i=board.length - 1;i >= 0 ;i--){
    if( board[i - 1] == board[i] ){
       new_arr.unshift(board[i - 1] + board[i])
       board[i - 1] = 0 
    }else{
       if(board[i] != 0){
         new_arr.unshift(board[i])
       }
    }
  }
  if(new_arr[3] == 0 ){
    new_arr.pop()
    new_arr.unshift(0)
  }
  switch(new_arr.length){
    case 3:
      new_arr.unshift(0)
      break;
    case 2:
      new_arr.unshift(0)
      new_arr.unshift(0)
      break;
    case 1:
      new_arr.unshift(0)
      new_arr.unshift(0)
      new_arr.unshift(0)
      break;
    default:
     break;
  }
  return new_arr
}

Game.prototype.transpose = function(board){
  return board[0].map(function (_, i) { return board.map(function (r) { return r[i]; }); });
}

function nextChar(c) {
    return String.fromCharCode(c.charCodeAt(0) + 1);
}


