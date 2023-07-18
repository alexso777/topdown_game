"use strict";

app.HouseData_2 = {
	type: "House_2",
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
app.HouseData_2.image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAByCAMAAACsuinrAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQ4RDZGMkFCMjM0MDExRUU5NDE4Q0IzMjY4QjkxRUFCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQ4RDZGMkFDMjM0MDExRUU5NDE4Q0IzMjY4QjkxRUFCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDhENkYyQTkyMzQwMTFFRTk0MThDQjMyNjhCOTFFQUIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDhENkYyQUEyMzQwMTFFRTk0MThDQjMyNjhCOTFFQUIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7G7cMcAAAAYFBMVEW7SS8XYZ3I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";
app.houseTypes.push(app.HouseData_2.type);

app.House_2 = function(){
	
	// Set up the house
	function House_2(posX, posY, direction, health){
		this.type = app.HouseData_2.type;
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
	
	
	var p = House_2.prototype;
		
	// Draw the house
	p.draw = function(ctx, O_W, O_H, E_W, E_H) {
		let image = app.HouseData_2.image;
		ctx.save();
		if(this.health!= app.HouseData_2.health && this.health>0){
			app.draw.line(ctx, new app.Vector((this.posX-O_W)*app.t_s-E_W, (this.posY-O_H)*app.t_s-E_H - image.height/2), new app.Vector((this.posX-O_W)*app.t_s-E_W+image.width, (this.posY-O_H)*app.t_s-E_H - image.height/2), 4, "white");
			app.draw.line(ctx, new app.Vector((this.posX-O_W)*app.t_s-E_W, (this.posY-O_H)*app.t_s-E_H - image.height/2), new app.Vector((this.posX-O_W)*app.t_s-E_W+image.width*this.health/app.HouseData_2.health, (this.posY-O_H)*app.t_s-E_H - image.height/2), 4, "red");
			ctx.globalAlpha = 0.7;
		}
		ctx.drawImage(image, (this.posX-O_W)*app.t_s-E_W, (this.posY-O_H)*app.t_s-E_H + app.t_s - image.height, image.width, image.height);
		ctx.globalAlpha = 1.0;
		ctx.restore();
	};

	p.doAction = function() {
		app.trainer.workFrame = 1;
		window.open("https://tetris.com/play-tetris", "_blank");
	}	
	return House_2; 
}();
