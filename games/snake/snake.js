var Snake = (function(){
	var bodyPartColors = [];

	Snake = function() {
		bodyPartColors = [VisualLib.randomRangedColorString()];
		this.bodyParts = [];
		var x = Math.floor(WIDTH / 2 / GRID_SIZE);
		var y = Math.floor(HEIGHT / 2 / GRID_SIZE);
		this.bodyParts.push(new MathLib.Point(x, y));
		this.bodyParts.push(new MathLib.Point(this.bodyParts[0].x - 1, y));
		this.direction = "RIGHT";
		this.locked = false;
	}

	Snake.prototype.move = function() {
		this.locked = false;
		for (var i = this.bodyParts.length - 1; i > 0; i--) {
			this.bodyParts[i] = this.bodyParts[i - 1].copy();
			bodyPartColors[i] = bodyPartColors[i - 1];
		}

		// move head
		switch(this.direction) {
		case "UP":
			this.bodyParts[0].y--;
			break;
		case "DOWN":
			this.bodyParts[0].y++;
			break;
		case "RIGHT":
			this.bodyParts[0].x++;
			break;
		case "LEFT":
			this.bodyParts[0].x--;
			break;
		}

		// prevent the snake from escaping the window
		var w = Math.floor(WIDTH / GRID_SIZE);
		var h = Math.floor(HEIGHT / GRID_SIZE);

		if (this.bodyParts[0].x >= w) {
			this.bodyParts[0].x -= w;
		} else if (this.bodyParts[0].x < 0) {
			this.bodyParts[0].x += w;
		} else if (this.bodyParts[0].y >= h) {
			this.bodyParts[0].y -= h;
		} else if (this.bodyParts[0].y < 0) {
			this.bodyParts[0].y += h;
		}
	}

	Snake.prototype.changeDirection = function(dir) {
		if (this.locked) return;

		if (dir === "UP" && this.direction != "DOWN") {
			this.direction = dir;
		} else if (dir === "DOWN" && this.direction != "UP") {
			this.direction = dir;
		} else if (dir === "RIGHT" && this.direction != "LEFT") {
			this.direction = dir;
		} else if (dir == "LEFT" && this.direction != "RIGHT") {
			this.direction = dir;
		} else {
			return;
		}

		// lock the snake so it cannot change dir again before moving
		this.locked = true;
	}

	Snake.prototype.collided = function() {
		for (var i = 1; i < this.bodyParts.length; i++) {
			if (Math.floor(this.bodyParts[0].distTo(this.bodyParts[i])) === 0) {
				return true;
			}
		}

		return false;
	}

	Snake.prototype.intersects = function(point) {
		return Math.floor(this.bodyParts[0].distTo(point)) === 0;
	}

	Snake.prototype.grow = function(color) {
		this.bodyParts.push(this.bodyParts[this.bodyParts.length - 1].copy());
		bodyPartColors[0] = color;
	}

	Snake.prototype.draw = function(context) {
		for (var i = 0; i < this.bodyParts.length; i++) {
			var x = this.bodyParts[i].x * GRID_SIZE;
			var y = this.bodyParts[i].y * GRID_SIZE;

			context.fillStyle = bodyPartColors[i];
			context.fillRect(x,	y, GRID_SIZE, GRID_SIZE);
		}
	}

	return Snake;
}());
