// tree.js
// dependencies: none

"use strict";
var app = app || {};

let treeImage = new Image();
treeImage.src = "data:image/gif;base64,R0lGODlhEAAQALMAAAAAAP///0IpMRkQIRk6QilaQkKMSmPFSv///wAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAAAIACwAAAAAEAAQAAAETBDJicagmA5zbtbcYXhfFXZlVRjh+A3rKZISbMSnOw3EWsQi3a7nYxVoFYJluVTufAUC8cfxwKi/IsvK67G+N8uumWW+BgKBOFVbUyIAOw==";

let treeRootImage = new Image();
treeRootImage.src = "data:image/gif;base64,R0lGODlhCAAIAKIAAAAAAP///0IpMRkQIealc7VrUnNCOv///yH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAAAHACwAAAAACAAIAAADFXi6fDPtEbgGKVSNYrITHTOA3hgeCQA7";

let treeImage_1 = new Image();
treeImage_1.src = "data:image/gif;base64,R0lGODlhEAAQAKIAAAAAAP///xkQIRk6QilaQkKMSmPFSv///yH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAAAHACwAAAAAEAAQAAADVngqLPrwsGJMYfGJyk3DS0FxU3U5AiVaW+dJhBh/nMgQOFNPszSkLlaB4JCIRiYbMRQ7HolFAU5GxS1hg9h0OMhGu9ZsltAt+rpjcjkiQLt/GcmnAUkAADs=";

let treeRootImage_1 = new Image();
treeRootImage_1.src = "data:image/gif;base64,R0lGODlhCAAIAKIAAAAAAP///0IpMRkQIbVrUnNCOv///wAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAAAGACwAAAAACAAIAAADFmhqM6uDELdGmbAJ4eJs0EVB25g9RgIAOw==";

app.TreeData = {
	type: "Tree",
	treeImages: [treeImage,treeImage_1],
	rootImages: [treeRootImage, treeRootImage_1],
	health: 4,
}
app.Tree = function(){
	
	// Set up the tree
	function Tree(posX, posY, style, isRoot){
		this.posX = posX;
		this.posY = posY;
		this.type = app.TreeData.type;
		this.style = style;
		this.isRoot = isRoot;
		this.width = 2;
		this.height = 1;
		this.health = app.TreeData.health;
		app.objects[posY][posX] = {o: this, r: 1};
		app.objects[posY][posX+1] = {o: this, r: 0};
	} // end Tree Constructor
	
	
	var p = Tree.prototype;
		
	// Draw the tree
	p.draw = function(ctx, O_W, O_H, E_W, E_H) {
		let image;
		if(this.isRoot){
			image = app.TreeData.rootImages[this.style];
		} else {
			image = app.TreeData.treeImages[this.style];
		}
		if(this.health!= app.TreeData.health && this.health>0){
			app.draw.line(ctx, new app.Vector((this.posX-O_W)*app.t_s-E_W, (this.posY-O_H)*app.t_s-E_H - image.height/2), new app.Vector((this.posX-O_W)*app.t_s-E_W+image.width, (this.posY-O_H)*app.t_s-E_H - image.height/2), 1, "white");
			app.draw.line(ctx, new app.Vector((this.posX-O_W)*app.t_s-E_W, (this.posY-O_H)*app.t_s-E_H - image.height/2), new app.Vector((this.posX-O_W)*app.t_s-E_W+image.width*this.health/app.TreeData.health, (this.posY-O_H)*app.t_s-E_H - image.height/2), 1, "red");
		}
		ctx.drawImage(image, (this.posX-O_W)*app.t_s-E_W, (this.posY-O_H)*app.t_s-E_H + app.t_s - image.height, image.width, image.height);
	};

	p.doAction = function() {
		app.player.workFrame = 1;
		this.health--;
		if(this.health<=0){
			app.wood += 5;
			if(!this.isRoot){
				this.isRoot = true;
				app.objects[this.posY][this.posX+1] = null;
				this.health = app.TreeData.health;
			} else {
				app.objects[this.posY][this.posX] = null;
				app.objects[this.posY][this.posX+1] = null;
				delete this;
			}
		}
	}
	
	return Tree; 
}();
