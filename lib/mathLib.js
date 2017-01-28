var MathLib = (function() {
	var ML = {};

	ML.Point = function(x, y) {
		this.x = x;
		this.y = y;
	}

	ML.Point.prototype.distTo = function(p) {
		if (p) {
			if (typeof Math.hypot === "function") {
				return Math.hypot(p.x - this.x, p.y - this.y);
			} else {
				// maybe provide another implementation
			}
		}
	}

	ML.Point.prototype.copy = function() {
		return new ML.Point(this.x, this.y);
	}

	ML.random = function(min, max) {
		if (max == undefined) {
			// from 0 to max --> argument min is now max
			return Math.random() * min;
		} else {
			// Random value between min to max
			return Math.random() * (max - min) + min;
		}
	}

	return ML;
}());
