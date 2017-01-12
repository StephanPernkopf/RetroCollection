class alien {
	constructor() {
		this.location = new Point;
		this.color = "rgb(0, 0, 0)";
		this.size = GRID_SIZE; // TODO: adjust size
		this.direction = "left";
	}

	intersects(point) {
		if (point) {
			var hitX = point.x > this.location.x && point.x < this.location.x + this.size;
			var hitY = point.y > this.location.y && point.y < this.location.y + this.size;
			
			return hitX && hitY;
		}
	}

	move() {
		// TODO: implement move
	}
}