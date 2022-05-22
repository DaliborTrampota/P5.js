let walls = [];
let ray;
let particle;
let scene = new Array();

let renderW = 400;
let renderH = 400;

function setup() {
	createCanvas(800, 400);
	for(let i = 0; i < 4; i++){
		let x1 = random(width/2);
		let y1 = random(height);
		let x2 = random(width/2);
		let y2 = random(height);
		walls[i] = new Wall(x1,y1,x2,y2);
	}
	walls.push(new Wall(0,0,0,height));
	walls.push(new Wall(0,0,width/2,0));
	walls.push(new Wall(width/2,0,width/2,height));
	walls.push(new Wall(width/2,height,0,height));
	particle = new Particle();
}

function draw() {
	background(64);

	
	for(let wall of walls){
		wall.show();
	}
	
	
	scene = particle.look(walls);
	particle.show();
	//particle.update(mouseX,mouseY)
	
	//let y = particle.pos.y;
	//let x = particle.pos.x;
	if(keyIsDown(RIGHT_ARROW)){
		particle.rotate(0.05);
	}else if(keyIsDown(LEFT_ARROW)){
		particle.rotate(-0.05);
	}else if (keyIsDown(UP_ARROW)){
		particle.move(1);
	}else if (keyIsDown(DOWN_ARROW)){
		particle.move(-1);
	}/*else if (keyIsDown(68)){
		x += 1;
		particle.move(x, y);
	}else if (keyIsDown(65)){
		x -= 1;
		particle.move(x, y);
	}*/

	//particle.rotate(mouseX,mouseY)


	


	const w = renderW / scene.length;
	push();
	translate(renderW,0);
	for(let i = 0; i < scene.length; i++){
		const sq = scene[i]*scene[i];
		const sqRenderW = renderW * renderW
		let d1 = map(sq,0,sqRenderW,20,0)
		let d2 = map(sq,0,sqRenderW,128,0)
		let d3 = map(sq,0,sqRenderW,128,0)

		let h = map(scene[i],0,renderW, renderH, 0)	
		fill(d1,d2,d3);
		noStroke();
		rectMode(CENTER);
		rect(i * w + w / 2, renderH / 2, w + 1, h);
	}
	pop();
}

