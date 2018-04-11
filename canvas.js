// file contaning various helper functions to aid in drawing on canvas

function background(color){
	old_fillStyle = ctx.fillStyle;
	ctx.fillStyle = color;
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = old_fillStyle;
}

function line(p1,p2,linewidth=10,color="#ffffff",linecap="round"){
	ctx.beginPath();
	old_strokeStyle = ctx.strokeStyle;
	old_lineWidth = ctx.lineWidth;
	ctx.strokeStyle = color;
	ctx.lineWidth = linewidth;
	ctx.lineCap  = linecap;
	ctx.moveTo(...p1);
	ctx.lineTo(...p2);
	ctx.stroke();
	ctx.closePath();
	ctx.strokeStyle = old_strokeStyle;
	ctx.lineWidth = old_lineWidth;
}
