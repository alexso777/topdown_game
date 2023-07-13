// person.js
// dependencies: none

"use strict";
var app = app || {};

let characterImage = new Image();
characterImage.src = "data:image/gif;base64,R0lGODlhCAAIALMAAAAAAP///zExUkpKc5yttcXezuaUSs5rOpxCOmspKZRra////wAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAAALACwAAAAACAAIAAAEH3AtQIGcJhsLjv9cgiCJNY0jVxDDQBQUIrQCwikUvkQAOw==";

let characterImage_1 = new Image();
characterImage_1.src = "data:image/gif;base64,R0lGODlhCAAIALMAAAAAAP///60hMTExUkpKc6WtSmtjMf/Orc5rOv+llJxCOmspKf///wAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAAAMACwAAAAACAAIAAAEIpABRRWQa9F8gTiHcEkJmHSFQRBGAQDHsA5Hh7w3o7+vHgEAOw==";

let characterImage_2 = new Image();
characterImage_2.src = "data:image/gif;base64,R0lGODlhCAAIALMAAAAAAP///zEhMZyttcXezuaUSs5rOmspKf///wAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAAAIACwAAAAACAAIAAAEHxCQSQECIw97TykHBxifYUkDIaQAUKTEUJzpKrY4EgEAOw==";

let characterImage_3 = new Image();
characterImage_3.src = "data:image/gif;base64,R0lGODlhCAAIALMAAAAAAP///60hMTEhMUIxSsXezq2Ue/+llJRra////wAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAAAJACwAAAAACAAIAAAEHjAlQIGc5Zxip9Yd8B0WYCAEgRjUMaQDOQkUfd1SBAA7";

let characterImage_4 = new Image();
characterImage_4.src = "data:image/gif;base64,R0lGODlhCAAIALMAAAAAAP///++EnOat72tCc5RarZyttcXezpxCOv///wAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAAAJACwAAAAACAAIAAAEHDAlYAyQ8yB07tybB4DINRZoUY7CMAgrIc/eVEcAOw==";

app.PersonData = {
	type: "Person",
	personImages: [characterImage, characterImage_1, characterImage_2, characterImage_3, characterImage_4],
}

app.Person = function(){
	
	// Set up the person
	function Person(posX, posY, style){
		this.posX = posX;
		this.posY = posY;
		this.type = app.PersonData.type;
		this.style = style;
		this.width = 1;
		this.height = 1;
		app.objects[posY][posX] = {o:this, r:1};
	} // end Person Constructor
	
	
	var p = Person.prototype;
		
	// Draw the person
	p.draw = function(ctx, O_W, O_H, E_W, E_H) {
		let image = app.PersonData.personImages[this.style];
		ctx.drawImage(image, (this.posX-O_W)*app.t_s-E_W, (this.posY-O_H)*app.t_s-E_H + app.t_s - image.height, image.width, image.height);
	};

	p.doAction = function() {
		app.player.chatStatus = Math.floor(Math.random() * 10) + 1;
	}
	
	return Person; 
}();
