var fireworks = [];
var gravity;

function setup() {
	createCanvas(1200, 600);
	gravity = createVector(0, 0.12);

	background(0);
	stroke(255);
	strokeWeight(4);
}

function draw() {
	colorMode(RGB);
	background(0, 0, 0, 25);

	if(random(1) < 0.15)
		fireworks.push(new Firework());

	for(var i=fireworks.length-1; i>=0; i--) {
		if(fireworks[i].done()) {
			fireworks.splice(i, 1);
		}
		else {
			fireworks[i].update();
			fireworks[i].show();
		}
	}
}
