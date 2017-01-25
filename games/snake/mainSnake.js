var DIRECTION_UP = 38;
var DIRECTION_DOWN = 40;
var DIRECTION_LEFT = 37;
var DIRECTION_RIGHT = 39;

var GRID_SIZE = 10;
var SPEED = 50;

// window.onload = function () {
// 	canvas = document.getElementById("snake");
// 	sc = document.getElementById("score");
// 	CTX = canvas.getContext("2d");

// 	WIDTH = Math.floor(canvas.width);
// 	HEIGHT = Math.floor(canvas.height);	

// 	window.onkeydown = gameController;
// 	init();
// 	setInterval(loop, SPEED);
// }

class MainSnake {
	constructor() {
		this.snake = new Snake;
		this.fruits = [];
		this.fruits.push(new Fruit);
		this.pause = false;
		this.score = 0;
	}

	addFruit() {
		var fruit = new Fruit;
		while(fruit.intersects(this.snake.bodyParts)) {
			fruit = new Fruit;
		}
	
		this.fruits.push(fruit);
	}

	loop() {
		if (!this.pause) { // TODO: snakeTick
			this.snake.move();
			
			for (var i = this.fruits.length - 1; i >= 0; i--) {
				if (this.snake.intersects(this.fruits[i].location)) {
					this.snake.grow();
					this.fruits.splice(i, 1);
					this.increaseScore();				
				}
			}

			if (random(1) < 1 / this.fruits.length / 50) {
				this.addFruit();
			}

			if (this.snake.collided()) {
				// TODO: GAME OVER
				console.log("Game Over");
				this.pause = true;
			}
		}

		clearScreen();
		this.snake.draw();

		for (var i = 0; i < this.fruits.length; i++) {
			this.fruits[i].draw();
		}


	}

	increaseScore(inc) {
		if (inc) {
			this.score += inc;
		} else {
			this.score += 5;
		}
		SC.innerHTML = "SCORE = " + this.score; // TODO: global SCORE-Variable
	}
	
	gameController(e) {
		var key = e.keyCode ? e.keyCode : e.which;
		if (key == 32) {//Space
			this.pause = !this.pause;
		} else if (key == DIRECTION_UP) {
			this.snake.changeDirection("UP");
		} else if (key == DIRECTION_DOWN) {
			this.snake.changeDirection("DOWN");
		} else if (key == DIRECTION_LEFT) {
			this.snake.changeDirection("LEFT");
		} else if (key == DIRECTION_RIGHT) {
			this.snake.changeDirection("RIGHT");
		}
	}


}


function clearScreen() {
	CTX.fillStyle = "white";
	CTX.fillRect(0, 0, WIDTH, HEIGHT);
}


function randomColorString() {
	var r = Math.floor(random(255));
	var g = Math.floor(random(255));
	var b = Math.floor(random(255));

	return "rgb(" + r + "," + g + "," + b + ")";
}