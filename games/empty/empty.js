var Empty = (function() {
	Empty = function() {
		this.pause = false;
	}

	Empty.prototype.finished = function() {
		return true;
	}

	Empty.prototype.update = function() {

	}

	Empty.prototype.render = function(context) {
		VisualLib.clearScreen(context);
	}

	return Empty;
}());