function initCanvas() {
	var ctx = document.getElementById('canvas').getContext('2d');
	var flakes = [];
	function addFlake() {
		var x = Math.floor(Math.random() * ctx.canvas.width) + 1;
		var y = 0;
		var s = Math.floor(Math.random() * 3) + 1;
		flakes.push({"x": x, "y": y, "s" : s});
	}
	function snow() {
        var i;
		addFlake();
		for (i = 0; i < flakes.length; i++) {
			ctx.fillStyle = "rgba(255,255,255,0.6)";
			ctx.beginPath();
			ctx.arc(flakes[i].x, flakes[i].y += flakes[i].s * 1.2, flakes[i].s * 1.2, 0, Math.PI * 2, false);
			ctx.fill();
			if (flakes[i].y > ctx.canvas.height) {
				flakes.splice(i, 1);
			}
		}
    }
	function animate() {
		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
		snow();
	}
	var animateInterval = setInterval(animate, 30);
}
window.addEventListener('load', function (event) {
	initCanvas();
});