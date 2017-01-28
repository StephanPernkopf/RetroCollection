var DIRECTION_UP = 38;
var DIRECTION_DOWN = 40;
var DIRECTION_LEFT = 37;
var DIRECTION_RIGHT = 39;

var GRID_SIZE = 12;

var MainSnake = (function() {
	var snake;
	var fruits = [];
	var score = 0;
	
	MainSnake = function() {
		this.pause = false;
		snake = new Snake;
		fruits.push(new Fruit);
		score = 0;
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

	MainSnake.prototype.gameController = function(e) {
		var key = e.keyCode ? e.keyCode : e.which;
		if (key == 32) {//Space
			this.pause = !this.pause;
		} else if (key == DIRECTION_UP) {
			snake.changeDirection("UP");
		} else if (key == DIRECTION_DOWN) {
			snake.changeDirection("DOWN");
		} else if (key == DIRECTION_LEFT) {
			snake.changeDirection("LEFT");
		} else if (key == DIRECTION_RIGHT) {
			snake.changeDirection("RIGHT");
		}
	}

	MainSnake.prototype.update = function(score) {
		if (!this.pause && ((FRAME_COUNT * 9) % 2 === 0)) { // TODO: improve snakeTick
			snake.move();
			
			for (var i = fruits.length - 1; i >= 0; i--) {
				if (snake.intersects(fruits[i].location)) {
					snake.grow();
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
			}
		}
	}

	MainSnake.prototype.draw = function(context) {
		VisualLib.clearScreen(context);
		snake.draw(context);

		for (var i = 0; i < fruits.length; i++) {
			fruits[i].draw(context);
		}
	}

	return MainSnake;
}());
