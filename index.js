var WIDTH = 0;
var HEIGHT = 0;

var CTX;
var GAME;
var SC;

var FPS_INTERVAL = 0;
var LAST_DRAW_TIME = 0;

var DELTA;
var startTime;
var frameCount = 0;

window.onload = function() {
	var canvas = document.getElementById("playground");
	SC = document.getElementById("score");
	CTX = canvas.getContext("2d");

	WIDTH = Math.floor(canvas.width);
	HEIGHT = Math.floor(canvas.height); 

	GAME = new MainSnake();
	// var menu = new Menu();

	window.onkeydown = inputHandler;

	initLoop(120);
}

function initLoop(fps) {
	FPS_INTERVAL = 1000 / fps;
	LAST_DRAW_TIME = performance.now();
	startTime = LAST_DRAW_TIME;
	loop();
}

function loop() {
	var now = performance.now();
	var elapsed = now - LAST_DRAW_TIME;
	
	if (elapsed > FPS_INTERVAL) {
		DELTA = LAST_DRAW_TIME;
		LAST_DRAW_TIME = now - (elapsed % FPS_INTERVAL);
		DELTA = (DELTA - LAST_DRAW_TIME) * 30;
		
		
		var sinceStart = now - startTime;
		var currentFps = Math.round(1000 / (sinceStart / ++frameCount) * 100) / 100;
		// SC.innerHTML = currentFps;
		console.log(currentFps);
		GAME.loop();

		// if (menu.visible) {
		// 	menu.render();
		// }
	}
	requestAnimationFrame(loop);	
}

function inputHandler(e) {
	var key = e.keyCode ? e.which : e.keyCode;
	if (key == 32) {

	} else {
		GAME.gameController(e);
	}
}