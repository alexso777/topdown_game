"use strict";


app.FoodData_2 = {
	type: "Food_2",
	image: new Image(),
}

app.FoodData_2.image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAA1CAMAAADGWB2eAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjNEOUUxNDREMjMzRDExRUU5MkM3OTBCMEJFMTk1NjUxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjNEOUUxNDRFMjMzRDExRUU5MkM3OTBCMEJFMTk1NjUxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6M0Q5RTE0NEIyMzNEMTFFRTkyQzc5MEIwQkUxOTU2NTEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6M0Q5RTE0NEMyMzNEMTFFRTkyQzc5MEIwQkUxOTU2NTEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6gjutWAAAAYFBMVEXnW2M5j0lTTT2fz4XnO0RjyU1GkkYnUzw0dkGnKTVhZUCPLzUkWT1UqkJyPTgsZTpZtUq0aEoeTDeTQDulHjBPn0PFO0NteEBbmUD5eX48gEVTpkEmXEI+iUhAmUAAAABBKW+EAAAAIHRSTlP/////////////////////////////////////////AFxcG+0AAAN8SURBVHjavJftlpsgEIbFNaCAaEU0QbD3f5edAeJX1O72R9/NOUbAh5dhBjfZ7wt5b/sK5JOuxmVXHYTYHiQ8fPH2HwCc82EYqoHzsW0nY34CQMdE98PrlRVF3//6+no82qt1XAJEX+0A9tsA742pHw8udIFSYnxE1cacIM4A09Q+HrkSEaDeAIjEdwAlpQEw8vEXCoK4ACZKy78AnLR1HQCfgva6ttLdA5iFcVN9Bmixw7IbgHPOWooTgdeDiZZSgwBqLQy7BDSEzAgw1h4B1keA980lIGe55ehgMtS3j7ZNkBZFiakj4NpBX0HycwTASMx/G2JRhxxKzbcOsHj6sY1DYaSP62gJiSub7h1U/ZBlQ1Fp/sShBjTXbVu3o9JK8xWgFKT5GUBkr1dRDH3/jINxN3DrRzSm69BYz57AQqsrQIYAsQBQz+eI54p+PmEXzATbiLdnAKUGzH2t1AZQmwrLusCqHOvJzyoVafVexQdg2AGmqYrnwoDhnTzhff9C4GIiW5Ioz9WgB63yPCZdklAQW+AKMc4QQS4E3hZaiB3AoXIFyiGfPVk8GKV0MlbiOcPXld4B6OpgBXByC2g8KRtQSd4HeaCYJnKVk6GnlC7csnc2bQC0CQC/CLa+npzMBRqTLvSUUuLz4ghgrIHMLUF2BZjZ0LksG45qYg+MCbeOyR2g65y/FCHwIbtbKrtuA5hn2UnqfyLXyXneARhG/05EVUJUuBXeuoZ9ADrnSuqJp2h363gxrrCoOPTQ0rluBcyo4KAMUUxROtixfNT4rtScwwjnggPQCgAHTsIF1MepdvNDDbyrnWHSfQJCswsAAQXf290qNoCKxYFnDrA9x2oJJ5PaEIjFooopfecAOArrNRS82FqwqQYqSOqDg3UXooM+nkxwCNnSxk8JDlSui2EodB4B4OCQSDEGoSRTueXdIvgnRy7F+nawA7DkIACKVK8bAD0CWMeORxpjMvSwXKNyuJcMn4YrVCn05PDqCk9DOyztCABTia6WqSLAHQUR8zEPF8A8WwkO8C+dTO4cEMaAfNiCLQDUnM+3U0C6OeoUIO8BIdmbC0CoJYhc0AGUWlkTTq13AA6A1canE5may83kh13YANgVgCXA6et9Xtjh4rq9ti5vAe9v8seAnWApcqMuncHHp+8AO+2av/l74RTwkx8c/w3wR4ABABsBNlHNna1qAAAAAElFTkSuQmCC";
app.foodTypes.push(app.FoodData_2.type);

app.Food_2 = function(){
	// Set up the food
	function Food_2(posX, posY){
		this.posX = posX;
		this.posY = posY;
		this.type = app.FoodData_2.type;
		app.objects[posY][posX] = {o:this, r:1};
		app.objects[posY][posX+1] = {o:this, r:0};
	} // end Food Constructor
	
	var p = Food_2.prototype;
		
	// Draw the food
	p.draw = function(ctx, O_W, O_H, E_W, E_H) {
		let image = app.FoodData_2.image;
		ctx.drawImage(image, (this.posX-O_W)*app.t_s-E_W, (this.posY-O_H)*app.t_s-E_H + app.t_s - image.height, image.width, image.height);
	};

	p.doAction = function() {
		app.trainer.workFrame = 1;
		app.food += 5;
		app.objects[this.posY][this.posX] = null;
		app.objects[this.posY][this.posX+1] = null;
		delete this;
	}
	
	return Food_2; 
}();
