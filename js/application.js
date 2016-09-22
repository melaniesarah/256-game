$(document).ready(function() {
  game = new Game()
  startBoard();
});

function startBoard(){
  var elements = document.getElementsByClassName('box') ;
  for(i=0;i<elements.length; i++){
       if(game.board[i] == 0){
          $(elements[i]).css('background-color', 'tan')  
          $(elements[i]).append('<h1 style="color: tan;">' + game.board[i]+ '</h1>')
       }else if(game.board[i] == 2){
          $(elements[i]).css('background-color', 'green')
          $(elements[i]).append('<h1 style="color: white;">' + game.board[i]+ '</h1>')
       }else{
          $(elements[i]).css('background-color', 'blue')
          $(elements[i]).append('<h1 style="color: white;">' + game.board[i]+ '</h1>')
       }
  }
}



function updateBoard(board){
  var elements = document.getElementsByClassName('box');

  for(i=0;i<elements.length; i++){
    
     if(game.board[i] == 0){
          $(elements[i]).css('background-color', 'tan')  
          $(elements[i]).html('<h1 style="color: tan;">' + board[i] + '</h1>')
       }else if(game.board[i] == 2){
          $(elements[i]).css('background-color', 'green')
          $(elements[i]).html('<h1 style="color: white;">' + board[i] + '</h1>')
       }else if(game.board[i] == 4){
          $(elements[i]).css('background-color', 'blue')
          $(elements[i]).html('<h1 style="color: white;">' + board[i] + '</h1>')
       }else if(game.board[i] == 8){
          $(elements[i]).css('background-color', 'grey')
          $(elements[i]).html('<h1 style="color: white;">' + board[i] + '</h1>')
       }else if(game.board[i] == 16){
          $(elements[i]).css('background-color', 'red')
          $(elements[i]).html('<h1 style="color: white;">' + board[i] + '</h1>')
       }else if(game.board[i] == 32){
          $(elements[i]).css('background-color', 'purple')
          $(elements[i]).html('<h1 style="color: white;">' + board[i] + '</h1>')
       }else if(game.board[i] == 64){
          $(elements[i]).css('background-color', 'orange')
          $(elements[i]).html('<h1 style="color: white;">' + board[i] + '</h1>')
       }else if(game.board[i] == 128){
          $(elements[i]).css('background-color', 'pink')
          $(elements[i]).html('<h1 style="color: white;">' + board[i] + '</h1>')
       }else if(game.board[i] == 256){
          $(elements[i]).css('background-color', 'yellow')
          $(elements[i]).html('<h1 style="color: black;">' + board[i] + '</h1>')
       }else{
        $(elements[i]).css('background-color', 'cyan')
       }
    }
}

function keyDown(e) {
  switch(e.keyCode){
    case 97:
      // console.log("A pressed")
      game.swipeLeft();
      updateBoard(game.board);
      game.newTile()
      score = game.userScore()
      $('#Score').html(score)

      break;
    case 119:
      // console.log("W pressed")
      game.swipeUp();
      updateBoard(game.board);
      game.newTile()
      score = game.userScore()
      $('#Score').html(score)
      break;
    case 100:
      // console.log("D pressed")
      game.swipeRight();
      updateBoard(game.board);
      game.newTile()
      score = game.userScore()
      $('#Score').html(score)
      break;
    case 115:
      // console.log("S pressed")
      game.swipeDown();
      updateBoard(game.board);
      game.newTile()
      score = game.userScore()
      $('#Score').html(score)
      break;
    default:
      console.log("Please use the 'A', 'W','D', or 'S' on the keyboard")
  }
}

function init(){
  window.addEventListener("keypress", keyDown, false);
}

window.addEventListener('load', init, false);