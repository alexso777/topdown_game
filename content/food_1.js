"use strict";


app.FoodData_1 = {
	type: "Food_1",
	image: new Image(),
}
app.FoodData_1.image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABKCAMAAAA8LKKKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkI3MzNFNkQxMjM0MDExRUVCNTEyOTU4RTYzNDQ0REQ2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkI3MzNFNkQyMjM0MDExRUVCNTEyOTU4RTYzNDQ0REQ2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QjczM0U2Q0YyMzQwMTFFRUI1MTI5NThFNjM0NDRERDYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QjczM0U2RDAyMzQwMTFFRUI1MTI5NThFNjM0NDRERDYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5AQcP6AAAAYFBMVEWZtktMhDwgTyyOVEROODX2dSH85mA6JzF2pEWqwnFGdDn8sjY6ZjFYjz8jWkGVyE2odCwXPTTOo0X1jS1kiDxum0C6yIGLgjZzPzm/dEp6cTZ9pkEmXCtTiT5AmUAAAADivG3NAAAAIHRSTlP/////////////////////////////////////////AFxcG+0AAARKSURBVHjarJjrmqMgDIaF0pVSQLE6rYL2/u9yExCPWDvPbvqjiuTNlwN2nsneh9Yv7HhX9gFA5s9vARCT8NvCODmSkQYQMP6zMA4L3wIwZW6z7LYE3LLM8mQxEgAIlhU/OysKkirGDqBUw3lRQN4r91tRFJw3zfUM0PfWFt5uW38wa69gHwGNigAUcfupfir8Hpcsf4BdjwFOWjsBwDIMmM331v75c78/liI2AAH+fPaoHgiY7qETHtCmAc7JXqGCnmRj/Afuv16rcEugvZxX9yfVRwDlAWoEVBEQbi3xT6t7rU8A3Cqlel5wLe5gQtsCV6C9+LSppXOfU0ANhNiCG4kACQAc5fhMpQHgTupr+yi9hoY3NrON6oToVM0zXOAjAEZ1gVgAxPDErtlxI343WhvNp5UR0CuRBHRlBS16VOW82Z/ilXvT4JFKAmh5vYei2w/WI1IJugdI2V0q8L+X5bF7iE+EkHIDcI4MknbgX2nNj/x5eEEKKRSJSUwAoYQWFRjVDfZgDDkVHy54iE8QIHYAoqTWFD5aQ5qkmUKSQGjgbeLzl2ApACoYDeM0FueuCZd4DYAaDBOQyRSQ3kOPeylJvzIVvoifknpcTCiI+6Xs01YvAVsFxgg1AXYaQvzxaAaEMGYLiDvPAM8wSntAVADnTkSWCEbQg+GU3DtG1IECNbr3RC3FhK5B98LZHqVuFRhKg+66BJsKhSML7qgAQupn13XakICm1MwAY5xzFOOEVsUSqFAQ5UPCyQaDMVP+MDkXNMwAeKEI2cF5fjyfCw1iKgi+G8BQkXQpAIgwelHprSl8U1K0sDsJEB7Q1v2RuY8AHV7Di54mdLgkgM6Ax50iwB++kEkNH7LQEOWa1RzQQIALKJVQMiSLHi00pqPjCZFu5b4ABP+pVW4GYGc7I0NW7gAQNeALhWonIRC44wS18KqFupYl9NnN8enupRrrMBkMJ7QNznD4RS9Xz2L81U+bmTsUdjkJQ/R6oYLyJWewoSb524jpm7UKpwZjKjyE8xO/Lf0HBj6h60SEoKZ7lk8RE4T4K//d30g7DbExejk9HwF0rsEMMAFA6SlgeTDonPY0vcPwC4CZu0bHAtBTwADmNRv2YgExXmKFh2ifAXQEvH4PCE9ZfmkvL2/oxfCCwVKeD8MOkQLkE8AHDqhvAP5BT9nl0kYFL1AfAe3lwtgOkW3DQ/y2nQGTXXA1oSHb+pOLNwzOorO/Cuv9sEFkG/9haNvRK88nQD6y2nY4B0B05nNHryAmz70GBtU5B5A8x9DMf/nEww1DTp6TcwXMMIiXB58ZkIMARtmxggUCR2kPyFliChJz4I1CAUYAzhR654yeAtYQueyCHLb2DYD9HrDaQkQECDIk7BQwkAhI+n8BGIQI8fvDBE4AQ4+A/jB6oojThoRPyv2oC+8U4J3yPwS8E6K/AhwUZLH0/X9x/hnwPijbfwb8FWAASGHBxnnGqeUAAAAASUVORK5CYII=";
app.foodTypes.push(app.FoodData_1.type);

app.Food_1 = function(){
	// Set up the food
	function Food_1(posX, posY){
		this.posX = posX;
		this.posY = posY;
		this.type = app.FoodData_1.type;
		app.objects[posY][posX] = {o:this, r:1};
		app.objects[posY][posX+1] = {o:this, r:0};
	} // end Food Constructor
	
	var p = Food_1.prototype;
		
	// Draw the food
	p.draw = function(ctx, O_W, O_H, E_W, E_H) {
		let image = app.FoodData_1.image;
		ctx.drawImage(image, (this.posX-O_W)*app.t_s-E_W, (this.posY-O_H)*app.t_s-E_H + app.t_s - image.height, image.width, image.height);
	};

	p.doAction = function() {
		app.trainer.workFrame = 1;
		app.food += 5;
		app.objects[this.posY][this.posX] = null;
		app.objects[this.posY][this.posX+1] = null;
		delete this;
	}
	
	return Food_1; 
}();
