class Drops{
    constructor(x, y){
        var options={
            density:0.5,
            restitution:0.2,
            isStatic:false
        }
        this.x = x;
        this.y = y;
        this.body = Matter.Bodies.circle(x,y,2.5,options);
        this.radius = 2.5;
        Matter.World.add(world, this.body);   
    }
    display(){
        var pos = this.body.position;
        push();
        ellipseMode(RADIUS);
        fill("skyblue");
        ellipse(pos.x,pos.y,this.radius);
        pop();
    }
    update(){
        if(this.body.position.y>600){
            Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)});
        }
    }
}