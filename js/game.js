var Game = function(boardString) {
  var boardArray;
  if (typeof boardString !== 'undefined') {
    boardArray = boardString.split('');
  } else {
    boardArray = this.generateBoard();
  }
  this.array = this.nestedArray(boardArray);
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
   return boardArray; // returns original board as an array
 }


Game.prototype.flatten = function(boardArray){
  flattenBoard = [] 
  for(i=0;i<boardArray.length;i++)
    flattenBoard = flattenBoard.concat(boardArray[i])
  return flattenBoard
 }

Game.prototype.nestedArray = function(linearArray) {
  var newArray = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
  for (i=0; i<=3; i++) {
    for (j=0; j<=3; j++) {
      newArray[i][j] = linearArray[i*4+j];
    }
  }
  return newArray; // returns board as a nested array
}

Game.prototype.shifter = function() {
  var tempArray = this.array;

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
  }
  return tempArray;
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
  if(new_arr[1] == 0 ){
    new_arr.splice(1,1)
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




//OLD CODE!!!!! DONT REMOVE YET!!!s



// Game.prototype.move = function(direction){
//   // transpose array so that the move is shifting always to the right
//   console.log("in the move function at the beginning the shifter creates");
//   tempArray = this.shifter();
//   var sum;
//   for (i=0; i<=3; i++) {
//     if (tempArray[i][3] === 0 || tempArray[i][2] === 0) {
//       // do nothing
//     } else {

//       if (tempArray[i][3] === tempArray[i][2]) {
//         sum = 2 * tempArray[i][3];
//         tempArray[i][3] = sum;
//         tempArray[i][2] = 0;
//         if (tempArray[i][0] === tempArray[i][1]) {
//           sum = 2 * tempArray[i][1];
//           tempArray[i][2] = sum;
//           tempArray[i][1] = 0;
//           tempArray[i][0] = 0;
//         } else {
//           tempArray[i][2] = tempArray[i][1];
//           tempArray[i][1] = 0;
//         }
//       } else if (tempArray[i][1] === tempArray[i][2]) {
//           sum = 2 * tempArray[i][1];
//           tempArray[i][2] = sum;
//           tempArray[i][1] = 0;
//       } else if (tempArray[i][0] === tempArray[i][1]) {
//         sum = 2 * tempArray[i][1];
//         tempArray[i][1] = sum;
//         tempArray[i][0] = 0;
//       }
//     }
//     this.array = tempArray;
//   }
//   // console.log(this.array);

//   this.array[0][0] = 2;
//   console.log(this.array);
// }


// game = new Game('2222040400000000');
// game = new Game();
// console.log(game.move('right'));
// console.log(game.move('right'));
// console.log(game.move('right'));
// console.log(game.move('right'));
// console.log(game.move('right'));
// console.log(game.move('right'));
