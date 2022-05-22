var vector = {
	X: 1,
	Y: 0,

create: function(x, y){
	var obj = Object.create(this);
	obj.setX(x);
	obj.setY(y);
	return obj;
},

getX: function(){ return this.X},
getY: function(){ return this.Y},
getAngle: function(){ return Math.atan2(this.Y, this.X)},
getLength: function(){ return Math.sqrt(this.X * this.X + this.Y * this.Y)},

setX: function(x){ this.X = x; }, 
setY: function(y){ this.Y = y; },

setLength: function(length){
	var angle = this.getAngle();
	this.X = Math.cos(angle) * length;
	this.Y = Math.sin(angle) * length;
},

setAngle: function(angle){
	var length = this.getLength();
	this.X = Math.cos(angle) * length;
	this.Y = Math.sin(angle) * length;
},

add: function(v2){ return vector.create(this.X - v2.getX(), this.Y - v2.getY()); },
substact: function(v2){ return vector.create(this.X - v2.getX(), this.Y - v2.getY()); },
multiply: function(val){ return vector.create(this.X * t, this.Y * val)},
divide: function(val){ return vector.create(this.X / val, this.Y / val)},

addTo: function(v2){ 
	this.X += v2.getX();
	this.Y += v2.getY();
}



}