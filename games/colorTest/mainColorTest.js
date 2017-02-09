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

	MainColorTest.prototype.binaryInput = function(id, btn_code) {
		var rand = Math.random();
		for (var i = 0; i < rectangles.length; i++) {
			rectangles[i].changeColor(rand);
		}
	}

	MainColorTest.prototype.rawInput = function(id, btn_code, value) {
		var rand = Math.random();
		for (var i = 0; i < rectangles.length; i++) {
			rectangles[i].changeColor(rand);
		}
	}

	MainColorTest.prototype.update = function() {
		
	}

	MainColorTest.prototype.render = function(context) {
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
