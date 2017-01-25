var DIRECTION_UP = 38;
var DIRECTION_DOWN = 40;
var DIRECTION_LEFT = 37;
var DIRECTION_RIGHT = 39;

var GRID_SIZE = 10;
var HEIGHT = 100;
var WIDTH = 100;
var SPEED = 50;

var PAUSE = false;
var FRUITS = [];
var SNAKE;
var SCORE = 0;
var sc;

window.onload = function () {
	canvas = document.getElementById("snake");
	sc = document.getElementById("score");
	ctx = canvas.getContext("2d");

	WIDTH = Math.floor(canvas.width);
	HEIGHT = Math.floor(canvas.height);	

	window.onkeydown = gameController;
	init();
	setInterval(loop, SPEED);
}

function init() {
	SNAKE = new Snake;
	FRUITS.push(new Fruit)
	console.log(randomColorString());
}

function loop() {
	if (!PAUSE) {
		clearScreen();
		SNAKE.move();
		SNAKE.draw();

		for (var i = 0; i < FRUITS.length; i++) {
			FRUITS[i].draw();
		}

		for (var i = FRUITS.length - 1; i >= 0; i--) {
			if (SNAKE.intersects(FRUITS[i].location)) {
				SNAKE.grow();
				FRUITS.splice(i, 1);
				increaseScore();				
			}
		}

		if (random(1) < 1 / FRUITS.length / 50) {
			addFruit();
		}

		if (SNAKE.collided()) {
			// GAME OVER
			console.log("Game Over");
			PAUSE = true;
		}
	}
}

function increaseScore(inc) {
	if (inc) {
		SCORE += inc;
	} else {
		SCORE += 5;
	}
	sc.innerHTML = "SCORE = " + SCORE;
}

function addFruit() {
	var fruit = new Fruit;
	while(fruit.intersects(SNAKE.bodyParts)) {
		fruit = new Fruit;
	}
	
	FRUITS.push(fruit);
}

function clearScreen() {
	ctx.fillStyle = "white";
	ctx.fillRect(0, 0, WIDTH, HEIGHT);
}

function gameController(e) {
	var key = e.keyCode ? e.keyCode : e.which;
	if (key == 32) {//Space
		PAUSE = !PAUSE;
	} else if (key == DIRECTION_UP) {
		SNAKE.changeDirection("UP");
	} else if (key == DIRECTION_DOWN) {
		SNAKE.changeDirection("DOWN");
	} else if (key == DIRECTION_LEFT) {
		SNAKE.changeDirection("LEFT");
	} else if (key == DIRECTION_RIGHT) {
		SNAKE.changeDirection("RIGHT");
	}
}

function randomColorString() {
	var r = Math.floor(random(255));
	var g = Math.floor(random(255));
	var b = Math.floor(random(255));

	return "rgb(" + r + "," + g + "," + b + ")";
}