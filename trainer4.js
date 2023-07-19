"use strict";

app.TRAINER_IMAGES = [];

let up_images = [];
let up_0 = new Image();
up_0.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAwCAMAAABHcohdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkZDMzJENTRBMjU3QzExRUU4QTIwREE4NzlGQTYyMEYyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkZDMzJENTRCMjU3QzExRUU4QTIwREE4NzlGQTYyMEYyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RkMzMkQ1NDgyNTdDMTFFRThBMjBEQTg3OUZBNjIwRjIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RkMzMkQ1NDkyNTdDMTFFRThBMjBEQTg3OUZBNjIwRjIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6k1oGZAAAAIVBMVEV4QEAoJyfYmHBEGSewMEhwKEBoQGhIKEiIWIAAAAAAAAABisQnAAAAC3RSTlP/////////////AEpPAfIAAADaSURBVHjanJThDsMgCIRVVErf/4GX243R9seGXtIU4YtFhJbzj8oSoG/tAgjNeRxz3pEswCC1B5ynmWogZjvAcZMjWcBszkgT9hqAMA4awopIFkBSgbBseUDkWuhIVFUkC4xxTxFB1TFWgN5r1Ytq7T0LiMDkE3KPSA7AAoqwr3IAtxoP8dMZAMcUMSMCm294vnX4A2BscLlj2EewfIAyQCmtoV3gxDWxecxaKyUHsGm9SbA17UdX/wTYtoAIRMuuALE5rVXAxx9lug7/CgCEbn+vA5t/+5cAAwAFhy41HC7koAAAAABJRU5ErkJggg==";
up_images.push(up_0);

let up_1 = new Image();
up_1.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAwCAMAAABHcohdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjA2OUMxNUQ2MjU3RDExRUU5NzJEOUI5NDkxRTc3QTFBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjA2OUMxNUQ3MjU3RDExRUU5NzJEOUI5NDkxRTc3QTFBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDY5QzE1RDQyNTdEMTFFRTk3MkQ5Qjk0OTFFNzdBMUEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDY5QzE1RDUyNTdEMTFFRTk3MkQ5Qjk0OTFFNzdBMUEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5VA/i9AAAAIVBMVEV4QEDYmHAoJydEGSewMEhwKEBoQGhIKEiIWIAAAAAAAAAj7+wsAAAAC3RSTlP/////////////AEpPAfIAAADbSURBVHjavJThDsMgCISxqJS+/wMvt5ujbkuk/bFLmqJ8oYhQORaSPwP21F0Art73vfcZyQJ0UveA43A3C8T9DrBPGkgWcO890oR9DYAbBw1hRSQLIKlAWLY8oHoudCRqppoFWptThNOstStArdtmJ21brVlAFSaf0NhRzQFYQOEeqxzAUO1D/HQGwDFV3YnA5hs77zosAJFScLmt+UuwxgBlAbQLNnFNbB73UkRyAJt2NAlCc3CuAGxbQATYsiLTZC2BCM40v2ZzAcT4s1Q/f0ELAMjsSgIPAQYA1XUtpe2YtbAAAAAASUVORK5CYII=";
up_images.push(up_1);

let up_2 = new Image();
up_2.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAwCAMAAABHcohdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjE2OERGMkRFMjU3RDExRUVCRDczQjU2OTlGOTJFOTE2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjE2OERGMkRGMjU3RDExRUVCRDczQjU2OTlGOTJFOTE2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTY4REYyREMyNTdEMTFFRUJENzNCNTY5OUY5MkU5MTYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MTY4REYyREQyNTdEMTFFRUJENzNCNTY5OUY5MkU5MTYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz59Et/CAAAAIVBMVEV4QEAoJyfYmHBEGSewMEhwKEBoQGhIKEiIWIAAAAAAAAABisQnAAAAC3RSTlP/////////////AEpPAfIAAADaSURBVHjanJThDsMgCIRVVErf/4GX243R9seGXtIU4YtFhJbzj8oSoG/tAgjNeRxz3pEswCC1B5ynmWogZjvAcZMjWcBszkgT9hqAMA4awopIFkBSgbBseUDkWuhIVFUkC4xxTxFB1TFWgN5r1Ytq7T0LiMDkE3KPSA7AAoqwr3IAtxoP8dMZAMcUMSMCm294vnX4A2BscLlj2EewfIAyQCmtoV3gxDWxecxaKyUHsGm9SbA17UdX/wTYtoAIRMuuALE5rVXAxx9lug7/CgCEbn+vA5t/+5cAAwAFhy41HC7koAAAAABJRU5ErkJggg==";
up_images.push(up_2);

let up_3 = new Image();
up_3.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAwCAMAAABHcohdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjIwNDIwNUJEMjU3RDExRUU5Qjg4RDU5NzdBMUQ1MDQ2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjIwNDIwNUJFMjU3RDExRUU5Qjg4RDU5NzdBMUQ1MDQ2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MjA0MjA1QkIyNTdEMTFFRTlCODhENTk3N0ExRDUwNDYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MjA0MjA1QkMyNTdEMTFFRTlCODhENTk3N0ExRDUwNDYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5TfV7kAAAAIVBMVEV4QEDYmHAoJydEGSewMEhwKEBoQGhIKEiIWIAAAAAAAAAj7+wsAAAAC3RSTlP/////////////AEpPAfIAAADZSURBVHjavNTRDsMgCAVQFRHp/3/wcscobbOs2IeRLFU5Wamllu0myp+BvOMpQGqMOcc4kyywpMUzsG2qIkFUn4B5CidZoDpGlInxGkAaDxqBmZEsQFFBbNvygOi40VGoCFEWMJ9LRFKEeQX03pocorXes4AIQ/tF+ApRDmCCiLTPcsD+ii9ht84APCaRqhGM7YqVfR9uAD4bvFxm/QRGc9ZaSg6UUivaBYveKpitAvvknKBh9pa7BSAAaBND0bJZgMa3EuNGq8CRHwJfDpAEOLIfZ/UVvAQYANN9LaVIzbDwAAAAAElFTkSuQmCC";
up_images.push(up_3);

app.TRAINER_IMAGES.push(up_images);

let right_images = [];
let right_0 = new Image();
right_0.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAwCAMAAABHcohdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkQ1QkEyQkY5MjU3QzExRUVCQUUyREE1OTE5QkNFQjY3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkQ1QkEyQkZBMjU3QzExRUVCQUUyREE1OTE5QkNFQjY3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDVCQTJCRjcyNTdDMTFFRUJBRTJEQTU5MTlCQ0VCNjciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RDVCQTJCRjgyNTdDMTFFRUJBRTJEQTU5MTlCQ0VCNjciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7wvwSbAAAAKlBMVEWwMEjwwJgoJydCQkLP1eNEGSfYmHBwKEB4QEBIKEhoQGiIWIAAAAAAAAARKmSJAAAADnRSTlP/////////////////AEXA3MgAAADTSURBVHjanNRbDoQgDAVQBcuz7n+7w51qVMYJLTcxJvR8YIUu+yCLEeRvZgFKpdRayp1owVmU2AHK9ZGcmS0AYa5dhGgB87VFpLRYADM+8hmsgGgAttcTaZsW3Jv83ChargFCfjcpv0wH9t253MW5GPWAaGmJLSnFuK7Ma0tKFhAjSEohAOAtZQsAIQpHzrINEDGnI92xHwIQIjn6zNv2crMUQI4MwOvlHYLr4M4CLDNLi7yfBTmjRd479zLEVEAGQAjn6LABEDzIn1E8BNPT/iPAADz1QTUi6bpcAAAAAElFTkSuQmCC";
right_images.push(right_0);

let right_1 = new Image();
right_1.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAwCAMAAABHcohdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkRGNTEwRjU1MjU3QzExRUU5RkY3REUzRjRFNkUxREY0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkRGNTEwRjU2MjU3QzExRUU5RkY3REUzRjRFNkUxREY0Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6REY1MTBGNTMyNTdDMTFFRTlGRjdERTNGNEU2RTFERjQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6REY1MTBGNTQyNTdDMTFFRTlGRjdERTNGNEU2RTFERjQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4zj09eAAAAKlBMVEWwMEjwwJgoJydCQkLP1ePYmHBEGSdwKEB4QEBIKEhoQGiIWIAAAAAAAAD1R6sTAAAADnRSTlP/////////////////AEXA3MgAAADTSURBVHjavNTBEoMgDEVRQYEA8f9/t7xGRqXOkLjo3XSmOQtEcNknLX8H+dtbgFEptZZyJVrQh5IdYFxv5cxsAYi5DgnRAuZziai0LIAZD3kP/4BoAJY3Etk2Lbhu8n2h2HINEPK7SHllOrDv3uch71PSgxiXVmoRpeQcs2sRWUBKIEQhAOBXxhYAEmM46mMbiJGZjoZjPwUgMRLJUd22h5s1AcwYOydH9eHyKkDO2BwZr6v3doDweLViHEK/ulrQCbpeXAsQctKHr9wUvP5WfwQYAApiQSksFqvmAAAAAElFTkSuQmCC";
right_images.push(right_1);

let right_2 = new Image();
right_2.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAwCAMAAABHcohdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkU3N0I5OUJCMjU3QzExRUU5NTBBQzUyMTFGMUU5NUU3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkU3N0I5OUJDMjU3QzExRUU5NTBBQzUyMTFGMUU5NUU3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RTc3Qjk5QjkyNTdDMTFFRTk1MEFDNTIxMUYxRTk1RTciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RTc3Qjk5QkEyNTdDMTFFRTk1MEFDNTIxMUYxRTk1RTciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6QjJSyAAAAKlBMVEWwMEjwwJgoJydCQkLP1eNEGSfYmHBwKEB4QEBIKEhoQGiIWIAAAAAAAAARKmSJAAAADnRSTlP/////////////////AEXA3MgAAADTSURBVHjanNRbDoQgDAVQBcuz7n+7w51qVMYJLTcxJvR8YIUu+yCLEeRvZgFKpdRayp1owVmU2AHK9ZGcmS0AYa5dhGgB87VFpLRYADM+8hmsgGgAttcTaZsW3Jv83ChargFCfjcpv0wH9t253MW5GPWAaGmJLSnFuK7Ma0tKFhAjSEohAOAtZQsAIQpHzrINEDGnI92xHwIQIjn6zNv2crMUQI4MwOvlHYLr4M4CLDNLi7yfBTmjRd479zLEVEAGQAjn6LABEDzIn1E8BNPT/iPAADz1QTUi6bpcAAAAAElFTkSuQmCC";
right_images.push(right_2);

let right_3 = new Image();
right_3.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAwCAMAAABHcohdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkVGNjg4RjAwMjU3QzExRUVCRkIzQ0M5MjZFQTk2NzRCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkVGNjg4RjAxMjU3QzExRUVCRkIzQ0M5MjZFQTk2NzRCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RUY2ODhFRkUyNTdDMTFFRUJGQjNDQzkyNkVBOTY3NEIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RUY2ODhFRkYyNTdDMTFFRUJGQjNDQzkyNkVBOTY3NEIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4PAprQAAAAJ1BMVEWwMEjwwJgoJydCQkJEGSfYmHBwKEB4QEBIKEiIWIBoQGgAAAAAAADBAD9ZAAAADXRSTlP///////////////8APegihgAAANVJREFUeNq81MkOwjAMBNA2dZxl+v/fSwY3ogmHOhyYSyXmCdwsbOdDtr+D/M6vgFWtpdR6J17QS8s6YF2G5AysAAYoU4x4AfAZkaktKwDgS47hJyQewPFmYsvmBfdFHgflknuAke8hbct84DxDyFNCUPUDka1FW1JS3Xdgb0lpBaiSpBQjAZ9WrwASkXil1z5gtaoIkK4Mx94FABG7PAC3fg3YkWVlh/U+og+w5lWzrzfQL54H9Nq2+Dj4koR+wJ/oVzdGXJmGfAD9+o7FOvj5v/olwACszTuJDQoLPgAAAABJRU5ErkJggg==";
right_images.push(right_3);

app.TRAINER_IMAGES.push(right_images);

let down_images = [];
let down_0 = new Image();
down_0.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAwCAMAAABHcohdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjgyM0EyMUI2MjU3QzExRUU4ODFBOUFCNUVERUMxRkYwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjgyM0EyMUI3MjU3QzExRUU4ODFBOUFCNUVERUMxRkYwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODIzQTIxQjQyNTdDMTFFRTg4MUE5QUI1RURFQzFGRjAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ODIzQTIxQjUyNTdDMTFFRTg4MUE5QUI1RURFQzFGRjAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6nk7tyAAAAMFBMVEUoJydwKEDwwJg1NTXP1eNCQkL42LiwMEh4QEDYmHBEGSdIKEhoQGiIWIAAAAAAAACEK5S5AAAAEHRSTlP///////////////////8A4CNdGQAAAP1JREFUeNqc1FtywyAMBVCE0wKSUPe/23IjM46TTpF9f0LgTALikX4WSReBPHMfiKj2rvqKroK+B+gqMDuGRcw+/mIBzPopd4AqljinqDpJDGAYRTqCb06iwEtzDKMnDph9k84BY44CImyw6nmaRHFQa2spyUtSaq3WGGAuBYAo51q/R2rNmQigFF4CfgInrZnlETO0MRwFRGiIOPJBFKkULHQNsEzmeVQ9fnzRv9dhAfzCoLi9P0ZAsXl+dSLAJ+c/O4+uiE82BvzQ+vA2Mttvp/pfMI/ttn2NOPm4WUsgknPak/PxAETBfABQ6D+vfwCAePf8vA5uvva/AgwA9CFI7ia8N2gAAAAASUVORK5CYII=";
down_images.push(down_0);

let down_1 = new Image();
down_1.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAwCAMAAABHcohdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkUwM0JBRDZDMjU4MjExRUU4MjM2QjhFNkJGMEM4MzlFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkUwM0JBRDZEMjU4MjExRUU4MjM2QjhFNkJGMEM4MzlFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RTAzQkFENkEyNTgyMTFFRTgyMzZCOEU2QkYwQzgzOUUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RTAzQkFENkIyNTgyMTFFRTgyMzZCOEU2QkYwQzgzOUUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5XA36/AAAAMFBMVEUoJydwKECwMEjwwJg1NTXP1eNCQkL42Lh4QEDYmHBEGSdIKEhoQGiIWIAAAAAAAAAb+4tYAAAAEHRSTlP///////////////////8A4CNdGQAAAPFJREFUeNq81OsOwiAMBWBKvXAp9f3fVo7dZIvGlf3wJCbOfhlQwPA4SPg7qK+cB7WKtCayRbOgLQGaBaqjXKvqxxAHQLXtcgaIYInrFEVW4gMoo0kjeDLiBdaaUcYvflCKbdI+YKV4ARE2WGQ/TSI/SCnnEOomIeSckg+UEiMAEXNK956UmIkAYizFA4iM5KzKPar4jrIPYJJIrYasiCbFiIV6AArWXF2CxoMsfXACNLe1aw+K+LyP3CGwS2PXxo4uNo7ZiA/YsUX50oPBsNh5gPKtBwSL/XKzfgAQ5rBkXN0ZsP4FjJfPA5B90QWeAgwAEyRJPUzW3UkAAAAASUVORK5CYII=";
down_images.push(down_1);

let down_2 = new Image();
down_2.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAwCAMAAABHcohdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjk5NEVBN0I0MjU3QzExRUU5QTdEQkQyRjBGQTU5RTBGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjk5NEVBN0I1MjU3QzExRUU5QTdEQkQyRjBGQTU5RTBGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTk0RUE3QjIyNTdDMTFFRTlBN0RCRDJGMEZBNTlFMEYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTk0RUE3QjMyNTdDMTFFRTlBN0RCRDJGMEZBNTlFMEYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7fLpUbAAAAMFBMVEUoJydwKEDwwJg1NTXP1eNCQkL42LiwMEh4QEDYmHBEGSdIKEhoQGiIWIAAAAAAAACEK5S5AAAAEHRSTlP///////////////////8A4CNdGQAAAPtJREFUeNqc1FtywyAMBVCE0wKSUPa/23IrM46TTpF9f0LgTALikZ6LpItAfnMfiKj2rvqKroK+B+gqMDuGRcw+/mIBzPopd4AqljinqDpJDGAYRTqCb06iwEtzDKMnDph9k84BY44CImyw6nmaRHFQa2spyUtSaq3WGGAuBYAo51q/R2rNmQigFOYYcNKaWR4xQxvDUUCEhogjH0SRSsFC1wDLZJ5H1ePHF/17HRbALwyK2/tjBBSb51cnAnxy/rPz6Ir4ZGPAD60PbyOz/Xaq/wXz2G7b14iTj5u1BCI5pz05Hw9AFMwHAIX+8/oHAIh3z8/r4OZr/yPAAOVJSOm7hpQmAAAAAElFTkSuQmCC";
down_images.push(down_2);

let down_3 = new Image();
down_3.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAwCAMAAABHcohdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkExNTM3NEU3MjU3QzExRUU4MEYxQkZGRDg3NEQyMTEwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkExNTM3NEU4MjU3QzExRUU4MEYxQkZGRDg3NEQyMTEwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QTE1Mzc0RTUyNTdDMTFFRTgwRjFCRkZEODc0RDIxMTAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QTE1Mzc0RTYyNTdDMTFFRTgwRjFCRkZEODc0RDIxMTAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5YJZZkAAAAMFBMVEUoJydwKECwMEjwwJg1NTXP1eNCQkL42Lh4QEDYmHBEGSdIKEhoQGiIWIAAAAAAAAAb+4tYAAAAEHRSTlP///////////////////8A4CNdGQAAAPNJREFUeNq81OsOgjAMBeCVoW5rqe//tu5YFpwa1/HDk5AA/QK7h/sg4e+AnzkPmEW2TeQVzYJtD9AsUD3KzKofvxgA1a3LGSCCLrYmijTiAyhjkI7gyYgX2NAcZbzxg1JskvqAleIFRJhgkb6ZRH6QUs4h8EtCyDklHyhlWQCIYkzpVpNSjEQAy1KKDxjJWTXWqOIeZTTTA4jwKWZDVsQgIc9GDgC6iTIGV/fYwAP6QNsyuC41uAOZAcwxYnpsudrWaZvHC9A5fHitsSOgW/ZDgGWLzq3rtQZkHhgKezBhX46gIbAf9Zt/FjT086x+Bw8BBgALnEk9rQvWAgAAAABJRU5ErkJggg==";
down_images.push(down_3);

app.TRAINER_IMAGES.push(down_images);

let left_images = [];
let left_0 = new Image();
left_0.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAwCAMAAABHcohdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkIzQTAzMDIwMjU3QzExRUVBQTQ5QzZFQjlCQkY3OTM2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkIzQTAzMDIxMjU3QzExRUVBQTQ5QzZFQjlCQkY3OTM2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QjNBMDMwMUUyNTdDMTFFRUFBNDlDNkVCOUJCRjc5MzYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QjNBMDMwMUYyNTdDMTFFRUFBNDlDNkVCOUJCRjc5MzYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4RGYE5AAAAKlBMVEWwMEjwwJgoJydCQkLP1ePYmHBEGSdwKEB4QEBIKEhoQGiIWIAAAAAAAAD1R6sTAAAADnRSTlP/////////////////AEXA3MgAAADRSURBVHjanNTREoQgCAXQsgxB+v/f3W7UlrU7ovfFB86MhtiwVjI0Ad7TD5hFchYpURvIR+7IC1SvsuUkPqCaH1EtDukAIvjEKyIn8QCU0aQyzEZ8wFrzLNtRPcAu6R0wH7BBEXkf89uHKiAKgR8J4dbJKkhp3KI6jkQp0ZZhy7L4AUiMYERYUSZqA0Ys2ADbtAIQZNnTB5jn2caXGejHy6oCjKpds2o/uA9sO5gmaxdY8bKcYF1DAEnJNusBqjHa4+8FIAjWP//qKuj4238EGAAg9UEZVyCJ0AAAAABJRU5ErkJggg==";
left_images.push(left_0);

let left_1 = new Image();
left_1.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAwCAMAAABHcohdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkJEMzRDRkY2MjU3QzExRUVCMDgxRDMxRDU0OEE0NTdDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkJEMzRDRkY3MjU3QzExRUVCMDgxRDMxRDU0OEE0NTdDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QkQzNENGRjQyNTdDMTFFRUIwODFEMzFENTQ4QTQ1N0MiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QkQzNENGRjUyNTdDMTFFRUIwODFEMzFENTQ4QTQ1N0MiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7KUfJUAAAAJ1BMVEWwMEjwwJgoJydCQkJEGSfYmHBwKEB4QEBIKEiIWIBoQGgAAAAAAADBAD9ZAAAADXRSTlP///////////////8APegihgAAANNJREFUeNq81EESwyAIBdDEICL0/udt6K9JTGcqdtG/yYI3o0F0eQyy/BnIK78DEdVaVXs0B+o7VxQFZmcZaSQGzOotZt0mA0DVf/GMaiMR4GVvUh8RkBhAa+5lbDUCcEifcRYDGBTVz20efRgC5pTklpQunRyCUtY9ZuvKXArvWfYQxYGTnJ0x+9fLzHMABCHy8jxwgpgRMTcyA/yIMTwiRGbzwLeJ4cUQHyMXBGYAWMavIsgMcFLKtuHoG4kDEE/O7fp2SwRAD7+8tEMw+VY/BRgAz007ibkx0FQAAAAASUVORK5CYII=";
left_images.push(left_1);

let left_2 = new Image();
left_2.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAwCAMAAABHcohdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkMzOTk3MzcxMjU3QzExRUVBMUE1QjAzNDZFMkU1NzU5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkMzOTk3MzcyMjU3QzExRUVBMUE1QjAzNDZFMkU1NzU5Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QzM5OTczNkYyNTdDMTFFRUExQTVCMDM0NkUyRTU3NTkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QzM5OTczNzAyNTdDMTFFRUExQTVCMDM0NkUyRTU3NTkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5Ukk71AAAAKlBMVEWwMEjwwJgoJydCQkLP1eNEGSfYmHBwKEB4QEBIKEhoQGiIWIAAAAAAAAARKmSJAAAADnRSTlP/////////////////AEXA3MgAAADRSURBVHjanNRBEoMgDAVQRWNIiPe/bv1NrWKnQ+BvWOTNgCE47Y1MXUDeGQciqqWo1qgPlE/uKArMrrLnJDFgVh4xqw4ZAKr4xCuqJ4kAlNGkOiJOYsBb8yz7USPAL+k3YDHgg6L6e8xvH5qAOSV5JKVbJ5sg5/mI2Twz58xHpiNEcQCybWDMWFFm7gNOPEQo9wMQjxnRGBBZVx9fESIv9wKMql8zthkF94HtB8vi7QKrXlYQ7HtKIDn7ZiPAbNv88Y8CEATrn391Ewz87V8CDABVHUE1jeQ5tgAAAABJRU5ErkJggg==";
left_images.push(left_2);

let left_3 = new Image();
left_3.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAwCAMAAABHcohdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkNBREI4RUM5MjU3QzExRUVBMEI4QTAxNUFERDMwQTg0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkNBREI4RUNBMjU3QzExRUVBMEI4QTAxNUFERDMwQTg0Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Q0FEQjhFQzcyNTdDMTFFRUEwQjhBMDE1QUREMzBBODQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Q0FEQjhFQzgyNTdDMTFFRUEwQjhBMDE1QUREMzBBODQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6WvaTOAAAAKlBMVEWwMEjwwJgoJydCQkLP1ePYmHBEGSdwKEB4QEBIKEhoQGiIWIAAAAAAAAD1R6sTAAAADnRSTlP/////////////////AEXA3MgAAADTSURBVHjavNTLEsMgCAXQaCIo0v//3eaWmoddiFn0bjITzgKRZHkNsvwZlE+eg1JEahW5ozlQv7kiL1A9y5ZGfEC1dlG9NekAIjjiGZFGPABlDOmeUoz4gI2mL1urHmCX9BswH7BFEflt85jDEDDHWLrEeJnkEOQc9qiGwJwz71n2EPkBSEpgzHiizDwHjFiIUJ4HIBZVomeglG2z9c2ZyMqzAKuKawoB5Fg5N4hxXY1gWJeldQLVlEDQIo6KzIL22bZ0xxwCkPb6LM+Bh//qtwADACByQSnQgUPyAAAAAElFTkSuQmCC";
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