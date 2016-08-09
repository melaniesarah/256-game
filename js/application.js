$(document).ready(function() {
	game = new Game()
	console.log(game)
	board = game.generateBoard()
	console.log(board)
	console.log(game.nestedArray(board))
});




function startBoard(){
	var elements = document.getElementsByClassName('box');
	for(i=0;i<elements.length; i++){
		$(elements[i]).css('background-color', 'white')
		$(elements[i]).html("<h1>"+ board[i]+"</h1>")
	}
}



function updateBoard(board){
	var elements = document.getElementsByClassName('box');
	
	for(i=0;i<elements.length; i++){
		
		$(elements[i]).css('background-color', 'white')
		console.log($(elements[i]).html())
		$(elements[i]).html(board[i])
		console.log(board[i])

	}


}
function keyDown(e) {
	switch(e.keyCode){
		case 97:
			console.log("A pressed")
			// updateBoard()
			break;
		case 119:
			console.log("W pressed")
			// updateBoard()
			break;
		case 100:
			console.log("D pressed")
			// board = []
			// board = board.concat(game.shiftRight(game.nestedArray(board)[0]))
			// board = board.concat(game.shiftRight(game.nestedArray(board)[1]))
			// board = board.concat(game.shiftRight(game.nestedArray(board)[2]))
			// board = board.concat(game.shiftRight(game.nestedArray(board)[3]))
			// console.log(board)
			console.log( game.shiftRight(game.nestedArray(board)[0]) );
				

			// updateBoard()
			break;
		case 115:
			console.log("S pressed")
			// updateBoard()
			break;
		case 114:
			console.log("R pressed")
			startBoard()
			break;
		default:
       		console.log("Please use the 'A', 'W','D', or 'S' on the keyboard")
	}	
}

function init(){
	window.addEventListener("keypress", keyDown, false);

}

window.addEventListener('load', init, false);