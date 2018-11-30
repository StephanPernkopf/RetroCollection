let WIDTH = 0;
let HEIGHT = 0;
let GRID_SIZE = 128;

let CTX;
let GAME;
let MENU;
let SC;
let FPS;
let rAF = window.mozRequestAnimationFrame ||
	window.webkitRequestAnimationFrame ||
	window.requestAnimationFrame;

let DRAW_TIME_PREVIOUS = 0;
let DRAW_TIME_LAG = 0;
let UPDATE_INTERVAL = 0;
let LAST_FRAME = 0;
let COUNTER = 0;
let AVG_TIMER;

window.onload = function() {
	let canvas = document.getElementById("playground");
	CTX = canvas.getContext("2d");

	WIDTH = Math.floor(canvas.width);
	HEIGHT = Math.floor(canvas.height);


	MENU = new Menu();

	SC = document.getElementById("score");
	FPS = document.getElementById("fps");
	SC.innerHTML = "SCORE = 0";
	FPS.innerHTML = "FPS = 0";
	InputLib.initInputLib();
	window.onkeydown = InputLib.processKeyboardInput;
	window.onkeyup = InputLib.processKeyUp;

	// tab loses focus
	document.addEventListener("visibilitychange", onchange);
	initLoop(120);
}

function onchange(e) {
	GAME.pause = true;
}

function initLoop(stepsPerSecond) {
	DRAW_TIME_PREVIOUS = performance.now();
	DRAW_TIME_LAG = 0;
	UPDATE_INTERVAL = 1 / stepsPerSecond;
	AVG_TIMER = new avgTimer();
	rAF(loop);
}

function loop() {
	AVG_TIMER.endTick();
	AVG_TIMER.startTick();

	let current = performance.now();
	DRAW_TIME_LAG += Math.min(1, (current - DRAW_TIME_PREVIOUS) / 1000);

	InputLib.processGamepadInput();

	let safeguard = 0;
	while (DRAW_TIME_LAG >= UPDATE_INTERVAL && safeguard < 8) {

		if (safeguard == 0) {
			if (Math.floor(current / 1000) > COUNTER) {
				FPS.innerHTML = "FPS = " + AVG_TIMER.getFPS();
				COUNTER = Math.floor(current / 1000);
			}
			LAST_FRAME = current;
		}

		if (!GAME.pause) {
			GAME.update(SC);
		}
		DRAW_TIME_LAG -= UPDATE_INTERVAL;
		safeguard++;
	}

	GAME.render(CTX);

	if (GAME.pause) {
		MENU.render(CTX);
	}

	DRAW_TIME_PREVIOUS = current;
	rAF(loop);
}

var avgTimer = (function() {
	let previousTick = 0;
	let currentTick = 0;

	avgTimer = function(maxLength) {
		this.avgTimes = [];
		if (maxLength == undefined) {
			this.maxLength = 100;
		} else {
			this.maxLength = maxLength;
		}

		for (let i = 0; i < this.maxLength; i++) {
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
		let sum = 0;
		for (let i = 0; i < this.maxLength; i++) {
			sum += this.avgTimes[i];
		}

		return Math.round(1 / (sum / this.avgTimes.length) * 1000);
	}

	return avgTimer;
}());
