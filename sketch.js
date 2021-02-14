const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var walk1, walk2, walk3, walk4, walk5, walk6, walk7, walk8;

function preload(){
   walk1 = loadImage("images/Walking Frame/walking_1.png");
   walk2 = loadImage("images/Walking Frame/walking_2.png");
   walk3 = loadImage("images/Walking Frame/walking_3.png");
   walk4 = loadImage("images/Walking Frame/walking_4.png");
   walk5 = loadImage("images/Walking Frame/walking_5.png");
   walk6 = loadImage("images/Walking Frame/walking_6.png");
   walk7 = loadImage("images/Walking Frame/walking_7.png");
   walk8 = loadImage("images/Walking Frame/walking_8.png");
}

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

