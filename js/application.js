$(document).ready(function() {
  game = new Game()
  console.log(game.board)
});




function startBoard(){
  var elements = document.getElementsByClassName('box') ;
  for(i=0;i<elements.length; i++){
    $(elements[i]).css('background-color', 'white')
    $(elements[i]).append(game.board[i])
  }
}



function updateBoard(board){
  console.log(board)
  var elements = document.getElementsByClassName('box');

  for(i=0;i<elements.length; i++){
    $(elements[i]).css('background-color', 'white')
    // console.log($(elements[i]).html())
    // console.log('break')
    // console.log(board[i])
    $(elements[i]).html('<h1>' + board[i] + '</h1>')
    // console.log('done')

  }


}

function keyDown(e) {
  switch(e.keyCode){
    case 97:
      console.log("A pressed")
      game.swipeLeft();
      updateBoard(game.board);
      game.newTile()
      break;
    case 119:
      console.log("W pressed")
      game.swipeUp();
      updateBoard(game.board);
      game.newTile()
      break;
    case 100:
      console.log("D pressed")
      game.swipeRight();
      updateBoard(game.board);
      game.newTile()
      break;
    case 114:
      console.log("R pressed")
      startBoard();
    case 115:
      console.log("S pressed")
      game.swipeDown();
      updateBoard(game.board);
      game.newTile()
      break;
      default:
      console.log("Please use the 'A', 'W','D', or 'S' on the keyboard")
  }
}

function init(){
  window.addEventListener("keypress", keyDown, false);
}

window.addEventListener('load', init, false);
dateBoard(game.board);
			game.newTile()
			break;
		case 119:
			console.log("W pressed")
			game.swipeUp();
			updateBoard(game.board);
			game.newTile()
			break;
		case 100:
			console.log("D pressed")
			game.swipeRight();
			updateBoard(game.board);
			game.newTile()
=======
			// updateBoard()
			break;
		case 119:
			console.log("W pressed")
			// updateBoard()
			break;
		case 100:
			console.log("D pressed")
			a = game.shiftRight(game.nestedArray(board)[0])
			b = game.shiftRight(game.nestedArray(board)[1])
			newBoard1 = a.concat(b);
			c = game.shiftRight(game.nestedArray(board)[2])
			d = game.shiftRight(game.nestedArray(board)[3])
			newBoard2 = c.concat(d);
			board = newBoard1.concat(newBoard2)
			updateBoard(board)
>>>>>>> master
			break;
		case 114:
			console.log("R pressed")
			startBoard();
		case 115:
			console.log("S pressed")
<<<<<<< HEAD
			game.swipeDown();
			updateBoard(game.board);
			game.newTile()
=======
			// updateBoard()
			break;
		case 114:
			console.log("R pressed")
			startBoard()
>>>>>>> master
			break;
			default:
      console.log("Please use the 'A', 'W','D', or 'S' on the keyboard")
	}
}

function init(){
	window.addEventListener("keypress", keyDown, false);

}

window.addEventListener('load', init, false);
