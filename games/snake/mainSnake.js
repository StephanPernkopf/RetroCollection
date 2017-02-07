var MainSnake = (function() {

	var snake;
	var fruits = [];
	var score = 0;
	var gameOver = false;

	MainSnake = function() {
		GRID_SIZE = 12;
		this.pause = false;
		gameOver = false;
		score = 0;
		snake = new Snake;
		fruits.splice(0, fruits.length);
		fruits.push(new Fruit);
	}

	function addFruit() {
		var fruit = new Fruit;
		while(fruit.intersects(snake.bodyParts)) {
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

	MainSnake.prototype.directionalInput = function(id, dx, dy) {
		if (dx == -1 && dy == 0) {
			snake.changeDirection("LEFT");
		} else if (dx == 0 && dy == 1) {
			snake.changeDirection("UP");
		} else if (dx == 1 && dy == 0) {
			snake.changeDirection("RIGHT");
		} else if (dx == 0 && dy == -1) {
			snake.changeDirection("DOWN");
		}
	}

	MainSnake.prototype.binaryInput = function(id, btn_code) {
		if (btn_code == "SPACE_KEY") {
            this.pause = !this.pause;
        } else if (btn_code == "A_KEY") {
            snake.changeDirection("LEFT");
        } else if (btn_code == "W_KEY") {
            snake.changeDirection("UP");
        } else if (btn_code == "D_KEY") {
            snake.changeDirection("RIGHT");
        } else if (btn_code == "S_KEY") {
            snake.changeDirection("DOWN");
        }
	}

	MainSnake.prototype.rawInput = function(id, btn_code, value) {

	}

	MainSnake.prototype.update = function(score) {
		if (!this.pause && !gameOver) {
			snake.move();

			for (var i = fruits.length - 1; i >= 0; i--) {
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
				// TODO: GAME OVER
				console.log("Game Over");
				this.pause = true;
				gameOver = true;
			}
		}
	}

	MainSnake.prototype.render = function(context, lag) {
		VisualLib.clearScreen(context);
		snake.render(context);

		for (var i = 0; i < fruits.length; i++) {
			fruits[i].render(context);
		}
	}

	MainSnake.prototype.finished = function() {
		return gameOver;
	}

	return MainSnake;
}());
