class Ground{
    constructor(x,y,width,height){
        var options = {
            isStatic:true,
        }
        this.body = Bodies.circle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        fill("brown");
        rectMode(CENTER);
        rect(0,0,this.width,this.heght);
    }
}