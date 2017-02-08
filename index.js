var WIDTH = 0;
var HEIGHT = 0;
var GRID_SIZE = 128;

var CTX;
var GAME;
var MENU;
var SC;
var FPS;

var DRAW_TIME_PREVIOUS = 0;
var DRAW_TIME_LAG = 0;
var UPDATE_INTERVAL = 0;
var LAST_FRAME = 0;
var COUNTER = 0;
var AVG_TIMER;

window.onload = function() {
	var canvas = document.getElementById("playground");
	CTX = canvas.getContext("2d");

	WIDTH = Math.floor(canvas.width);
	HEIGHT = Math.floor(canvas.height);

	GAME = new MainSnake();
	GAME.pause = true;
	MENU = new Menu();

	SC = document.getElementById("score");
	FPS = document.getElementById("fps");
	SC.innerHTML = "SCORE = 0";
	FPS.innerHTML = "FPS = 0";
	window.onkeydown = InputLib.processKeyboardInput;
	// tab loses focus
	document.addEventListener("visibilitychange", test);
	initLoop(30);
}

function test(e) {
	GAME.pause = true;
}

function initLoop(stepsPerSecond) {
	DRAW_TIME_PREVIOUS = performance.now();
	DRAW_TIME_LAG = 0;
	UPDATE_INTERVAL = 1 / stepsPerSecond;
	AVG_TIMER = new avgTimer();
	requestAnimationFrame(loop);
}

function loop() {
	AVG_TIMER.endTick();
	AVG_TIMER.startTick();

	var current = performance.now();
	DRAW_TIME_LAG += Math.min(1, (current - DRAW_TIME_PREVIOUS) / 1000);

	// InputLib.processGamepadInput();

	var safeguard = 0;
	while(DRAW_TIME_LAG >= UPDATE_INTERVAL && safeguard < 8) {

		if (safeguard == 0) {
			if (Math.floor(current / 1000) > COUNTER) {
				FPS.innerHTML = "FPS = " + AVG_TIMER.getFPS();
				COUNTER = Math.floor(current / 1000);
			}
			LAST_FRAME = current;
		}

		GAME.update(SC);
		DRAW_TIME_LAG -= UPDATE_INTERVAL;
		safeguard++;
	}

	GAME.render(CTX);

	if (GAME.pause) {
		MENU.render(CTX);
	}

	DRAW_TIME_PREVIOUS = current;
	requestAnimationFrame(loop);
}

var avgTimer = (function() {
	var previousTick = 0;
	var currentTick = 0;

	avgTimer = function(maxLength) {
		this.avgTimes = [];
		if (maxLength == undefined) {
			this.maxLength = 100;
		} else {
			this.maxLength = maxLength;
		}

		for (var i = 0; i < this.maxLength; i++) {
			this.avgTimes[i] = 1;
		}
	}

	avgTimer.prototype.startTick = function() {
		previousTick = performance.now();
	}

	avgTimer.prototype.endTick = function() {
		currentTick = performance.now();

		this.avgTimes.push(currentTick - previousTick);
		this.avgTimes.shift();
	}

	avgTimer.prototype.getFPS = function() {
		var sum = 0;
		for (var i = 0; i < this.maxLength; i++) {
			sum += this.avgTimes[i];
		}

		return Math.round(1 / (sum / this.avgTimes.length) * 1000);
	}

	return avgTimer;
}());
