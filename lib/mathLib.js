class Point {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	distTo(p) {
		if (p) {
			if (typeof Math.hypot === "function") {
				return Math.hypot(p.x - this.x, p.y - this.y);
			} else {
				// maybe provide another implementation
			}
		}
	}

	copy() {
		return new Point(this.x, this.y);
	}

}

function random(min, max) {
	if (max == undefined) {
		// from 0 to max --> argument min is now max
		return Math.random() * min;
	} else {
		// Random value between min to max
		return Math.random() * (max - min) + min;
	}
}

