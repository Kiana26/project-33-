const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world; 
var snow1=[];
var backgroundImg; 
var maxSnow=15;

function preload() {
  backgroundImg= loadImage ("snow1.jpg")

}

function setup() {
  createCanvas(800,400); 
  engine = Engine.create();
  world = engine.world;
  if (frameCount %50===0){
    for (var i=0;i<maxSnow;i++){
      snow1.push(new Snow (random (0,800),random (0,400)))
  
    }
  }
}

function draw() {
  background(backgroundImg);  
  Engine.update (engine);
  for (var i=0;i<maxSnow;i++){
    snow1[i].display();
    snow1[i].updateY(); 
    }

}