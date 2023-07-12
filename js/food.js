// food.js
// dependencies: none

"use strict";
var app = app || {};

let foodImage_0 = new Image();
foodImage_0.src = "data:image/gif;base64,R0lGODlhCAAIAKIAAAAAAP////8ASnshUqXWxf/Orf///wAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAAAGACwAAAAACAAIAAADE2i63C3iFcgGHAqboQ3x3McQYgIAOw==";

let foodImage_1 = new Image();
foodImage_1.src = "data:image/gif;base64,R0lGODlhCAAIALMAAAAAAP////8ASv9zpXshUiEpUqXWxf/Orf///wAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAAAIACwAAAAACAAIAAAEGhBJIaQVRxCLqL7esHUZYV7mKBlFYVhGSrwRADs=";

app.FoodData = {
	type: "Food",
	foodImages: [foodImage_0,foodImage_1],
}

app.Food = function(){
	
	// Set up the food
	function Food(posX, posY, style){
		this.posX = posX;
		this.posY = posY;
		this.type = app.FoodData.type;
		this.style = style;
		this.width = 1;
		this.height = 1;
		app.objects[posY][posX] = {o:this, r:1};
	} // end Food Constructor
	
	
	var p = Food.prototype;
		
	// Draw the food
	p.draw = function(ctx, O_W, O_H, E_W, E_H) {
		let image = app.FoodData.foodImages[this.style];
		ctx.drawImage(image, (this.posX-O_W)*app.t_s-E_W, (this.posY-O_H)*app.t_s-E_H + app.t_s - image.height, image.width, image.height);
	};

	p.doAction = function() {
		app.food += 10;
		app.objects[this.posY][this.posX] = null;
		delete this;
	}
	
	return Food; 
}();
