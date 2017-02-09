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

	Empty.prototype.binaryInput = function(id, btn_code) {
		console.log("binary: ", id, btn_code);
	}

	Empty.prototype.rawInput = function(id, btn_code, value) {
		console.log("raw: ", id, btn_code, value);
	}

	return Empty;
}());
