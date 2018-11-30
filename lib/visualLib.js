var VisualLib = (function() {
	let VL = {};

	VL.randomColorString = function() {
		let r = Math.floor(MathLib.random(255));
		let g = Math.floor(MathLib.random(255));
		let b = Math.floor(MathLib.random(255));

		return "rgb(" + r + "," + g + "," + b + ")";
	}

	VL.randomRangedColorString = function(hue, range) {
		// hue expects value between 0 and 360
		// if range not specified -> solid hue
		// if range && hue not specified -> random hue
		let color;
		if (range == undefined) {
			if (hue == undefined) {
				color = Math.floor(MathLib.random(360));
			} else {
				color = hue;
			}
		} else {
			color = Math.floor(MathLib.random(hue - range, hue + range));
		}

		let saturation = Math.floor(MathLib.random(80, 100));
		let lightness = Math.floor(MathLib.random(40, 60));

		return "hsl(" + color + ", " + saturation + "%, " + lightness + "%)";;
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
