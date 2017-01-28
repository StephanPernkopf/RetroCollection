var WIDTH = 0;
var HEIGHT = 0;

var CTX;
var GAME;
var SC;
var FPS;

var FPS_INTERVAL = 0;
var LAST_DRAW_TIME = 0;

var STARTTIME;
var FRAME_COUNT = 0;

window.onload = function() {
	var canvas = document.getElementById("playground");
	CTX = canvas.getContext("2d");

	SC = document.getElementById("score");
	FPS = document.getElementById("fps");

	SC.innerHTML = "SCORE = 0";
	FPS.innerHTML = "FPS = 0";
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
	STARTTIME = LAST_DRAW_TIME;
	loop();
}

function loop() {
	var now = performance.now();
	var elapsed = now - LAST_DRAW_TIME;
	
	if (elapsed > FPS_INTERVAL) {
		LAST_DRAW_TIME = now - (elapsed % FPS_INTERVAL);
		
		var sinceStart = now - STARTTIME;
		var currentFps = Math.round(1000 / (sinceStart / ++FRAME_COUNT) * 100) / 100;
		FPS.innerHTML = "FPS = " + Math.round(currentFps);
		// console.log(currentFps);
		GAME.update();
		GAME.draw(CTX);

		// if (menu.visible) {
		// 	menu.render();
		// }
	}
	requestAnimationFrame(loop);
}

function inputHandler(e) {
	var key = e.keyCode ? e.which : e.keyCode;
	
	if (key == 27) {
		GAME.pause = !GAME.pause;
	} else {
		GAME.gameController(e);
	}
}