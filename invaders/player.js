class Player {
	constructor() {
		this.size = GRID_SIZE; // TODO: adjust Size
		var x = WIDTH / GRID_SIZE / 2 - this.size;
		var y = HEIGHT / GRID_SIZE - this.size;
		
		this.location = new Point(x, y);
		this.newlocation = new Coordinate();
		this.color = "rgb(0, 0, 0)";
		this.life = 5;

	}

	move(direction) {
		if (direction == "left") {
			if (this.location.x + this.size > 0) { // players width is size * 2
				this.location.x--;
			}
		} else if (direction == "right") {
			if (this.location.x + this.size <= WIDTH / GRID_SIZE)  {
				this.location.x++;
			}
		}
	}

	shoot() {
		return new Point(this.location.x, this.location.y);
	}

	draw() {
		ctx.fillStyle = this.color;
		ctx.fillRect(this.location.x, this.location.y, this.size * 2, this.size);
	}
}