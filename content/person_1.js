"use strict";

app.PersonData_1 = {
	type: "Person_1",
	image: new Image(),
}
app.PersonData_1.image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAwCAMAAABHcohdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkE1OTU5REE4MjMzRjExRUU5MzhFQzAyOEE5MjgyMjFDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkE1OTU5REE5MjMzRjExRUU5MzhFQzAyOEE5MjgyMjFDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QTU5NTlEQTYyMzNGMTFFRTkzOEVDMDI4QTkyODIyMUMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QTU5NTlEQTcyMzNGMTFFRTkzOEVDMDI4QTkyODIyMUMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4DVYtyAAAAYFBMVEXx9POQk5s7Ii9GKjaQTjxmLywrGShVWWY1WTbVYWAxQ2ueLDT4MzqhVkIoODpZOkIUEiFgY29CbkQaIyy2u71JR2BoPDbi6ukNDh9DnUF8gorcLzd+PzVAmUD///8AAABdX6eUAAAAIHRSTlP/////////////////////////////////////////AFxcG+0AAAGJSURBVHjatNRdk6sgDAZgGyBYqZjWL2q1/P9/uQHpWW1xz+zFvoN6kceIccbC/yfF3wD7ygG4Tac10y0LSl081xR9mQXX5yvXI6C7sR87/dRHYOrGqeimww6vPRx10GOqj3ngvdbdc5z0VR8NqmxP46nk/APkiJeLlzjKU9duR02IvFIogLbcfotUBCEEJLH7WAQpomkEwJsofLi1SfUmtACBW+CQO0fAdT4HLtwGEK4VsdbXB7ldh7g5SOcABO46cIvQOIY3EAHtHpESXwCjpE+gAL8nta2HPYTblHgNA5D2cyCK4DvbV0iTZKJmKQGkHHAeMoAbSFkj1vXg5Cfwbqi5QQ3wA5Cc85nVuc4AD8Ms6wj4EBngKWxSxkMBZQBeFFplDNi3cgLKXIyozOPRVMqoT+DM5WGaAPp+fpjMWyjj1FBVtqr6GfAT3Cw421dty4Y/xe0d3BdLra36FhkQ2eW+B/dl4dXijLxoCbnvwJLJ74D3P5QT2BG/5P6TB7f/3a/4V+BLgAEAYgKN4twoN/wAAAAASUVORK5CYII=";
app.personTypes.push(app.PersonData_1.type);

app.Person_1 = function(){
	
	// Set up the person
	function Person_1(posX, posY, style){
		this.posX = posX;
		this.posY = posY;
		this.type = app.PersonData_1.type;
		app.objects[posY][posX] = {o:this, r:1};
	} // end Person Constructor
	
	var p = Person_1.prototype;
		
	// Draw the person
	p.draw = function(ctx, O_W, O_H, E_W, E_H) {
		let image = app.PersonData_1.image;
		ctx.drawImage(image, (this.posX-O_W)*app.t_s-E_W, (this.posY-O_H)*app.t_s-E_H + app.t_s - image.height, image.width, image.height);
	};

	p.doAction = function() {
		app.chatStatus = Math.floor(Math.random() * 10) + 1;
	}
	
	return Person_1; 
}();
