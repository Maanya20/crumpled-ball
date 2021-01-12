class Dustbin{
    constructor(x,y,width,height){
        var options = {
            isStatic:true,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
        }
        this.body = Bodies.circle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x,this.position.y);
        rotate(angle);
        fill("white");
        rectMode(CENTER);
        rect(0,0,this.width,this.heght);
        pop();
    }
}