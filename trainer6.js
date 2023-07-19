"use strict";

app.TRAINER_IMAGES = [];

let up_images = [];
let up_0 = new Image();
up_0.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAwCAMAAABHcohdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkU4MTMwRjYwMjVGQzExRUVBMkRBOTBGNDAyMjMyRjI4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkU4MTMwRjYxMjVGQzExRUVBMkRBOTBGNDAyMjMyRjI4Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RTgxMzBGNUUyNUZDMTFFRUEyREE5MEY0MDIyMzJGMjgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RTgxMzBGNUYyNUZDMTFFRUEyREE5MEY0MDIyMzJGMjgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5y6ob1AAAAM1BMVEVoKCgoKFCwsNDYkHD4wJBCQUno6Pg4OHh4QEBNTU0tLS3AODhxERHQXEAoJywAAAAAAACJlVq0AAAAEXRSTlP/////////////////////ACWtmWIAAADASURBVHja5NTRDoMgDAVQQXQUkPL/X7t0tQHNEi973U00ejmxhAeX9pDlz0C5ZRaUkvMxJGcjODhumQP3AeMQHFyHaIMD5pyl6JF3ZhQw16rVmFJqFYICI8w2TroZINcyRBsU2JBat63fdRkFnfToMgr4EymvTyiIMQTv9535dYY5Je9DiBEF6xqjc0QGiJzTFgNC5KMWopRki7KMgtakojOGLif5COSTNkKoHdMM0I1plM0BHfLtGQc//yffAgwAC85RHcttB5AAAAAASUVORK5CYII=";
up_images.push(up_0);

let up_1 = new Image();
up_1.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAwCAMAAABHcohdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkY5NjFFRTA0MjVGQzExRUVBNkQxRDVBOTU3QUQ1MzAyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkY5NjFFRTA1MjVGQzExRUVBNkQxRDVBOTU3QUQ1MzAyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Rjk2MUVFMDIyNUZDMTFFRUE2RDFENUE5NTdBRDUzMDIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Rjk2MUVFMDMyNUZDMTFFRUE2RDFENUE5NTdBRDUzMDIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5Od1BzAAAALVBMVEUoKFA4OHjYkHB4QEBCQUno6PiwsNBNTU0tLS3AODjQXEAoJyxxEREAAAAAAABTdznkAAAAD3RSTlP//////////////////wDU3JihAAAAvUlEQVR42uyUyw6EIAxFW3xQhPr/nzs0NwziLCj7OQuV25PcGhPpnkB/YVEoL1aFUlK6HqTUFL9wvVgT3gXPEr8wliDxC6opWdCxs6pXUM0Z0ZNScjbFKzRFtdVZtiKgpoPEK2wbSnLe937F2CuE0JQOxl6B+TyxFMCTX7AXZSZSjZEqzKoixzF8zYlQbzWWLzGKMNvqfkEVFUCEKIRVIUZbDeA0LDkV7huDzs//YSpgxXG4JpgyjpzCR4ABAIAERtU5Qww0AAAAAElFTkSuQmCC";
up_images.push(up_1);

let up_2 = new Image();
up_2.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAwCAMAAABHcohdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjBCMzA2NUE3MjVGRDExRUU4NTc1QTlDRTAxRkIyNEI2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjBCMzA2NUE4MjVGRDExRUU4NTc1QTlDRTAxRkIyNEI2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MEIzMDY1QTUyNUZEMTFFRTg1NzVBOUNFMDFGQjI0QjYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MEIzMDY1QTYyNUZEMTFFRTg1NzVBOUNFMDFGQjI0QjYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5LVsn6AAAAM1BMVEVoKCgoKFCwsNDYkHD4wJBCQUno6Pg4OHh4QEBNTU0tLS3AODhxERHQXEAoJywAAAAAAACJlVq0AAAAEXRSTlP/////////////////////ACWtmWIAAADASURBVHja5NTRDoMgDAVQQXQUkPL/X7t0tQHNEi973U00ejmxhAeX9pDlz0C5ZRaUkvMxJGcjODhumQP3AeMQHFyHaIMD5pyl6JF3ZhQw16rVmFJqFYICI8w2TroZINcyRBsU2JBat63fdRkFnfToMgr4EymvTyiIMQTv9535dYY5Je9DiBEF6xqjc0QGiJzTFgNC5KMWopRki7KMgtakojOGLif5COSTNkKoHdMM0I1plM0BHfLtGQc//yffAgwAC85RHcttB5AAAAAASUVORK5CYII=";
up_images.push(up_2);

let up_3 = new Image();
up_3.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAwCAMAAABHcohdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjE1NTMyN0Y4MjVGRDExRUVBQTkwOEVERTMwMTVGRTg2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjE1NTMyN0Y5MjVGRDExRUVBQTkwOEVERTMwMTVGRTg2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTU1MzI3RjYyNUZEMTFFRUFBOTA4RURFMzAxNUZFODYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MTU1MzI3RjcyNUZEMTFFRUFBOTA4RURFMzAxNUZFODYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5WfK9wAAAAMFBMVEU4OHgoKFBoKCjYkHB4QEBCQUmwsNDo6PhNTU0tLS3AODhxERHQXEAoJywAAAAAAAC7a4U8AAAAEHRSTlP///////////////////8A4CNdGQAAAL5JREFUeNrs1OsKgzAMBeC4au3FHt//bbeQ1VQHmvzfAaXGD05FkfaH0B84Qb3EC2otZRtSSid2sF3iA9eCscQOziUysQOgFB5o+BqwAqA1GY2ptTUmVtAJ0Ot45gF8vIbIxAp6SWvLome+Pc9WoEQDhOADsikJr2IksgNgXacJIJo+IQLkPLzNW8DbIcpHUsqZ6fHRmkAIQPom5xi50A7kIYFewauUfECR0p//wyNQxBvtBV6g7PYvdwZvAQYAMI1LfbrSqroAAAAASUVORK5CYII=";
up_images.push(up_3);

app.TRAINER_IMAGES.push(up_images);

let right_images = [];
let right_0 = new Image();
right_0.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAwCAMAAABHcohdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjYwNEI2RkM4MjVGQzExRUVBOTRBRUNGRjA1RDI3Q0UwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjYwNEI2RkM5MjVGQzExRUVBOTRBRUNGRjA1RDI3Q0UwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjA0QjZGQzYyNUZDMTFFRUE5NEFFQ0ZGMDVEMjdDRTAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjA0QjZGQzcyNUZDMTFFRUE5NEFFQ0ZGMDVEMjdDRTAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5cBB+1AAAAM1BMVEXYkHAtLS1NTU1CQUno6PgoKFD4wJBmhHs4OHiwsNB4QEDAODgoJyzQXEBxEREAAAAAAABDkDfgAAAAEXRSTlP/////////////////////ACWtmWIAAADESURBVHja5NTbDoMgEARQQPDCgtv//9oy3RoobeLCayfRRD1xlngxj5uYPwNnl1FwnkS5CdFF9CB3IUpJD/oCJJWgRg/aEtx+21LCWT3AgSS9ApCzDjBjHPoICMq0QEiLZNj3MhVgWWSwX49cA2TMGmOYTUmMYwBFUrauMWJrXphbcC1Vtnr7EdCiWBLCKMBFa7Hfd2bvZ4BzAN4fRwjeM48DawGwRBR9ff63QMZ0Dkt0bg7UUVE1C6SovTwOJv6TTwEGAL80Ui2inA5XAAAAAElFTkSuQmCC";
right_images.push(right_0);

let right_1 = new Image();
right_1.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAwCAMAAABHcohdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjc3REEwODc1MjVGQzExRUVCMjYxQTQ3NDkxQjJBODY2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjc3REEwODc2MjVGQzExRUVCMjYxQTQ3NDkxQjJBODY2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NzdEQTA4NzMyNUZDMTFFRUIyNjFBNDc0OTFCMkE4NjYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NzdEQTA4NzQyNUZDMTFFRUIyNjFBNDc0OTFCMkE4NjYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5lwIlzAAAAMFBMVEXYkHAtLS1NTU34wJBCQUlmhHsoKFCwsNA4OHh4QEDAODgoJyzQXEBxEREAAAAAAADZYyd3AAAAEHRSTlP///////////////////8A4CNdGQAAAMFJREFUeNrs1N0OwyAIBWCxPwpa9/5vO8+YqWuWFe53Ei9avwikjeFxk/AHTnBc4gXHIVKniAxiB/USkVLs4FoAKT0oYwdzERy/baXgrR3gQVNeAajVBlpDO/IREBSzAiUz0mbfYxrAumpj3z65BWibZ0JoLfQw+wAKabFlYcaafphbMEbVdR5vB9gmGoh79t0LYkRjIDnHmJIfEDGjuZyJUgL0ARC0ho0YR8s+oKNqiHRkLzij7McddQuct9xTgAEAk3NMxfnWEAkAAAAASUVORK5CYII=";
right_images.push(right_1);

let right_2 = new Image();
right_2.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAwCAMAAABHcohdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjgxM0Q5OTA3MjVGQzExRUU4NDY4RDgzODE3NjMzNENGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjgxM0Q5OTA4MjVGQzExRUU4NDY4RDgzODE3NjMzNENGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODEzRDk5MDUyNUZDMTFFRTg0NjhEODM4MTc2MzM0Q0YiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ODEzRDk5MDYyNUZDMTFFRTg0NjhEODM4MTc2MzM0Q0YiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz79QMYYAAAAM1BMVEXYkHAtLS1NTU1CQUno6PgoKFD4wJBmhHs4OHiwsNB4QEDAODgoJyzQXEBxEREAAAAAAABDkDfgAAAAEXRSTlP/////////////////////ACWtmWIAAADESURBVHja5NTbDoMgEARQQPDCgtv//9oy3RoobeLCayfRRD1xlngxj5uYPwNnl1FwnkS5CdFF9CB3IUpJD/oCJJWgRg/aEtx+21LCWT3AgSS9ApCzDjBjHPoICMq0QEiLZNj3MhVgWWSwX49cA2TMGmOYTUmMYwBFUrauMWJrXphbcC1Vtnr7EdCiWBLCKMBFa7Hfd2bvZ4BzAN4fRwjeM48DawGwRBR9ff63QMZ0Dkt0bg7UUVE1C6SovTwOJv6TTwEGAL80Ui2inA5XAAAAAElFTkSuQmCC";
right_images.push(right_2);

let right_3 = new Image();
right_3.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAwCAMAAABHcohdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjkxMTgzNkZGMjVGQzExRUVCMzE1RkY4OTU3NUMyODBEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjkxMTgzNzAwMjVGQzExRUVCMzE1RkY4OTU3NUMyODBEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTExODM2RkQyNUZDMTFFRUIzMTVGRjg5NTc1QzI4MEQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTExODM2RkUyNUZDMTFFRUIzMTVGRjg5NTc1QzI4MEQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7tgf5dAAAAM1BMVEV4QEDYkHD4wJBCQUlNTU1mhHs4OHgoKFDo6PiwsNAtLS3AODgoJyzQXEBxEREAAAAAAABwB4/gAAAAEXRSTlP/////////////////////ACWtmWIAAADCSURBVHja7JTtDoMgDEWLHzAp2L3/0467jsjcEtv93klI1J5wL9FI9wvoLziF/YRX2HfmOsDcFbtQTzCXYhfOAaA0EGMXxhBsv66l4KldwI1SnkCo1SaIoA6/AQVhVkGVUdKyr2MahHnWYt9euUXQmgchiIQGkU9AkIZNExHW8MFcCv2ouo7t7QLGOXeJGil5hWXJWZVbY2qI+ASMU4pRJMZtQ02f0GsuDVwR9bFHyLnXBB8/kEtBQ8aBX/j5L/cQYAAN6lHdc4zhZgAAAABJRU5ErkJggg==";
right_images.push(right_3);

app.TRAINER_IMAGES.push(right_images);

let down_images = [];
let down_0 = new Image();
down_0.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAwCAMAAABHcohdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjRGNzlGMEU0MjU3RDExRUVCQTA0QUQ2NTBCNDc5NDE4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjRGNzlGMEU1MjU3RDExRUVCQTA0QUQ2NTBCNDc5NDE4Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NEY3OUYwRTIyNTdEMTFFRUJBMDRBRDY1MEI0Nzk0MTgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NEY3OUYwRTMyNTdEMTFFRUJBMDRBRDY1MEI0Nzk0MTgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7BzfRqAAAAKlBMVEXo6Pj4gID40LCQeDjYkHCwsNBoaGgwMDDwuJCrMToICAh4QEDgUFAAAADgKf5uAAAADnRSTlP/////////////////AEXA3MgAAADsSURBVHjapNRREoIwDEXRog2BFPa/XXsJHUBnJNX3obE5tqmjpvUmqQOUmn/BsnySXgC5ojigMc/L8o6ioG3fyDFuDNAeBpYdeO0kBsy8NWxpMA58wLb9uYLEAYveOKoo8BFz5mPylJIzxCwKWJxqWIZSU0XBQcxo8djaUQBh41IeNaVwmL/JLA74mk17qG3L6YivwGysUS17VHl9ucVXwNa0zUS0RsQMwlFRkDPXGkeRZ40I27MWBQypmhINT6rhyNMtbsC6MhrEQ6V6+W3eAogjb7Z2D+CaDOYfkg/YByC+3J77wY//9i8BBgB+bT6FJIJPSgAAAABJRU5ErkJggg==";
down_images.push(down_0);

let down_1 = new Image();
down_1.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAwCAMAAABHcohdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjlDRDREQjE3MjVGQTExRUVCMTI4RjgwMTkwQ0M5NUFDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjlDRDREQjE4MjVGQTExRUVCMTI4RjgwMTkwQ0M5NUFDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OUNENERCMTUyNUZBMTFFRUIxMjhGODAxOTBDQzk1QUMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OUNENERCMTYyNUZBMTFFRUIxMjhGODAxOTBDQzk1QUMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6gaN+KAAAAM1BMVEVCQUk4OHhNTU0tLS2wsNBmhHvo6PgoKFD4wJB4QEDAODjYkHAoJyxxERHQXEAAAAAAAACoGFa0AAAAEXRSTlP/////////////////////ACWtmWIAAADQSURBVHja7JTLFoMgDAVFqLzE+P9fW66R1nqsJHtnoZjMIRcXDGuH4RGUQjmhFUpJaTmQUlPkwnJCJ5wHHIfIBKJ5J1XamkgjlDLPrwoa/C5FJyDScQRiywVEhPJ7SK5KBCyGCoJ+IUINSl/ACLRzDoEoBH7mzNU9w70QaSNXYoQQI9ZclQn4cI6IGyxyhX9UV1ixlTHeo8Q4Z8w0yQXgvdlwbqy0sBqhjZkq1nJcrTCO1tKHGLktF1hp0uUFIhCsRfvvFdQV+Ki3t9y18BZgAEVeUBHXDlx8AAAAAElFTkSuQmCC";
down_images.push(down_1);

let down_2 = new Image();
down_2.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAwCAMAAABHcohdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkE5REZGOTNEMjVGQTExRUU4RUYzRjVDMUI4NDZGOUM3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkE5REZGOTNFMjVGQTExRUU4RUYzRjVDMUI4NDZGOUM3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QTlERkY5M0IyNUZBMTFFRThFRjNGNUMxQjg0NkY5QzciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QTlERkY5M0MyNUZBMTFFRThFRjNGNUMxQjg0NkY5QzciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz47ZsTNAAAAM1BMVEVCQUmwsNBmhHvo6PgoKFA4OHj4wJBNTU0tLS14QEDAODjYkHAoJyxxERHQXEAAAAAAAADqU8+0AAAAEXRSTlP/////////////////////ACWtmWIAAADVSURBVHja5JTdDoMgDIVlQ36t9f2fdj2pZkiWUXa7cwHl9AunmuhyDLT8GUCdZgGiUvZGpVyIHdg7zQF9QBtiA5i3U0V01cwzANG2PURo6E40B2CkNgJj2wGMCOT+kOpaABSLCIO+xQwPyBhABNq1hsAcgq61qnvOMASgKsoZQM6o1bUBQJxj1oaC6jRv8iuAi1cRLJVzOCPMCuBa7xWKonX1XqNsABBcjPZTlFKMOKNtBY4DZkrXkHq6fVlDADbGa/dZICVE9LUd0JBPtR34+T/5EmAA9ltO/d3fRfoAAAAASUVORK5CYII=";
down_images.push(down_2);

let down_3 = new Image();
down_3.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAwCAMAAABHcohdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkIyRTFGMjczMjVGQTExRUU5Nzc3RDA2NzQ5RTVGMzI4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkIyRTFGMjc0MjVGQTExRUU5Nzc3RDA2NzQ5RTVGMzI4Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QjJFMUYyNzEyNUZBMTFFRTk3NzdEMDY3NDlFNUYzMjgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QjJFMUYyNzIyNUZBMTFFRTk3NzdEMDY3NDlFNUYzMjgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4x7ZiSAAAAM1BMVEVNTU1CQUk4OHgtLS1mhHsoKFCwsNDo6Pj4wJDAODh4QEDYkHAoJyxxERHQXEAAAAAAAAA0BG5aAAAAEXRSTlP/////////////////////ACWtmWIAAADRSURBVHja7JRBEoMgDEVpLAhBTO9/2vInUNFFDdNt30Jj8sZ8R0f3usH9hUmhXJgVSklpH0ipK3ZhvzAnXBeMS2yCyNZIlV6LzAilbNuzgoGeS5kTEGlcgdh2ARGhnB9SuxYBxaOCoAci6EG5F7AC45xjFIlRjzlrt2W4FUCuMENgRq1dZosAJQRc5AazdlBZhXUl8l4aIXhPhOrzLm6EHo4oBFchgj58tAZBo3m/VpbFOb29XYCCR+uoMicofXiMZwWVlsovgi76+pc7C28BBgDgbU/9/qHClAAAAABJRU5ErkJggg==";
down_images.push(down_3);

app.TRAINER_IMAGES.push(down_images);

let left_images = [];
let left_0 = new Image();
left_0.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAwCAMAAABHcohdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkMyNEY5NUQ2MjVGQTExRUU5OENEQUI4QUM4OTcyRjY0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkMyNEY5NUQ3MjVGQTExRUU5OENEQUI4QUM4OTcyRjY0Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QzI0Rjk1RDQyNUZBMTFFRTk4Q0RBQjhBQzg5NzJGNjQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QzI0Rjk1RDUyNUZBMTFFRTk4Q0RBQjhBQzg5NzJGNjQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5aYf/IAAAAM1BMVEXYkHAtLS1NTU1CQUno6PgoKFD4wJBmhHs4OHiwsNB4QEDAODgoJyzQXEBxEREAAAAAAABDkDfgAAAAEXRSTlP/////////////////////ACWtmWIAAADASURBVHja5NTZCsQgDAVQY7WLW+b/v3a8iKidAU1fe6EvzcEkFqo+k6iXgXSLFKTkfezifSVrIISxjEhASiHnDmqTOcB4IRzH2AZv10GMBSD1mryXARC06IPRmVcA1qyLtWIpr4LfT10G3rZ14JzKYVYqdEF5FYDsO55yMB4paG1QqCvKgLUuZyxKgTHM54ky0d8WE8BsjLXXBUaktRyA4LKxKhGaPAFaY1Uc3xaVARzdxpODMuZYloJH/8mvAAMAqCxSLdbTi5AAAAAASUVORK5CYII=";
left_images.push(left_0);

let left_1 = new Image();
left_1.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAwCAMAAABHcohdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkNDOUI1M0REMjVGQTExRUU5MDc3QTk1NEZBNkY4QzVCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkNDOUI1M0RFMjVGQTExRUU5MDc3QTk1NEZBNkY4QzVCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Q0M5QjUzREIyNUZBMTFFRTkwNzdBOTU0RkE2RjhDNUIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Q0M5QjUzREMyNUZBMTFFRTkwNzdBOTU0RkE2RjhDNUIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz41Nc71AAAAM1BMVEV4QEDYkHD4wJBCQUlNTU1mhHs4OHgoKFDo6PiwsNAtLS3AODgoJyzQXEBxEREAAAAAAABwB4/gAAAAEXRSTlP/////////////////////ACWtmWIAAAC8SURBVHja7NTdCsMgDAVgba2u/mXv/7TzIEHtYCb3O+BN89EkLWjem5g/UIL6iBbUmlKZkhITGch5LSMaUGtueQJusgcYL+frWtvgqRyU0gHCnyklHQBBizkYnUgCsCYvNoq9LAXfv7oPfJ5yYIxtIbI2T0FZCkCOA6e/GEcLRhsUeEUdCMG0cDFGJlJAdLS8Wno5Rue0ACPet/dE3ocAogMgGJHItYwRNQCkJ8bRQAdW+OOO2gLlLfcRYADnc1Hdu5flFQAAAABJRU5ErkJggg==";
left_images.push(left_1);

let left_2 = new Image();
left_2.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAwCAMAAABHcohdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjYxODYzODc2MjVGQjExRUVBQjk5ODU1MDEzMUMwQzc3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjYxODYzODc3MjVGQjExRUVBQjk5ODU1MDEzMUMwQzc3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjE4NjM4NzQyNUZCMTFFRUFCOTk4NTUwMTMxQzBDNzciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjE4NjM4NzUyNUZCMTFFRUFCOTk4NTUwMTMxQzBDNzciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7Zeg2JAAAAM1BMVEXYkHAtLS1NTU1CQUno6PgoKFD4wJBmhHs4OHiwsNB4QEDAODgoJyzQXEBxEREAAAAAAABDkDfgAAAAEXRSTlP/////////////////////ACWtmWIAAADASURBVHja5NTZCsQgDAVQY7WLW+b/v3a8iKidAU1fe6EvzcEkFqo+k6iXgXSLFKTkfezifSVrIISxjEhASiHnDmqTOcB4IRzH2AZv10GMBSD1mryXARC06IPRmVcA1qyLtWIpr4LfT10G3rZ14JzKYVYqdEF5FYDsO55yMB4paG1QqCvKgLUuZyxKgTHM54ky0d8WE8BsjLXXBUaktRyA4LKxKhGaPAFaY1Uc3xaVARzdxpODMuZYloJH/8mvAAMAqCxSLdbTi5AAAAAASUVORK5CYII=";
left_images.push(left_2);

let left_3 = new Image();
left_3.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAwCAMAAABHcohdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjdFNkM3REZEMjVGQjExRUVCMkEyRDI0QzMxNjUyMDcwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjdFNkM3REZFMjVGQjExRUVCMkEyRDI0QzMxNjUyMDcwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6N0U2QzdERkIyNUZCMTFFRUIyQTJEMjRDMzE2NTIwNzAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6N0U2QzdERkMyNUZCMTFFRUIyQTJEMjRDMzE2NTIwNzAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz56XJn8AAAAMFBMVEXYkHAtLS1NTU34wJBCQUlmhHsoKFCwsNA4OHh4QEDAODgoJyzQXEBxEREAAAAAAADZYyd3AAAAEHRSTlP///////////////////8A4CNdGQAAAMBJREFUeNrs1EkOwyAMBVAgA1Og979t+bIshlbC7rpfYoOfYpMomNcm5g+UoCzRglJSeoakxEQGcp7LiAaUkltWwE32AOPlfF1zG+zKwfMQQPg1paQDIGgxBqPXKgE4Jh+sF6ksBZ+fmgY+TzmI0bTUakwegrIUgBwHFj0YSwt6GxT4iDpw37GFi9Yy0QDvnQsBBQzsnBag4L21IWDYGNFEA3gsPLhWGnc6pgCAEKIsv/8WEOnbX66gLfj5lnsLMAB+60zFNBFYNQAAAABJRU5ErkJggg==";
left_images.push(left_3);

app.TRAINER_IMAGES.push(left_images);

app.track = [new app.Vector(600, 300)];

app.trainer = {
	color: "black",
	position: undefined,
	velocity: undefined,
	acceleration: undefined,
	width: 25,
	height: 32,
	direction: 0,
	frame: 0,
	speed: 200,
	health: 100,
	image: undefined,
	workFrame: 0,

	MAXSPEED: 200,
	FRICTION: 60,
	
	// Sets up the player
	init: function(){
		this.position = new app.Vector(600,300);
		this.velocity = new app.Vector(0,0);
		this.acceleration = new app.Vector(0,0);
	},
	
	// Updates the players position and other vectors
	update: function(dt){
		this.velocity = this.velocity.add(this.acceleration);
		this.velocity = this.velocity.clamp(this.MAXSPEED);
		var vel = this.velocity.scalarMult(dt);
		this.position = this.position.add(vel);
		this.velocity = this.velocity.scalarMult(1/this.FRICTION);
		this.acceleration = this.acceleration.reset();
	},
	
	// Draws the player
	draw: function(ctx, posX, posY, O_W, O_H, S_W, S_H){
		// Draw from the middle
		var halfW = this.width / 2;
		var halfH = this.height / 2;

		let eX = S_W == 1 ? 0 : (this.position.x - posX*app.t_s);
		let eY = S_H == 1 ? 0 : (this.position.y - posY*app.t_s);

		eX = Math.floor(eX);
		eY = Math.floor(eY);

		if(this.workFrame ==0 && (app.engine.buildingStatus || app.chatStatus || (!app.keydown[app.KEYBOARD.KEY_LEFT] && !app.keydown[app.KEYBOARD.KEY_UP] && !app.keydown[app.KEYBOARD.KEY_RIGHT] && !app.keydown[app.KEYBOARD.KEY_DOWN])))
			this.frame = 0;
		// Translate and rotate the character
		ctx.drawImage(app.TRAINER_IMAGES[this.direction][Math.floor(this.frame/4)], (posX - O_W)*app.t_s + eX - halfW, (posY - O_H)*app.t_s + eY -halfH, this.width, this.height)
		if(!app.chatStatus && app.engine.buildingStatus == undefined && (app.keydown[app.KEYBOARD.KEY_LEFT] || app.keydown[app.KEYBOARD.KEY_UP] || app.keydown[app.KEYBOARD.KEY_RIGHT] || app.keydown[app.KEYBOARD.KEY_DOWN]))
			this.frame = (this.frame+1)%16;
		else if(!app.chatStatus && app.engine.buildingStatus == undefined && this.workFrame>0)
			this.frame = (this.frame+1)%8;
			
		app.follower.style.left = app.track[app.track.length-1].x-O_W*app.t_s-app.engine.E_W-app.follower.width/2 + "px";
		app.follower.style.top = app.track[app.track.length-1].y-O_H*app.t_s-app.engine.E_H -app.follower.height/2 + "px";
	},
	
	// Moves the player to the left
	moveLeft: function(){
		let posX = Math.floor(this.position.x/app.t_s);
		let posY = Math.floor(this.position.y/app.t_s);
		let x = Math.floor((this.position.x-app.t_s/2)/app.t_s);
		let y = Math.floor(this.position.y/app.t_s);
		this.direction = 3;
		if (app.isOutside(x,y) || (!this.isCollision(posX, posY) && (this.isCollision(x,y)))) return;
		this.acceleration.x -= this.speed;
	},
	
	// Moves the player to the right
	moveRight: function(){
		let posX = Math.floor(this.position.x/app.t_s);
		let posY = Math.floor(this.position.y/app.t_s);
		let x = Math.floor((this.position.x+app.t_s/2)/app.t_s);
		let y = Math.floor(this.position.y/app.t_s);
		this.direction = 1;
		if (app.isOutside(x,y) || (!this.isCollision(posX, posY) && (this.isCollision(x,y)))) return;
		this.acceleration.x += this.speed;
	},
	
	// Moves the player up
	moveUp: function(){
		let posX = Math.floor(this.position.x/app.t_s);
		let posY = Math.floor(this.position.y/app.t_s);
		let x = Math.floor(this.position.x/app.t_s);
		let y = Math.floor((this.position.y-app.t_s/2)/app.t_s);
		this.direction = 0;
		if (app.isOutside(x,y) || (!this.isCollision(posX, posY) && (this.isCollision(x,y)))) return;
		this.acceleration.y -= this.speed;
	},
	
	// Moves the player to the right
	moveDown: function(){
		let posX = Math.floor(this.position.x/app.t_s);
		let posY = Math.floor(this.position.y/app.t_s);
		let x = Math.floor(this.position.x/app.t_s);
		let y = Math.floor((this.position.y+app.t_s/2)/app.t_s);
		this.direction = 2;
		if (app.isOutside(x,y) || (!this.isCollision(posX, posY) && (this.isCollision(x,y)))) return;
		this.acceleration.y += this.speed;
	},

	// Takes care of player movement on key press
	// Also keeps the player on screen
	doAction: function(){
		if(this.workFrame == 0){
			if(app.keydown[app.KEYBOARD.KEY_BUILD])
			{
				let x = Math.floor(this.position.x/app.t_s);
				let y = Math.floor(this.position.y/app.t_s);
				if(app.HouseData_1.checkSpace(x, y, this.direction)){
					if(app.wood >= 20 && app.stone >= 30 || app.social >= 2){
						app.engine.buildingStatus = {x:x, y:y, direction: this.direction};
					}
				}
			}
			else if(app.keydown[app.KEYBOARD.KEY_SPACE])
			{
				let x,y;
				if(this.direction == 0){
					x = Math.floor(this.position.x/app.t_s);
					y = Math.floor((this.position.y-app.t_s/2)/app.t_s);
				} else if(this.direction == 1){
					x = Math.floor((this.position.x+app.t_s/2)/app.t_s);
					y = Math.floor(this.position.y/app.t_s);
				} else if(this.direction == 2){
					x = Math.floor(this.position.x/app.t_s);
					y = Math.floor((this.position.y+app.t_s/2)/app.t_s);
				} else if(this.direction == 3){
					x = Math.floor((this.position.x-app.t_s/2)/app.t_s);
					y = Math.floor(this.position.y/app.t_s);
				}
		
				if (app.isOutside(x,y) || app.objects[y][x] == null) return;
				app.objects[y][x].o.doAction();
			}
		} else {
			this.workFrame = (this.workFrame + 1) % 20;
		}
	},

	isCollision: function (x, y) {
		if(app.objects[y][x] != null)
			return true;
		if(app.wholeObstacle.includes(app.terrains[y*app.w_w+x]))
			return true;
		return false;
	},
	
	// Keeps the player from leaving the screen
	keepOnScreen: function()
	{
		var halfW = this.width / 2;
		var halfH = this.height / 2;
		if(this.position.x - halfW < 0)
		{
			this.position.x = halfW;
		}
		else if(this.position.x + halfW > app.w_w*app.t_s)
		{
			this.position.x = app.w_w*app.t_s - halfW;
		}
		
		if(this.position.y - halfH < 0)
		{
			this.position.y = halfH;
		}
		else if(this.position.y + halfH > app.w_h*app.t_s)
		{
			this.position.y = app.w_h*app.t_s - halfH;
		}

		if(Math.floor(this.position.x) != Math.floor(app.track[0].x) || Math.floor(this.position.y) != Math.floor(app.track[0].y)){
			for(let i=6; i>=0; i--){
				if(app.track.length<=i+1){
					app.track.push(new app.Vector(app.track[0].x, app.track[0].y));
				} else {
					app.track[i+1].x = app.track[i].x;
					app.track[i+1].y = app.track[i].y;
				}
			}
			app.track[0].x = Math.floor(this.position.x);
			app.track[0].y = Math.floor(this.position.y);
		}
	},
	
	// used to change the speed of the player(Purchasing the upgrade)
	setSpeed: function(number){
		this.MAXSPEED = 100 + (number * 20);
	}
};