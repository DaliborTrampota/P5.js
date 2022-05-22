class Ray{
    constructor(pos, angle){
        this.pos = pos;
        this.dir = p5.Vector.fromAngle(angle);
    }

    setAngle(angle){
        this.dir = p5.Vector.fromAngle(angle);
    }

    lookAt(x,y){
        this.dir.x = x - this.pos.x;
        this.dir.y = y - this.pos.y;
        this.dir.normalize();
    }

    show(){
        stroke(255);
        push();
        stroke(128,0,0)
        translate(this.pos.x, this.pos.y);
        line(0,0,this.dir.x * 2 ,this.dir.y * 2);
        pop();
    }

    cast(wall){
        
        let div, tNum, t, uNum, u;

        const x1 = wall.a.x;
        const y1 = wall.a.y;
        const x2 = wall.b.x;
        const y2 = wall.b.y;
        
        const x3 = this.pos.x;
        const y3 = this.pos.y;
        const x4 = this.pos.x + this.dir.x;
        const y4 = this.pos.y + this.dir.y;

        div = (x1-x2)*(y3-y4)-(y1-y2)*(x3-x4);
        if(div == 0) return;
        
        tNum = (x1-x3)*(y3-y4)-(y1-y3)*(x3-x4);
        t    = tNum / div;

        uNum = (x1-x2)*(y1-y3)-(y1-y2)*(x1-x3);
        u    = -uNum / div;
        
        if(t > 0 && t < 1 && u > 0){
            const pt = createVector();
            
            pt.x = x1 + t * (x2 - x1);
            pt.y = y1 + t * (y2 - y1);
            
            return pt;
        }else {
            return;
        }
    }




}