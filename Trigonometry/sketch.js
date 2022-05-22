var particles = [],
	num = 100;

const Y_AXIS = 1;
const X_AXIS = 2;
let b1, b2, c1, c2;

function setup() {
	createCanvas(windowWidth, windowHeight);

	b1 = color(64,64,255);
	b2 = color(128,128,255);
	c1 = color(255);
	c2 = color(0);

	for(i=0; i < num; i++){
		p = particle.create(windowHeight, windowWidth/2, Math.random() * 8 + 5, -Math.PI / 2 + (Math.random() * .2 - .1), 0.1);
		p.radius = Math.random() * 15 + 2;
		particles.push(p);
	}
}



function draw() {
	//background(64,64,255);
	setGradient(0, 0, width, height, b1, b2, Y_AXIS);


	//for(p in particles){
	for(i=0; i < num; i++){
		var p = particles[i];
		p.update();

		push();
			stroke(0,0,255);
			fill(b1);
			arc(p.position.getX(), p.position.getY(), p.radius, p.radius, 0, TWO_PI, false);
		pop();

		if(p.position.getY() - p.radius > height){
			p.position.setX(windowWidth/2);
			p.position.setY(windowHeight);
			p.velocity.setLength(Math.random() * 8 + 5);
			p.velocity.setAngle(-Math.PI / 2 + (Math.random() * .2 - .1));
		}
	}

	
	
	
}

function setGradient(x, y, w, h, c1, c2, axis) {
	noFill();
  
	if (axis === Y_AXIS) {
	  // Top to bottom gradient
	  for (let i = y; i <= y + h; i++) {
		let inter = map(i, y, y + h, 0, 1);
		let c = lerpColor(c1, c2, inter);
		stroke(c);
		line(x, i, x + w, i);
	  }
	} else if (axis === X_AXIS) {
	  // Left to right gradient
	  for (let i = x; i <= x + w; i++) {
		let inter = map(i, x, x + w, 0, 1);
		let c = lerpColor(c1, c2, inter);
		stroke(c);
		line(i, y, i, y + h);
	  }
	}
  }
  