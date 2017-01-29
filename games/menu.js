var Menu = (function(){
	var games = ["Snake", "SpaceInvaders", "Test"];
	var count = 0;
	positions = [];
	currGame = 0; // game that is selected in Menu

	Menu = function() {
		positions.push({x: (WIDTH / 2 - 425), y: (HEIGHT - 185), width: 200, height: 150});
		positions.push({x: (WIDTH / 2 - 150), y: (HEIGHT - 295), width: 300, height: 225});
		positions.push({x: (WIDTH / 2 + 225), y: (HEIGHT - 185), width: 200, height: 150});

		this.gameObjects = [];
		this.currActiveGame = 0; // game that is played right now

		for (var i = 0; i < games.length; i++) {
			this.gameObjects.push(new GameObject(games[i], 0, 0, 0, 0));
		}
		this.gameObjects = switchPositions(this.gameObjects, currGame);
	}

	function switchPositions(arr, pos) {
		if (arr instanceof Array) {
			var pred = getPred(pos);
			var succ = getSucc(pos);

			var runner = pred;

			for (var i = 0; i < min(positions.length, arr.length); i++) {
				if (i === 1)
					runner = pos;
				else if (i === 2)
					runner = succ;

				arr[runner].location.x = positions[i].x;
				arr[runner].location.y = positions[i].y;
				arr[runner].width = positions[i].width;
				arr[runner].height = positions[i].height;
			}
		}
		return arr;
	}

	function min(x, y) {
		return (x < y) ? x : y;
	}

	function getPred(pos) {
		return (pos === 0) ? games.length - 1 : pos - 1;
	}

	function getSucc(pos) {
		return (pos === games.length - 1) ? 0 : pos + 1;
	}

	Menu.prototype.render = function(context) {
		// Pause Menu Background
		context.fillStyle = 'rgba(0, 0, 0, 0.7)';
		context.fillRect(0, 0, WIDTH, HEIGHT);

		var pred = getPred(currGame);
		var succ = getSucc(currGame);

		var color = 'rgb(0, 0, 255)';
		this.gameObjects[pred].render(context, color);
		this.gameObjects[currGame].render(context, color);
		this.gameObjects[succ].render(context, color);

	}

	Menu.prototype.inputController = function(e) {
		var key = e.keyCode ? e.which : e.keyCode;

		if (key == DIRECTION_LEFT) {
			currGame = getPred(currGame);
			this.gameObjects = switchPositions(this.gameObjects, currGame);
		} else if (key == DIRECTION_RIGHT || key == DIRECTION_DOWN) {
			currGame = getSucc(currGame);
			this.gameObjects = switchPositions(this.gameObjects, currGame);
		} else if (key == 27) {
			GAME.pause = !GAME.pause;
		} else if (key == DIRECTION_UP || key == 13) {
			if (startGame(this.currActiveGame)) {
				this.currActiveGame	= currGame;
				console.log(this.currActiveGame);
			};
		}
	}

	function startGame(currActiveGame) {
		if (currGame == currActiveGame && !GAME.finished()) {
			GAME.pause = false;
			return false;
		}

		if (games[currGame] == "Snake")
			GAME = new MainSnake();
		else if (games[currGame] == "SpaceInvaders")
			GAME = new Empty; // new MainInvaders();
		else if (games[currGame] == "Test") 
			GAME = new Empty; // new MainTest();
		else
			return false;
		
		return true;
	}

	GameObject = function(name, x, y, w, h) {
		this.name = name;
		this.location = new MathLib.Point(x, y);
		this.width = w;
		this.height = h;
		this.img = new Image();
		this.img.src = "games/preview/" + this.name + ".png";
		this.img.onload = function() {
			count++;
		}
	}

	GameObject.prototype.render = function(context, color) {
		if (context) {
			// context.fillStyle = color;
			// context.fillRect(this.location.x, this.location.y, this.width, this.height);
			context.font = '30px Trebuchet MS';
			context.fillText(this.name, this.location.x, this.location.y);

			if (count === games.length) {
				context.drawImage(this.img, this.location.x, this.location.y, this.width, this.height);
			}
		}
	}

	return Menu;
}());