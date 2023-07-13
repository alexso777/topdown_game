// house.js
// dependencies: none

"use strict";
var app = app || {};

let houseImage = new Image();
houseImage.src = "data:image/gif;base64,R0lGODlhEAAQAKIAAAAAAP///0IpMRkQIbVrUnNCOv///wAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAAAGACwAAAAAEAAQAAADUGi6NsNwuVJcVE4UTYiVA0VpVGcNAkkWXemhY+ya4ZqyhJttqTDhlEzv96OlirlKqNIIDTpQj+/R0DwdHimzWnllYVSw12TFWB3oHbV5YRsSADs=";

let houseImage_1 = new Image();
houseImage_1.src = "data:image/gif;base64,R0lGODlhEAAgALMAAAAAAP///0IpMRkQIealc7VrUnNCOtbOzvfv7+be3v///wAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAAAKACwAAAAAEAAgAAAEtVDJOeqYGI9iTLkZJXTcFyrD2HkeKAqCVRWmlBrjQNAbd92qjUFI+wxwnVghxvLdOrPhsWTBDQ7HK5Y1s2BlYGFuOqURKjvacIw0hi0JS22QSBziwzrCYrvjPwkIexoHdykfCIEuKH5kcXGEWGZ0A4MUhjJ6i1p1nYGWKHSdiYmKP3lxX3p7Z1mGqpqtOXWqiTpGMFJhaRUwKiUEwUW9viMjJR4mQCvHySC9JCRqFRpv1CfYExEAOw==";

let houseImage_2 = new Image();
houseImage_2.src = "data:image/gif;base64,R0lGODlhEAAQALMAAAAAAP///0IpMRkQISkpQjpCY1prjLVrUnNCOv///wAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAAAJACwAAAAAEAAQAAAETTDJSYe1VF4rkBdDsnlkiXCdiaQrR3ZCbKKymYJDHcNzvrKfHU4mjG0uwqPldDoeDgODdHCCUi1Pz6VpfXq/4KVqfCkQCubzOY1RukMRADs=";

app.HouseData = {
	type: "House",
	health: 8,
	houseImages: [houseImage, houseImage_1,houseImage_2],
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
			posX = posX-2;
			posY = posY;
		}

		if(app.isOutside(posX, posY)) return false;
		if(app.wholeObstacle.includes(app.terrains[posY*app.w_w+posX])) return false;

		for(let i=0; i<2; i++){
			if(app.objects[posY][posX+i] != null)
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
		this.width = 2;
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
			this.posX = posX-2;
			this.posY = posY;
		}
		for(let i=0; i<2; i++){
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
		}
	}	
	return House; 
}();
