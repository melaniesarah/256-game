$(document).ready(function() {

});

function keyDown(e) {
	switch(e.keyCode){
		case 97:
			console.log("A pressed")
			break;
		case 119:
			console.log("W pressed")
			break;
		case 100:
			console.log("D pressed")
			break;
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