var VisualLib = (function() {
	var VL = {};

	VL.randomColorString = function() {
		var r = Math.floor(MathLib.random(255));
		var g = Math.floor(MathLib.random(255));
		var b = Math.floor(MathLib.random(255));

		return "rgb(" + r + "," + g + "," + b + ")";
	}

	VL.randomRangedColorString = function(hue, range) {
		// hue expects value between 0 and 360
		// if range not specified -> solid hue
		// if range && hue not specified -> random hue
		if (range == undefined) {
			if (hue == undefined) {
				var color = Math.floor(MathLib.random(360));
			} else {
				var color = hue;
			}
		} else {
			var color = Math.floor(MathLib.random(hue - range, hue + range));
		}

		return "hsl(" + color + ", 100%, 50%)";;
	}

	VL.clearScreen = function(context, color) {
		if (context) {

			if (color) {
				context.fillStyle = color;
			} else {
				context.fillStyle = "white";
			}

			context.fillRect(0, 0, WIDTH, HEIGHT);
		}
	}

	return VL;
}());