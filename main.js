let framerate = 30;

function main(){
	// get canvas and set up the context
	canvas = document.getElementById("mainCanvas");
	ctx = canvas.getContext("2d");
	// start running appropriate functions in draw.js
	// these functions are assumed to be present in draw.js:
	// setup_canvas, draw_loop, canvas_resize
	setup_canvas();
	setInterval(draw_loop, 1/framerate);
	window.onresize = canvas_resize;
}

window.onload = main;
