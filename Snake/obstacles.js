class Border {
	constructor() {
		var x = random(WIDTH / GRID_SIZE);
		var y = random(HEIGHT / GRID_SIZE);

		this.location = new Point(x, y);
		this.size = GRID_SIZE;
		this.color = randomColorString();
	}

	draw() {

	}

	intersects(point) {
		if (point instanceof Array) {			
			
			for (var i = 0; i < point.length; i++) {
				 if (Math.round(this.location.distTo(point[i]) === 0))
				 	return true;
			}

			return false;
		} else {
			return Math.round(this.location.distTo(point) === 0);
		}
	}

}

class Fruit {
	constructor() {
		var x = Math.floor(random(WIDTH / GRID_SIZE));
		var y = Math.floor(random(HEIGHT / GRID_SIZE));

		this.location = new Point(x, y);
		this.color = randomColorString();
	}

	draw() {
		var x = this.location.x * GRID_SIZE;
		var y = this.location.y * GRID_SIZE;

		ctx.fillStyle = this.color;
		ctx.fillRect(x, y, GRID_SIZE, GRID_SIZE)
	}

	intersects(point) {
		if (point instanceof Array) {			
			
			for (var i = 0; i < point.length; i++) {
				 if (Math.round(this.location.distTo(point[i]) === 0))
				 	return true;
			}

			return false;
		} else {
			return Math.round(this.location.distTo(point) === 0);
		}
	}
}