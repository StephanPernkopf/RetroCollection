var Alien = (function() {
	
	Alien = function(x, y) {
		this.location = new MathLib.Point(x, y);
		this.color = 'rgb(0, 0, 0)';
		this.size = 50; // TODO: adjust size
		this.direction = 'left';
	}

	Alien.prototype.intersects = function(point) {
		if (point != undefined) {
			var hitX = point.x > this.location.x - this.size / 2 && point.x < this.location.x + this.size / 2;
			var hitY = point.y > this.location.y - this.size / 2 && point.y < this.location.y + this.size / 2;
			
			return hitX && hitY;
		}
	}

	Alien.prototype.move = function(dx, dy) {
		// TODO: implement move
	}

	Alien.prototype.render = function(context) {
		context.fillRect(this.location.x - this.size / 2, 
						 this.location.y - this.size / 2, 
						 this.size, this.size);
	}

	return Alien;
}());
