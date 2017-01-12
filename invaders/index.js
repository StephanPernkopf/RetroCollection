// system Variables with fallback values
var WIDTH = 500; 
var HEIGHT = 500;

// game Variables
var TICKRATE = 30;
var PAUSE = false;

window.onload = function() {
	canvas = document.getElementById("spaceInvaders");
	sc = document.getElementById("spaceInvadersScore");
	ctx = canvas.getContext("2d");

	WIDTH = Math.floor(canvas.width);
	HEIGHT = Math.floor(canvas.height);

	window.onkeydown = gameController;
	init();
	setInterval(loop, TICKRATE);
}

function init() {
	
}

function loop() {
	if (!PAUSE) {
		clearScreen(); // TODO implement clearScreen
	}
}

function gameController(e) {
	var key = e.keyCode ? e.keyCode : e.which;
	if (key == 32) {//Space
		PAUSE = !PAUSE;
	} else if (key == DIRECTION_UP) {
		
	} else if (key == DIRECTION_DOWN) {
		
	} else if (key == DIRECTION_LEFT) {
		
	} else if (key == DIRECTION_RIGHT) {
		
	}
}

