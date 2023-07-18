"use strict";

var app = app || {};

app.HINT_IMAGE = new Image();
app.HINT_IMAGE.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAAAoCAMAAABO8gGqAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkFENDlFM0MzMjMzRTExRUVCQTU1RUQ3MjZBRjU1NEIzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkFENDlFM0M0MjMzRTExRUVCQTU1RUQ3MjZBRjU1NEIzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QUQ0OUUzQzEyMzNFMTFFRUJBNTVFRDcyNkFGNTU0QjMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QUQ0OUUzQzIyMzNFMTFFRUJBNTVFRDcyNkFGNTU0QjMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5/ZTREAAAAJFBMVEUgKEFzPDk5JDG9SCmLmbRaaYvFyt7u1qwYFCD////FhWoAAAD1i3/HAAAADHRSTlP//////////////wAS387OAAAA3ElEQVR42uzYwQrDIAyA4WhjFrf3f98tWJm1UusOLkL+m7cPAqKBl/Lg74JQZMBfcLGogTTgJY8oVhFVxJWAPLfMI2KmvQZxHSDzY2ZH3gVxFaDwnjNL14vQQkCsiQa8y5M6RAN2gWeiAcdHLH2JBhwBMm+bcyGkMSMK0YAj17TwnPM+jVrdiNUCARBjLHlp3JmHCGDAHrDmlc8tA/a7yVsHOP3J733inb+dcl0vCZz+7fSfBFPyECveWsD5u0nARgBqdjPqgUI8IuWsaj+oHpiROZU7avXATm8BBgAL8ue7K28GTwAAAABJRU5ErkJggg==";

app.FOOD_IMAGE = new Image();
app.FOOD_IMAGE.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjM2RTdDRTcyMjMzRTExRUVBNTNEQjVDMzhDMjQ2MEU3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjM2RTdDRTczMjMzRTExRUVBNTNEQjVDMzhDMjQ2MEU3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MzZFN0NFNzAyMzNFMTFFRUE1M0RCNUMzOEMyNDYwRTciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MzZFN0NFNzEyMzNFMTFFRUE1M0RCNUMzOEMyNDYwRTciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6YVJhdAAAAYFBMVEVFomL8qi30eyTRdWG6RSj6+vbX7c07hUb+9V3isU0eVUHZoI7p9edhxE3xcSDf9Nydtq337Oq1MxeXmEjFXUbhZiajhEGt4qLy+/DH7L9nr3it1b38vzp2VT7///8AAADKO3ETAAAAIHRSTlP/////////////////////////////////////////AFxcG+0AAAIHSURBVHja7NfdkqIwEAXgkBCQJIKAuJGf8P5vud0JKnFQE6b2Yqs8U+Vc8Xm6AUUy/zLkC3yBfwUorrnWmqu9gDYufC9QKZdqF6C06m8ZOI8HuDE9WTIYEw9A/18A2J/0R5tciJMx2iYY0EYRka8BlyoY4HWfbwDXIEDpCjZ/PBKSEwdMbIlUPACA/rA+PNSWQCB1adjrElsA2Q1UDjjaF+gxTeJSjAXk9RRbDVyghxCiPWCKpmF8u8RbAITeATAF52EAHpfn7n97gQnG8XAYu45JJjP9FuB2B8LGKnk7JhAEyrJrmnO9cUV5gCJPQLICcIr3wDz/GYbhdDpNsP1ctG1bOCApEgAgUv6cwr+U3YXL0nQS4mL7w/G0dKFQ4gw1PwIcAHEH4DUCmOcMGzTpBfbvDqfJqkH6GYBVYgOaPPUPB7RtkNyApT+9ASYAsA2WDSarBngiGJyIAMA1GG9H0/LBQAn/cnoBUNz+egHLGAHAtVKSsQKWD/19IQy4l+joan/rE/EZ4Hgimu7n24c2uF4zmAJ2vhewn+9cPqYoH1OEAnhH4BSQ8vliDAJwijNO8TxIKIDfM3UNU0C8bUYAcFMswH0BNArIlJZnTIc3Qbn8RQD4rMAxMvUSAyj7CeUG2QXM+Ki1DPJIrbLIB83aSxb/pGq86Hig8rKjwff3whf4D4C/AgwAfe+doOzxjFcAAAAASUVORK5CYII=";

app.STONE_IMAGE = new Image();
app.STONE_IMAGE.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjFBOTk3QUJDMjMzRTExRUVBNEM2QkMyRjA3MTM1Q0UwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjFBOTk3QUJEMjMzRTExRUVBNEM2QkMyRjA3MTM1Q0UwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MUE5OTdBQkEyMzNFMTFFRUE0QzZCQzJGMDcxMzVDRTAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MUE5OTdBQkIyMzNFMTFFRUE0QzZCQzJGMDcxMzVDRTAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz52rmXqAAAAElBMVEU6RGaLm7QMUyzAy9xaaYgAAADLcAZOAAAABnRSTlP//////wCzv6S/AAAAbUlEQVR42uzWMQ7AIAhAUdvS+1+5MJAwgJp0+/JneIODOt6fjQYagAOSdBJgw09ShhCBarlCaMDQLm0G2AwV8OUVYIcYESpQIX6xUIFbi4BMogIRkUU2RwUc2V2mAo5Ubb3OAKD/yg0cCHwCDAASukMRs1Qc7AAAAABJRU5ErkJggg==";

app.WOOD_IMAGE = new Image();
app.WOOD_IMAGE.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjRDNTVDM0VBMjMzRTExRUU4MEZFREI4REY1NEU4RDRDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjRDNTVDM0VCMjMzRTExRUU4MEZFREI4REY1NEU4RDRDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NEM1NUMzRTgyMzNFMTFFRTgwRkVEQjhERjU0RThENEMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NEM1NUMzRTkyMzNFMTFFRTgwRkVEQjhERjU0RThENEMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7NTu0yAAAAYFBMVEXv++zw1qywpqu1bE1qNzjsrXhiTFIsGyrUlGm657DTzM3g9NvNqIvq6OmQVUWvyqeIeHLFhF90PDm/d1Tf3t7cv5rOxb/I7L92YWFKMjmPg4L337Wtelzio3H///8AAACsMvKjAAAAIHRSTlP/////////////////////////////////////////AFxcG+0AAAI7SURBVHja7JfpsqMgEIWJCxAXImAcccv7v+V0g8u91yXo1EzVVOWY6I8Un6fpA0XI6w9FPoAP4K8BSEqI+14FDKPIRcAw6yIgmHUFQAZi2KTyrQmy5X8EwCO/ACjzkhoT2Y9J8vwUICVDxYx53qzgYQwLBvLLHzAAgLFnawFwhyqCYfAHQACSBXA7CUhTEtC6zrLsNkt2XUHr5iCT5NvrC8aitm0XQBzHgjF6kMkVgC7DgQQAylh9kMnvgAYA8/gnFMM5D6moDzK5BkwO2mdo1cdxx/YjteugnQA8juUpQDulKIPRWoe877UxNCnzM4CWh9r673sZhhIeNhEbmdwpAQAo3fcxAuK434vUqo2qxSC02TyD1oEXAJRUSUAp9K0WSgmNc6ChkxweUsqa0nUmN9dCpCKQmLsA9WiXyXqVyRXgAQCFioTWI6B3xdD3gNf9XhZFg7uJipQQaEJyLpHDeUdF0fzM5NaWRuBVBj1EKvyqzUzu7YkRjFc/AC6T5h0gTdPaUJzFBaDtdEA3Ow8AKCeYCFcFzCUECeKMnFDAjukBcJEytooIXz0CQi38HMwAtIAOIIkW4OsA9KiqgGE3UUJqyXvopq8DZ6JaImXXJa4KYU4CoqkKjDK3Dpgf4HV/PYrmSya7roO7aJoGf/M74rhIjd2EWLCt/fk9wM0j2FDGYzHtZNKJUlOQND11SktdIuzlsyNtR8qM12XApCsAPLEkSVLip7p4UiXHZ75/APj8X/gA/gvAbwEGAPCdonfBQiYfAAAAAElFTkSuQmCC";

app.RELATION_IMAGE = new Image();
app.RELATION_IMAGE.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjRDNTVDM0VBMjMzRTExRUU4MEZFREI4REY1NEU4RDRDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjRDNTVDM0VCMjMzRTExRUU4MEZFREI4REY1NEU4RDRDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NEM1NUMzRTgyMzNFMTFFRTgwRkVEQjhERjU0RThENEMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NEM1NUMzRTkyMzNFMTFFRTgwRkVEQjhERjU0RThENEMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7NTu0yAAAAYFBMVEXv++zw1qywpqu1bE1qNzjsrXhiTFIsGyrUlGm657DTzM3g9NvNqIvq6OmQVUWvyqeIeHLFhF90PDm/d1Tf3t7cv5rOxb/I7L92YWFKMjmPg4L337Wtelzio3H///8AAACsMvKjAAAAIHRSTlP/////////////////////////////////////////AFxcG+0AAAI7SURBVHja7JfpsqMgEIWJCxAXImAcccv7v+V0g8u91yXo1EzVVOWY6I8Un6fpA0XI6w9FPoAP4K8BSEqI+14FDKPIRcAw6yIgmHUFQAZi2KTyrQmy5X8EwCO/ACjzkhoT2Y9J8vwUICVDxYx53qzgYQwLBvLLHzAAgLFnawFwhyqCYfAHQACSBXA7CUhTEtC6zrLsNkt2XUHr5iCT5NvrC8aitm0XQBzHgjF6kMkVgC7DgQQAylh9kMnvgAYA8/gnFMM5D6moDzK5BkwO2mdo1cdxx/YjteugnQA8juUpQDulKIPRWoe877UxNCnzM4CWh9r673sZhhIeNhEbmdwpAQAo3fcxAuK434vUqo2qxSC02TyD1oEXAJRUSUAp9K0WSgmNc6ChkxweUsqa0nUmN9dCpCKQmLsA9WiXyXqVyRXgAQCFioTWI6B3xdD3gNf9XhZFg7uJipQQaEJyLpHDeUdF0fzM5NaWRuBVBj1EKvyqzUzu7YkRjFc/AC6T5h0gTdPaUJzFBaDtdEA3Ow8AKCeYCFcFzCUECeKMnFDAjukBcJEytooIXz0CQi38HMwAtIAOIIkW4OsA9KiqgGE3UUJqyXvopq8DZ6JaImXXJa4KYU4CoqkKjDK3Dpgf4HV/PYrmSya7roO7aJoGf/M74rhIjd2EWLCt/fk9wM0j2FDGYzHtZNKJUlOQND11SktdIuzlsyNtR8qM12XApCsAPLEkSVLip7p4UiXHZ75/APj8X/gA/gvAbwEGAPCdonfBQiYfAAAAAElFTkSuQmCC";

app.SITE_IMAGE = new Image();
app.SITE_IMAGE.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAAgCAMAAADt/IAXAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjdCRkQ0MTcyMjNCNTExRUVBODUzOUFFOTU0OTdFNzY1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjdCRkQ0MTczMjNCNTExRUVBODUzOUFFOTU0OTdFNzY1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6N0JGRDQxNzAyM0I1MTFFRUE4NTM5QUU5NTQ5N0U3NjUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6N0JGRDQxNzEyM0I1MTFFRUE4NTM5QUU5NTQ5N0U3NjUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7UiwiQAAAAXVBMVEUkKkQZI0Hq1Kq4bk8RGTrx2q5nY2bs16zbuJJxTkq+cVDDeleFfXW1aEo5NUexo4zz3rFAQE/647Tt27AuMUfKkW1UQkp4Y1/m1Kzkz6dbWmDs0qblzaSNWUwAAACLRJaSAAAAH3RSTlP///////////////////////////////////////8AzRl2EAAAATpJREFUeNrsl8t2gyAQQBl5itEiPpO2/v9nBgYTqafboV14XenmXg4kZ2BbRB2MbCOEjZkqfdm2cXx4ueOqHigDoNfu5fKPbgwBTNycrgIaWakD1uRBo7sJFgMk6qcWId6CLlmmISbInwHWNuHpgDYAJXbSeYAfhsE5FV8Y6foxISIW54LUYwDUDTIDufwdAXNy1oABlnNubdkAi9IUMNdIX8wfjwIqv3vAPWdFNv+Xo8DSH9HfcgVcAVfAFXAF/IsAgZT1vp04ETnpvA8TUbFVC+X9EKTZTCi1goLrV1KehtIQICBCOxiE+Sc6hNLnAF2ZD6QjDYA+Wcx6TMWwGPNVvbhTX0zu+nNXaTMtaShtG3NAHZCpmn0orVueQX0xyV28TkcOOhyS9wBWKiBdwpIODqh/gWfVU4ABAMoMrE0Y7OQLAAAAAElFTkSuQmCC";

app.stoneTypes = [];
app.foodTypes = [];
app.woodTypes = [];
app.personTypes = [];
app.houseTypes = [];

app.objects = []

app.isOutside = function (x, y) {
	if (x < 0 || y < 0 || x >= app.w_w || y >= app.w_h)
		return true;
	return false;
},

app.engine = {
	WIDTH: 640,
	HEIGHT: 384,
	BAR_HEIGHT: 66,
	W_W: 20,
	W_H: 12,
	O_W: 0,
	O_H: 0,
	E_W: 0,
	E_H: 0,
	S_W: 0,
	S_H: 0,
	ZOOM_RATE: 1,
	// Used to change from menu to game and other windows
	GAME_STATE_GAME: 1,
	GAME_STATE_DEAD: 2,

	// Debug allows for:
	// Enemies to be seen
	DEBUG: false,
	currentGameState: 1,
	chatStatus: 0,
	buildingStatus: undefined,
	// Keep the score of enemies killed
	score: 0,
	mouseData: { x: 0, y: 0 },

	waveAmount: 12,
	houseKills: 0,
	currentWave: 1,

	player: undefined,

	canvas: undefined,
	textPanel: undefined,
	ctx: undefined,
	textCTX: undefined,
	dt: 1 / 60.0,

	// Sets up the game
	init: function () {
		// Set up the canvas
		this.canvas = document.querySelector('#image');
		this.canvas.width = this.WIDTH;
		this.canvas.height = this.HEIGHT + this.BAR_HEIGHT;

		this.ctx = this.canvas.getContext('2d');

		this.textPanel = document.querySelector('#text');
		this.textPanel.onmousedown = this.doMousedown.bind(this);
		this.textPanel.onmousemove = this.doMouseMove.bind(this);
		this.textCTX = this.textPanel.getContext('2d');

		// Get the player
		this.trainer = app.trainer;
		this.trainer.init();

		this.update();
	},

	// Called every frame
	// Handles game logic
	update: function () {
		app.draw.clear(this.ctx, 0, 0, this.WIDTH, this.HEIGHT + this.BAR_HEIGHT);
		app.draw.clear(this.textCTX, 0, 0, this.WIDTH*this.ZOOM_RATE, this.HEIGHT*this.ZOOM_RATE + this.BAR_HEIGHT*this.ZOOM_RATE);

		// Pausing the game
		if (app.paused) {
			this.drawPauseScreen();
			app.follower.style.display = "none";
		} else {
			// Update the game
			// Game Screen
			app.follower.style.display = "block";
			if (this.currentGameState == this.GAME_STATE_GAME) {
				this.trainer.update(this.dt);
				if (!app.chatStatus && this.buildingStatus == undefined) {
					this.moveSprites();
					this.trainer.doAction();
				} else {
					app.follower.style.display = "none";
				}

				let posX = Math.floor(this.trainer.position.x / app.t_s);
				let posY = Math.floor(this.trainer.position.y / app.t_s);
				if (posX < (this.W_W / 2)) {
					this.O_W = 0;
					this.E_W = 0;
					this.S_W = 0;
				} else if (posX >= (app.w_w - this.W_W / 2)) {
					this.O_W = app.w_w - this.W_W;
					this.E_W = 0;
					this.S_W = 0;
				} else {
					this.O_W = posX - this.W_W / 2;
					this.E_W = Math.floor(this.trainer.position.x - posX * app.t_s);
					this.S_W = 1;
				}
				if (posY < (this.W_H / 2)) {
					this.O_H = 0;
					this.E_H = 0;
					this.S_H = 0;
				} else if (posY >= (app.w_h - this.W_H / 2)) {
					this.O_H = app.w_h - this.W_H;
					this.E_H = 0;
					this.S_H = 0;
				} else {
					this.O_H = posY - this.W_H / 2;
					this.E_H = Math.floor(this.trainer.position.y - posY * app.t_s);
					this.S_H = 1;
				}

				// Check collisions
				app.drawBackground(this.ctx, this.W_H, this.W_W, this.S_H, this.S_W, this.O_H, this.O_W, this.E_H, this.E_W);

				// Draw sprites
				this.ctx.globalAlpha = 0.9;
				this.drawSprites();
				this.ctx.globalAlpha = 1.0;

				if (app.chatStatus) {
					app.drawChat(this.ctx, this.textCTX, this.ZOOM_RATE);
				}

				if (this.buildingStatus) {
					this.drawBuilding();
				}

				if (this.trainer.health == 0) {
					this.currentGameState = this.GAME_STATE_DEAD;
				}
				else if (this.houseKills == this.waveAmount) {
					this.currentWave++;
				}
			}
			// Game Over Screen
			else if (this.currentGameState == this.GAME_STATE_DEAD) {
				this.drawGameOverScreen();
			}
		}
		this.drawBar();
		// Loop the game
		app.animationID = requestAnimationFrame(this.update.bind(this));
	},

	drawBuilding: function() {
		let x = app.engine.buildingStatus.x,y = app.engine.buildingStatus.y;
		if(app.keydown[app.KEYBOARD.KEY_ENTER])
		{
			if(app.wood >= 20 && app.stone >= 30){
				new app.House_1(x, y, app.engine.buildingStatus.direction, 1);
				app.wood -= 20;
				app.stone -= 20;
			} else if (app.social >= 2){
				new app.House_1(x, y, app.engine.buildingStatus.direction, 1);
				app.social -= 2;
			}
			app.trainer.workFrame = 0;
			app.engine.buildingStatus = undefined;
		} else if(app.keydown[app.KEYBOARD.KEY_ESC]){ 
			app.trainer.workFrame = 0;
			app.engine.buildingStatus = undefined;
		} else if(app.keydown[app.KEYBOARD.KEY_UP]){ 
			y = y-1;
			if(app.trainer.workFrame ==0 && app.HouseData_1.checkSpace(x,y,app.engine.buildingStatus.direction)){
				app.engine.buildingStatus = {x:x, y:y, direction:app.engine.buildingStatus.direction};
				app.trainer.workFrame = 1;
			}
		} else if(app.keydown[app.KEYBOARD.KEY_RIGHT]){ 
			x = x+1;
			if(app.trainer.workFrame ==0 && app.HouseData_1.checkSpace(x,y,app.engine.buildingStatus.direction)){
				app.engine.buildingStatus = {x:x, y:y, direction:app.engine.buildingStatus.direction};
				app.trainer.workFrame = 1;
			}
		} else if(app.keydown[app.KEYBOARD.KEY_DOWN]){ 
			y = y+1;
			if(app.trainer.workFrame ==0 && app.HouseData_1.checkSpace(x,y,app.engine.buildingStatus.direction)){
				app.engine.buildingStatus = {x:x, y:y, direction:app.engine.buildingStatus.direction};
				app.trainer.workFrame = 1;
			}
		} else if(app.keydown[app.KEYBOARD.KEY_LEFT]){ 
			x = x-1;
			if(app.trainer.workFrame ==0 && app.HouseData_1.checkSpace(x,y,app.engine.buildingStatus.direction)){
				app.engine.buildingStatus = {x:x, y:y, direction:app.engine.buildingStatus.direction};
				app.trainer.workFrame = 1;
			}
		} else {
			if(app.engine.buildingStatus.direction == 0)
				y = y-1;
			else if(app.engine.buildingStatus.direction == 1)
				x = x+1;
			else if(app.engine.buildingStatus.direction == 2)
				y = y+1;
			else if(app.engine.buildingStatus.direction == 3)
				x = x-4;
			this.ctx.drawImage(app.SITE_IMAGE, (x-this.O_W)*app.t_s-this.E_W, (y-this.O_H)*app.t_s-this.E_H, app.SITE_IMAGE.width, app.SITE_IMAGE.height);
		}
		if(app.trainer.workFrame>0){
			app.trainer.workFrame = (app.trainer.workFrame+1)%20;
		}
	},

	drawBar: function () {
		let x = Math.floor(this.trainer.position.x/app.t_s);
		let y = Math.floor(this.trainer.position.y/app.t_s);
		if(this.currentGameState == this.GAME_STATE_GAME){
			if(app.engine.buildingStatus){
				this.ctx.drawImage(app.HINT_IMAGE, 0, this.HEIGHT - 85, app.HINT_IMAGE.width, app.HINT_IMAGE.height);
				app.draw.text(this.textCTX, "Enter : Confirm", 10*this.ZOOM_RATE, (this.HEIGHT - 60)*this.ZOOM_RATE, 16*this.ZOOM_RATE, "white");
				this.ctx.drawImage(app.HINT_IMAGE, 0, this.HEIGHT - 45, app.HINT_IMAGE.width, app.HINT_IMAGE.height);
				app.draw.text(this.textCTX, "Esc : Cancel", 10*this.ZOOM_RATE, (this.HEIGHT - 20)*this.ZOOM_RATE, 16*this.ZOOM_RATE, "white");
			} else if(app.HouseData_1.checkSpace(x, y, this.trainer.direction)){
				if((app.wood >= 20 && app.stone >= 30) ||  (app.social >= 2)){
					this.ctx.drawImage(app.HINT_IMAGE, 0, this.HEIGHT - 65, app.HINT_IMAGE.width, app.HINT_IMAGE.height);
					app.draw.text(this.textCTX, "B : Build", 10*this.ZOOM_RATE, (this.HEIGHT - 40)*this.ZOOM_RATE, 16*this.ZOOM_RATE, "white");
				}
			} else {
				if(this.trainer.direction == 0){
					x = Math.floor(this.trainer.position.x/app.t_s);
					y = Math.floor((this.trainer.position.y-app.t_s/2)/app.t_s);
				} else if(this.trainer.direction == 1){
					x = Math.floor((this.trainer.position.x+app.t_s/2)/app.t_s);
					y = Math.floor(this.trainer.position.y/app.t_s);
				} else if(this.trainer.direction == 2){
					x = Math.floor(this.trainer.position.x/app.t_s);
					y = Math.floor((this.trainer.position.y+app.t_s/2)/app.t_s);
				} else if(this.trainer.direction == 3){
					x = Math.floor((this.trainer.position.x-app.t_s/2)/app.t_s);
					y = Math.floor(this.trainer.position.y/app.t_s);
				}
		
				if (!app.isOutside(x,y) && app.objects[y][x] != null) {
					let txt = "Space: ";
					if(app.woodTypes.includes(app.objects[y][x].o.type)) {
						txt += "Wood";
					} else if(app.stoneTypes.includes(app.objects[y][x].o.type)) {
						txt += "Stone";
					} else if(app.foodTypes.includes(app.objects[y][x].o.type)) {
						txt += "Food";
					} else if(app.personTypes.includes(app.objects[y][x].o.type)) {
						txt += "Talk";
					} else if(app.houseTypes.includes(app.objects[y][x].o.type)) {
						if(app.objects[y][x].o.style == 0){
							if(app.objects[y][x].o.health<app.HouseData_1.health){
								txt += "Work";
							} else {
								txt = "";
							}
						} else {
							txt += "Play";
						}
					}
					if(txt != "")
						this.ctx.drawImage(app.HINT_IMAGE, 0, this.HEIGHT - 65, app.HINT_IMAGE.width, app.HINT_IMAGE.height);
					app.draw.text(this.textCTX, txt, 12*this.ZOOM_RATE, (this.HEIGHT - 40)*this.ZOOM_RATE, 16*this.ZOOM_RATE, "white");
				}
			}
		}
		app.draw.rect(this.ctx, 0, this.HEIGHT, this.WIDTH, this.BAR_HEIGHT, "brown");

		this.ctx.drawImage(app.WOOD_IMAGE, 10, this.HEIGHT + 2, app.WOOD_IMAGE.width, app.WOOD_IMAGE.height);
		app.draw.text(this.textCTX, app.wood.toString(), 70*this.ZOOM_RATE, (this.HEIGHT + this.BAR_HEIGHT / 2 + 12)*this.ZOOM_RATE, 40*this.ZOOM_RATE, "white");

		this.ctx.drawImage(app.STONE_IMAGE, 130, this.HEIGHT + 2, app.STONE_IMAGE.width, app.STONE_IMAGE.height);
		app.draw.text(this.textCTX, app.stone.toString(), 190*this.ZOOM_RATE, (this.HEIGHT + this.BAR_HEIGHT / 2 + 12)*this.ZOOM_RATE, 40*this.ZOOM_RATE, "white");

		this.ctx.drawImage(app.FOOD_IMAGE, 250, this.HEIGHT + 2, app.FOOD_IMAGE.width, app.FOOD_IMAGE.height);
		app.draw.text(this.textCTX, app.food.toString(), 310*this.ZOOM_RATE, (this.HEIGHT + this.BAR_HEIGHT / 2 + 12)*this.ZOOM_RATE, 40*this.ZOOM_RATE, "white");

		this.ctx.drawImage(app.RELATION_IMAGE, 370, this.HEIGHT + 2, app.RELATION_IMAGE.width, app.RELATION_IMAGE.height);
		app.draw.text(this.textCTX, app.social.toString(), 430*this.ZOOM_RATE, (this.HEIGHT + this.BAR_HEIGHT / 2 + 12)*this.ZOOM_RATE, 40*this.ZOOM_RATE, "white");
	},

	// Lets the player know the game is paused
	drawPauseScreen: function () {
		app.drawBackground(this.ctx, this.W_H, this.W_W, this.S_H, this.S_W, this.O_H, this.O_W, this.E_H, this.E_W);
		this.textCTX.save();
		this.textCTX.textAlign = "center";
		this.textCTX.textBaseline = "middle";
		app.draw.text(this.textCTX, "... PAUSED ...", this.WIDTH / 2*this.ZOOM_RATE, this.HEIGHT / 2*this.ZOOM_RATE, 80*this.ZOOM_RATE, "white");
		this.textCTX.restore();
	},

	// Takes care of all the drawing
	drawSprites: function () {
		let posX = Math.floor(this.trainer.position.x / app.t_s);
		let posY = Math.floor(this.trainer.position.y / app.t_s);

		for (let i = this.O_H; i < (this.O_H + this.W_H + (this.S_H == 1 ? 1 : 0)); i++) {
			for (let j = this.O_W; j < (this.O_W + this.W_W + (this.S_W == 1 ? 1 : 0)); j++) {
				if (app.objects[i][j] != null && app.objects[i][j].r == 1) {
					app.objects[i][j].o.draw(this.ctx, this.O_W, this.O_H, this.E_W, this.E_H);
				}
				if (j == posX && i == posY) {
					this.ctx.globalAlpha = 1.0;
					this.trainer.draw(this.ctx, posX, posY, this.O_W, this.O_H, this.S_W, this.S_H);
					this.ctx.globalAlpha = 0.9;
				}
			}
		}
	},

	// Takes care of movement and updating
	moveSprites: function () {
		// Move player
		this.movePlayer();
	},

	// Triggered when the player clicks the mouse
	doMousedown: function (e) {
		// If in the game screen, shoot a tree
		if (this.currentGameState == this.GAME_STATE_GAME) {

		}
		else if (this.currentGameState == this.GAME_STATE_DEAD) {
			this.score = 0;
			this.trainer.health = 100;
			this.enemies = [];
			this.waveAmount = 15;
			this.currentWave = 1;
			this.houseKills = 0;
			this.currentGameState = app.engine.GAME_STATE_GAME;
		}
	},

	// Triggered when the player moves the mouse
	// Sets mouse data for later use
	doMouseMove: function (e) {
		this.mouseData = app.utilities.getMouse(e);
	},

	// Takes care of player movement on key press
	// Also keeps the player on screen
	movePlayer: function () {
		if (app.keydown[app.KEYBOARD.KEY_LEFT]) {
			this.trainer.moveLeft();
		} else if (app.keydown[app.KEYBOARD.KEY_RIGHT]) {
			this.trainer.moveRight();
		} else if (app.keydown[app.KEYBOARD.KEY_UP]) {
			this.trainer.moveUp();
		} else if (app.keydown[app.KEYBOARD.KEY_DOWN]) {
			this.trainer.moveDown();
		}

		this.trainer.keepOnScreen();
	},
};