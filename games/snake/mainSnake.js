var MainSnake = (function() {

	let snake;
	let fruits = [];
	let score = 0;
	let gameOver = false;

	let counter = 0;

	MainSnake = function() {
		GRID_SIZE = 12;
		this.pause = false;
		gameOver = false;
		score = 0;
		counter = 0;
		snake = new Snake;
		fruits.splice(0, fruits.length);
		fruits.push(new Fruit);
	}

	function addFruit() {
		let fruit = new Fruit;
		while (fruit.intersects(snake.bodyParts)) {
			fruit = new Fruit;
		}

		fruits.push(fruit);
	}

	function increaseScore(sc) {
		if (sc) {
			score += 5;
			sc.innerHTML = "SCORE = " + score;
		}
	}

	MainSnake.prototype.binaryInput = function(id, btn_code) {
		if (btn_code == "SPACE_KEY" || btn_code == "ENTER_KEY" ||
			btn_code == "A_BUTTON") {
			this.pause = !this.pause;
		} else if (btn_code == "LEFT_ARROW" || btn_code == "A_KEY" || btn_code == "DPAD_LEFT") {
			snake.changeDirection("LEFT");
		} else if (btn_code == "UP_ARROW" || btn_code == "W_KEY" || btn_code == "DPAD_UP") {
			snake.changeDirection("UP");
		} else if (btn_code == "RIGHT_ARROW" || btn_code == "D_KEY" || btn_code == "DPAD_RIGHT") {
			snake.changeDirection("RIGHT");
		} else if (btn_code == "DOWN_ARROW" || btn_code == "S_KEY" || btn_code == "DPAD_DOWN") {
			snake.changeDirection("DOWN");
		}
	}

	MainSnake.prototype.rawInput = function(id, btn_code, value) {
		if (btn_code == "LEFT_STICK_X" && value < 0) {
			snake.changeDirection("LEFT");
		} else if (btn_code == "LEFT_STICK_Y" && value < 0) {
			snake.changeDirection("UP");
		} else if (btn_code == "LEFT_STICK_X" && value > 0) {
			snake.changeDirection("RIGHT");
		} else if (btn_code == "LEFT_STICK_Y" && value > 0) {
			snake.changeDirection("DOWN");
		}
	}

	MainSnake.prototype.update = function(score) {
		if (counter == 4) {
			if (!this.pause && !gameOver) {
				snake.move();

				for (let i = fruits.length - 1; i >= 0; i--) {
					if (snake.intersects(fruits[i].location)) {
						snake.grow(fruits[i].color);
						fruits.splice(i, 1);
						increaseScore.call(this, score);
					}
				}

				if (MathLib.random(1) < 1 / fruits.length / 50) {
					addFruit.call(this);
				}

				if (snake.collided()) {
					this.pause = true;
					gameOver = true;
				}
			}
			counter = 0;
		} else {
			counter++;
		}
	}

	MainSnake.prototype.render = function(context, lag) {
		snake.render(context);

		for (let i = 0; i < fruits.length; i++) {
			fruits[i].render(context);
		}
	}

	MainSnake.prototype.finished = function() {
		return gameOver;
	}

	return MainSnake;
}());
