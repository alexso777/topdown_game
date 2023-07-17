// draw.js
// dependencies: none
"use strict";
var app = app || {};

app.draw = {
	// Clears part of the screen
   clear : function(ctx, x, y, w, h) {
		ctx.clearRect(x, y, w, h);
	},
	
	// Draws a rectangle
	rect : function(ctx, x, y, w, h, col) {
		ctx.fillStyle = col;
		ctx.fillRect(x, y, w, h);
	},
	
	// Draws a circle
	circle : function(ctx, x, y, r, col) {
		ctx.fillStyle = col;
		ctx.beginPath();
		ctx.arc(x + 5, y + 5, r, 0,  Math.PI * 2, true);
		ctx.closePath();
		ctx.fill();
	},
	
	// Writes text
	text : function(ctx, text, x, y, fontSize, color, maxWidth=1000) {
		ctx.font = ''+fontSize +'px "FFF Forward"';
		ctx.fillStyle = color;
		ctx.shadowColor = 'transparent';
		ctx.shadowBlur = 0;
		ctx.imageSmoothingEnabled = false;
		const words = text.split(' ');
		let line = '';
		for (let i = 0; i < words.length; i++) {
		  const testLine = line + words[i] + ' ';
		  const metrics = ctx.measureText(testLine);
		  const lineWidth = metrics.width;
	  
		  if (lineWidth > maxWidth && i > 0) {
			ctx.fillText(line, x, y);
			line = words[i] + ' ';
			y += Math.floor(fontSize * 1.8); // adjust the line height as needed
		  } else {
			line = testLine;
		  }
		}
	  
		ctx.fillText(line, x, y);
	},
	
	// Puts a gradient on the background
	// Used if there is no background image
	backgroundGradient: function(ctx, width, height){
		// Create gradient - top to bottom
		ctx.rect(0,0,width,height);
		var grd = ctx.createLinearGradient(0,0,0,height);
		grd.addColorStop(0,'#333333');
		grd.addColorStop(0.5, '#777777');
		grd.addColorStop(1, '#CCCCCC');
		
			
		// change this to fill entire ctx with gradient
		//ctx.fillStyle="purple";
		//ctx.fillRect(0,0,width,height);
		ctx.fillStyle = grd;
		ctx.fill();
	},
	
	// Draws a line
	line : function(ctx, point1, point2, width, col){
		ctx.strokeStyle = col;
		ctx.beginPath();
		ctx.moveTo(point1.x, point1.y);
		ctx.lineTo(point2.x, point2.y);
		ctx.lineWidth = width;
		ctx.closePath();
		ctx.stroke();
	}
			
};
