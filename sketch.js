const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var grounds,stage1,stage2;
var box1;

function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  
  grounds=new Ground(600,585,1400,30);
  stage1=new Ground(600,495,400,10);
  stage2=new Ground(1000,305,300,10);
  box1=new Box(600,435,60,50,"green");

}
// check why box isnt static
function draw() {
  background("black");

  grounds.display();
  stage1.display();
  stage2.display();
  box1.display();
  
  drawSprites();
}