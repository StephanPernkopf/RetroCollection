class Border {
	constructor() {
		var x = random(WIDTH / GRID_SIZE);
		var y = random(HEIGHT / GRID_SIZE);

		this.location = new Coordinate(x, y);
		this.size = GRID_SIZE;
		this.color = randomColorString();
	}

	draw() {

	}

	intersects(coordinate) {
		if (coordinate instanceof Array) {			
			
			for (var i = 0; i < coordinate.length; i++) {
				 if (Math.round(this.location.distTo(coordinate[i]) === 0))
				 	return true;
			}

			return false;
		} else {
			return Math.round(this.location.distTo(coordinate) === 0);
		}
	}

}

class Fruit {
	constructor() {
		var x = Math.floor(random(WIDTH / GRID_SIZE));
		var y = Math.floor(random(HEIGHT / GRID_SIZE));

		this.location = new Coordinate(x, y);
		this.color = randomColorString();
	}

	draw() {
		var x = this.location.x * GRID_SIZE;
		var y = this.location.y * GRID_SIZE;

		ctx.fillStyle = this.color;
		ctx.fillRect(x, y, GRID_SIZE, GRID_SIZE)
	}

	intersects(coordinate) {
		if (coordinate instanceof Array) {			
			
			for (var i = 0; i < coordinate.length; i++) {
				 if (Math.round(this.location.distTo(coordinate[i]) === 0))
				 	return true;
			}

			return false;
		} else {
			return Math.round(this.location.distTo(coordinate) === 0);
		}
	}
}



class Coordinate {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	distTo(point) {
		if (point) {
			if (typeof Math.hypot === "function") {
				return Math.hypot(point.x - this.x, point.y - this.y);
			} else {
				// maybe provide another implementation
			}
		}
	}

	copy() {
		return new Coordinate(this.x, this.y);
	}

}