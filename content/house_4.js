"use strict";

app.HouseData_4 = {
	type: "House_4",
	health: 8,
	image: new Image(),
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
app.HouseData_4.image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAABTCAMAAABgSv94AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjc0QzFBNzE0MjM0MDExRUU4RkYwQTA4M0NFMThFMkI0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjc0QzFBNzE1MjM0MDExRUU4RkYwQTA4M0NFMThFMkI0Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NzRDMUE3MTIyMzQwMTFFRThGRjBBMDgzQ0UxOEUyQjQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NzRDMUE3MTMyMzQwMTFFRThGRjBBMDgzQ0UxOEUyQjQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6kI3DeAAAAYFBMVEWgWln7mJta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";
app.houseTypes.push(app.HouseData_4.type);

app.House_4 = function(){
	
	// Set up the house
	function House_4(posX, posY, direction, health){
		this.type = app.HouseData_4.type;
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
	
	
	var p = House_4.prototype;
		
	// Draw the house
	p.draw = function(ctx, O_W, O_H, E_W, E_H) {
		let image = app.HouseData_4.image;
		ctx.save();
		if(this.health!= app.HouseData_4.health && this.health>0){
			app.draw.line(ctx, new app.Vector((this.posX-O_W)*app.t_s-E_W, (this.posY-O_H)*app.t_s-E_H - image.height/2), new app.Vector((this.posX-O_W)*app.t_s-E_W+image.width, (this.posY-O_H)*app.t_s-E_H - image.height/2), 4, "white");
			app.draw.line(ctx, new app.Vector((this.posX-O_W)*app.t_s-E_W, (this.posY-O_H)*app.t_s-E_H - image.height/2), new app.Vector((this.posX-O_W)*app.t_s-E_W+image.width*this.health/app.HouseData_4.health, (this.posY-O_H)*app.t_s-E_H - image.height/2), 4, "red");
			ctx.globalAlpha = 0.7;
		}
		ctx.drawImage(image, (this.posX-O_W)*app.t_s-E_W, (this.posY-O_H)*app.t_s-E_H + app.t_s - image.height, image.width, image.height);
		ctx.globalAlpha = 1.0;
		ctx.restore();
	};

	p.doAction = function() {
		app.trainer.workFrame = 1;
		window.open("https://supermario-game.com/", "_blank");
	}	
	return House_4; 
}();
