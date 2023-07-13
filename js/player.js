"use strict";
var app = app || {};

app.player = {
	color: "black",
	position: undefined,
	velocity: undefined,
	acceleration: undefined,
	width: 8,
	height: 8,
	direction: 0,
	frame: 0,
	speed: 80,
	health: 100,
	image: undefined,
	chatStatus: false,
	workFrame: 0,

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

		eX = Math.floor(eX);
		eY = Math.floor(eY);

		ctx.save();
		
		if(this.workFrame ==0 && (this.chatStatus || (!app.keydown[app.KEYBOARD.KEY_LEFT] && !app.keydown[app.KEYBOARD.KEY_UP] && !app.keydown[app.KEYBOARD.KEY_RIGHT] && !app.keydown[app.KEYBOARD.KEY_DOWN])))
			this.frame = 0;
		// Translate and rotate the character
		ctx.drawImage(app.PLAYER_IMAGES[this.direction][Math.floor(this.frame/4)], (posX - O_W)*app.t_s + eX - halfW, (posY - O_H)*app.t_s + eY -halfH, this.width, this.height)
		if(!this.chatStatus && (app.keydown[app.KEYBOARD.KEY_LEFT] || app.keydown[app.KEYBOARD.KEY_UP] || app.keydown[app.KEYBOARD.KEY_RIGHT] || app.keydown[app.KEYBOARD.KEY_DOWN]))
			this.frame = (this.frame+1)%16;
		else if(!this.chatStatus && this.workFrame>0)
			this.frame = (this.frame+1)%8;
		ctx.restore();
	},
	
	// Moves the player to the left
	moveLeft: function(dt){
		let posX = Math.floor(this.position.x/app.t_s);
		let posY = Math.floor(this.position.y/app.t_s);
		let x = Math.floor((this.position.x-app.t_s/2)/app.t_s);
		let y = Math.floor(this.position.y/app.t_s);
		this.direction = 3;
		if (app.isOutside(x,y) || (!this.isCollision(posX, posY) && (this.isCollision(x,y)))) return;
		this.acceleration.x -= this.speed;
	},
	
	// Moves the player to the right
	moveRight: function(dt){
		let posX = Math.floor(this.position.x/app.t_s);
		let posY = Math.floor(this.position.y/app.t_s);
		let x = Math.floor((this.position.x+app.t_s/2)/app.t_s);
		let y = Math.floor(this.position.y/app.t_s);
		this.direction = 1;
		if (app.isOutside(x,y) || (!this.isCollision(posX, posY) && (this.isCollision(x,y)))) return;
		this.acceleration.x += this.speed;
	},
	
	// Moves the player up
	moveUp: function(dt){
		let posX = Math.floor(this.position.x/app.t_s);
		let posY = Math.floor(this.position.y/app.t_s);
		let x = Math.floor(this.position.x/app.t_s);
		let y = Math.floor((this.position.y-app.t_s/2)/app.t_s);
		this.direction = 0;
		if (app.isOutside(x,y) || (!this.isCollision(posX, posY) && (this.isCollision(x,y)))) return;
		this.acceleration.y -= this.speed;
	},
	
	// Moves the player to the right
	moveDown: function(dt){
		let posX = Math.floor(this.position.x/app.t_s);
		let posY = Math.floor(this.position.y/app.t_s);
		let x = Math.floor(this.position.x/app.t_s);
		let y = Math.floor((this.position.y+app.t_s/2)/app.t_s);
		this.direction = 2;
		if (app.isOutside(x,y) || (!this.isCollision(posX, posY) && (this.isCollision(x,y)))) return;
		this.acceleration.y += this.speed;
	},

	// Takes care of player movement on key press
	// Also keeps the player on screen
	doAction: function(){
		if(this.workFrame == 0){
			if(app.keydown[app.KEYBOARD.KEY_CREATE])
			{
				let x = Math.floor(this.position.x/app.t_s);
				let y = Math.floor(this.position.y/app.t_s);
				if(app.HouseData.checkSpace(x, y, this.direction)){
					console.log(app.wood, app.stone, app.social);
					if(app.wood >= 20 && app.stone >= 30){
						new app.House(x, y, 0, this.direction);
						app.wood -= 20;
						app.stone -= 20;
					} else if (app.social >= 2){
						new app.House(x, y, 0, this.direction);
						app.social -= 2;
					}
				}
			}
			else if(app.keydown[app.KEYBOARD.KEY_SPACE])
			{
				let x,y;
				if(this.direction == 0){
					x = Math.floor(this.position.x/app.t_s);
					y = Math.floor((this.position.y-app.t_s/2)/app.t_s);
				} else if(this.direction == 1){
					x = Math.floor((this.position.x+app.t_s/2)/app.t_s);
					y = Math.floor(this.position.y/app.t_s);
				} else if(this.direction == 2){
					x = Math.floor(this.position.x/app.t_s);
					y = Math.floor((this.position.y+app.t_s/2)/app.t_s);
				} else if(this.direction == 3){
					x = Math.floor((this.position.x-app.t_s/2)/app.t_s);
					y = Math.floor(this.position.y/app.t_s);
				}
		
				if (app.isOutside(x,y) || app.objects[y][x] == null) return;
				app.objects[y][x].o.doAction();
			}
		} else {
			this.workFrame = (this.workFrame + 1) % 20;
		}
	},

	isCollision: function (x, y) {
		if(app.objects[y][x] != null)
			return true;
		if(app.wholeObstacle.includes(app.terrains[y*app.w_w+x]))
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