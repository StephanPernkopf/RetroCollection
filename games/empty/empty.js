var Empty = (function() {
	Empty = function() {
		this.pause = false;
	}

	Empty.prototype.finished = function() {
		return true;
	}

	Empty.prototype.update = function() {

	}

	Empty.prototype.draw = function(context) {
		VisualLib.clearScreen(context, VisualLib.randomColorString());
	}

	return Empty;
}());