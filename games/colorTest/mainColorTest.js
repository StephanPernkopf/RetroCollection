var DIRECTION_UP = 38;
var DIRECTION_DOWN = 40;
var DIRECTION_LEFT = 37;
var DIRECTION_RIGHT = 39;

var MainColorTest = (function() {
	var rectangles = [];
	
	MainColorTest = function() {
		GRID_SIZE = 64;
		this.pause = false;

		for (var i = 0; i < 11; i ++) {
			for (var j = 0; j < 15; j++) {
				rectangles.push(new Rect(GRID_SIZE * j, GRID_SIZE * i));
			}
		}
	}

	MainColorTest.prototype.gameController = function(e) {
		var key = e.keyCode ? e.keyCode : e.which;
		if (key == 32) {//Space
			this.pause = !this.pause;
		} else if (key == DIRECTION_UP) {
			for (var i = 0; i < rectangles.length; i++) {
				rectangles[i].changeColor();
			}
		} else if (key == DIRECTION_DOWN) {
			for (var i = 0; i < rectangles.length; i++) {
				rectangles[i].changeColor();
			}
		}
	}

	MainColorTest.prototype.update = function() {
		
	}

	MainColorTest.prototype.draw = function(context) {
		VisualLib.clearScreen(context);

		for (var i = 0; i < rectangles.length; i++) {		
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
		this.color = VisualLib.randomRangedColorString();
	}

	Rect.prototype.changeColor = function() {
		this.color = VisualLib.randomRangedColorString(240, 15);
	}

	Rect.prototype.draw = function(context) {
		context.fillStyle = this.color;
		context.fillRect(this.x, this.y, this.w, this.h);
	}

	return MainColorTest;
}());
