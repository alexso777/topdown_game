/*
loader.js
variable app is in global scope - i.e. a property of window.
app is our single global object literal
*/
"use strict";

// if app exists use the existing copy
// else create a new object literal
var app = app || {};

// CONSTANTS
// Use w-a-s-d
app.KEYBOARD = {
	"KEY_LEFT": 37, 
	"KEY_UP": 38, 
	"KEY_RIGHT": 39, 
	"KEY_DOWN": 40,
	"KEY_SPACE": 32,
	"KEY_ENTER": 13,
	"KEY_BUILD": 66,
	"KEY_YES": 89,
	"KEY_NO": 78,
};

app.t_s = 8;
app.w_w = 60;
app.w_h = 30;

app.food = 30;
app.wood = 0;
app.stone = 0;
app.social = 0;

app.questions = ["Is the Earth larger than the Moon?",
	"Does a triangle have three sides?",
	"Can dogs fly without assistance?",
	"Is water a liquid at room temperature?",
	"Are oranges a type of fruit?",
	"Do humans have gills for breathing underwater?",
	"Is the capital of France London?",
	"Can you divide any number by zero?",
	"Is the sun a star?",
	"Is chocolate made from cocoa beans?"];
app.answers = [true, true, false, true, true, false, false, false, true, true];
app.TERRAIN_IMAGES = {}

let tileImage_0 = new Image();
tileImage_0.src = "data:image/x-ms-bmp;base64,Qk24AAAAAAAAADYAAAAoAAAACAAAAAgAAAABABAAAAAAAIIAAAASCwAAEgsAAAAAAAAAAAAAYwSJJokmiSaJJokmiSaJJmMEiSaJJokmiSaJJokmiSZjBIkmiSaJJokmiSaJJokmYwSJJokmiSaJJokmiSaJJmMEiSaJJokmiSaJJokmiSZjBIkmiSaJJokmiSaJJokmYwSJJokmiSaJJokmiSaJJmMEYwRjBGMEYwRjBGMEYwQAAA==";
app.TERRAIN_IMAGES["0"] = tileImage_0;

let tileImage_1 = new Image();
tileImage_1.src = "data:image/x-ms-bmp;base64,Qk24AAAAAAAAADYAAAAoAAAACAAAAAgAAAABABAAAAAAAIIAAAASCwAAEgsAAAAAAAAAAAAAiSaJJokmiSaJJokmiSaJJokmiSaJJokmiSaJJokmiSaJJokmiSaJJokmiSaJJokmiSaJJokmiSaJJokmiSaJJokmiSaJJokmiSaJJokmiSaJJokmiSaJJokmiSaJJokmiSaJJokmiSaJJokmiSaJJmMEYwRjBGMEYwRjBGMEYwQAAA==";
app.TERRAIN_IMAGES["1"] = tileImage_1;

let tileImage_2 = new Image();
tileImage_2.src = "data:image/x-ms-bmp;base64,Qk24AAAAAAAAADYAAAAoAAAACAAAAAgAAAABABAAAAAAAIIAAAASCwAAEgsAAAAAAAAAAAAAiSaJJokmiSaJJokmiSZjBIkmiSaJJokmiSaJJokmYwSJJokmiSaJJokmiSaJJmMEiSaJJokmiSaJJokmiSZjBIkmiSaJJokmiSaJJokmYwSJJokmiSaJJokmiSaJJmMEiSaJJokmiSaJJokmiSZjBGMEYwRjBGMEYwRjBGMEYwQAAA==";
app.TERRAIN_IMAGES["2"] = tileImage_2;

let tileImage_3 = new Image();
tileImage_3.src = "data:image/x-ms-bmp;base64,Qk24AAAAAAAAADYAAAAoAAAACAAAAAgAAAABABAAAAAAAIIAAAASCwAAEgsAAAAAAAAAAAAAYwSJJokmiSaJJokmiSaJJmMEiSaJJokmiSaJJokmiSZjBIkmiSaJJokmiSaJJokmYwSJJokmiSaJJokmiSaJJmMEiSaJJokmiSaJJokmiSZjBIkmiSaJJokmiSaJJokmYwSJJokmiSaJJokmiSaJJmMEiSaJJokmiSaJJokmiSYAAA==";
app.TERRAIN_IMAGES["3"] = tileImage_3;

let tileImage_4 = new Image();
tileImage_4.src = "data:image/x-ms-bmp;base64,Qk24AAAAAAAAADYAAAAoAAAACAAAAAgAAAABABAAAAAAAIIAAAASCwAAEgsAAAAAAAAAAAAAiSaJJokmiSaJJokmiSaJJokmiSaJJokmiSaJJokmiSaJJokmiSaJJokmiSaJJokmiSaJJokmiSaJJokmiSaJJokmiSaJJokmiSaJJokmiSaJJokmiSaJJokmiSaJJokmiSaJJokmiSaJJokmiSaJJokmiSaJJokmiSaJJokmiSYAAA==";
app.TERRAIN_IMAGES["4"] = tileImage_4;

let tileImage_5 = new Image();
tileImage_5.src = "data:image/x-ms-bmp;base64,Qk24AAAAAAAAADYAAAAoAAAACAAAAAgAAAABABAAAAAAAIIAAAASCwAAEgsAAAAAAAAAAAAAiSaJJokmiSaJJokmiSZjBIkmiSaJJokmiSaJJokmYwSJJokmiSaJJokmiSaJJmMEiSaJJokmiSaJJokmiSZjBIkmiSaJJokmiSaJJokmYwSJJokmiSaJJokmiSaJJmMEiSaJJokmiSaJJokmiSZjBIkmiSaJJokmiSaJJokmYwQAAA==";
app.TERRAIN_IMAGES["5"] = tileImage_5;

let tileImage_6 = new Image();
tileImage_6.src = "data:image/x-ms-bmp;base64,Qk24AAAAAAAAADYAAAAoAAAACAAAAAgAAAABABAAAAAAAIIAAAASCwAAEgsAAAAAAAAAAAAAYwRjBGMEYwRjBGMEYwRjBGMEiSaJJokmiSaJJokmiSZjBIkmiSaJJokmiSaJJokmYwSJJokmiSaJJokmiSaJJmMEiSaJJokmiSaJJokmiSZjBIkmiSaJJokmiSaJJokmYwSJJokmiSaJJokmiSaJJmMEiSaJJokmiSaJJokmiSYAAA==";
app.TERRAIN_IMAGES["6"] = tileImage_6;

let tileImage_7 = new Image();
tileImage_7.src = "data:image/x-ms-bmp;base64,Qk24AAAAAAAAADYAAAAoAAAACAAAAAgAAAABABAAAAAAAIIAAAASCwAAEgsAAAAAAAAAAAAAYwRjBGMEYwRjBGMEYwRjBIkmiSaJJokmiSaJJokmiSaJJokmiSaJJokmiSaJJokmiSaJJokmiSaJJokmiSaJJokmiSaJJokmiSaJJokmiSaJJokmiSaJJokmiSaJJokmiSaJJokmiSaJJokmiSaJJokmiSaJJokmiSaJJokmiSYAAA==";
app.TERRAIN_IMAGES["7"] = tileImage_7;

let tileImage_8 = new Image();
tileImage_8.src = "data:image/x-ms-bmp;base64,Qk24AAAAAAAAADYAAAAoAAAACAAAAAgAAAABABAAAAAAAIIAAAASCwAAEgsAAAAAAAAAAAAAYwRjBGMEYwRjBGMEYwRjBIkmiSaJJokmiSaJJokmYwSJJokmiSaJJokmiSaJJmMEiSaJJokmiSaJJokmiSZjBIkmiSaJJokmiSaJJokmYwSJJokmiSaJJokmiSaJJmMEiSaJJokmiSaJJokmiSZjBIkmiSaJJokmiSaJJokmYwQAAA==";
app.TERRAIN_IMAGES["8"] = tileImage_8;

let tileImage_9 = new Image();
tileImage_9.src = "data:image/x-ms-bmp;base64,Qk24AAAAAAAAADYAAAAoAAAACAAAAAgAAAABABAAAAAAAIIAAAASCwAAEgsAAAAAAAAAAAAAnheeF3sCnhd7AnsCewJ7Ap4XewJ7Ap4XewJ7AnsCewKeF54XewJ7AnsCewJ7AnsCewJ7AnsCewJ7AnsCewJ7AnsCewJ7AnsCewJ7AnsCewJ7AnsCewKeF54XewJ7AnsCnhd7AnsCewJ7AnsCewJ7AnsCewKeF3sCnheeF54XewIAAA==";
app.TERRAIN_IMAGES["9"] = tileImage_9;

let tileImage_10 = new Image();
tileImage_10.src = "data:image/x-ms-bmp;base64,Qk24AAAAAAAAADYAAAAoAAAACAAAAAgAAAABABAAAAAAAIIAAAASCwAAEgsAAAAAAAAAAAAAewJ7AnsCewKeF3sCewKeF3sCewJ7AnsCnhd7AnsCnhd7AnsCewJ7AnsCewKeF54XewJ7AnsCewJ7AnsCewKeF3sCewJ7AnsCewKeF3sCnhd7AnsCewJ7AnsCewJ7Ap4XewJ7AnsCewJ7AnsCnheeF3sCewJ7AnsCnhd7Ap4XnhcAAA==";
app.TERRAIN_IMAGES["A"] = tileImage_10;

let tileImage_11 = new Image();
tileImage_11.src = "data:image/x-ms-bmp;base64,Qk24AAAAAAAAADYAAAAoAAAACAAAAAgAAAABABAAAAAAAIIAAAASCwAAEgsAAAAAAAAAAAAAewJ7Ap4XnheeF3sCewJ7Ap4XewKeF54Xnhd7AnsCewJ7AnsCnheeF54XewJ7AnsCewKeF54Xnhd7AnsCewKeF3sCnheeF54XewJ7AnsCewJ7Ap4XnheeF54XewJ7AnsCnheeF3sCnheeF3sCewJ7Ap4XnheeF54Xnhd7AnsCewIAAA==";
app.TERRAIN_IMAGES["B"] = tileImage_11;

app.wholeObstacle = ["9", "A", "B"] ;

app.terrains = "\
011111111111111111299011111111111111111111111111111111111112\
344444444444444444599344444444444444444444444444444444444445\
3444444444444444445A9344444444444444444444444444444444444445\
344444444444444444599344444444444444444444444444444444444445\
3444444444444444445A9344444444444444444444444444444444444445\
34444444444444444459B344444444444444444444444444444444444445\
344444444444444444599344444444444444444444444444444444444445\
344444444444444444599344444444444444444444444444444444444445\
344444444444444444599344444444444444444444444444444444444445\
3444444444444444445A9344444444444444444444444444444444444445\
344444444444444444599344444444444444444444444444444444444445\
344444444444444444599344444444444444444444444444444444444445\
344444444444444444411444444444444444444444444444444444444445\
344444444444444444444444444444444444444444444444444444444445\
344444444444444444444444444444444444444444444444444444444445\
344444444444444444444444444444444444444444444444444444444445\
344444444444444444444444444444444444444444444444444444444445\
344444444444444444444444444444444444444444444444444444444445\
344444444444444444444444444444444444444444444444444444444445\
344444444444444444444444444444444444444444444444444444444445\
344444444444444444444444444444444444444444444444444444444445\
344444444444444444444444444444444444444444444444444444444445\
344444444444444444444444444444444444444444444444444444444445\
344444444444444444444444444444444444444444444444444444444445\
344444444444444444444444444444444444444444444444444444444445\
344444444444444444444444444444444444444444444444444444444445\
344444444444444444444444444444444444444444444444444444444445\
344444444444444444444444444444444444444444444444444444444445\
344444444444444444444444444444444444444444444444444444444445\
677777777777777777777777777777777777777777777777777777777778"

app.COVER_IMAGES = {}

let coverImage_0 = new Image();
coverImage_0.src = "data:image/gif;base64,R0lGODlhCAAIAKIAAAAAAP///+Y6QilaQkKMSv+tMf///wAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAAAGACwAAAAACAAIAAADD2i63FyuCMgIXcSMUblzCQA7";
app.COVER_IMAGES["1"] = coverImage_0;

let coverImage_1 = new Image();
coverImage_1.src = "data:image/gif;base64,R0lGODlhCAAIAKIAAAAAAP///wCc3ilaQkKMSv+tMf///wAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAAAGACwAAAAACAAIAAADD2gm2lvMrSEbMYNaXbtvCQA7";
app.COVER_IMAGES["2"] = coverImage_1;

let coverImage_2 = new Image();
coverImage_2.src = "data:image/gif;base64,R0lGODlhCAAIAKIAAAAAAP///+Y6QilaQkKMSv+tMfdzIf///yH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAAAHACwAAAAACAAIAAADE3gqJ6zKlDfGIQaeQZbuWiiOYQIAOw==";
app.COVER_IMAGES["3"] = coverImage_2;

let coverImage_3 = new Image();
coverImage_3.src = "data:image/gif;base64,R0lGODlhCAAIAKIAAAAAAP///ylaQkKMSv///wAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAAAEACwAAAAACAAIAAADDki6rNKOjbgmtApLSGYCADs=";
app.COVER_IMAGES["4"] = coverImage_3;

let coverImage_4 = new Image();
coverImage_4.src = "data:image/gif;base64,R0lGODlhCAAIAKIAAAAAAP///ylaQkKMSv///wAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAAAEACwAAAAACAAIAAADDkhCNMyrSfVmvc7OjO9NADs=";
app.COVER_IMAGES["5"] = coverImage_4;

let coverImage_5 = new Image();
coverImage_5.src = "data:image/gif;base64,R0lGODlhCAAIAKIAAAAAAP///ylaQkKMSv///wAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAAAEACwAAAAACAAIAAADDki6O+wEKskqbZWJTDZJADs=";
app.COVER_IMAGES["6"] = coverImage_5;

app.covers = "\
000000000500000000000000000000000000000000000000000000000000\
000000004060000000000000000000000000000000000000000000000000\
000001000000000000000000000046000000500000000000000000000000\
000000000030000000000000000464000000606000000000000000000000\
000000020000000000000000000000650000400000000000000000000000\
000000000000000000000000000005554000000400000000000000000000\
000500060004000000000000000000446060000000000000000000000000\
006460005000000000000000000000000000050000000000000000000000\
000460000005000200600000000000000000000000000000000000000000\
000000000603000034000000000000000000000000000000000000000000\
000000000023000003000000000000000000000000000000000000000000\
000000000060400000000000000000000000000000000000000000000000\
000000000000000000000000000000000000000000000000000000000000\
000000000000000000000000000000000000000000000000000000000000\
000000000000000000000000000000000000000000000000000000000000\
000000000000000000000000000000000000000000000000000000000000\
000000000000000000000000000000000000000000000000000000000000\
000000000000000000000000000000000000000000000000000000000000\
000000000000000000000000000000000000000000000000000000000000\
000000000000000000000000000000000000000000000000000000000000\
000000000000000000000000000000000000000000000000000000000000\
000000000000000000000000000000000000000000000000000000000000\
000000000000000000000000000000000000000000000000000000000000\
000000000000000000000000000000000000000000000000000000000000\
000000000000000000000000000000000000000000000000000000000000\
000000000000000000000000000000000000000000000000000000000000\
000000000000000000000000000000000000000000000000000000000000\
000000000000000000000000000000000000000000000000000000000000\
000000000000000000000000000000000000000000000000000000000000\
000000000000000000000000000000000000000000000000000000000000"

app.objects = []
for(let i=0; i<app.w_h; i++){
	app.objects.push([]);
	for(let j=0; j<app.w_w; j++){
		app.objects[i].push(null);
	}
}

app.isOutside = function (x, y) {
	if(x<0 || y<0 || x>=app.w_w || y>=app.w_h)
		return true;
	return false;
},

new app.Person(1, 29, 4);
new app.Tree(3, 3, 0, false);
new app.Food(3, 7, 0);
new app.Tree(6, 8, 0, false);
new app.Tree(10, 25, 0, false);
new app.House(12, 10, 1, 0);
new app.Food(12, 12, 1);
new app.Person(13, 14, 2);
new app.Tree(13, 23, 1, false);
new app.Stone(13, 5, 0);
new app.Food(16, 15, 1);
new app.Person(21, 11, 3);
new app.Stone(23, 23, 1);
new app.Food(23, 5, 0);
new app.Food(23, 20, 1);
new app.Person(33, 8, 1);
new app.Food(33, 7, 1);
new app.Tree(33, 29, 1, false);
new app.House(33, 14, 2, 1);
new app.Stone(43, 7, 1);
new app.Tree(43, 16, 0, false);
new app.Tree(43, 20, 0, false);
new app.Food(49, 6, 0);
new app.Tree(51, 12, 0, false);
new app.Stone(55, 15, 2);
new app.Food(53, 14, 1);
new app.Tree(57, 21, 1, false);
new app.Tree(55, 13, 1, false);


app.PLAYER_IMAGES = [];

let up_images = [];
let up_0 = new Image();
up_0.src = "data:image/gif;base64,R0lGODlhCAAIALMAAAAAAP///60hMTEhMTExUkpKc/+llOY6OveEhP///wAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAAAJACwAAAAACAAIAAAEITCBQgtIshBiMTAIYlySYY4SdxwaACBCLCAXMLg3JrlkBAA7";
up_images.push(up_0);

let up_1 = new Image();
up_1.src = "data:image/gif;base64,R0lGODlhCAAIALMAAAAAAP///60hMTEhMTExUkpKc/+llOY6OveEhP///wAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAAAJACwAAAAACAAIAAAEIjCBQgtIshBiMTAIYlwAYZwGAQBIcRwFQgq0cEnDmmPSekcAOw==";
up_images.push(up_1);

let up_2 = new Image();
up_2.src = "data:image/gif;base64,R0lGODlhCAAIALMAAAAAAP///60hMWNSYzExUkpKc/+llOY6OveEhP///wAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAAAJACwAAAAACAAIAAAEHzCBQgtIshBiMTAIYlySYY4Sdxwa8AmwQLruQEo0FgEAOw==";
up_images.push(up_2);

let up_3 = new Image();
up_3.src = "data:image/gif;base64,R0lGODlhCAAIALMAAAAAAP///60hMWNSYzExUkpKc/+llOY6OveEhP///wAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAAAJACwAAAAACAAIAAAEHzCBQgtIshBiMTAIYlySYY4Sdxwa8AmwQLruQEo0FgEAOw==";
up_images.push(up_3);

app.PLAYER_IMAGES.push(up_images);

let right_images = [];
let right_0 = new Image();
right_0.src = "data:image/gif;base64,R0lGODlhCAAIALMAAAAAAP///60hMTEhMWNSYzExUkpKc/+llOY6OveEhP///wAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAAAKACwAAAAACAAIAAAEIFABQw1Q0pRdLkhHeEmhmBVIIXTAISCIkHgEAAyjZI8RADs=";
right_images.push(right_0);

let right_1 = new Image();
right_1.src = "data:image/gif;base64,R0lGODlhCAAIALMAAAAAAP///60hMTEhMWNSYzExUkpKc/+llOY6OveEhP///wAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAAAKACwAAAAACAAIAAAEIVABQw1Q0pRdLkhH6Blh2AFHgRRC4gkIIlwSAQADLd10BAA7";
right_images.push(right_1);

let right_2 = new Image();
right_2.src = "data:image/gif;base64,R0lGODlhCAAIALMAAAAAAP///60hMTEhMWNSYzExUkpKc/+llOY6OveEhP///wAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAAAKACwAAAAACAAIAAAEIFABQw1Q0pRdLkhHeEmhmBVIISQAcAgIIowtAQx0qysRADs=";
right_images.push(right_2);

let right_3 = new Image();
right_3.src = "data:image/gif;base64,R0lGODlhCAAIALMAAAAAAP///60hMTEhMWNSYzExUkpKc/+llOY6OveEhP///wAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAAAKACwAAAAACAAIAAAEIFABQw1Q0pRdLkhHeEmhmBVIISQAcAgIIowtAQx0qysRADs=";
right_images.push(right_3);

app.PLAYER_IMAGES.push(right_images);

let down_images = [];
let down_0 = new Image();
down_0.src = "data:image/gif;base64,R0lGODlhCAAIALMAAAAAAP///60hMWNSYzExUkpKc/+llOY6OveEhP///wAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAAAJACwAAAAACAAIAAAEHzCBQgtIkmhyJTIG0gEgeE3EcRAWKaiCcQ4AQGNS3UUAOw==";
down_images.push(down_0);

let down_1 = new Image();
down_1.src = "data:image/gif;base64,R0lGODlhCAAIALMAAAAAAP///60hMWNSYzExUkpKc/+llOY6OveEhP///wAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAAAJACwAAAAACAAIAAAEHzCBQgtIkmhyJTIGck0gaAEGcRyEMQqr0AEDQHeS3UUAOw==";
down_images.push(down_1);

let down_2 = new Image();
down_2.src = "data:image/gif;base64,R0lGODlhCAAIALMAAAAAAP///60hMWNSYzExUkpKc/+llOY6OveEhP///wAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAAAJACwAAAAACAAIAAAEHzCBQgtIkmhyJTIG0gEgeJHEcRCWJKiCiAH00El0FwEAOw==";
down_images.push(down_2);

let down_3 = new Image();
down_3.src = "data:image/gif;base64,R0lGODlhCAAIALMAAAAAAP///60hMWNSYzExUkpKc/+llOY6OveEhP///wAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAAAJACwAAAAACAAIAAAEHzCBQgtIkmhyJTIG0gEgeE3EcRAGACCCKoyD20m2m0QAOw==";
down_images.push(down_3);

app.PLAYER_IMAGES.push(down_images);

let left_images = [];
let left_0 = new Image();
left_0.src = "data:image/gif;base64,R0lGODlhCAAIALMAAAAAAP///60hMTEhMWNSYzExUkpKc/+llOY6OveEhP///wAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAAAKACwAAAAACAAIAAAEIFABQw2QJRer5PnJ5X3HBRRCgWwAkAgIIpTS0BKi1IoRADs=";
left_images.push(left_0);

let left_1 = new Image();
left_1.src = "data:image/gif;base64,R0lGODlhCAAIALMAAAAAAP///60hMTEhMWNSYzExUkpKc/+llOY6OveEhP///wAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAAAKACwAAAAACAAIAAAEIFABQw2QJRer5PnJBRTfZwGJUCCkKCCIcEkDABCzZM8RADs=";
left_images.push(left_1);

let left_2 = new Image();
left_2.src = "data:image/gif;base64,R0lGODlhCAAIALMAAAAAAP///60hMTEhMWNSYzExUkpKc/+llOY6OveEhP///wAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAAAKACwAAAAACAAIAAAEH1ABQw2QJRer5PnJ5X2HCAgFcnAngggXMAA0IUq0GAEAOw==";
left_images.push(left_2);

let left_3 = new Image();
left_3.src = "data:image/gif;base64,R0lGODlhCAAIALMAAAAAAP///60hMTEhMWNSYzExUkpKc/+llOY6OveEhP///wAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAAAKACwAAAAACAAIAAAEH1ABQw2QJRer5PnJ5X3HBSRCgWymgCBCKQ0AAYh3fkUAOw==";
left_images.push(left_3);

app.PLAYER_IMAGES.push(left_images);

// properties of app that will be accessed by the topDown.js module
app.animationID = undefined;
app.paused = false;

// app.keydown array to keep track of which keys are down
// this is called a "key daemon"
// topDown.js will "poll" this array every frame
// this works because JS has "sparse arrays" - not every language does
app.keydown = [];


// the Modernizr object is from the modernizr.custom.js file
window.onblur = function(){
	app.paused = true;
	cancelAnimationFrame(app.animationID);
	app.keydown = []; // clear key daemon
	
	// createjs.Sound.stop();
	// call update() so that our paused screen gets drawn
	app.topDown.update();
};

window.onfocus = function(){
	app.paused = false;
	cancelAnimationFrame(app.animationID);
	
	app.topDown.startSoundtrack();
	// start the animation back up
	app.topDown.update();
};

// event listeners
window.addEventListener("keydown",function(e){
	//console.log("keydown=" + e.keyCode);
	app.keydown[e.keyCode] = true;
});
	
window.addEventListener("keyup",function(e){
	//console.log("keyup=" + e.keyCode);
	app.keydown[e.keyCode] = false;
});

// //Load sounds
// createjs.Sound.alternateExtensions = ["mp3"];
// // gun2.mp3 - BlastWaveFx - Soundbible.com - Modified by Bryce Lockwood
// createjs.Sound.registerSound({id:"tree", src:"sounds/gun2.ogg"});
// // backgroundMusic.mp3 - Decrease Superior Technician - www.nosoapradio.us
// createjs.Sound.registerSound({id:"background", src:"sounds/backgroundMusic.ogg"});

// createjs.Sound.addEventListener("fileload", handleFileLoad);

// function handleFileLoad(e){
// 	if(e.src == "sounds/backgroundMusic.ogg")
// 	{
// 		app.topDown.startSoundtrack();
// 	}
// }

// start game
app.topDown.init();
