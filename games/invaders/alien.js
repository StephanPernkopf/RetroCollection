var Alien = (function() {

	let speed = 20;

	Alien = function(x, y) {
		this.location = new MathLib.Point(x, y); // center
		this.color = VisualLib.randomColorString();
		this.size = 50;
		this.xMovement = 1;
	}

	Alien.prototype.intersects = function(point, halfSize) {
		if (point != undefined) {
			let hitX = point.x + halfSize > this.location.x - this.size / 2 &&
				point.x - halfSize < this.location.x + this.size / 2;
			let hitY = point.y + halfSize > this.location.y - this.size / 2
				&& point.y - halfSize < this.location.y + this.size / 2;

			return hitX && hitY;
		}
	}

	Alien.prototype.changeDir = function() {
		this.xMovement *= -1;
		this.location.y += 60;
	}

	Alien.prototype.move = function() {
		this.location.x += this.xMovement * speed;
	}

	Alien.prototype.render = function(context) {
		context.fillStyle = this.color;
		context.fillRect(this.location.x - this.size / 2,
			this.location.y - this.size / 2,
			this.size, this.size);
	}

	return Alien;
}());
