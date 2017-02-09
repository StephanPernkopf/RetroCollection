var MainInvaders = (function() {
	
	var gameOver = false;
	var player;
	var enemies = [];
	var bullets = [];
	var bulletSize = 8;
	var speed = 8;
	
	var score = 0;
	

	MainInvaders = function() {
		this.pause = false;
		player = new Player();
		bullets = [];
		gameOver = false;
		score = 0;

		for (var i = 1; i <= 5; i++) {
			for (var j = 1; j <= 11; j++) {
				enemies.push(new Alien(j * 60, i * 60));
			}
		}
		
	}

	MainInvaders.prototype.finished = function() {
		return gameOver;
	}

	MainInvaders.prototype.update = function(score) {
		if (player.bullet != undefined) {
			player.bullet.y -= speed;

			if (player.bullet.y < 0) {
				player.bullet = undefined;
			}

			for (var i = 0; i < enemies.length; i++) {
				if (enemies[i].intersects(player.bullet)) {
					enemies.splice(i, 1);
					player.bullet = undefined;
					console.log("hit");
					// TODO: increase Score
					break;
				}
			}
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
	
	MainInvaders.prototype.directionalInput = function(id, dx, dy) {

	}

	MainInvaders.prototype.binaryInput = function(id, btn_code) {
		if (btn_code == "SPACE_KEY") {
            player.shoot();
        } else if (btn_code == "A_KEY" || btn_code == "LEFT_KEY") {
            player.move(-speed);
        } else if (btn_code == "W_KEY") {
            
        } else if (btn_code == "D_KEY" || btn_code == "RIGHT_KEY") {
            player.move(speed);
        } else if (btn_code == "S_KEY") {
            
        }
	}

	MainInvaders.prototype.rawInput = function(id, btn_code, value) {

	}

	return MainInvaders;
}());
