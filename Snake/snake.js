class Snake {
	
	constructor() {
		this.bodyParts = [];
		this.bodyParts.push(new Point(WIDTH / 2 / GRID_SIZE, HEIGHT / 2 / GRID_SIZE));
		this.bodyParts.push(new Point(this.bodyParts[0].x + 1, HEIGHT / 2 / GRID_SIZE));
		this.direction = "DOWN";
		this.locked = false;
		this.color = "#000000";
	}

	move() {
		this.locked = false;
		for (var i = this.bodyParts.length - 1; i > 0; i--) {
			this.bodyParts[i] = this.bodyParts[i - 1].copy();
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
		var w = WIDTH / GRID_SIZE;
		var h = HEIGHT / GRID_SIZE;
		
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

	changeDirection(dir) {
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

	collided() {
		for (var i = 1; i < this.bodyParts.length; i++) {
			if (Math.round(this.bodyParts[0].distTo(this.bodyParts[i])) === 0) {
				return true;
			}
		}

		return false;
	}

	intersects(point) {
		return Math.round(this.bodyParts[0].distTo(point)) === 0;
	}

	grow() {
		this.bodyParts.push(this.bodyParts[this.bodyParts.length - 1].copy());
	}

	draw() {
		for (var i = 0; i < this.bodyParts.length; i++) {
			var x = this.bodyParts[i].x * GRID_SIZE;
			var y = this.bodyParts[i].y * GRID_SIZE;
			
			ctx.fillStyle = this.color;
			ctx.fillRect(x,	y, GRID_SIZE, GRID_SIZE);
		}
	}
}


