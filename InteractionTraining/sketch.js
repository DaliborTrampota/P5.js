var bubbles = [];
var n = 50


function setup() {
	createCanvas(800, 800);
	for(let i = 0; i < n; i++){
		let x = random(0,width);
		let y = random(0, height);
		let r = random(20, 80);
		bubbles.push(new Bubble(x,y,r))
	}
}

function draw() {
	background(64)
	bubbles[1].update(mouseX, mouseY)

	//for(let bubble of bubbles){
	for(var i = bubbles.length-1; i >= 0; i--){
		if(bubbles[i].contains(mouseX,mouseY)){
			bubbles[i].show(30,200,210,128)
		}
		for(let other of bubbles){
			if(bubbles[i] != other){
				if(bubbles[i].isColliding(other) && other.isColliding(bubbles[i])){
					bubbles[i].show(200,30,30,32);
					other.show(200,30,30,32);
				}
			}
		}
		bubbles[i].show(255,255,255,0);//85,210,30,64);
		bubbles[i].move();
	}
}


function mousePressed(){
	for(var i = 0; i < bubbles.length; i++){
		if(bubbles[i].contains(mouseX,mouseY)){
			bubbles.splice(i,1);
			console.log("ok");
		}
	}
}




class Bubble{
	constructor(x,y,r){
		//this.pos = createVector(x,y);
		this.x = x;
		this.y = y;
		this.radius = r;
	}

	show(r,g,b,alpha){
		//push();
		stroke(128);
		strokeWeight(2)
		fill(r,g,b,alpha);
		ellipseMode(CENTER);
		ellipse(this.x,this.y,this.radius,this.radius);
		//pop();
	}

	contains(x,y){
		let distance = dist(this.x,this.y,x,y);
		if(distance < this.radius/2){
			return true;
		}else{
			return false;
		}
	}

	isColliding(other){
		let distance = dist(this.x,this.y,other.x,other.y);
		if(distance <= ((this.radius/2) + (other.radius/2))){
			return true
		}else{
			return false
		}
	}

	move(){
		if(this.x + (this.radius / 2) >= width || this.x - (this.radius / 2) <= 0){
			this.x = random(width * 0.33, width * 0.33 * 2)
		}else if(this.y + (this.radius / 2) >= height ||this.y - (this.radius / 2) <= 0){
			this.y = random(height * 0.33, height * 0.33 * 2)
		}
		let rX = random (-1,1);
		let rY = random(-1,1);
		this.x += rX;
		this.y += rY;
	}

	update(x,y){
		this.x = x;
		this.y = y;
	}

}