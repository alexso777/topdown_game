// house.js
// dependencies: none

"use strict";
var app = app || {};

let houseImage = new Image();
houseImage.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAABqCAMAAABDP6kdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjM0ODREQTU5MjM0MDExRUVBNERBRUMzNDFBNUE2ODlFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjM0ODREQTVBMjM0MDExRUVBNERBRUMzNDFBNUE2ODlFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MzQ4NERBNTcyMzQwMTFFRUE0REFFQzM0MUE1QTY4OUUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MzQ4NERBNTgyMzQwMTFFRUE0REFFQzM0MUE1QTY4OUUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7Jfq30AAAAYFBMVEXQm3IHnNor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";

let houseImage_1 = new Image();
houseImage_1.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAByCAMAAACsuinrAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQ4RDZGMkFCMjM0MDExRUU5NDE4Q0IzMjY4QjkxRUFCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQ4RDZGMkFDMjM0MDExRUU5NDE4Q0IzMjY4QjkxRUFCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDhENkYyQTkyMzQwMTFFRTk0MThDQjMyNjhCOTFFQUIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDhENkYyQUEyMzQwMTFFRTk0MThDQjMyNjhCOTFFQUIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7G7cMcAAAAYFBMVEW7SS8XYZ3I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";

let houseImage_2 = new Image();
houseImage_2.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAABVCAMAAAC2ExxlAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjYzOTQ1REY5MjM0MDExRUU4MjhCRDg4N0E4OTgxOTNEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjYzOTQ1REZBMjM0MDExRUU4MjhCRDg4N0E4OTgxOTNEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjM5NDVERjcyMzQwMTFFRTgyOEJEODg3QTg5ODE5M0QiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjM5NDVERjgyMzQwMTFFRTgyOEJEODg3QTg5ODE5M0QiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4PlI/VAAAAYFBMVEUGntwr5vSZ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";

let houseImage_3 = new Image();
houseImage_3.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAABTCAMAAABgSv94AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjc0QzFBNzE0MjM0MDExRUU4RkYwQTA4M0NFMThFMkI0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjc0QzFBNzE1MjM0MDExRUU4RkYwQTA4M0NFMThFMkI0Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NzRDMUE3MTIyMzQwMTFFRThGRjBBMDgzQ0UxOEUyQjQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NzRDMUE3MTMyMzQwMTFFRThGRjBBMDgzQ0UxOEUyQjQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6kI3DeAAAAYFBMVEWgWln7mJta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";

app.HouseData = {
	type: "House",
	health: 8,
	houseImages: [houseImage, houseImage_1, houseImage_2, houseImage_3],
	checkSpace(posX, posY, direction) {
		if(direction==0){
			posX = posX;
			posY = posY-1;
		} else if(direction==1){
			posX = posX+1;
			posY = posY;
		} else if(direction==2){
			posX = posX;
			posY = posY+1;
		} else if(direction==3){
			posX = posX-4;
			posY = posY;
		}

		if(app.isOutside(posX, posY)) return false;

		for(let i=0; i<4; i++){
			if(app.objects[posY][posX+i] != null || app.wholeObstacle.includes(app.terrains[posY*app.w_w+posX+i]))
				return false;
		}
		return true;
	}
}

app.House = function(){
	
	// Set up the house
	function House(posX, posY, style, direction, health){
		this.type = app.HouseData.type;
		this.style = style;
		this.width = 4;
		this.height = 1;
		this.health = health;
		if(direction==0){
			this.posX = posX;
			this.posY = posY-1;
		} else if(direction==1){
			this.posX = posX+1;
			this.posY = posY;
		} else if(direction==2){
			this.posX = posX;
			this.posY = posY+1;
		} else if(direction==3){
			this.posX = posX-4;
			this.posY = posY;
		}
		for(let i=0; i<4; i++){
			app.objects[this.posY][this.posX+i] = {o:this, r: (i==0) ? 1 : 0};
		}
	} // end House Constructor
	
	
	var p = House.prototype;
		
	// Draw the house
	p.draw = function(ctx, O_W, O_H, E_W, E_H) {
		let image = app.HouseData.houseImages[this.style];
		ctx.save();
		if(this.health!= app.HouseData.health && this.health>0){
			app.draw.line(ctx, new app.Vector((this.posX-O_W)*app.t_s-E_W, (this.posY-O_H)*app.t_s-E_H - image.height/2), new app.Vector((this.posX-O_W)*app.t_s-E_W+image.width, (this.posY-O_H)*app.t_s-E_H - image.height/2), 1, "white");
			app.draw.line(ctx, new app.Vector((this.posX-O_W)*app.t_s-E_W, (this.posY-O_H)*app.t_s-E_H - image.height/2), new app.Vector((this.posX-O_W)*app.t_s-E_W+image.width*this.health/app.HouseData.health, (this.posY-O_H)*app.t_s-E_H - image.height/2), 1, "red");
			ctx.globalAlpha = 0.7;
		}
		ctx.drawImage(image, (this.posX-O_W)*app.t_s-E_W, (this.posY-O_H)*app.t_s-E_H + app.t_s - image.height, image.width, image.height);
		ctx.globalAlpha = 1.0;
		ctx.restore();
	};

	p.doAction = function() {
		app.player.workFrame = 1;
		if(this.style == 0 && this.health<app.HouseData.health){
			this.health++;
		} else if(this.style == 1){
			window.open("https://tetris.com/play-tetris", "_blank");
		} else if (this.style == 2){
			window.open("https://supermario-game.com/", "_blank");
		} else if (this.style == 3){
			window.open("https://supermario-game.com/", "_blank");
		}
	}	
	return House; 
}();
