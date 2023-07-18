"use strict";

app.HouseData_3 = {
	type: "House_3",
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
app.HouseData_3.image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAABVCAMAAAC2ExxlAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjYzOTQ1REY5MjM0MDExRUU4MjhCRDg4N0E4OTgxOTNEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjYzOTQ1REZBMjM0MDExRUU4MjhCRDg4N0E4OTgxOTNEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjM5NDVERjcyMzQwMTFFRTgyOEJEODg3QTg5ODE5M0QiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjM5NDVERjgyMzQwMTFFRTgyOEJEODg3QTg5ODE5M0QiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4PlI/VAAAAYFBMVEUGntwr5vSZ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";
app.houseTypes.push(app.HouseData_3.type);

app.House_3 = function(){
	
	// Set up the house
	function House_3(posX, posY, direction, health){
		this.type = app.HouseData_3.type;
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
	
	
	var p = House_3.prototype;
		
	// Draw the house
	p.draw = function(ctx, O_W, O_H, E_W, E_H) {
		let image = app.HouseData_3.image;
		ctx.save();
		if(this.health!= app.HouseData_3.health && this.health>0){
			app.draw.line(ctx, new app.Vector((this.posX-O_W)*app.t_s-E_W, (this.posY-O_H)*app.t_s-E_H - image.height/2), new app.Vector((this.posX-O_W)*app.t_s-E_W+image.width, (this.posY-O_H)*app.t_s-E_H - image.height/2), 4, "white");
			app.draw.line(ctx, new app.Vector((this.posX-O_W)*app.t_s-E_W, (this.posY-O_H)*app.t_s-E_H - image.height/2), new app.Vector((this.posX-O_W)*app.t_s-E_W+image.width*this.health/app.HouseData_3.health, (this.posY-O_H)*app.t_s-E_H - image.height/2), 4, "red");
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
	return House_3; 
}();
