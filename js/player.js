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
	speed: 150,
	health: 100,
	image: undefined,
	
	MAXSPEED: 100,
	FRICTION: 60,
	
	// Sets up the player
	init: function(){
		this.position = new app.Vector(150,150);
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
	draw: function(ctx){
		// Draw from the middle
		var halfW = this.width / 2;
		var halfH = this.height / 2;
		
		ctx.save();
		
		if(!app.keydown[app.KEYBOARD.KEY_LEFT] && !app.keydown[app.KEYBOARD.KEY_UP] && !app.keydown[app.KEYBOARD.KEY_RIGHT] && !app.keydown[app.KEYBOARD.KEY_DOWN])
			this.frame = 0;
		// Translate and rotate the character
		ctx.translate(this.position.x, this.position.y);
		ctx.drawImage(app.PLAYER_IMAGES[this.direction][this.frame], -halfW, -halfH, this.width, this.height)
		if(app.keydown[app.KEYBOARD.KEY_LEFT] || !app.keydown[app.KEYBOARD.KEY_UP] || !app.keydown[app.KEYBOARD.KEY_RIGHT] || !app.keydown[app.KEYBOARD.KEY_DOWN])
			this.frame = (this.frame+1)%4;
		
		ctx.restore();
	},
	
	// Moves the player to the left
	moveLeft: function(dt){
		this.direction = 3;
		this.acceleration.x -= this.speed;
	},
	
	// Moves the player to the right
	moveRight: function(dt){
		this.direction = 1;
		this.acceleration.x += this.speed;
	},
	
	// Moves the player up
	moveUp: function(dt){
		this.direction = 0;
		this.acceleration.y -= this.speed;
	},
	
	// Moves the player to the right
	moveDown: function(dt){
		this.direction = 2;
		this.acceleration.y += this.speed;
	},
	
	// Keeps the player from leaving the screen
	keepOnScreen: function(screenWidth, screenHeight)
	{
		var halfW = this.width / 2;
		var halfH = this.height / 2;
		if(this.position.x - halfW < 0)
		{
			this.position.x = halfW;
		}
		else if(this.position.x + halfW > screenWidth)
		{
			this.position.x = screenWidth - halfW;
		}
		
		if(this.position.y - halfH < 0)
		{
			this.position.y = halfH;
		}
		else if(this.position.y + halfH > screenHeight)
		{
			this.position.y = screenHeight - halfH;
		}
	},
	
	// used to change the speed of the player(Purchasing the upgrade)
	setSpeed: function(number){
		this.MAXSPEED = 100 + (number * 20);
	}
};