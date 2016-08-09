$(document).ready(function() {
	game = new Game()
	board = game.generateBoard()
});




function startBoard(){
	var elements = document.getElementsByClassName('box');
	for(i=0;i<elements.length; i++){
		$(elements[i]).css('background-color', 'white')
		$(elements[i]).html(board[i])
	}


}



function updateBoard(){
	var elements = document.getElementsByClassName('box');
	
	for(i=0;i<elements.length; i++){
		
		$(elements[i]).css('background-color', 'white')
		// console.log($(elements[i]).html())
		$(elements[i]).html(a[i])
		// console.log(a[i])

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
			// game.shiftRight()
			updateBoard()
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