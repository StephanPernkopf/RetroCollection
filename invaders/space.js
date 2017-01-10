class space {
	constructor() {
		this.playerBullet = undefined;
		this.enemies = []; // TODO: generate enemies
		this.bullets = [];
	}

	update(bullet) {
		// update or set player bullet
		if (this.playerBullet == undefined) {
			this.playerBullet = bullet;
		} else {
			this.playerBullet.y--;
			for (var i = 0; i < enemies.length; i++) {
				if (this.enemies[i].intersects(this.playerBullet)) {
					this.enemies.splice(i, 1);
					this.playerBullet = undefined;
					// TODO: increase Score
					break;
				}
			}
		}

		// TODO: update enemies

	}
}