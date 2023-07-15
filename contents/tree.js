// tree.js
// dependencies: none

"use strict";
var app = app || {};

let treeImage = new Image();
treeImage.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABJCAMAAAC6uNAkAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjlGMTg3MkUyMjM0MDExRUU5N0Y4OEFCNzZENEZFMTcyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjlGMTg3MkUzMjM0MDExRUU5N0Y4OEFCNzZENEZFMTcyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OUYxODcyRTAyMzQwMTFFRTk3Rjg4QUI3NkQ0RkUxNzIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OUYxODcyRTEyMzQwMTFFRTk3Rjg4QUI3NkQ0RkUxNzIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6p8TpzAAAAYFBMVEU7hUZjx00WOD02ckFnVz8uZjmWx3tIlkYkWEGtak1xPTkoUjxALDOfyYNDhT4ZPT5XsUibW0dBjkdUST5wq2bAdFJOn0ODSD44fkRZnVgeSjxTpkEmXEI+iUhAmUAAAAAiGocHAAAAIHRSTlP/////////////////////////////////////////AFxcG+0AAAQFSURBVHjapJiLdqMgEIaJ1IpCJcEGCQL7/m+5w816Q9PdPz0NwvDNhVF7iv4UZRcqW6HyylK/BliLXt8LNagUBSp5V99fC70UQvYXAClfr8+vr8/58/16yeZNAESPbje//fPnB65ud3VUzT1AiKYBQNr7lRCft9u9aYS4BCAxTbco7zb8gNLUJK243U4BYgZ8LpQA92my4n4/ARA8TXMEB4JFacz9VgSYc8D9HGAI9hWYJiGOt9vGryJUmyIgmlh1DFBx1RpSBoQIpGxEI+7LzbIBSZkAhQgIwSIAwAhaeQVooLmbtFaIwBislE0ACZruIPAq/ffkBxmg1KIKaJGAsNlLlvT3kFzPQT+LIsBCG68APvXV9qbxz5cjAAkAi8R0JolsiIDsATX2NfAxyPJ2GfwrhbHZAAxBAtchBmsv/RswJmYDUB6ggoWcKz79DP0o+a9rVQDUNQ4hIItkdolSQNAJcQ2samWLADjKYNh4l1OTA5JTyA7WUA12/WEEVojowRYklF8DOxgfAJIVAFCJAACRWDUhKwCv0gnEHFFh+xydMBX/N0COgBQB1r/J8o5Q18xDqs8rp4CNy+OAIIVqAeBcE1OrrRVSOBz6bsHimlDN+QJAjL8bgzbnBoe+ch1Ug/0OYELG6y7oFV77R8ZXBYO10dUWYAjRmtNttuuyaBAJ1nQPMFSTdDeUBIcMAFOIwBBtnJiTtakeYTBPW62N2UegKYmAnDI8M0AqnkUe+gtFaUp3UUTfBzEGQ0zwJogO2cIQhZHGfl4gkuz0qg9iJ6QlcKIUMrCHUt+5iFAKF3WYV8kN0dX2mcgralaiuo5FEIKmuvkAk//9QxViMDmIDLAo3hw/gOCdGF4dvdo495CVQgrrKeLNjt+NsFBtAfY3gEjZInbbL/7I4tycaX4MnPyZx3Or8vlYdO5UrpW6BFQ8H9WcTW4zUmnnLgAOXg+x9YaBxbb3Qx6mKFYu6AwA4pUX64YYQ1V1Y5jixrkLQFgVnA0fAxvGjtEQCuu6wU9V1Lkd4gDgGGufY+c1eMdh1MEUG64AwT/GwTpuY5oNcfR4ProB4x0Bbd33jD1BCdDlbwA8nw/G3DaIA0D3aNt23jgDWvgsk9gC8rR8PqNrxljenEfjs3Vug9gBmvaRd7GxG0efRGaN7RsAqIE3j7/B5bNNFz6kVQ2uAbAJKtfmC/9Fy4AZ4V9djGXAHAFsFqIXZ524QCfAGCIYE+CojY7vBcijV30o3AjyEdQwIZy7bOVlGHR5jNhtdHovpCjwRwZgLJwrIMoA53AG9O5I14C+9zGMH7hxxQxOAYDw/ovO3wF8gH4DyIg9yi3w5w/V/wUU0lnMvf1PmP8GrBj/8m+gNwF/BRgA6Iu4NoP13UoAAAAASUVORK5CYII=";

let treeRootImage = new Image();
treeRootImage.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAgCAMAAACVQ462AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjZBNzRFQjY3MjM0MTExRUU5ODdBRjZGQjk2QkQzQzExIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjZBNzRFQjY4MjM0MTExRUU5ODdBRjZGQjk2QkQzQzExIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NkE3NEVCNjUyMzQxMTFFRTk4N0FGNkZCOTZCRDNDMTEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NkE3NEVCNjYyMzQxMTFFRTk4N0FGNkZCOTZCRDNDMTEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4ET3NjAAAAYFBMVEVPklW7eFy0gm3bqopQOkLJknb3zKbEcleXZlZ3SEbDhWl6bVCpe2VlhFFEKj1ZbExQVUjGjHFbo1Z/TkmFUUt7XlBrQEPQm32dbmDaimSeWUvFVjyLV1CUXlE9HToAAABx4DVKAAAAIHRSTlP/////////////////////////////////////////AFxcG+0AAAF8SURBVHjavJXrjoMgEIURmQpitdy1Svf933IHtf6pbcRN95iImvjNYYAZ8vNHkS8CnDCrhDwF4NOmMwAnKDwVCi+zATLWQKmaBXSSV50FkL7GyEYUs0C99/AOcMf4Bef1IvQQ5ZUcBnSPJoCyQgGkCaiiVirwx/U4oG1AwR1dzBmoK5wE9G0uYBzRAY5QjxUOPAtAS4CqWhJQoRSUeQ7KSwo9L0E1jmiivNCsHPQ0lKBWB7iiJVCZ5cCL5GHdRqoOl+D9YYDuZJxM34RyU2h6MUXZ6UOA7sGHaAR62BS8EXwwe1l4AWh95TFaY6yT/SLuXHqPke8ciFcAaYY4VwLWCuHxMr5lNlWFftjZzTuAznsmrGeMGYvLyK3AR49377tDgFvLEMASwKSNYBYAEtsjgPkjuaX/EbMBGLuR46dR7wK0zqpIhKQpWBQC3kT/CEgunkUZAfpEVSZkBThCTpV1TdwToE92puRBGEJOtzb04Jz8FP+7vfGfAL8CDAB6885O3vZk/QAAAABJRU5ErkJggg==";

app.TreeData = {
	type: "Tree",
	treeImages: [treeImage],
	rootImages: [treeRootImage],
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
