var Player = (function(){
	var lives;

	Player = function() {
		lives = 5;
		this.size = 25; // TODO: adjust size

		var x = WIDTH / 2 - this.size;
		var y = HEIGHT - (this.size + 20);
		this.location = new MathLib.Point(x, y);
		this.color = 'rgb(0, 0, 0)';
		this.bullet = undefined;
	}

	Player.prototype.move = function(dx) {
		var newX = this.location.x + dx;

		if (newX - this.size > 0 && newX + this.size < WIDTH) {
			this.location.x = newX;
		}
	}

	Player.prototype.shoot = function() {
		if (this.bullet == undefined) {
			this.bullet = new MathLib.Point(this.location.x, this.location.y);
		} else {

		}
	
	}

	Player.prototype.render = function(context) {
		context.fillStyle = this.color;
		context.fillRect(this.location.x - this.size, this.location.y - this.size / 2, this.size * 2, this.size);
	}

	return Player;
}());