let DIRECTION_UP = 38;
let DIRECTION_DOWN = 40;
let DIRECTION_LEFT = 37;
let DIRECTION_RIGHT = 39;

var MainColorTest = (function() {
	let rectangles = [];

	MainColorTest = function() {
		GRID_SIZE = 64;
		this.pause = false;

		for (let i = 0; i < 11; i++) {
			for (let j = 0; j < 15; j++) {
				rectangles.push(new Rect(GRID_SIZE * j, GRID_SIZE * i));
			}
		}
	}

	MainColorTest.prototype.binaryInput = function(id, btn_code) {
		let rand = Math.random();
		for (let i = 0; i < rectangles.length; i++) {
			rectangles[i].changeColor(rand);
		}
	}

	MainColorTest.prototype.rawInput = function(id, btn_code, value) {
		let rand = Math.random();
		for (let i = 0; i < rectangles.length; i++) {
			rectangles[i].changeColor(rand);
		}
	}

	MainColorTest.prototype.update = function() {

	}

	MainColorTest.prototype.render = function(context) {
		for (let i = 0; i < rectangles.length; i++) {
			rectangles[i].draw(context);
		}
	}

	MainColorTest.prototype.finished = function() {
		return false;
	}

	Rect = function(x, y) {
		this.x = x;
		this.y = y;
		this.w = GRID_SIZE;
		this.h = GRID_SIZE;
		this.color = VisualLib.randomRangedColorString(360, 0);
	}

	Rect.prototype.changeColor = function(rand) {
		this.color = VisualLib.randomRangedColorString(rand * 360, 0);
	}

	Rect.prototype.draw = function(context) {
		context.fillStyle = this.color;
		context.fillRect(this.x, this.y, this.w, this.h);
	}

	return MainColorTest;
}());
