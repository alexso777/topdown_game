"use strict";

app.PersonData_2 = {
	type: "Person_2",
	image: new Image(),
}
app.PersonData_2.image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAwCAMAAABHcohdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkJDREREODA4MjMzRjExRUVCMTIxREI2RDg3MkRBMUZCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkJDREREODA5MjMzRjExRUVCMTIxREI2RDg3MkRBMUZCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QkNEREQ4MDYyMzNGMTFFRUIxMjFEQjZEODcyREExRkIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QkNEREQ4MDcyMzNGMTFFRUIxMjFEQjZEODcyREExRkIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5NHpYPAAAAYFBMVEWWUCJYXmbIpXfx9PPPcRmHi5MSGSCPb1TrhxXsxY4yVzXtjytPLyh0RSq0jWXjtIE/SlXzeGORLS+6XCvtRTzDZR+9KinffhS2u70nOzM9kED7ojri6ulAmUD///8AAADwiXjFAAAAIHRSTlP/////////////////////////////////////////AFxcG+0AAAF6SURBVHja1JTdtkNADIUzRTCS0g4dU9T7v+XJKMdPx+rtOZu9XMy3ki2xwPhF8EcBt+gEUMkiFQS0il5v9ZUOA69F6gxQbV9FrToHkrZPojY5B7wkSHQG9EvIFXBOO72+p2pffaKUWudAjojWGpj0iRYtAHLWdYXFdZRJi5tRO7DWZjHjrKnjdhcI/twAMKfAwPq4LCQTW2gyUdd1WUbuCDAANZnvY72k2SfQ2I0adltAe6CYChRWnnKbTQnQiMw8AUXh706a7AEfn4vOStTZR8DwlMLEmXdmml2L0TExAUBsmnhyA/uQowxPKgCYt6Ah/Piq0QNlfsVLfsEy/QRGSq8zIA4BeC1NmV9IKlCwAqZ5XublzTsPAaOrLvmskoMA3UyapuLbft+/wL1+kHuI6491TxnudV1zVdd372DIFKuqUnLhFQKAZvKAEyNVgRaDQwHcBKAejsDwHIYBGd0TiXHwOgAbPYcAsCN2x2uGb8CW+R9/2p1+BBgAZDmVmltVr3cAAAAASUVORK5CYII=";
app.personTypes.push(app.PersonData_2.type);

app.Person_2 = function(){
	
	// Set up the person
	function Person_2(posX, posY, style){
		this.posX = posX;
		this.posY = posY;
		this.type = app.PersonData_2.type;
		app.objects[posY][posX] = {o:this, r:1};
	} // end Person Constructor
	
	var p = Person_2.prototype;
		
	// Draw the person
	p.draw = function(ctx, O_W, O_H, E_W, E_H) {
		let image = app.PersonData_2.image;
		ctx.drawImage(image, (this.posX-O_W)*app.t_s-E_W, (this.posY-O_H)*app.t_s-E_H + app.t_s - image.height, image.width, image.height);
	};

	p.doAction = function() {
		app.engine.chatStatus = Math.floor(Math.random() * 10) + 1;
	}
	
	return Person_2; 
}();
