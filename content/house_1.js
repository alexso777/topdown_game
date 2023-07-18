"use strict";


app.HouseData_1 = {
	type: "House_1",
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

app.HouseData_1.image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAABqCAMAAABDP6kdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjM0ODREQTU5MjM0MDExRUVBNERBRUMzNDFBNUE2ODlFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjM0ODREQTVBMjM0MDExRUVBNERBRUMzNDFBNUE2ODlFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MzQ4NERBNTcyMzQwMTFFRUE0REFFQzM0MUE1QTY4OUUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MzQ4NERBNTgyMzQwMTFFRUE0REFFQzM0MUE1QTY4OUUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7Jfq30AAAAYFBMVEXQm3IHnNor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";
app.houseTypes.push(app.HouseData_1.type);


app.House_1 = function(){
	
	// Set up the house
	function House_1(posX, posY, direction, health){
		this.type = app.HouseData_1.type;
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
	
	
	var p = House_1.prototype;
		
	// Draw the house
	p.draw = function(ctx, O_W, O_H, E_W, E_H) {
		let image = app.HouseData_1.image;
		ctx.save();
		if(this.health!= app.HouseData_1.health && this.health>0){
			app.draw.line(ctx, new app.Vector((this.posX-O_W)*app.t_s-E_W, (this.posY-O_H)*app.t_s-E_H - image.height/2), new app.Vector((this.posX-O_W)*app.t_s-E_W+image.width, (this.posY-O_H)*app.t_s-E_H - image.height/2), 4, "white");
			app.draw.line(ctx, new app.Vector((this.posX-O_W)*app.t_s-E_W, (this.posY-O_H)*app.t_s-E_H - image.height/2), new app.Vector((this.posX-O_W)*app.t_s-E_W+image.width*this.health/app.HouseData_1.health, (this.posY-O_H)*app.t_s-E_H - image.height/2), 4, "red");
			ctx.globalAlpha = 0.7;
		}
		ctx.drawImage(image, (this.posX-O_W)*app.t_s-E_W, (this.posY-O_H)*app.t_s-E_H + app.t_s - image.height, image.width, image.height);
		ctx.globalAlpha = 1.0;
		ctx.restore();
	};

	p.doAction = function() {
		app.trainer.workFrame = 1;
		if(this.health<app.HouseData_1.health){
			this.health++;
		}
	}	
	return House_1; 
}();
