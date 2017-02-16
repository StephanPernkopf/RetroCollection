var Alien = (function() {

	var speed = 20;

	Alien = function(x, y) {
		this.location = new MathLib.Point(x, y); // center
		this.color = 'rgb(0, 0, 0)';
		this.size = 50;
		this.xMovement = 1;
	}

	Alien.prototype.intersects = function(point, halfSize) {
		if (point != undefined) {
			var hitX = point.x + halfSize > this.location.x - this.size / 2 &&
						point.x - halfSize < this.location.x + this.size / 2;
			var hitY = point.y + halfSize > this.location.y - this.size / 2
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
		context.fillRect(this.location.x - this.size / 2,
						 this.location.y - this.size / 2,
						 this.size, this.size);
	}
	
	Alien.prototype.shoot = function(shootProb) {
		if (Math.random() > shootProb) {
			return new Bullet(this.location.x, this.location.y);
		} else {
			return undefined;
		}
	}

	return Alien;
}());

var Bullet = (function() {
	var bulletSpeed = 4;

	Bullet = function(x, y, up) {
		this.location = new MathLib.Point(x, y);
		this.size = 8;
		

		if (up === true) {
			this.direction = -1;
		} else {
			this.direction = 1;
		}
	}

	Bullet.prototype.render = function(context) {
		context.fillStyle = "rgb(0, 0, 0)";
		context.fillRect(this.location.x - this.size / 2, this.location.y - this.size / 2, this.size, this.size);
	}

	Bullet.prototype.move = function() {
		this.location.y += bulletSpeed * this.direction;
	}

	Bullet.prototype.intersects = function(target, halfWidth, halfHeight) {
		var hitX = this.location.x >= (target.x - halfWidth) && this.location.x <= (target.x + halfWidth);
		var hitY = this.location.y >= (target.y - halfHeight) && this.location.y <= (target.y + halfHeight);
		//console.log(target, halfWidth, halfHeight);
		return hitX && hitY;
	}

	return Bullet;
}());