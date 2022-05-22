class Particle{
    constructor(){
        this.pos = createVector(width / 4, height / 2);
        this.rays = [];
       // this.dir = createVector();
        this.heading = 0;
        for(let a = -30; a < 30; a += 0.3){//FOV
            this.rays.push(new Ray(this.pos, radians(a)));
        }
    }

    update(x,y){
        this.pos.set(x,y);
    }

    move(amount){
        const vel = p5.Vector.fromAngle(this.heading);
        vel.setMag(amount)
        this.pos.add(vel)
    }

    rotate(angle){
        this.heading += angle;
        let index = 0
        for(let a = -30; a < 30; a += 0.3){
            this.rays[index].setAngle(radians(a) + this.heading);
            index++;
        }
    }

    look(walls){
        const scene = [];
        //for(let ray of this.rays){
        for(let i = 0; i < this.rays.length; i++){
            const ray = this.rays[i];
            let closest = null;
            let record = Infinity;
            for(let wall of walls){
                const pt = ray.cast(wall);
                if(pt){
                    let d = p5.Vector.dist(this.pos, pt);
                    const a = ray.dir.heading() - this.heading;
                    d *= cos(a);
                    if (d < record){
                        record = d;
                        closest = pt;
                    }
                }
            }if(closest){
                stroke(255,0,0,30);
                line(this.pos.x,this.pos.y,closest.x,closest.y)
                
            }scene[i] = record;
        }return scene;
    }



    show(){
        fill(255, 0,0);
        ellipse(this.pos.x,this.pos.y, 4);
        for(let ray of this.rays){
            ray.show();
        }

    }

}