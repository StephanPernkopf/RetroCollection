var MainInvaders = (function() {

	var gameOver = false;
	var player;
	var enemies = [];
	var bullets = [];
	var bulletSize = 8;
	var bulletSpeed = 4;

	var score = 0;

	var moveCounter = 0;
	var speedCap = 120;
	var gameProgress = 0;

	MainInvaders = function() {
		this.pause = false;
		player = new Player();
		enemies.splice(0, enemies.length);
		bullets = [];
		gameOver = false;
		score = 0;

		moveCounter = 0;
		speedCap = 120;
		gameProgress = 0;

		for (var i = 1; i <= 5; i++) {
			for (var j = 1; j <= 11; j++) {
				enemies.push(new Alien(j * 60, i * 60));
			}
		}
	}

	MainInvaders.prototype.finished = function() {
		return gameOver;
	}

	MainInvaders.prototype.update = function(scoreParagraph) {
		if (this.pause || gameOver) {
			return;
		}
		checkInputs();
		player.move();

		// don't move enemies as often as the player
		if (moveCounter >= speedCap) {
			moveEnemies(this);
			moveCounter = 0;
			gameProgress++;

			if (gameProgress == 10 && speedCap > 0) {
				speedCap -= speedCap / 8; // this numbers changes gradually movementspeed increase
				gameProgress = 0;
			}
		}
		moveCounter++;

		if (player.bullet != undefined) {
			player.bullet.y -= bulletSpeed;

			if (player.bullet.y < 0) {
				player.bullet = undefined;
				if (InputLib.getKeyPressed("SPACE_KEY") == 1.0 || InputLib.getKeyPressed("A_BUTTON") == 1.0)
					player.shoot();
			}

			for (var i = 0; i < enemies.length; i++) {
				if (enemies[i].intersects(player.bullet, bulletSize / 2)) {
					enemies.splice(i, 1);
					player.bullet = undefined;
					if (InputLib.getKeyPressed("SPACE_KEY") == 1.0 || InputLib.getKeyPressed("A_BUTTON") == 1.0)
						player.shoot();

					score += 5;
					scoreParagraph.innerHTML = "SCORE = " + score;

					if (enemies.length == 0) {
						scoreParagraph.innerHTML = "YOU WON!";
						this.pause = true;
						gameOver = true;
					}
					break;
				}
			}
		}
	}

	function moveEnemies(mainInvaders) {
		var hitEdge = false;
		var hitPlayer = false;

		for (var i = 0; i < enemies.length; i++) {
			enemies[i].move();
			if (enemies[i].location.x + enemies[i].size / 2 > WIDTH || enemies[i].location.x - enemies[i].size / 2 < 0) {
				hitEdge = true;
			}

			if (enemies[i].location.y + enemies[i].size / 2 >= player.location.y - player.size / 2) {
				mainInvaders.pause = true;
				gameOver = true;
			}
		}

		// time to turn
		if (hitEdge) {
			for (var i = 0; i < enemies.length; i++) {
				enemies[i].changeDir();
			}
		}
	}

	function checkInputs() {
		if (player.rawInput) {
			if (player.xMovement != InputLib.getKeyPressed("LEFT_STICK_X")) {
				player.setXMovement(InputLib.getKeyPressed("LEFT_STICK_X"), true);
			}
		} else {
			if (player.xMovement > 0 &&
					(InputLib.getKeyPressed("RIGHT_ARROW") == 0.0)
						&& InputLib.getKeyPressed("D_KEY") == 0.0
						&& InputLib.getKeyPressed("DPAD_RIGHT") == 0.0) {
				player.setXMovement(0);
			} else if(player.xMovement < 0 &&
					(InputLib.getKeyPressed("LEFT_ARROW")) == 0.0
						&& InputLib.getKeyPressed("A_KEY") == 0.0
						&& InputLib.getKeyPressed("DPAD_LEFT") == 0.0) {
				player.setXMovement(0);
			}
		}
	}

	MainInvaders.prototype.binaryInput = function(id, btn_code) {
		if (btn_code == "SPACE_KEY" || btn_code == "A_BUTTON") {
            player.shoot();
        } else if (btn_code == "A_KEY" || btn_code == "LEFT_ARROW" || btn_code == "DPAD_LEFT") {
            player.setXMovement(-1);
        } else if (btn_code == "D_KEY" || btn_code == "RIGHT_ARROW" || btn_code == "DPAD_RIGHT") {
            player.setXMovement(1);
        }
	}

	MainInvaders.prototype.rawInput = function(id, btn_code, value) {
		if (btn_code == "LEFT_STICK_X") {
			player.setXMovement(value, true);
		}
	}

	MainInvaders.prototype.render = function(context) {
		VisualLib.clearScreen(context);
		player.render(context);

		if (player.bullet != undefined) {
			context.fillStyle = "rgb(0, 0, 0)";
			context.fillRect(player.bullet.x - bulletSize / 2, player.bullet.y - bulletSize / 2, bulletSize, bulletSize);
		}

		for (var i = 0; i < enemies.length; i++) {
			enemies[i].render(context);
		}

		for (var i = 0; i < bullets.length; i++) {
			context.fillStyle = "rgb(0, 0, 0)";
			context.fillRect(bullets[i].location.x - bulletSize / 2, bullets[i].location.y - bulletSize / 2, bulletSize, bulletSize);
		}

	}

	return MainInvaders;
}());
