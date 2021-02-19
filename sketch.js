const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup(){
   engine = Engine.create();
   world = engine.world;
   createCanvas(600,600);

   drops=[]
   var maxDrops = 100;

   for(var i=0;i<maxDrops;i++){
      drops.push(new Drops(random(0,400),random(0,400)));
   }
   Engine.run(engine);
}

function draw(){
   background("black");
   Engine.update(engine);
   
   for(var i=0;i<drops.length;i++){
      push();
      ellipseMode(RADIUS);
      fill("blue");
      ellipse(random(0,600),random(0,600),2.5);
      pop();
   }

}

