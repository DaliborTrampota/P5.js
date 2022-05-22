var particle = {
	position: null,
	velocity: null,
	gravity: null,
	mass: 1,
	radius: 1,

	create: function(x, y, speed, dir, grav){
		var obj = Object.create(this);

		obj.position = vector.create(x, y);
		obj.velocity = vector.create(0,0);
		obj.gravity = vector.create(0, grav || 0);
		obj.velocity.setLength(speed);
		obj.velocity.setAngle(dir);

		return obj;
	},

	update: function(){
		this.velocity.addTo(this.gravity);
		this.position.addTo(this.velocity);
	}
}