"use strict";
var app = app || {};

app.player = {
	color: "black",
	position: undefined,
	velocity: undefined,
	acceleration: undefined,
	width: 16,
	height: 20,
	direction: 0,
	frame: 0,
	speed: 80,
	health: 100,
	image: undefined,
	chatStatus: false,

	MAXSPEED: 80,
	FRICTION: 60,
	
	// Sets up the player
	init: function(){
		this.position = new app.Vector(200,150);
		this.velocity = new app.Vector(0,0);
		this.acceleration = new app.Vector(0,0);
	},
	
	// Updates the players position and other vectors
	update: function(dt){

		this.velocity = this.velocity.add(this.acceleration);
		this.velocity = this.velocity.clamp(this.MAXSPEED);
		var vel = this.velocity.scalarMult(dt);
		this.position = this.position.add(vel);
		this.velocity = this.velocity.scalarMult(1/this.FRICTION);
		this.acceleration = this.acceleration.reset();
	},
	
	// Draws the player
	draw: function(ctx, posX, posY, O_W, O_H, S_W, S_H){
		// Draw from the middle
		var halfW = this.width / 2;
		var halfH = this.height / 2;

		let eX = S_W == 1 ? 0 : (this.position.x - posX*app.t_s);
		let eY = S_H == 1 ? 0 : (this.position.y - posY*app.t_s);

		ctx.save();
		
		if(this.chatStatus || (!app.keydown[app.KEYBOARD.KEY_LEFT] && !app.keydown[app.KEYBOARD.KEY_UP] && !app.keydown[app.KEYBOARD.KEY_RIGHT] && !app.keydown[app.KEYBOARD.KEY_DOWN]))
			this.frame = 0;
		// Translate and rotate the character
		ctx.drawImage(app.PLAYER_IMAGES[this.direction][Math.floor(this.frame/4)], (posX - O_W)*app.t_s + eX - halfW, (posY - O_H)*app.t_s + eY -halfH, this.width, this.height)
		if(!this.chatStatus && (app.keydown[app.KEYBOARD.KEY_LEFT] || app.keydown[app.KEYBOARD.KEY_UP] || app.keydown[app.KEYBOARD.KEY_RIGHT] || app.keydown[app.KEYBOARD.KEY_DOWN]))
			this.frame = (this.frame+1)%16;
		
		ctx.restore();
	},
	
	// Moves the player to the left
	moveLeft: function(dt){
		let posX = Math.floor(this.position.x/app.t_s);
		let posY = Math.floor(this.position.y/app.t_s);
		let x = Math.floor((this.position.x-app.t_s/2)/app.t_s);
		let y = Math.floor(this.position.y/app.t_s);
		if (this.isOutside(x,y) || (!this.isCollision(posX, posY) && (this.isCollision(x,y)))) return;
		this.direction = 3;
		this.acceleration.x -= this.speed;
	},
	
	// Moves the player to the right
	moveRight: function(dt){
		let posX = Math.floor(this.position.x/app.t_s);
		let posY = Math.floor(this.position.y/app.t_s);
		let x = Math.floor((this.position.x+app.t_s/2)/app.t_s);
		let y = Math.floor(this.position.y/app.t_s);
		if (this.isOutside(x,y) || (!this.isCollision(posX, posY) && (this.isCollision(x,y)))) return;
		this.direction = 1;
		this.acceleration.x += this.speed;
	},
	
	// Moves the player up
	moveUp: function(dt){
		let posX = Math.floor(this.position.x/app.t_s);
		let posY = Math.floor(this.position.y/app.t_s);
		let x = Math.floor(this.position.x/app.t_s);
		let y = Math.floor((this.position.y-app.t_s/2)/app.t_s);
		if (this.isOutside(x,y) || (!this.isCollision(posX, posY) && (this.isCollision(x,y)))) return;
		this.direction = 0;
		this.acceleration.y -= this.speed;
	},
	
	// Moves the player to the right
	moveDown: function(dt){
		let posX = Math.floor(this.position.x/app.t_s);
		let posY = Math.floor(this.position.y/app.t_s);
		let x = Math.floor(this.position.x/app.t_s);
		let y = Math.floor((this.position.y+app.t_s/2)/app.t_s);
		if (this.isOutside(x,y) || (!this.isCollision(posX, posY) && (this.isCollision(x,y)))) return;
		this.direction = 2;
		this.acceleration.y += this.speed;
	},

	ask: function(){
		let x,y;
		if(this.direction == 0){
			x = Math.floor(this.position.x/app.t_s);
			y = Math.floor((this.position.y-8)/app.t_s);
		} else if(this.direction == 1){
			x = Math.floor((this.position.x+8)/app.t_s);
			y = Math.floor(this.position.y/app.t_s);
		} else if(this.direction == 2){
			x = Math.floor(this.position.x/app.t_s);
			y = Math.floor((this.position.y+8)/app.t_s);
		} else if(this.direction == 3){
			x = Math.floor((this.position.x-8)/app.t_s);
			y = Math.floor(this.position.y/app.t_s);
		}

		if (this.isOutside(x,y) || app.objects[y][x] == null || app.objects[y][x].i != 4) return;

		this.chatStatus = true;
	},

	chat: function(ctx) {
		if(app.keydown[app.KEYBOARD.KEY_ENTER])
		{
			this.chatStatus = false;
		} else {
			ctx.save();
			app.draw.rect(ctx, 40, 120, 400, 80, "brown");
			app.draw.text(ctx, "Hello! Nice to meet you here. What do you want from me?", 60, 140, 12, "white");
			app.draw.text(ctx, "Press Enter to exit!", 60, 160, 12, "white");
			ctx.restore();
		}
	},

	isOutside: function (x, y) {
		if(x<0 || y<0 || x>=app.w_w || y>=app.w_h)
			return true;
		return false;
	},

	isCollision: function (x, y) {
		if(app.objects[y][x] != null)
			return true;
		return false;
	},
	
	// Keeps the player from leaving the screen
	keepOnScreen: function()
	{
		var halfW = this.width / 2;
		var halfH = this.height / 2;
		if(this.position.x - halfW < 0)
		{
			this.position.x = halfW;
		}
		else if(this.position.x + halfW > app.w_w*app.t_s)
		{
			this.position.x = app.w_w*app.t_s - halfW;
		}
		
		if(this.position.y - halfH < 0)
		{
			this.position.y = halfH;
		}
		else if(this.position.y + halfH > app.w_h*app.t_s)
		{
			this.position.y = app.w_h*app.t_s - halfH;
		}
	},
	
	// used to change the speed of the player(Purchasing the upgrade)
	setSpeed: function(number){
		this.MAXSPEED = 100 + (number * 20);
	}
};