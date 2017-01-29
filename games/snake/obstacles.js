var Border = (function(){
	
	Border = function() {
		var x = Math.floor(MathLib.random(WIDTH / GRID_SIZE));
		var y = Math.floor(MathLib.random(HEIGHT / GRID_SIZE));

		this.location = new MathLib.Point(x, y);
		this.size = GRID_SIZE;
		this.color = VisualLib.randomColorString();
	}

	Border.prototype.draw = function() {
		// TODO: implement draw
	}

	Border.prototype.intersects = function(point) {
		if (point instanceof Array) {			
			
			for (var i = 0; i < point.length; i++) {
				 if (Math.floor(this.location.distTo(point[i]) === 0)) {
					 return true;
				 }
			}

			return false;
		} else {
			return Math.floor(this.location.distTo(point) === 0);
		}
	}

	return Border;
}());

var Fruit = (function() {
	Fruit = function() {
		var x = Math.floor(MathLib.random(Math.floor(WIDTH / GRID_SIZE)));
		var y = Math.floor(MathLib.random(Math.floor(HEIGHT / GRID_SIZE)));

		this.location = new MathLib.Point(x, y);
		this.color = VisualLib.randomColorString();
	}

	Fruit.prototype.draw = function() {
		var x = this.location.x * GRID_SIZE;
		var y = this.location.y * GRID_SIZE;

		CTX.fillStyle = this.color;
		CTX.fillRect(x, y, GRID_SIZE, GRID_SIZE)
	}

	Fruit.prototype.intersects = function(point) {
		if (point instanceof Array) {			
			
			for (var i = 0; i < point.length; i++) {
				 if (Math.floor(this.location.distTo(point[i]) === 0)) {
					 return true;
				 }
			}

			return false;
		} else {
			return Math.floor(this.location.distTo(point) === 0);
		}
	}

	return Fruit;
}());
