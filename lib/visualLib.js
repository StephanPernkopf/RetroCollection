var VisualLib = (function() {
	var VL = {};

	VL.randomColorString = function() {
		var r = Math.floor(MathLib.random(255));
		var g = Math.floor(MathLib.random(255));
		var b = Math.floor(MathLib.random(255));

		return "rgb(" + r + "," + g + "," + b + ")";
	}

	VL.clearScreen = function(context) {
		if (context) {
			context.fillStyle = "white";
			context.fillRect(0, 0, WIDTH, HEIGHT);
		}
	}

	return VL;
}());