// file contaning various helper functions to aid in drawing on canvas

function background(color){
	old_fillStyle = ctx.fillStyle;
	ctx.fillStyle = color;
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = old_fillStyle;
}
