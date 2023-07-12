"use strict";

var app = app || {};

app.topDown = {
	WIDTH: 320,
	HEIGHT: 192,
	W_W: 40,
	W_H: 24,
	O_W: 0,
	O_H: 0,
	E_W: 0,
	E_H: 0,
	S_W: 0,
	S_H: 0,
	BEG_FIRE_RATE: 3,
	
	ENEMY_WAVE_INC: 2,
	// Used to change from menu to game and other windows
	GAME_STATE_MENU : 1,
	GAME_STATE_GAME : 2,
	GAME_STATE_DEAD : 3,
	
	// Debug allows for:
	// Enemies to be seen
	DEBUG: false,
	currentGameState : 1,
	// Keep the score of enemies killed
	score : 0,
	mouseData: { x: 0, y:0 },
	
	waveAmount: 12,
	houseKills: 0,
	currentWave: 1,
	
	player: undefined,
	playerTrees : [],
	fire_rate: 3,
	cooldown: 0,
	
	// Background
	backgroundImage: undefined,
	// Emitters
	emitters: [],
	
	canvas : undefined,
	ctx : undefined,
	dt : 1/60.0,
	
	// Sets up the game
	init : function() {
		// Set up the canvas
		this.canvas = document.querySelector('canvas');
		this.canvas.width = this.WIDTH;
		this.canvas.height = this.HEIGHT;
		
		this.canvas.onmousedown = this.doMousedown.bind(this);
		this.canvas.onmousemove = this.doMouseMove.bind(this);
		this.ctx = this.canvas.getContext('2d');
		
		// Get the player
		this.player = app.player;
		this.player.init();
		
		var image = new Image();
		image.src = app.TERRAIN_IMAGES['background'];
		this.backgroundImage = image;
		this.update();
	},
	
	// Called every frame
	// Handles game logic
	update : function(){
		app.draw.clear(this.ctx,0,0,this.WIDTH,this.HEIGHT);
		
		// Pausing the game
		if(app.paused)
		{
			this.drawPauseScreen(this.ctx);
			return;
		}
		
		// Update the game
		// Main menu screen
		if(this.currentGameState == this.GAME_STATE_MENU)
		{
			this.drawMainScreen(this.ctx);
		}
		// Game Screen
		else if(this.currentGameState == this.GAME_STATE_GAME)
		{
			this.player.update(this.dt);
			if(!this.player.chatStatus) {
				this.moveSprites();
				this.player.doAction();
			}
			
			let posX = Math.floor(this.player.position.x/app.t_s);
			let posY = Math.floor(this.player.position.y/app.t_s);
			if(posX<(this.W_W/2)){
				this.O_W = 0;
				this.E_W = 0;
				this.S_W = 0;
			} else if(posX>=(app.w_w-this.W_W/2)) {
				this.O_W = app.w_w - this.W_W;
				this.E_W = 0;
				this.S_W = 0;
			} else {
				this.O_W = posX - this.W_W/2;
				this.E_W = Math.floor(this.player.position.x-posX*app.t_s);
				this.S_W = 1;
			}
			if(posY<(this.W_H/2)){
				this.O_H = 0;
				this.E_H = 0;
				this.S_H = 0;
			} else if(posY>=(app.w_h-this.W_H/2)) {
				this.O_H = app.w_h - this.W_H;
				this.E_H = 0;
				this.S_H = 0;
			} else {
				this.O_H = posY - this.W_H/2;
				this.E_H = Math.floor(this.player.position.y-posY*app.t_s);
				this.S_H = 1;
			}

			// Check collisions
			this.drawBackground(this.ctx);
		
			// Draw sprites
			this.ctx.globalAlpha = 0.9;
			this.drawSprites();
			// Draw HUD
			// this.drawHUD();
			this.ctx.globalAlpha = 1.0;

			if(this.player.chatStatus) {
				this.player.chat(this.ctx);
			}

			if(this.player.health == 0)
			{
				this.currentGameState = this.GAME_STATE_DEAD;
			}
			else if(this.houseKills == this.waveAmount)
			{
				this.currentWave++;
			}
		}
		// Game Over Screen
		else if(this.currentGameState == this.GAME_STATE_DEAD)
		{
			this.drawGameOverScreen(this.ctx);
		}
		
		// Loop the game
		app.animationID = requestAnimationFrame(this.update.bind(this));
	},
	
	// Lets the player know the game is paused
	drawPauseScreen : function(ctx){
		ctx.save();
		if(!this.backgroundImage)
		{
			app.draw.backgroundGradient(this.ctx,this.WIDTH,this.HEIGHT);
		}
		else
		{
			this.drawBackground(this.ctx, this.backgroundImage);
		}
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		app.draw.text(this.ctx, "... PAUSED ...", this.WIDTH/2, this.HEIGHT/2, 60, "white");
		ctx.restore();
	},
	
	// Says the title of the game
	// Tells the player how to get into the game
	// Tells the player who made the game
	// Gives instructions on how to play
	drawMainScreen : function(ctx){
		ctx.save();
		if(!this.backgroundImage)
		{
			app.draw.backgroundGradient(this.ctx,this.WIDTH,this.HEIGHT);
		}
		else
		{
			this.drawBackground(this.ctx, this.backgroundImage);
		}
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		app.draw.text(this.ctx, "TopDown", this.WIDTH/2, this.HEIGHT/2 - 100, 40, "white");
		app.draw.text(this.ctx, "Click to play", this.WIDTH/2, this.HEIGHT/2 - 50, 20, "white");
		app.draw.text(this.ctx, "Made by TechGuy", this.WIDTH/2, this.HEIGHT/2 - 16, 20, "white");
		app.draw.text(this.ctx, "Controls", this.WIDTH/2, this.HEIGHT/2 + 32, 30, "white");
		app.draw.text(this.ctx, "A - Move Left", this.WIDTH/2 - 80, this.HEIGHT/2 + 60, 12, "white");
		app.draw.text(this.ctx, "D - Move Right", this.WIDTH/2 + 80, this.HEIGHT/2 + 60, 12, "white");
		app.draw.text(this.ctx, "W - Move Up", this.WIDTH/2 - 80, this.HEIGHT/2 + 80, 12, "white");
		app.draw.text(this.ctx, "S - Move Down", this.WIDTH/2 + 80, this.HEIGHT/2 + 80, 12, "white");
		app.draw.text(this.ctx, "Space - chat with people", this.WIDTH/2 - 80, this.HEIGHT/2 + 100, 12, "white");
		app.draw.text(this.ctx, "C - build house", this.WIDTH/2 + 80, this.HEIGHT/2 + 100, 12, "white");
		ctx.restore();
	},
	

	
	// Gives a player the indication of health and their score
	drawHUD : function(){
		// Draw player health to the screen
		app.draw.text(this.ctx, "Health: " + this.player.health, 20, 40, 16, "#ddd");
	
		// Draw score to the screen
		app.draw.text(this.ctx, "Money: " + this.score, this.WIDTH - 120, 40, 16, "#ddd");
		
	},
	
	// Tells the player their score and that the game is over
	// Also gives instructions to get back to the main menu
	drawGameOverScreen: function(ctx){
		ctx.save();
		if(!this.backgroundImage)
		{
			app.draw.backgroundGradient(this.ctx,this.WIDTH,this.HEIGHT);
		}
		else
		{
			this.drawBackground(this.ctx, this.backgroundImage);
		}
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		app.draw.text(this.ctx, "Game Over", this.WIDTH/2, this.HEIGHT/2 - 100, 40, "white");
		app.draw.text(this.ctx, "You got to wave " + app.topDown.currentWave, this.WIDTH/2, this.HEIGHT/2 - 50, 40, "white");
		app.draw.text(this.ctx, "Click to go to Main Menu", this.WIDTH/2, this.HEIGHT/2, 20, "white");
		ctx.restore();
	},
	
	// Draws the background image
	drawBackground: function(ctx){
		for(let i=this.O_H; i<(this.O_H + this.W_H + (this.S_H == 1 ? 1 : 0)); i++){
			for(let j=this.O_W; j<(this.O_W + this.W_W + (this.S_W == 1 ? 1 : 0)); j++){
				ctx.drawImage(app.TERRAIN_IMAGES[app.terrains.charAt(i*app.w_w+j)], (j-this.O_W)*app.t_s - this.E_W, (i-this.O_H)*app.t_s-this.E_H, app.t_s, app.t_s);
			}
		}
		for(let i=this.O_H; i<(this.O_H + this.W_H + (this.S_H == 1 ? 1 : 0)); i++){
			for(let j=this.O_W; j<(this.O_W + this.W_W + (this.S_W == 1 ? 1 : 0)); j++){
				if(app.covers.charAt(i*app.w_w+j)!="0"){
					ctx.drawImage(app.COVER_IMAGES[app.covers.charAt(i*app.w_w+j)], (j-this.O_W)*app.t_s - this.E_W, (i-this.O_H)*app.t_s-this.E_H, app.t_s, app.t_s);
				}
			}
		}
	},
	
	// Takes care of all the drawing
	drawSprites : function(){
		let posX = Math.floor(this.player.position.x/app.t_s);
		let posY = Math.floor(this.player.position.y/app.t_s);

		for(let i=this.O_H; i<(this.O_H + this.W_H + (this.S_H == 1 ? 1 : 0)); i++){
			for(let j=this.O_W; j<(this.O_W + this.W_W + (this.S_W == 1 ? 1 : 0)); j++){
				if(app.objects[i][j] != null && app.objects[i][j].r == 1){
					app.objects[i][j].o.draw(this.ctx, this.O_W, this.O_H, this.E_W, this.E_H);
				}
				if(j==posX && i == posY){
					this.ctx.globalAlpha = 1.0;
					this.player.draw(this.ctx, posX, posY, this.O_W, this.O_H, this.S_W, this.S_H);
					this.ctx.globalAlpha = 0.9;
				}
			}
		}

		// // Draw enemies
		// for(var i = 0; i < this.enemies.length; i++)
		// {
		// 	this.enemies[i].draw(this.ctx);
		// }
		
		// // Draw emitters
		// for(var i = 0; i < this.emitters.length; i++)
		// {
		// 	this.emitters[i].updateAndDraw(this.ctx);
		// }
		
		// // Draw trees
		// for(var i = 0; i < this.playerTrees.length; i++)
		// {
		// 	this.playerTrees[i].draw(this.ctx);
		// }
		
		// Draw the player
	},
	
	// Takes care of movement and updating
	moveSprites : function(){
		// Move player
		this.movePlayer();
	},
	
	// Triggered when the player clicks the mouse
	doMousedown : function (e){	
		// If in the menu screen, change to the game screen
		if(this.currentGameState == this.GAME_STATE_MENU)
		{
			this.currentGameState = this.GAME_STATE_GAME;
		}
		// If in the game screen, shoot a tree
		else if(this.currentGameState == this.GAME_STATE_GAME)
		{
				
		}
		// If in the game over screen, reset the game and go to the menu
		else if(this.currentGameState == this.GAME_STATE_DEAD)
		{
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
	doMouseMove: function(e){
		this.mouseData = app.utilities.getMouse(e);
	},
	
	// Takes care of player movement on key press
	// Also keeps the player on screen
	movePlayer: function(){
		if(app.keydown[app.KEYBOARD.KEY_LEFT])
		{
			this.player.moveLeft(this.dt);
		} else if(app.keydown[app.KEYBOARD.KEY_RIGHT])
		{
			this.player.moveRight(this.dt);
		} else if(app.keydown[app.KEYBOARD.KEY_UP])
		{
			this.player.moveUp(this.dt);
		} else if(app.keydown[app.KEYBOARD.KEY_DOWN])
		{
			this.player.moveDown(this.dt);
		}
		
		this.player.keepOnScreen();
	},

	// Determines whether two things collide or not
	collides: function (a, b) {
		var distance = a.position.subtract(b.position);
		if(distance.magnitude() < (a.radius + b.radius))
		{
			return true;
		}
		return false;
	},

	// Plays the background music
	startSoundtrack: function(){
		// createjs.Sound.stop();
		// createjs.Sound.play("background",{loop: -1, volume: 0.5});
	}
	
};