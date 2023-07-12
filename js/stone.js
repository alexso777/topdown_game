// stone.js
// dependencies: none

"use strict";
var app = app || {};

let stoneImage = new Image();
stoneImage.src = "data:image/gif;base64,R0lGODlhCAAIALMAAAAAAP///xkQIbW9zlprjIycta29zr3O3v///wAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAAAIACwAAAAACAAIAAAEGRDJOYWlSJxzcxlbIWQEYYSjUBbsmFkdJkUAOw==";

let stoneImage_1 = new Image();
stoneImage_1.src = "data:image/gif;base64,R0lGODlhEAAQAKIAAAAAAP///xkQIVprjIyctb3O3v///wAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAAAGACwAAAAAEAAQAAADOWi63P5wiTnjJCUT8QTO4OYIYCkyXhmeCqkWRMxJnxbL6K3Hw0x5u4GQM9EAhUif7vdDUSLQqNSQAAA7";

let stoneImage_2 = new Image();
stoneImage_2.src = "data:image/gif;base64,R0lGODlhEAAQAKIAAAAAAP///xkQIVprjIyctb3O3v///wAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAAAGACwAAAAAEAAQAAADRGhq0vtQlClgnLhaRvAkWtR5RfgIxJhtaOqBYuqWjaMIg5yiGMzkMh6pggOCZK/GYJnD6YJFZlQ3IDKXUWyoxuVuvo8EADs=";

app.StoneData = {
	type: "Stone",
	stoneImages: [stoneImage,stoneImage_1,stoneImage_2],
}

app.Stone = function(){
	
	// Set up the stone
	function Stone(posX, posY, style){
		this.posX = posX;
		this.posY = posY;
		this.type = app.StoneData.type;
		this.style = style;
		this.width = this.style == 0? 1: 2;
		this.height = 1;
		for(let i=0; i<(this.style ==0? 1: 2); i++){
			app.objects[posY][posX+i] = {o:this, r: (i==0) ? 1 : 0};
		}
	} // end Stone Constructor
	
	
	var p = Stone.prototype;
		
	// Draw the stone
	p.draw = function(ctx, O_W, O_H, E_W, E_H) {
		let image = app.StoneData.stoneImages[this.style];
		ctx.drawImage(image, (this.posX-O_W)*app.t_s-E_W, (this.posY-O_H)*app.t_s-E_H + app.t_s - image.height, image.width, image.height);
	};

	p.doAction = function() {
		app.player.workFrame = 1;
		app.stone += 10;
		app.objects[this.posY][this.posX] = null;
		delete this;
	}
	
	return Stone; 
}();
