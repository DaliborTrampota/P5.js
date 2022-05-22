function setup() {
	createCanvas(windowWidth, windowHeight);
}

var angle = 0;
function draw() {
	background(200);
	var x = 0;
	var y = sin(angle) * windowHeight/2*0.5;

	var dir = atan2(mouseY - windowHeight/2, mouseX - windowWidth/2);
	translate(windowWidth/2, windowHeight/2);
	//console.log(mouseY)
	for(i = 0; i < TWO_PI*3; i+=0.01){
		var sinY = sin(i)*200;
		var sinX = i*100;
		stroke(0,0,255);
		rect(sinX-windowWidth/2,-sinY,1,1);

		stroke(0,255,0);
		var cosY = cos(i)*200;
		var cosX = i*100;
		rect(cosX-windowWidth/2,-cosY,1,1);

	}
	
	push()
		fill(0)
		stroke(128);
		arc(x, y, 100, 100, 0, TWO_PI);
	pop();

	push();
		strokeWeight(5);
		stroke(64);
		line(x-windowWidth/2,y,x+windowWidth/2,y);
		angle+=0.1;
	pop();

	push();
		rotate(dir);
		stroke(255);
		line(0, 0, 50, 0);
		line(50,0,40, 10);
		line(50,0,40, -10);
	pop();
	//render();

	
}
/*
var angle = 0;
var x = -50;
function render(){
	var y =  sin(angle) * windowHeight * .4;

	fill(0);
	stroke(0);

	angle += 0.001
	requestAnimationFrame(render);
}*/