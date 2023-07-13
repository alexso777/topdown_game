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
	"KEY_ESC": 27,
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

let tileImage = new Image();
tileImage.src = "data:image/gif;base64,R0lGODlhCAAIAKIAAAAAAP///wDkNv/Mqv///wAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAAAEACwAAAAACAAIAAADDji63CxOwTGFhVPet/VNADs=";
app.TERRAIN_IMAGES["0"] = tileImage;

tileImage = new Image();
tileImage.src = "data:image/gif;base64,R0lGODlhCAAIAKIAAAAAAP///wDkNv/Mqv///wAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAAAEACwAAAAACAAIAAADDji63CpvQAEltTTrzXtOADs=";
app.TERRAIN_IMAGES["1"] = tileImage;

tileImage = new Image();
tileImage.src = "data:image/gif;base64,R0lGODlhCAAIAKIAAAAAAP///wDkNv/Mqv///wAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAAAEACwAAAAACAAIAAADDzi6K+zDwSYqtJViudXOCQA7";
app.TERRAIN_IMAGES["2"] = tileImage;

tileImage = new Image();
tileImage.src = "data:image/gif;base64,R0lGODlhCAAIAKIAAAAAAP///wDkNv/Mqv///wAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAAAEACwAAAAACAAIAAADEDiyLKOKvddmXLM5jXelTQIAOw==";
app.TERRAIN_IMAGES["3"] = tileImage;

tileImage = new Image();
tileImage.src = "data:image/gif;base64,R0lGODlhCAAIAJEAAAAAAP///wDkNv///yH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAAADACwAAAAACAAIAAACB5SPqcvtXQAAOw==";
app.TERRAIN_IMAGES["4"] = tileImage;

tileImage = new Image();
tileImage.src = "data:image/gif;base64,R0lGODlhCAAIAKIAAAAAAP///wDkNv/Mqv///wAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAAAEACwAAAAACAAIAAADDygq07OMPehohWrmu3gfCQA7";
app.TERRAIN_IMAGES["5"] = tileImage;

tileImage = new Image();
tileImage.src = "data:image/gif;base64,R0lGODlhCAAIAKIAAAAAAP///wDkNv/Mqv///wAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAAAEACwAAAAACAAIAAADDzg60qLPvcXakvNauqn/CQA7";
app.TERRAIN_IMAGES["6"] = tileImage;

tileImage = new Image();
tileImage.src = "data:image/gif;base64,R0lGODlhCAAIAKIAAAAAAP///wDkNv/Mqv///wAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAAAEACwAAAAACAAIAAADDii63L7jjRnVtCLeTTtNADs=";
app.TERRAIN_IMAGES["7"] = tileImage;

tileImage = new Image();
tileImage.src = "data:image/gif;base64,R0lGODlhCAAIAKIAAAAAAP///wDkNv/Mqv///wAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAAAEACwAAAAACAAIAAADECi6M8vuiTYfdbdFzSv/QwIAOw==";
app.TERRAIN_IMAGES["8"] = tileImage;

tileImage = new Image();
tileImage.src = "data:image/gif;base64,R0lGODlhCAAIAKIAAAAAAP///wDkNv/Mqv///wAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAAAEACwAAAAACAAIAAADDig6zPoNtvGEo3DVzbtKADs=";
app.TERRAIN_IMAGES["9"] = tileImage;

tileImage = new Image();
tileImage.src = "data:image/gif;base64,R0lGODlhCAAIALMAAAAAAP///wDkNQDkNgLkN//Mqv3MqfzMqf///wAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAAAIACwAAAAACAAIAAAEFLDIcsQY0sy7JffFNRCgiIVmqqYRADs=";
app.TERRAIN_IMAGES[")"] = tileImage;

tileImage = new Image();
tileImage.src = "data:image/gif;base64,R0lGODlhCAAIALMAAAAAAP///wDlNADkNADkNQDkNgLkNwPkN/nNp/rMqP/Mqv3MqfzMqf/Mq////wAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAAAOACwAAAAACAAIAAAEEbDISetUtqhNcd0Yp4Ei50kRADs=";
app.TERRAIN_IMAGES["!"] = tileImage;

tileImage = new Image();
tileImage.src = "data:image/gif;base64,R0lGODlhCAAIAKIAAAAAAP///wDkNQDkNv/Mqv/Mq////wAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAAAGACwAAAAACAAIAAADDji6vNKQkUbqXLZKCwtJADs=";
app.TERRAIN_IMAGES["@"] = tileImage;

tileImage = new Image();
tileImage.src = "data:image/gif;base64,R0lGODlhCAAIAKIAAAAAAP////rMqP/Mqv7Mqv///wAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAAAFACwAAAAACAAIAAADCzi6I/wwSkUmrDABADs=";
app.TERRAIN_IMAGES["#"] = tileImage;


tileImage = new Image();
tileImage.src = "data:image/x-ms-bmp;base64,Qk24AAAAAAAAADYAAAAoAAAACAAAAAgAAAABABAAAAAAAIIAAAASCwAAEgsAAAAAAAAAAAAAewJ7AnsCewKeF3sCewKeF3sCewJ7AnsCnhd7AnsCnhd7AnsCewJ7AnsCewKeF54XewJ7AnsCewJ7AnsCewKeF3sCewJ7AnsCewKeF3sCnhd7AnsCewJ7AnsCewJ7Ap4XewJ7AnsCewJ7AnsCnheeF3sCewJ7AnsCnhd7Ap4XnhcAAA==";
app.TERRAIN_IMAGES["A"] = tileImage;

tileImage = new Image();
tileImage.src = "data:image/x-ms-bmp;base64,Qk24AAAAAAAAADYAAAAoAAAACAAAAAgAAAABABAAAAAAAIIAAAASCwAAEgsAAAAAAAAAAAAAewJ7Ap4XnheeF3sCewJ7Ap4XewKeF54Xnhd7AnsCewJ7AnsCnheeF54XewJ7AnsCewKeF54Xnhd7AnsCewKeF3sCnheeF54XewJ7AnsCewJ7Ap4XnheeF54XewJ7AnsCnheeF3sCnheeF3sCewJ7Ap4XnheeF54Xnhd7AnsCewIAAA==";
app.TERRAIN_IMAGES["B"] = tileImage;

tileImage = new Image();
tileImage.src = "data:image/x-ms-bmp;base64,Qk24AAAAAAAAADYAAAAoAAAACAAAAAgAAAABABAAAAAAAIIAAAASCwAAEgsAAAAAAAAAAAAAnheeF3sCnhd7AnsCewJ7Ap4XewJ7Ap4XewJ7AnsCewKeF54XewJ7AnsCewJ7AnsCewJ7AnsCewJ7AnsCewJ7AnsCewJ7AnsCewJ7AnsCewJ7AnsCewKeF54XewJ7AnsCnhd7AnsCewJ7AnsCewJ7AnsCewKeF3sCnheeF54XewIAAA==";
app.TERRAIN_IMAGES["C"] = tileImage;

app.wholeObstacle = ["C", "A", "B"];

app.terrains = "\
011111111111111####CCABCCBABABCBBBBBBBBBBBBCCCAACACBBCABBACC\
3444444444444445###CCBBBBCBAA#######34444444CBA#011111111112\
3444444444444445###ACCBBCA############344444CA##344444444445\
34444444444444445##CCBBBCB#############34444B###344444444445\
34444444444444445##ABBBCB##############34444CC##344444444445\
34444444444444445##BBCB###############344444CAB#344444444445\
34444444444444445##CC###############3144444CBCA#344444444445\
34444444448777775##CC###############344444444CA#344444444445\
3444444445#########CC###########6111444444444AB3444444444445\
3444444445#########AC############344444444444BC4444444444445\
3444444445#########CC#######01111144444444444444444444444445\
3444444444212#01115C######0144444444444444444444444444444445\
3444444444445#244491#1111)4444444444444444444444444444444445\
3444444444445#264444#444444444444444444444444444444444444445\
3444444444444###############67777777744444444444444444444445\
344444444444421111111112#02##########34444444444444444444445\
344444444444444444444444#44111111111134444444444444444444445\
344444444444444444444444#44444444444444444444444444444444445\
344444444444444444444444#44444444444444444444444444444444445\
344444444444444444444444144444444444444444444444444444444445\
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

let coverImage = new Image();
coverImage.src = "data:image/gif;base64,R0lGODlhCAAIAKIAAAAAAP///+Y6QilaQkKMSv+tMf///wAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAAAGACwAAAAACAAIAAADD2i63FyuCMgIXcSMUblzCQA7";
app.COVER_IMAGES["1"] = coverImage;

coverImage = new Image();
coverImage.src = "data:image/gif;base64,R0lGODlhCAAIAKIAAAAAAP///wCc3ilaQkKMSv+tMf///wAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAAAGACwAAAAACAAIAAADD2gm2lvMrSEbMYNaXbtvCQA7";
app.COVER_IMAGES["2"] = coverImage;

coverImage = new Image();
coverImage.src = "data:image/gif;base64,R0lGODlhCAAIAKIAAAAAAP///+Y6QilaQkKMSv+tMfdzIf///yH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAAAHACwAAAAACAAIAAADE3gqJ6zKlDfGIQaeQZbuWiiOYQIAOw==";
app.COVER_IMAGES["3"] = coverImage;

coverImage = new Image();
coverImage.src = "data:image/gif;base64,R0lGODlhCAAIAKIAAAAAAP///ylaQkKMSv///wAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAAAEACwAAAAACAAIAAADDUi6rNJuDUgmtQpLiBMAOw==";
app.COVER_IMAGES["4"] = coverImage;

coverImage = new Image();
coverImage.src = "data:image/gif;base64,R0lGODlhCAAIAKIAAAAAAP///ylaQkKMSv///wAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAAAEACwAAAAACAAIAAADESi0TNpLvDUiJbWNDXH3IJQAADs=";
app.COVER_IMAGES["5"] = coverImage;

coverImage = new Image();
coverImage.src = "data:image/gif;base64,R0lGODlhCAAIAKIAAAAAAP///ylaQkKMSv///wAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAAAEACwAAAAACAAIAAADDkg62vtksNgmdBdjIXZLADs=";
app.COVER_IMAGES["6"] = coverImage;

app.covers = "\
000000000500000000000000000000000000000000000000000000000000\
045636456265465600000000000000004020600040040000000000000000\
004564564264524210000000000000045634645565400000000035643200\
045632654660152313000000000000000006464565650000002560000000\
000404560405604000000000000000000000406000000000045000223400\
000450600234060500000000000000000000000000000006063400246600\
000520536654260000000000000000000000560026000000245006010200\
006463456111111110000000000000000406000050000000024562345620\
000455460100000000000000000000000000004000000000054500434420\
000141600100000000000000000000000000000060403004563056432560\
062514300100000000000000000060023000004563456650546456546240\
012300000111001111100000000000000000004656024562565464524560\
065656100000000000000000000045065460305636436624562456654650\
000160030000000000000000000000000000000456350002456254625460\
002304005010000000000000000000000000000024562456656654645620\
002001000305002300000000000000000000045635645646245625646420\
023060203600000000062300001111111111565234502500262045644260\
036020400543200003450000000504566545655345634525602064554640\
050300020000406065456456564565444545345665443050620540205640\
023450303005003301230000000121230123560454565645604506456000\
066004012033001612012302000123416512610045665456454565445660\
000600230030546013420430123412651340050403005600634022103660\
604020340602345000454460001236120531504640604060450560206040\
043023405023460034603440040045606045645032602030502060040600\
052034060234052034563400045604104524560456440406040560302640\
012351266123600405045645045660650545004164665040001023063240\
065560510132006000456123415161004506330456454504564564654650\
016364560061020100000001324450045604050415604001450630454400\
035565630060405001236314134045060405064020300546131056440000\
000000000000000000000000000000000000000000000000000000000000"

app.objects = []
for (let i = 0; i < app.w_h; i++) {
	app.objects.push([]);
	for (let j = 0; j < app.w_w; j++) {
		app.objects[i].push(null);
	}
}

app.isOutside = function (x, y) {
	if (x < 0 || y < 0 || x >= app.w_w || y >= app.w_h)
		return true;
	return false;
},




	new app.Tree(7, 8, 1, false);
new app.Tree(7, 8, 0, false);
new app.Tree(7, 9, 0, false);
new app.Tree(7, 10, 0, false);
new app.Tree(7, 11, 0, false);


new app.Tree(4, 28, 0, false);
new app.Tree(4, 24, 0, false);
new app.Tree(3, 19, 0, false);
new app.Tree(4, 27, 1, false);
new app.Tree(6, 28, 0, false);
new app.Tree(4, 24, 0, false);
new app.Tree(5, 19, 1, false);
new app.Tree(7, 27, 0, false);


new app.Tree(8, 12, 0, false);
new app.Tree(10, 12, 0, false);
new app.Tree(14, 12, 0, false);
new app.Tree(16, 12, 0, false);
new app.Tree(18, 12, 0, false);

new app.Tree(9, 6, 0, false);
new app.Tree(11, 6, 0, false);
new app.Tree(13, 6, 0, false);
new app.Tree(15, 6, 0, false);

new app.Tree(0, 1, 1, false);
new app.Tree(0, 3, 1, false);
new app.Tree(0, 5, 1, false);
new app.Tree(0, 6, 1, false);
new app.Tree(0, 8, 1, false);
new app.Tree(0, 23, 1, false);
new app.Tree(0, 14, 1, false);
new app.Tree(0, 12, 1, false);
new app.Tree(0, 16, 1, false);
new app.Tree(0, 17, 1, false);
new app.Tree(0, 25, 1, false);


new app.Tree(2, 6, 1, false);
new app.Tree(2, 7, 1, false);
new app.Tree(2, 13, 1, false);
new app.Tree(2, 19, 0, false);
new app.Tree(2, 27, 1, false);
new app.Tree(2, 14, 1, false);
new app.Tree(2, 12, 0, false);
new app.Tree(2, 11, 1, false);
new app.Tree(2, 25, 0, false);

new app.Tree(15, 4, 1, false);

new app.Tree(4, 4, 0, false);
new app.Tree(3, 2, 0, false);
new app.Tree(6, 5, 1, false);
new app.Tree(6, 3, 0, false);
new app.Tree(3, 5, 0, false);

new app.Tree(4, 1, 0, false);
new app.Tree(8, 1, 0, false);
new app.Tree(12, 1, 0, false);
new app.Tree(14, 1, 0, false);


new app.Tree(58, 28, 0, false);
new app.Tree(58, 18, 0, false);
new app.Tree(55, 28, 0, false);
new app.Tree(52, 19, 0, false);
new app.Tree(56, 14, 0, false);
new app.Tree(55, 25, 0, false);
new app.Tree(52, 15, 0, false);
new app.Tree(56, 4, 0, false);
new app.Tree(57, 25, 0, false);
new app.Tree(56, 26, 0, false);
new app.Tree(58, 21, 0, false);
new app.Tree(52, 21, 0, false);
new app.Tree(51, 13, 1, false);
new app.Tree(48, 18, 0, false);
new app.Tree(47, 18, 0, false);


new app.Tree(10, 17, 0, false);
new app.Tree(10, 16, 0, false);
new app.Tree(10, 15, 0, false);
new app.Tree(10, 24, 0, false);
new app.Tree(10, 23, 0, false);

new app.Tree(14, 13, 0, false);
new app.Tree(14, 13, 0, false);
new app.Tree(15, 13, 0, false);
new app.Tree(16, 13, 0, false);
new app.Tree(17, 13, 0, false);
new app.Tree(18, 13, 0, false);
new app.Tree(21, 13, 0, false);
new app.Tree(22, 13, 0, false);
new app.Tree(23, 13, 0, false);
new app.Tree(24, 13, 0, false);
new app.Tree(25, 13, 0, false);
new app.Tree(26, 13, 0, false);
new app.Tree(27, 13, 0, false);


new app.Tree(14, 15, 0, false);
new app.Tree(15, 15, 0, false);
new app.Tree(16, 15, 0, false);
new app.Tree(17, 15, 0, false);
new app.Tree(18, 15, 0, false);
new app.Tree(19, 15, 0, false);
new app.Tree(20, 15, 0, false);
new app.Tree(21, 15, 0, false);
new app.Tree(22, 15, 0, false);
new app.Tree(25, 15, 0, false);
new app.Tree(25, 16, 0, false);
new app.Tree(25, 17, 0, false);
new app.Tree(25, 18, 0, false);
new app.Tree(25, 19, 0, false);
new app.Tree(22, 16, 0, false);
new app.Tree(22, 17, 0, false);
new app.Tree(22, 18, 0, false);
new app.Tree(22, 19, 0, false);

new app.Tree(28, 14, 0, false);
new app.Tree(29, 14, 0, false);
new app.Tree(30, 14, 0, false);
new app.Tree(31, 14, 0, false);
new app.Tree(32, 14, 0, false);



new app.Tree(32, 24, 0, false);
new app.Tree(37, 20, 0, false);
new app.Tree(41, 16, 0, false);
new app.Tree(36, 14, 0, false);
new app.Tree(37, 18, 0, false);
new app.Tree(34, 24, 0, false);
new app.Tree(36, 27, 0, false);
new app.Tree(42, 26, 0, false);
new app.Tree(33, 24, 0, false);
new app.Tree(38, 25, 0, false);

new app.Tree(4, 8, 1, false);
new app.Tree(11, 18, 0, false);
new app.Tree(9, 6, 0, false);
new app.Tree(14, 16, 1, false);

new app.Tree(44, 8, 1, false);
new app.Tree(41, 18, 0, false);
new app.Tree(39, 6, 0, false);
new app.Tree(44, 16, 1, false);
new app.Tree(43, 6, 0, false);
new app.Tree(40, 15, 0, false);
new app.Tree(36, 16, 1, false);
new app.Tree(44, 13, 0, false);

new app.Tree(47, 28, 1, false);
new app.Tree(46, 26, 0, false);
new app.Tree(44, 12, 0, false);
new app.Tree(46, 26, 0, false);
new app.Tree(49, 23, 0, false);

new app.Tree(54, 12, 0, false);
new app.Tree(56, 6, 1, false);
new app.Tree(59, 23, 0, false);
new app.Tree(57, 12, 0, false);
new app.Tree(54, 6, 0, false);
new app.Tree(58, 15, 0, false);

new app.Food(3, 3, 0);
new app.Food(3, 5, 1);
new app.Food(4, 4, 1);
new app.Food(14, 3, 1);

new app.Food(5, 23, 1);
new app.Food(3, 28, 0);
new app.Food(8, 24, 1);
new app.Food(7, 15, 0);

new app.Food(48, 23, 1);
new app.Food(32, 21, 0);
new app.Food(50, 4, 1);
new app.Food(37, 7, 0);

new app.Food(50, 25, 1);
new app.Food(45, 21, 0);


new app.Tree(11, 28, 0, false);
new app.Tree(9, 16, 0, false);
new app.Tree(14, 18, 1, false);


new app.Stone(8, 3, 0);
new app.Stone(9, 4, 2);
new app.Stone(5, 16, 0);
new app.Stone(6, 17, 1);
new app.Stone(5, 17, 0);
new app.Stone(8, 19, 2);

new app.Stone(28, 23, 0);
new app.Stone(29, 24, 2);
new app.Stone(25, 26, 0);
new app.Stone(26, 27, 1);
new app.Stone(25, 27, 0);
new app.Stone(18, 29, 2);

new app.Stone(38, 23, 0);
new app.Stone(39, 24, 2);
new app.Stone(35, 16, 0);
new app.Stone(36, 27, 1);
new app.Stone(45, 27, 0);
new app.Stone(48, 19, 2);

new app.Tree(33, 26, 1, false);
new app.Tree(35, 27, 1, false);
new app.Tree(38, 28, 1, false);
new app.Tree(34, 29, 0, false);
new app.Tree(32, 26, 1, false);
new app.Tree(45, 27, 1, false);

new app.Tree(3, 26, 1, false);
new app.Tree(5, 27, 1, false);
new app.Tree(8, 28, 1, false);
new app.Tree(4, 29, 0, false);
new app.Tree(12, 26, 1, false);
new app.Tree(15, 27, 1, false);
new app.Tree(18, 28, 1, false);
new app.Tree(14, 29, 0, false);
new app.Tree(22, 29, 1, false);
new app.Tree(26, 29, 1, false);
new app.Tree(27, 28, 0, false);
new app.Tree(21, 26, 1, false);
new app.Stone(11, 23, 0);
new app.Stone(9, 24, 2);
new app.Stone(15, 26, 0);
new app.Tree(8, 23, 0, false);

new app.Person(1, 29, 4);
new app.Tree(3, 3, 0, false);
new app.Food(3, 7, 0);
new app.Tree(6, 8, 0, false);
new app.Tree(10, 25, 0, false);
new app.House(12, 10, 1, 0, 8);
new app.Person(12, 14, 2);
new app.Tree(13, 23, 1, false);
new app.Stone(13, 5, 0);
new app.Food(16, 15, 1);
new app.Person(21, 10, 3);
new app.Stone(23, 23, 1);
new app.Food(23, 5, 0);
new app.Food(23, 20, 1);
new app.Person(33, 8, 1);
new app.Food(33, 7, 1);
new app.Tree(33, 29, 1, false);
new app.House(33, 14, 2, 1, 8);
new app.Stone(43, 7, 1);
new app.Tree(43, 16, 0, false);
new app.Tree(43, 20, 0, false);
new app.Food(49, 6, 0);
new app.Tree(51, 12, 0, false);
new app.Stone(55, 15, 2);
new app.Food(53, 14, 1);
new app.Tree(57, 21, 1, false);
new app.Tree(55, 13, 1, false);

new app.Stone(36, 8, 0);
new app.Stone(34, 9, 1);
new app.Stone(37, 11, 2);


new app.Tree(15, 26, 0, false);
new app.Tree(16, 29, 1, false);
new app.Tree(18, 24, 0, false);
new app.Tree(15, 25, 0, false);
new app.Tree(19, 26, 1, false);
new app.Tree(15, 23, 0, false);
new app.Tree(17, 25, 1, false);


new app.Tree(18, 26, 0, false);
new app.Tree(19, 29, 1, false);
new app.Tree(21, 24, 0, false);
new app.Tree(24, 25, 0, false);
new app.Tree(26, 26, 1, false);
new app.Tree(25, 23, 0, false);
new app.Tree(27, 25, 1, false);

new app.Tree(41, 29, 0, false);
new app.Tree(34, 27, 0, false);
new app.Tree(36, 28, 0, false);
new app.Tree(37, 15, 0, false);
new app.Tree(48, 17, 0, false);
new app.Tree(39, 14, 0, false);
new app.Tree(30, 12, 0, false);
new app.Tree(32, 27, 0, false);
new app.Tree(35, 21, 0, false);
new app.Tree(37, 28, 0, false);
new app.Tree(34, 28, 0, false);
new app.Tree(37, 14, 0, false);
new app.Tree(34, 17, 0, false);
new app.Tree(36, 9, 0, false);
new app.Tree(47, 28, 0, false);


new app.Food(58, 3, 0);
new app.Tree(51, 2, 0);
new app.Tree(56, 11, 1);

new app.Stone(57, 4, 0);
new app.Stone(55, 3, 1);
new app.Stone(55, 4, 2);

new app.Stone(33, 18, 0);
new app.Stone(35, 18, 1);
new app.Stone(31, 19, 2);

new app.Stone(38, 28, 0);

new app.Stone(58, 28, 0);
new app.Stone(58, 26, 1);
new app.Stone(56, 24, 0);
new app.Stone(52, 26, 2);

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
window.onblur = function () {
	app.paused = true;
	cancelAnimationFrame(app.animationID);
	app.keydown = []; // clear key daemon

	// createjs.Sound.stop();
	// call update() so that our paused screen gets drawn
	app.topDown.update();
};

window.onfocus = function () {
	app.paused = false;
	cancelAnimationFrame(app.animationID);

	app.topDown.startSoundtrack();
	// start the animation back up
	app.topDown.update();
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
