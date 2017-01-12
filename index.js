/* gamelogic.js */

var canvas = null;
var ctx = null;

window.onload = function() {
	canvas = document.getElementById("playground");
	ctx = canvas.getContext("2d");

	var width = canvas.width;
	var height = canvas.height;

	ctx.fillStyle = "rgb(30, 30, 30)";
	ctx.fillRect(40, 40, width - 80, height - 80);
}