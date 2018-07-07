function Particle(x, y, hu, firework) {
	this.hu = hu;
	this.pos = createVector(x, y);
	this.firework = firework;
	this.lifespan = 255;

	if(this.firework)
		this.vel = createVector(0, random(-8, -12));
	else {
		this.vel = p5.Vector.random2D();
		this.vel.mult(random(1,4));
	}

	this.acc = createVector(0, 0);
}

Particle.prototype.done = function() {
	if(this.lifespan < 0)
		return true;
	else
		return false;
};

Particle.prototype.update = function() {
	if(!this.firework) {
		this.vel.mult(0.98);
		this.lifespan -= 4;
	}

	this.vel.add(this.acc);
	this.pos.add(this.vel);
	this.acc.mult(0);
};

Particle.prototype.applyForce = function(force) {
	this.acc.add(force);
};

Particle.prototype.show = function() {
	colorMode(HSB);
	
	if(!this.firework) {
		strokeWeight(2);
		stroke(this.hu, 255, 255, this.lifespan);
	}
	else {
		strokeWeight(4);
		stroke(this.hu, 255, 255);
	}
	
	point(this.pos.x, this.pos.y);
};