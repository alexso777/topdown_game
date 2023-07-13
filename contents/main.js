"use strict";

var app = app || {};

app.topDown = {
	WIDTH: 160,
	HEIGHT: 96,
	BAR_HEIGHT: 12,
	W_W: 20,
	W_H: 12,
	O_W: 0,
	O_H: 0,
	E_W: 0,
	E_H: 0,
	S_W: 0,
	S_H: 0,
	ZOOM_RATE: 6,
	// Used to change from menu to game and other windows
	GAME_STATE_MENU: 1,
	GAME_STATE_GAME: 2,
	GAME_STATE_DEAD: 3,

	// Debug allows for:
	// Enemies to be seen
	DEBUG: false,
	currentGameState: 1,
	chatStatus: 0,
	buildingStatus: undefined,
	// Keep the score of enemies killed
	score: 0,
	mouseData: { x: 0, y: 0 },

	waveAmount: 12,
	houseKills: 0,
	currentWave: 1,

	player: undefined,

	canvas: undefined,
	textPanel: undefined,
	ctx: undefined,
	textCTX: undefined,
	dt: 1 / 60.0,

	// Sets up the game
	init: function () {
		// Set up the canvas
		this.canvas = document.querySelector('#image');
		this.canvas.width = this.WIDTH;
		this.canvas.height = this.HEIGHT + this.BAR_HEIGHT;

		this.ctx = this.canvas.getContext('2d');

		this.textPanel = document.querySelector('#text');
		this.textPanel.onmousedown = this.doMousedown.bind(this);
		this.textPanel.onmousemove = this.doMouseMove.bind(this);
		this.textCTX = this.textPanel.getContext('2d');

		// Get the player
		this.player = app.player;
		this.player.init();

		this.update();
	},

	// Called every frame
	// Handles game logic
	update: function () {
		app.draw.clear(this.ctx, 0, 0, this.WIDTH, this.HEIGHT + this.BAR_HEIGHT);
		app.draw.clear(this.textCTX, 0, 0, this.WIDTH*this.ZOOM_RATE, this.HEIGHT*this.ZOOM_RATE + this.BAR_HEIGHT*this.ZOOM_RATE);

		// Pausing the game
		if (app.paused) {
			this.drawPauseScreen();
		} else {
			// Update the game
			// Main menu screen
			if (this.currentGameState == this.GAME_STATE_MENU) {
				this.drawMainScreen();
			}
			// Game Screen
			else if (this.currentGameState == this.GAME_STATE_GAME) {
				this.player.update(this.dt);
				if (!this.chatStatus && this.buildingStatus == undefined) {
					this.moveSprites();
					this.player.doAction();
				}

				let posX = Math.floor(this.player.position.x / app.t_s);
				let posY = Math.floor(this.player.position.y / app.t_s);
				if (posX < (this.W_W / 2)) {
					this.O_W = 0;
					this.E_W = 0;
					this.S_W = 0;
				} else if (posX >= (app.w_w - this.W_W / 2)) {
					this.O_W = app.w_w - this.W_W;
					this.E_W = 0;
					this.S_W = 0;
				} else {
					this.O_W = posX - this.W_W / 2;
					this.E_W = Math.floor(this.player.position.x - posX * app.t_s);
					this.S_W = 1;
				}
				if (posY < (this.W_H / 2)) {
					this.O_H = 0;
					this.E_H = 0;
					this.S_H = 0;
				} else if (posY >= (app.w_h - this.W_H / 2)) {
					this.O_H = app.w_h - this.W_H;
					this.E_H = 0;
					this.S_H = 0;
				} else {
					this.O_H = posY - this.W_H / 2;
					this.E_H = Math.floor(this.player.position.y - posY * app.t_s);
					this.S_H = 1;
				}

				// Check collisions
				this.drawBackground();

				// Draw sprites
				this.ctx.globalAlpha = 0.9;
				this.drawSprites();
				this.ctx.globalAlpha = 1.0;

				if (this.chatStatus) {
					this.drawChat();
				}

				if (this.buildingStatus) {
					this.drawBuilding();
				}

				if (this.player.health == 0) {
					this.currentGameState = this.GAME_STATE_DEAD;
				}
				else if (this.houseKills == this.waveAmount) {
					this.currentWave++;
				}
			}
			// Game Over Screen
			else if (this.currentGameState == this.GAME_STATE_DEAD) {
				this.drawGameOverScreen();
			}
		}
		this.drawBar();
		// Loop the game
		app.animationID = requestAnimationFrame(this.update.bind(this));
	},

	drawBuilding: function() {
		let x = app.topDown.buildingStatus.x,y = app.topDown.buildingStatus.y;
		if(app.keydown[app.KEYBOARD.KEY_ENTER])
		{
			if(app.wood >= 20 && app.stone >= 30){
				new app.House(x, y, 0, app.topDown.buildingStatus.direction, 1);
				app.wood -= 20;
				app.stone -= 20;
			} else if (app.social >= 2){
				new app.House(x, y, 0, app.topDown.buildingStatus.direction, 1);
				app.social -= 2;
			}
			app.player.workFrame = 0;
			app.topDown.buildingStatus = undefined;
		} else if(app.keydown[app.KEYBOARD.KEY_ESC]){ 
			app.player.workFrame = 0;
			app.topDown.buildingStatus = undefined;
		} else if(app.keydown[app.KEYBOARD.KEY_UP]){ 
			y = y-1;
			if(app.player.workFrame ==0 && app.HouseData.checkSpace(x,y,app.topDown.buildingStatus.direction)){
				app.topDown.buildingStatus = {x:x, y:y, direction:app.topDown.buildingStatus.direction};
				app.player.workFrame = 1;
			}
		} else if(app.keydown[app.KEYBOARD.KEY_RIGHT]){ 
			x = x+1;
			if(app.player.workFrame ==0 && app.HouseData.checkSpace(x,y,app.topDown.buildingStatus.direction)){
				app.topDown.buildingStatus = {x:x, y:y, direction:app.topDown.buildingStatus.direction};
				app.player.workFrame = 1;
			}
		} else if(app.keydown[app.KEYBOARD.KEY_DOWN]){ 
			y = y+1;
			if(app.player.workFrame ==0 && app.HouseData.checkSpace(x,y,app.topDown.buildingStatus.direction)){
				app.topDown.buildingStatus = {x:x, y:y, direction:app.topDown.buildingStatus.direction};
				app.player.workFrame = 1;
			}
		} else if(app.keydown[app.KEYBOARD.KEY_LEFT]){ 
			x = x-1;
			if(app.player.workFrame ==0 && app.HouseData.checkSpace(x,y,app.topDown.buildingStatus.direction)){
				app.topDown.buildingStatus = {x:x, y:y, direction:app.topDown.buildingStatus.direction};
				app.player.workFrame = 1;
			}
		} else {
			if(app.topDown.buildingStatus.direction == 0)
				y = y-1;
			else if(app.topDown.buildingStatus.direction == 1)
				x = x+1;
			else if(app.topDown.buildingStatus.direction == 2)
				y = y+1;
			else if(app.topDown.buildingStatus.direction == 3)
				x = x-2;
			this.ctx.save();
			this.ctx.globalAlpha = 0.7;
			app.draw.rect(this.ctx, (x-this.O_W)*app.t_s-this.E_W, (y-this.O_H)*app.t_s-this.E_H, app.t_s*2, app.t_s, "brown");
			this.ctx.globalAlpha = 1;
			this.ctx.save();
		}
		if(app.player.workFrame>0){
			app.player.workFrame = (app.player.workFrame+1)%20;
		}
	},

	drawChat: function() {
		if(app.keydown[app.KEYBOARD.KEY_YES])
		{
			if(app.answers[this.chatStatus-1])
				app.social+=1;
			this.chatStatus = 0;
		} else if(app.keydown[app.KEYBOARD.KEY_NO])
		{
			if(!app.answers[this.chatStatus-1])
				app.social+=1;
			this.chatStatus = 0;
		} else {
			app.draw.rect(this.ctx, 10, 20, 140, 50, "brown");
			app.draw.text(this.textCTX, app.questions[this.chatStatus-1], 15*this.ZOOM_RATE, 35*this.ZOOM_RATE, 6*this.ZOOM_RATE, "white", 130*this.ZOOM_RATE);
			app.draw.text(this.textCTX, "Yes", 50*this.ZOOM_RATE, 65*this.ZOOM_RATE, 6*this.ZOOM_RATE, "white");
			app.draw.text(this.textCTX, "No", 90*this.ZOOM_RATE, 65*this.ZOOM_RATE, 6*this.ZOOM_RATE, "white");
		}
	},

	drawBar: function () {
		this.textCTX.save();
		let x = Math.floor(this.player.position.x/app.t_s);
		let y = Math.floor(this.player.position.y/app.t_s);
		this.textCTX.globalAlpha = 0.7;
		if(app.topDown.buildingStatus){
			app.draw.text(this.textCTX, "Enter : Confirm", 2*this.ZOOM_RATE, (this.HEIGHT - 20)*this.ZOOM_RATE, 6*this.ZOOM_RATE, "red");
			app.draw.text(this.textCTX, "Esc : Cancel", 2*this.ZOOM_RATE, (this.HEIGHT - 10)*this.ZOOM_RATE, 6*this.ZOOM_RATE, "red");
		} else if(app.HouseData.checkSpace(x, y, this.player.direction)){
			if((app.wood >= 20 && app.stone >= 30) ||  (app.social >= 2)){
				app.draw.text(this.textCTX, "B : Build", 2*this.ZOOM_RATE, (this.HEIGHT - 16)*this.ZOOM_RATE, 6*this.ZOOM_RATE, "red");
			}
		} else {
			if(this.player.direction == 0){
				x = Math.floor(this.player.position.x/app.t_s);
				y = Math.floor((this.player.position.y-app.t_s/2)/app.t_s);
			} else if(this.player.direction == 1){
				x = Math.floor((this.player.position.x+app.t_s/2)/app.t_s);
				y = Math.floor(this.player.position.y/app.t_s);
			} else if(this.player.direction == 2){
				x = Math.floor(this.player.position.x/app.t_s);
				y = Math.floor((this.player.position.y+app.t_s/2)/app.t_s);
			} else if(this.player.direction == 3){
				x = Math.floor((this.player.position.x-app.t_s/2)/app.t_s);
				y = Math.floor(this.player.position.y/app.t_s);
			}
	
			if (!app.isOutside(x,y) && app.objects[y][x] != null) {
				let txt = "Space: ";
				if(app.objects[y][x].o.type == app.TreeData.type) {
					txt += "Wood";
				} else if(app.objects[y][x].o.type == app.StoneData.type) {
					txt += "Stone";
				} else if(app.objects[y][x].o.type == app.FoodData.type) {
					txt += "Food";
				} else if(app.objects[y][x].o.type == app.PersonData.type) {
					txt += "Talk";
				} else if(app.objects[y][x].o.type == app.HouseData.type) {
					if(app.objects[y][x].o.style == 0){
						if(app.objects[y][x].o.health<app.HouseData.health){
							txt += "Work";
						} else {
							txt = "";
						}
					} else {
						txt += "Play";
					}
				}
				app.draw.text(this.textCTX, txt, 2*this.ZOOM_RATE, (this.HEIGHT - 16)*this.ZOOM_RATE, 6*this.ZOOM_RATE, "red");
			}
		}
		this.textCTX.globalAlpha = 1;
		this.textCTX.restore();

		app.draw.rect(this.ctx, 0, this.HEIGHT, this.WIDTH, this.BAR_HEIGHT, "brown");

		let treeImage = app.TreeData.rootImages[0];
		this.ctx.drawImage(treeImage, 2, this.HEIGHT + 2, treeImage.width, treeImage.height);
		app.draw.text(this.textCTX, app.wood.toString(), 12*this.ZOOM_RATE, (this.HEIGHT + this.BAR_HEIGHT / 2 + 4)*this.ZOOM_RATE, 6*this.ZOOM_RATE, "white");

		let stoneImage = app.StoneData.stoneImages[0];
		this.ctx.drawImage(stoneImage, 32, this.HEIGHT + 2, stoneImage.width, stoneImage.height);
		app.draw.text(this.textCTX, app.stone.toString(), 42*this.ZOOM_RATE, (this.HEIGHT + this.BAR_HEIGHT / 2 + 4)*this.ZOOM_RATE, 6*this.ZOOM_RATE, "white");

		let foodImage = app.FoodData.foodImages[1];
		this.ctx.drawImage(foodImage, 64, this.HEIGHT + 2, foodImage.width, foodImage.height);
		app.draw.text(this.textCTX, app.food.toString(), 74*this.ZOOM_RATE, (this.HEIGHT + this.BAR_HEIGHT / 2 + 4)*this.ZOOM_RATE, 6*this.ZOOM_RATE, "white");

		let personImage = app.PersonData.personImages[0];
		this.ctx.drawImage(personImage, 96, this.HEIGHT + 2, personImage.width, personImage.height);
		app.draw.text(this.textCTX, app.social.toString(), 106*this.ZOOM_RATE, (this.HEIGHT + this.BAR_HEIGHT / 2 + 4)*this.ZOOM_RATE, 6*this.ZOOM_RATE, "white");
	},

	// Lets the player know the game is paused
	drawPauseScreen: function () {
		this.drawBackground();
		this.textCTX.save();
		this.textCTX.textAlign = "center";
		this.textCTX.textBaseline = "middle";
		app.draw.text(this.textCTX, "... PAUSED ...", this.WIDTH / 2*this.ZOOM_RATE, this.HEIGHT / 2*this.ZOOM_RATE, 12*this.ZOOM_RATE, "white");
		this.textCTX.restore();
	},

	// Says the title of the game
	// Tells the player how to get into the game
	// Tells the player who made the game
	// Gives instructions on how to play
	drawMainScreen: function () {
		this.drawBackground();
		this.textCTX.save();
		this.textCTX.textAlign = "center";
		this.textCTX.textBaseline = "middle";
		app.draw.text(this.textCTX, "TopDown", this.WIDTH / 2*this.ZOOM_RATE, (this.HEIGHT / 2 - 30)*this.ZOOM_RATE, 8*this.ZOOM_RATE, "white");
		app.draw.text(this.textCTX, "Click to play", this.WIDTH / 2*this.ZOOM_RATE, (this.HEIGHT / 2 - 10)*this.ZOOM_RATE, 5*this.ZOOM_RATE, "white");
		app.draw.text(this.textCTX, "Made by TechGuy", this.WIDTH / 2*this.ZOOM_RATE, (this.HEIGHT / 2 + 0)*this.ZOOM_RATE, 5*this.ZOOM_RATE, "white");
		app.draw.text(this.textCTX, "Controls", this.WIDTH / 2*this.ZOOM_RATE, (this.HEIGHT / 2 + 15)*this.ZOOM_RATE, 6*this.ZOOM_RATE, "white");
		app.draw.text(this.textCTX, "A - Move Left", (this.WIDTH / 2 - 40)*this.ZOOM_RATE, (this.HEIGHT / 2 + 25)*this.ZOOM_RATE, 4*this.ZOOM_RATE, "white");
		app.draw.text(this.textCTX, "D - Move Right", (this.WIDTH / 2 + 40)*this.ZOOM_RATE, (this.HEIGHT / 2 + 25)*this.ZOOM_RATE, 4*this.ZOOM_RATE, "white");
		app.draw.text(this.textCTX, "W - Move Up", (this.WIDTH / 2 - 40)*this.ZOOM_RATE, (this.HEIGHT / 2 + 32)*this.ZOOM_RATE, 4*this.ZOOM_RATE, "white");
		app.draw.text(this.textCTX, "S - Move Down", (this.WIDTH / 2 + 40)*this.ZOOM_RATE, (this.HEIGHT / 2 + 32)*this.ZOOM_RATE, 4*this.ZOOM_RATE, "white");
		app.draw.text(this.textCTX, "Space - Work", (this.WIDTH / 2 - 40)*this.ZOOM_RATE, (this.HEIGHT / 2 + 39)*this.ZOOM_RATE, 4*this.ZOOM_RATE, "white");
		app.draw.text(this.textCTX, "C - Build house", (this.WIDTH / 2 + 40)*this.ZOOM_RATE, (this.HEIGHT / 2 + 39)*this.ZOOM_RATE, 4*this.ZOOM_RATE, "white");
		this.textCTX.restore();
	},

	// Tells the player their score and that the game is over
	// Also gives instructions to get back to the main menu
	drawGameOverScreen: function () {
		this.drawBackground();
		this.textCTX.save();
		this.textCTX.textAlign = "center";
		this.textCTX.textBaseline = "middle";
		app.draw.text(this.textCTX, "Game Over", (this.WIDTH / 2)*this.ZOOM_RATE, (this.HEIGHT / 2)*this.ZOOM_RATE, 12*this.ZOOM_RATE, "white");
		this.textCTX.restore();
	},

	// Draws the background image
	drawBackground: function () {
		for (let i = this.O_H; i < (this.O_H + this.W_H + (this.S_H == 1 ? 1 : 0)); i++) {
			for (let j = this.O_W; j < (this.O_W + this.W_W + (this.S_W == 1 ? 1 : 0)); j++) {
				this.ctx.drawImage(app.TERRAIN_IMAGES[app.terrains.charAt(i * app.w_w + j)], (j - this.O_W) * app.t_s - this.E_W, (i - this.O_H) * app.t_s - this.E_H, app.t_s, app.t_s);
			}
		}
		for (let i = this.O_H; i < (this.O_H + this.W_H + (this.S_H == 1 ? 1 : 0)); i++) {
			for (let j = this.O_W; j < (this.O_W + this.W_W + (this.S_W == 1 ? 1 : 0)); j++) {
				if (app.covers.charAt(i * app.w_w + j) != "0") {
					this.ctx.drawImage(app.COVER_IMAGES[app.covers.charAt(i * app.w_w + j)], (j - this.O_W) * app.t_s - this.E_W, (i - this.O_H) * app.t_s - this.E_H, app.t_s, app.t_s);
				}
			}
		}
	},

	// Takes care of all the drawing
	drawSprites: function () {
		let posX = Math.floor(this.player.position.x / app.t_s);
		let posY = Math.floor(this.player.position.y / app.t_s);

		for (let i = this.O_H; i < (this.O_H + this.W_H + (this.S_H == 1 ? 1 : 0)); i++) {
			for (let j = this.O_W; j < (this.O_W + this.W_W + (this.S_W == 1 ? 1 : 0)); j++) {
				if (app.objects[i][j] != null && app.objects[i][j].r == 1) {
					app.objects[i][j].o.draw(this.ctx, this.O_W, this.O_H, this.E_W, this.E_H);
				}
				if (j == posX && i == posY) {
					this.ctx.globalAlpha = 1.0;
					this.player.draw(this.ctx, posX, posY, this.O_W, this.O_H, this.S_W, this.S_H);
					this.ctx.globalAlpha = 0.9;
				}
			}
		}
	},

	// Takes care of movement and updating
	moveSprites: function () {
		// Move player
		this.movePlayer();
	},

	// Triggered when the player clicks the mouse
	doMousedown: function (e) {
		// If in the menu screen, change to the game screen
		if (this.currentGameState == this.GAME_STATE_MENU) {
			this.currentGameState = this.GAME_STATE_GAME;
		}
		// If in the game screen, shoot a tree
		else if (this.currentGameState == this.GAME_STATE_GAME) {

		}
		// If in the game over screen, reset the game and go to the menu
		else if (this.currentGameState == this.GAME_STATE_DEAD) {
			this.score = 0;
			this.player.health = 100;
			this.enemies = [];
			this.waveAmount = 15;
			this.currentWave = 1;
			this.houseKills = 0;
			this.currentGameState = app.topDown.GAME_STATE_MENU;
		}
	},

	// Triggered when the player moves the mouse
	// Sets mouse data for later use
	doMouseMove: function (e) {
		this.mouseData = app.utilities.getMouse(e);
	},

	// Takes care of player movement on key press
	// Also keeps the player on screen
	movePlayer: function () {
		if (app.keydown[app.KEYBOARD.KEY_LEFT]) {
			this.player.moveLeft();
		} else if (app.keydown[app.KEYBOARD.KEY_RIGHT]) {
			this.player.moveRight();
		} else if (app.keydown[app.KEYBOARD.KEY_UP]) {
			this.player.moveUp();
		} else if (app.keydown[app.KEYBOARD.KEY_DOWN]) {
			this.player.moveDown();
		}

		this.player.keepOnScreen();
	},

	// Determines whether two things collide or not
	collides: function (a, b) {
		var distance = a.position.subtract(b.position);
		if (distance.magnitude() < (a.radius + b.radius)) {
			return true;
		}
		return false;
	},

	// Plays the background music
	startSoundtrack: function () {
		// createjs.Sound.stop();
		// createjs.Sound.play("background",{loop: -1, volume: 0.5});
	}

};