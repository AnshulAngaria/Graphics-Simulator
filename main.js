function main(){
	// runs appropriate functions in draw.js
	// these functions are assumed to be present in draw.js:
	// setup_canvas, draw_loop, canvas_resize
	setup_canvas();
	setInterval(draw_loop, 1/60);
	window.onresize = canvas_resize;
}

window.onload = main;
