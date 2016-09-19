$(document).ready(function() {
	game = new Game()
	console.log(game.board)
});




function startBoard(){
	var elements = document.getElementsByClassName('box')	;
	for(i=0;i<elements.length; i++){
		$(elements[i]).css('background-color', 'white')
		$(elements[i]).append(game.board[i])
	}
}



function updateBoard(board){
	console.log(board)
	var elements = document.getElementsByClassName('box');

	for(i=0;i<elements.length; i++){
		console.log(i)
		console.log(elements[i])
		$(elements[i]).css('background-color', 'white')
		// console.log($(elements[i]).html())
		console.log('break')
		console.log(board[i])
		$(elements[i]).html(board[i])
		console.log('done')

	}


}

function keyDown(e) {
	switch(e.keyCode){
		case 97:
			console.log("A pressed")
			game.swipeLeft();
			game.newTile();
			updateBoard(game.board);
			game.
>>>>>>> 451f9401d0ed236b512ba92201c8305c1d39f6e8
			break;
		case 119:
			console.log("W pressed")
			break;
		case 100:
			console.log("D pressed")
			game.swipeRight();
			break;
		case 114:
			console.log("R pressed")
			startBoard();
		case 115:
			console.log("S pressed")
			break;
		default:
       		console.log("Please use the 'A', 'W','D', or 'S' on the keyboard")
	}
}

function init(){
	window.addEventListener("keypress", keyDown, false);
}

window.addEventListener('load', init, false);
