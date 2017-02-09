var Menu = (function(){
	var games = [];
	games.push({name: "Snake", desc: "Classic Snake game. EAT ALL FRUITS!!!"})
	games.push({name: "SpaceInvaders", desc: ""});
	games.push({name: "Test", desc: ""});
	games.push({name: "ColorTest", desc: "color test"});

	positions = [];
	currGame = 0; // game that is selected in Menu

	Menu = function() {
		positions.push({x: (WIDTH / 2 - 425), y: (HEIGHT - 185), width: 200, height: 150});
		positions.push({x: (WIDTH / 2 - 150), y: (HEIGHT - 295), width: 300, height: 225});
		positions.push({x: (WIDTH / 2 + 225), y: (HEIGHT - 185), width: 200, height: 150});

		this.gameObjects = [];
		this.currActiveGame = 0; // game that is played right now

		for (var i = 0; i < games.length; i++) {
			this.gameObjects.push(new GameObject(games[i].name, games[i].desc, 0, 0, 0, 0));
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
		context.fillStyle = 'rgba(0, 0, 0, 0.7)';
		context.fillRect(0, 0, WIDTH, HEIGHT);

		var pred = getPred(currGame);
		var succ = getSucc(currGame);

		var color = 'rgb(0, 255, 0)';
		this.gameObjects[pred].render(context, color);
		this.gameObjects[currGame].render(context, color);
		this.gameObjects[succ].render(context, color);

	}

	Menu.prototype.binaryInput = function(id, btn_code) {
		if (btn_code == "UP_ARROW") {

			if (startGame(this.currActiveGame)) {
				this.currActiveGame	= currGame;
			};
		} else if (btn_code == "LEFT_ARROW") {
			currGame = getPred(currGame);
			this.gameObjects = switchPositions(this.gameObjects, currGame);
		} else  if (btn_code == "RIGHT_ARROW") {
			currGame = getSucc(currGame);
			this.gameObjects = switchPositions(this.gameObjects, currGame);
		}
	}

	function startGame(currActiveGame) {
		if (currGame == currActiveGame && !GAME.finished()) {
			GAME.pause = false;
			return false;
		}

		SC.innerHTML = "SCORE = 0";

		if (games[currGame].name == "Snake")
			GAME = new MainSnake();
		// else if (games[currGame] == "SpaceInvaders")
		// 	GAME = new MainInvaders();
		// else if (games[currGame] == "Test")
		// 	GAME = new MainTest();
		else if (games[currGame].name == "ColorTest")
			GAME = new MainColorTest();
		else
			GAME = new Empty;

		return true;
	}

	GameObject = function(name, desc, x, y, w, h) {
		this.name = name;
		this.description = desc;
		this.location = new MathLib.Point(x, y);
		this.width = w;
		this.height = h;
		var imageLocation = (this.description === "") ? "empty" : this.name;
		this.img = new Image();
		this.img.src = "games/preview/" + imageLocation + ".png";
		this.loaded = false;
		this.img.onload = function(e, a) {
			this.loaded = true;
		}
	}

	GameObject.prototype.render = function(context, color) {
		if (context) {
			context.fillStyle = color;
			context.font = '30px Trebuchet MS';
			context.fillText(this.name, this.location.x, this.location.y - 10);

			context.fillText(currGame + 1 + "/" + games.length, WIDTH / 2 - 150, HEIGHT - 40);

			if (this.img.loaded) {
				context.drawImage(this.img, this.location.x, this.location.y, this.width, this.height);
			} else {
				// Fallback when Image was not loaded
				context.fillRect(this.location.x, this.location.y, this.width, this.height);
			}

			if (this.name === games[currGame].name) {
				var description = (this.description === "") ? "This Game is not implemented yet, come back later." : this.description;
				context.fillText(description, 10, 50);
				if (GAME.finished() && currGame === MENU.currActiveGame)
					context.fillText("Hit Enter to restart", 10, 90);
				else if (this.description != "")
					context.fillText("Hit Enter to play", 10, 90);
			}
		}
	}

	return Menu;
}());