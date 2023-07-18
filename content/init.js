"use strict";

app.KEYBOARD = {
	"KEY_LEFT": 37,
	"KEY_UP": 38,
	"KEY_RIGHT": 39,
	"KEY_DOWN": 40,
	"KEY_SPACE": 32,
	"KEY_ENTER": 13,
	"KEY_ESC": 27,
	"KEY_BUILD": 66,
	"KEY_YES": 89,
	"KEY_NO": 78,
};

app.food = 30;
app.wood = 0;
app.stone = 0;
app.social = 0;


// properties of app that will be accessed by the topDown.js module
app.animationID = undefined;
app.paused = false;

// app.keydown array to keep track of which keys are down
// this is called a "key daemon"
// topDown.js will "poll" this array every frame
// this works because JS has "sparse arrays" - not every language does
app.keydown = [];


// the Modernizr object is from the modernizr.custom.js file
window.onblur = function () {
	app.paused = true;
	cancelAnimationFrame(app.animationID);
	app.keydown = []; // clear key daemon

	// call update() so that our paused screen gets drawn
	app.engine.update();
};

window.onfocus = function () {
	app.paused = false;
	cancelAnimationFrame(app.animationID);

	// start the animation back up
	app.engine.update();
};

// event listeners
window.addEventListener("keydown", function (e) {
	//console.log("keydown=" + e.keyCode);
	app.keydown[e.keyCode] = true;
});

window.addEventListener("keyup", function (e) {
	//console.log("keyup=" + e.keyCode);
	app.keydown[e.keyCode] = false;
});


function initObjects(){
	for (let i = 0; i < app.w_h; i++) {
		app.objects.push([]);
		for (let j = 0; j < app.w_w; j++) {
			app.objects[i].push(null);
		}
	}
	
	new app.Tree(7, 8, false);
	new app.Tree(7, 8, false);
	new app.Tree(7, 9, false);
	new app.Tree(7, 10, false);
	new app.Tree(7, 11, false);

	new app.Tree(4, 28, false);
	new app.Tree(4, 24, false);
	new app.Tree(3, 19, false);
	new app.Tree(4, 27, false);
	new app.Tree(6, 28, false);
	new app.Tree(4, 24, false);
	new app.Tree(5, 19, false);
	new app.Tree(7, 27, false);

	new app.Tree(8, 12, false);
	new app.Tree(10, 12, false);
	new app.Tree(14, 12, false);
	new app.Tree(16, 12, false);
	new app.Tree(18, 12, false);

	new app.Tree(9, 6, false);
	new app.Tree(11, 6, false);
	new app.Tree(13, 6, false);
	new app.Tree(15, 6, false);

	new app.Tree(0, 1, false);
	new app.Tree(0, 3, false);
	new app.Tree(0, 5, false);
	new app.Tree(0, 6, false);
	new app.Tree(0, 8, false);
	new app.Tree(0, 23, false);
	new app.Tree(0, 14, false);
	new app.Tree(0, 12, false);
	new app.Tree(0, 16, false);
	new app.Tree(0, 17, false);
	new app.Tree(0, 25, false);

	new app.Tree(2, 6, false);
	new app.Tree(2, 7, false);
	new app.Tree(2, 13, false);
	new app.Tree(2, 19, false);
	new app.Tree(2, 27, false);
	new app.Tree(2, 14, false);
	new app.Tree(2, 12, false);
	new app.Tree(2, 11, false);
	new app.Tree(2, 25, false);

	new app.Tree(15, 4, false);

	new app.Tree(4, 4, false);
	new app.Tree(3, 2, false);
	new app.Tree(6, 5, false);
	new app.Tree(6, 3, false);
	new app.Tree(3, 5, false);

	new app.Tree(4, 1, false);
	new app.Tree(8, 1, false);
	new app.Tree(12, 1, false);
	new app.Tree(14, 1, false);

	new app.Tree(58, 28, false);
	new app.Tree(58, 18, false);
	new app.Tree(55, 28, false);
	new app.Tree(52, 19, false);
	new app.Tree(56, 14, false);
	new app.Tree(55, 25, false);
	new app.Tree(52, 15, false);
	new app.Tree(56, 4, false);
	new app.Tree(57, 25, false);
	new app.Tree(56, 26, false);
	new app.Tree(58, 21, false);
	new app.Tree(52, 21, false);
	new app.Tree(51, 13, false);
	new app.Tree(48, 18, false);
	new app.Tree(47, 18, false);

	new app.Tree(10, 17, false);
	new app.Tree(10, 16, false);
	new app.Tree(10, 15, false);
	new app.Tree(10, 24, false);
	new app.Tree(10, 23, false);

	new app.Tree(14, 13, false);
	new app.Tree(14, 13, false);
	new app.Tree(15, 13, false);
	new app.Tree(16, 13, false);
	new app.Tree(17, 13, false);
	new app.Tree(18, 13, false);
	new app.Tree(21, 13, false);
	new app.Tree(22, 13, false);
	new app.Tree(23, 13, false);
	new app.Tree(24, 13, false);
	new app.Tree(25, 13, false);
	new app.Tree(26, 13, false);
	new app.Tree(27, 13, false);

	new app.Tree(14, 15, false);
	new app.Tree(15, 15, false);
	new app.Tree(16, 15, false);
	new app.Tree(17, 15, false);
	new app.Tree(18, 15, false);
	new app.Tree(19, 15, false);
	new app.Tree(20, 15, false);
	new app.Tree(21, 15, false);
	new app.Tree(22, 15, false);
	new app.Tree(25, 15, false);
	new app.Tree(25, 16, false);
	new app.Tree(25, 17, false);
	new app.Tree(25, 18, false);
	new app.Tree(25, 19, false);
	new app.Tree(22, 16, false);
	new app.Tree(22, 17, false);
	new app.Tree(22, 18, false);
	new app.Tree(22, 19, false);

	new app.Tree(28, 14, false);
	new app.Tree(29, 14, false);
	new app.Tree(30, 14, false);
	new app.Tree(31, 14, false);
	new app.Tree(32, 14, false);

	new app.Tree(32, 24, false);
	new app.Tree(37, 20, false);
	new app.Tree(41, 16, false);
	new app.Tree(36, 14, false);
	new app.Tree(37, 18, false);
	new app.Tree(34, 24, false);
	new app.Tree(36, 27, false);
	new app.Tree(42, 26, false);
	new app.Tree(33, 24, false);
	new app.Tree(38, 25, false);

	new app.Tree(4, 8, false);
	new app.Tree(11, 18, false);
	new app.Tree(9, 6, false);
	new app.Tree(14, 16, false);

	new app.Tree(44, 8, false);
	new app.Tree(41, 18, false);
	new app.Tree(39, 6, false);
	new app.Tree(44, 16, false);
	new app.Tree(43, 6, false);
	new app.Tree(40, 15, false);
	new app.Tree(36, 16, false);
	new app.Tree(44, 13, false);

	new app.Tree(47, 28, false);
	new app.Tree(46, 26, false);
	new app.Tree(44, 12, false);
	new app.Tree(46, 26, false);
	new app.Tree(49, 23, false);

	new app.Tree(54, 12, false);
	new app.Tree(56, 6, false);
	new app.Tree(59, 23, false);
	new app.Tree(57, 12, false);
	new app.Tree(54, 6, false);
	new app.Tree(58, 15, false);

	new app.Food_1(3, 3);
	new app.Food_1(3, 5);
	new app.Food_1(4, 4);
	new app.Food_2(14, 3);

	new app.Food_2(5, 23);
	new app.Food_1(3, 28);
	new app.Food_2(8, 24);
	new app.Food_1(7, 15);

	new app.Food_2(48, 23);
	new app.Food_1(32, 21);
	new app.Food_2(50, 4);
	new app.Food_1(37, 7);

	new app.Food_2(50, 25);
	new app.Food_1(45, 21);

	new app.Tree(11, 28, false);
	new app.Tree(9, 16, false);
	new app.Tree(14, 18, false);

	new app.Stone_1(8, 3);
	new app.Stone_2(9, 4);
	new app.Stone_1(5, 16);
	new app.Stone_2(6, 17);
	new app.Stone_1(5, 17);
	new app.Stone_2(8, 19);

	new app.Stone_1(28, 23);
	new app.Stone_1(29, 24);
	new app.Stone_1(25, 26);
	new app.Stone_1(26, 27);
	new app.Stone_1(25, 27);
	new app.Stone_1(18, 29);

	new app.Stone_2(38, 23);
	new app.Stone_2(39, 24);
	new app.Stone_2(35, 16);
	new app.Stone_2(36, 27);
	new app.Stone_2(45, 27);
	new app.Stone_2(48, 19);

	new app.Tree(33, 26, false);
	new app.Tree(35, 27, false);
	new app.Tree(38, 28, false);
	new app.Tree(34, 29, false);
	new app.Tree(32, 26, false);
	new app.Tree(45, 27, false);

	new app.Tree(3, 26, false);
	new app.Tree(5, 27, false);
	new app.Tree(8, 28, false);
	new app.Tree(4, 29, false);
	new app.Tree(12, 26, false);
	new app.Tree(15, 27, false);
	new app.Tree(18, 28, false);
	new app.Tree(14, 29, false);
	new app.Tree(22, 29, false);
	new app.Tree(26, 29, false);
	new app.Tree(27, 28, false);
	new app.Tree(21, 26, false);
	new app.Stone_1(11, 23);
	new app.Stone_1(9, 24);
	new app.Stone_1(15, 26);
	new app.Tree(8, 23, false);

	new app.Person_1(1, 29);
	new app.Tree(3, 3, false);
	new app.Food_1(3, 7);
	new app.Tree(6, 8, false);
	new app.Tree(10, 25, false);
	new app.House_1(12, 10, 0, 8);
	new app.Person_2(13, 14);
	new app.Tree(13, 23, false);
	new app.Stone_1(13, 5);
	new app.Food_2(16, 15);
	new app.Person_1(21, 10);
	new app.Stone_2(23, 23);
	new app.Food_1(23, 5);
	new app.Food_2(23, 20);
	new app.Person_2(33, 8);
	new app.Food_2(33, 7);
	new app.Tree(33, 29, 0, false);
	new app.House_3(33, 14, 1, 8);
	new app.Stone_2(43, 7);
	new app.Tree(43, 16, false);
	new app.Tree(43, 20, false);
	new app.Food_1(49, 6);
	new app.Tree(51, 12, false);
	new app.Stone_2(55, 15);
	new app.Food_2(53, 14);
	new app.Tree(57, 21, false);
	new app.Tree(55, 13, false);

	new app.Stone_1(36, 8);
	new app.Stone_1(34, 9);
	new app.Stone_2(37, 11);

	new app.Tree(15, 26, false);
	new app.Tree(16, 29, false);
	new app.Tree(18, 24, false);
	new app.Tree(15, 25, false);
	new app.Tree(19, 26, false);
	new app.Tree(15, 23, false);
	new app.Tree(17, 25, false);

	new app.Tree(18, 26, false);
	new app.Tree(19, 29, false);
	new app.Tree(21, 24, false);
	new app.Tree(24, 25, false);
	new app.Tree(26, 26, false);
	new app.Tree(25, 23, false);
	new app.Tree(27, 25, false);

	new app.Tree(41, 29, false);
	new app.Tree(34, 27, false);
	new app.Tree(36, 28, false);
	new app.Tree(37, 15, false);
	new app.Tree(48, 17, false);
	new app.Tree(39, 14, false);
	new app.Tree(30, 12, false);
	new app.Tree(32, 27, false);
	new app.Tree(35, 21, false);
	new app.Tree(37, 28, false);
	new app.Tree(34, 28, false);
	new app.Tree(37, 14, false);
	new app.Tree(34, 17, false);
	new app.Tree(36, 9, false);
	new app.Tree(47, 28, false);

	new app.Food_1(58, 3);
	new app.Tree(51, 2, false);
	new app.Tree(56, 11, false);

	new app.Stone_1(57, 4);
	new app.Stone_1(55, 3);
	new app.Stone_1(55, 4);

	new app.Stone_2(33, 18);
	new app.Stone_2(35, 18);
	new app.Stone_2(31, 19);

	new app.Stone_1(38, 28);

	new app.Stone_1(58, 28);
	new app.Stone_1(58, 26);
	new app.Stone_1(56, 24);
	new app.Stone_1(52, 26);

	for(let i=1; i<=2; i++){
		new app.Tree(60*i+7, 8, false);
		new app.Tree(60*i+7, 8, false);
		new app.Tree(60*i+7, 9, false);
		new app.Tree(60*i+7, 10, false);
		new app.Tree(60*i+7, 11, false);
	
		new app.Tree(60*i+4, 28, false);
		new app.Tree(60*i+4, 24, false);
		new app.Tree(60*i+3, 19, false);
		new app.Tree(60*i+4, 27, false);
		new app.Tree(60*i+6, 28, false);
		new app.Tree(60*i+4, 24, false);
		new app.Tree(60*i+5, 19, false);
		new app.Tree(60*i+7, 27, false);
	
		new app.Tree(60*i+8, 12, false);
		new app.Tree(60*i+10, 12, false);
		new app.Tree(60*i+14, 12, false);
		new app.Tree(60*i+16, 12, false);
		new app.Tree(60*i+18, 12, false);
	
		new app.Tree(60*i+9, 6, false);
		new app.Tree(60*i+11, 6, false);
		new app.Tree(60*i+13, 6, false);
		new app.Tree(60*i+15, 6, false);
	
		new app.Tree(60*i+0, 1, false);
		new app.Tree(60*i+0, 3, false);
		new app.Tree(60*i+0, 5, false);
		new app.Tree(60*i+0, 6, false);
		new app.Tree(60*i+0, 8, false);
		new app.Tree(60*i+0, 23, false);
		new app.Tree(60*i+0, 14, false);
		new app.Tree(60*i+0, 12, false);
		new app.Tree(60*i+0, 16, false);
		new app.Tree(60*i+0, 17, false);
		new app.Tree(60*i+0, 25, false);
	
		new app.Tree(60*i+2, 6, false);
		new app.Tree(60*i+2, 7, false);
		new app.Tree(60*i+2, 13, false);
		new app.Tree(60*i+2, 19, false);
		new app.Tree(60*i+2, 27, false);
		new app.Tree(60*i+2, 14, false);
		new app.Tree(60*i+2, 12, false);
		new app.Tree(60*i+2, 11, false);
		new app.Tree(60*i+2, 25, false);
	
		new app.Tree(60*i+15, 4, false);
	
		new app.Tree(60*i+4, 4, false);
		new app.Tree(60*i+3, 2, false);
		new app.Tree(60*i+6, 5, false);
		new app.Tree(60*i+6, 3, false);
		new app.Tree(60*i+3, 5, false);
	
		new app.Tree(60*i+4, 1, false);
		new app.Tree(60*i+8, 1, false);
		new app.Tree(60*i+12, 1, false);
		new app.Tree(60*i+14, 1, false);
	
		new app.Tree(60*i+58, 28, false);
		new app.Tree(60*i+58, 18, false);
		new app.Tree(60*i+55, 28, false);
		new app.Tree(60*i+52, 19, false);
		new app.Tree(60*i+56, 14, false);
		new app.Tree(60*i+55, 25, false);
		new app.Tree(60*i+52, 15, false);
		new app.Tree(60*i+56, 4, false);
		new app.Tree(60*i+57, 25, false);
		new app.Tree(60*i+56, 26, false);
		new app.Tree(60*i+58, 21, false);
		new app.Tree(60*i+52, 21, false);
		new app.Tree(60*i+51, 13, false);
		new app.Tree(60*i+48, 18, false);
		new app.Tree(60*i+47, 18, false);
	
		new app.Tree(60*i+10, 17, false);
		new app.Tree(60*i+10, 16, false);
		new app.Tree(60*i+10, 15, false);
		new app.Tree(60*i+10, 24, false);
		new app.Tree(60*i+10, 23, false);
	
		new app.Tree(60*i+14, 13, false);
		new app.Tree(60*i+14, 13, false);
		new app.Tree(60*i+15, 13, false);
		new app.Tree(60*i+16, 13, false);
		new app.Tree(60*i+17, 13, false);
		new app.Tree(60*i+18, 13, false);
		new app.Tree(60*i+21, 13, false);
		new app.Tree(60*i+22, 13, false);
		new app.Tree(60*i+23, 13, false);
		new app.Tree(60*i+24, 13, false);
		new app.Tree(60*i+25, 13, false);
		new app.Tree(60*i+26, 13, false);
		new app.Tree(60*i+27, 13, false);
	
		new app.Tree(60*i+14, 15, false);
		new app.Tree(60*i+15, 15, false);
		new app.Tree(60*i+16, 15, false);
		new app.Tree(60*i+17, 15, false);
		new app.Tree(60*i+18, 15, false);
		new app.Tree(60*i+19, 15, false);
		new app.Tree(60*i+20, 15, false);
		new app.Tree(60*i+21, 15, false);
		new app.Tree(60*i+22, 15, false);
		new app.Tree(60*i+25, 15, false);
		new app.Tree(60*i+25, 16, false);
		new app.Tree(60*i+25, 17, false);
		new app.Tree(60*i+25, 18, false);
		new app.Tree(60*i+25, 19, false);
		new app.Tree(60*i+22, 16, false);
		new app.Tree(60*i+22, 17, false);
		new app.Tree(60*i+22, 18, false);
		new app.Tree(60*i+22, 19, false);
	
		new app.Tree(60*i+28, 14, false);
		new app.Tree(60*i+29, 14, false);
		new app.Tree(60*i+30, 14, false);
		new app.Tree(60*i+31, 14, false);
		new app.Tree(60*i+32, 14, false);
	
		new app.Tree(60*i+32, 24, false);
		new app.Tree(60*i+37, 20, false);
		new app.Tree(60*i+41, 16, false);
		new app.Tree(60*i+36, 14, false);
		new app.Tree(60*i+37, 18, false);
		new app.Tree(60*i+34, 24, false);
		new app.Tree(60*i+36, 27, false);
		new app.Tree(60*i+42, 26, false);
		new app.Tree(60*i+33, 24, false);
		new app.Tree(60*i+38, 25, false);
	
		new app.Tree(60*i+4, 8, false);
		new app.Tree(60*i+11, 18, false);
		new app.Tree(60*i+9, 6, false);
		new app.Tree(60*i+14, 16, false);
	
		new app.Tree(60*i+44, 8, false);
		new app.Tree(60*i+41, 18, false);
		new app.Tree(60*i+39, 6, false);
		new app.Tree(60*i+44, 16, false);
		new app.Tree(60*i+43, 6, false);
		new app.Tree(60*i+40, 15, false);
		new app.Tree(60*i+36, 16, false);
		new app.Tree(60*i+44, 13, false);
	
		new app.Tree(60*i+47, 28, false);
		new app.Tree(60*i+46, 26, false);
		new app.Tree(60*i+44, 12, false);
		new app.Tree(60*i+46, 26, false);
		new app.Tree(60*i+49, 23, false);
	
		new app.Tree(60*i+54, 12, false);
		new app.Tree(60*i+56, 6, false);
		new app.Tree(60*i+59, 23, false);
		new app.Tree(60*i+57, 12, false);
		new app.Tree(60*i+54, 6, false);
		new app.Tree(60*i+58, 15, false);
	
		new app.Food_1(60*i+3, 3);
		new app.Food_1(60*i+3, 5);
		new app.Food_1(60*i+4, 4);
		new app.Food_2(60*i+14, 3);
	
		new app.Food_2(60*i+5, 23);
		new app.Food_1(60*i+3, 28);
		new app.Food_2(60*i+8, 24);
		new app.Food_1(60*i+7, 15);
	
		new app.Food_2(60*i+48, 23);
		new app.Food_1(60*i+32, 21);
		new app.Food_2(60*i+50, 4);
		new app.Food_1(60*i+37, 7);
	
		new app.Food_2(60*i+50, 25);
		new app.Food_1(60*i+45, 21);
	
		new app.Tree(60*i+11, 28, false);
		new app.Tree(60*i+9, 16, false);
		new app.Tree(60*i+14, 18, false);
	
		new app.Stone_1(60*i+8, 3);
		new app.Stone_2(60*i+9, 4);
		new app.Stone_1(60*i+5, 16);
		new app.Stone_2(60*i+6, 17);
		new app.Stone_1(60*i+5, 17);
		new app.Stone_2(60*i+8, 19);
	
		new app.Stone_1(60*i+28, 23);
		new app.Stone_1(60*i+29, 24);
		new app.Stone_1(60*i+25, 26);
		new app.Stone_1(60*i+26, 27);
		new app.Stone_1(60*i+25, 27);
		new app.Stone_1(60*i+18, 29);
	
		new app.Stone_2(60*i+38, 23);
		new app.Stone_2(60*i+39, 24);
		new app.Stone_2(60*i+35, 16);
		new app.Stone_2(60*i+36, 27);
		new app.Stone_2(60*i+45, 27);
		new app.Stone_2(60*i+48, 19);
	
		new app.Tree(60*i+33, 26, false);
		new app.Tree(60*i+35, 27, false);
		new app.Tree(60*i+38, 28, false);
		new app.Tree(60*i+34, 29, false);
		new app.Tree(60*i+32, 26, false);
		new app.Tree(60*i+45, 27, false);
	
		new app.Tree(60*i+3, 26, false);
		new app.Tree(60*i+5, 27, false);
		new app.Tree(60*i+8, 28, false);
		new app.Tree(60*i+4, 29, false);
		new app.Tree(60*i+12, 26, false);
		new app.Tree(60*i+15, 27, false);
		new app.Tree(60*i+18, 28, false);
		new app.Tree(60*i+14, 29, false);
		new app.Tree(60*i+22, 29, false);
		new app.Tree(60*i+26, 29, false);
		new app.Tree(60*i+27, 28, false);
		new app.Tree(60*i+21, 26, false);
		new app.Stone_1(60*i+11, 23);
		new app.Stone_1(60*i+9, 24);
		new app.Stone_1(60*i+15, 26);
		new app.Tree(60*i+8, 23, false);
	
		new app.Person_1(60*i+1, 29);
		new app.Tree(60*i+3, 3, false);
		new app.Food_1(60*i+3, 7);
		new app.Tree(60*i+6, 8, false);
		new app.Tree(60*i+10, 25, false);
		new app.House_1(60*i+12, 10, 0, 8);
		new app.Person_2(60*i+13, 14);
		new app.Tree(60*i+13, 23, false);
		new app.Stone_1(60*i+13, 5);
		new app.Food_2(60*i+16, 15);
		new app.Person_1(60*i+21, 10);
		new app.Stone_2(60*i+23, 23);
		new app.Food_1(60*i+23, 5);
		new app.Food_2(60*i+23, 20);
		new app.Person_2(60*i+33, 8);
		new app.Food_2(60*i+33, 7);
		new app.Tree(60*i+33, 29, 0, false);
		new app.House_3(60*i+33, 14, 1, 8);
		new app.Stone_2(60*i+43, 7);
		new app.Tree(60*i+43, 16, false);
		new app.Tree(60*i+43, 20, false);
		new app.Food_1(60*i+49, 6);
		new app.Tree(60*i+51, 12, false);
		new app.Stone_2(60*i+55, 15);
		new app.Food_2(60*i+53, 14);
		new app.Tree(60*i+57, 21, false);
		new app.Tree(60*i+55, 13, false);
	
		new app.Stone_1(60*i+36, 8);
		new app.Stone_1(60*i+34, 9);
		new app.Stone_2(60*i+37, 11);
	
		new app.Tree(60*i+15, 26, false);
		new app.Tree(60*i+16, 29, false);
		new app.Tree(60*i+18, 24, false);
		new app.Tree(60*i+15, 25, false);
		new app.Tree(60*i+19, 26, false);
		new app.Tree(60*i+15, 23, false);
		new app.Tree(60*i+17, 25, false);
	
		new app.Tree(60*i+18, 26, false);
		new app.Tree(60*i+19, 29, false);
		new app.Tree(60*i+21, 24, false);
		new app.Tree(60*i+24, 25, false);
		new app.Tree(60*i+26, 26, false);
		new app.Tree(60*i+25, 23, false);
		new app.Tree(60*i+27, 25, false);
	
		new app.Tree(60*i+41, 29, false);
		new app.Tree(60*i+34, 27, false);
		new app.Tree(60*i+36, 28, false);
		new app.Tree(60*i+37, 15, false);
		new app.Tree(60*i+48, 17, false);
		new app.Tree(60*i+39, 14, false);
		new app.Tree(60*i+30, 12, false);
		new app.Tree(60*i+32, 27, false);
		new app.Tree(60*i+35, 21, false);
		new app.Tree(60*i+37, 28, false);
		new app.Tree(60*i+34, 28, false);
		new app.Tree(60*i+37, 14, false);
		new app.Tree(60*i+34, 17, false);
		new app.Tree(60*i+36, 9, false);
		new app.Tree(60*i+47, 28, false);
	
		new app.Food_1(60*i+58, 3);
		new app.Tree(60*i+51, 2, false);
		new app.Tree(60*i+56, 11, false);
	
		new app.Stone_1(60*i+57, 4);
		new app.Stone_1(60*i+55, 3);
		new app.Stone_1(60*i+55, 4);
	
		new app.Stone_2(60*i+33, 18);
		new app.Stone_2(60*i+35, 18);
		new app.Stone_2(60*i+31, 19);
	
		new app.Stone_1(60*i+38, 28);
	
		new app.Stone_1(60*i+58, 28);
		new app.Stone_1(60*i+58, 26);
		new app.Stone_1(60*i+56, 24);
		new app.Stone_1(60*i+52, 26);
	}
}

initObjects();
app.engine.init();
