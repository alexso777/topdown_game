// tree.js
// dependencies: none

"use strict";
var app = app || {};

app.Tree = function(){
	
	// Set up the tree
	function Tree(xPos,yPos, speedDir){
		// ivars - unique for every instance
		this.position = new app.Vector(xPos, yPos);
		this.active = true;
		this.velocity = speedDir.normalize().scalarMult(300);
		this.width = 3;
		this.height = 3;
		this.radius = (this.width / 2 + this.height / 2) / 2;
		this.color = "#000";
	} // end Tree Constructor
	
	
	var p = Tree.prototype;
		
	// Updates the tree position
	p.update = function(dt) {
		var vel = this.velocity.scalarMult(dt);
		this.position = this.position.add(vel);
		this.active = this.active && inBounds(this.position.x, this.position.y);
	};
	
	// Draw the tree
	p.draw = function(ctx) {
		ctx.fillStyle = this.color;
		ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
	};
	
	// If the tree leaves the screen, return true
	function inBounds(x,y){
		return (y >= -10 || y >= app.topDown.HEIGHT + 10 || x < -10 || x > app.topDown.WIDTH + 10);
	};

	return Tree; 
}();
