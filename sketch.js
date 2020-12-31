const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;



var engine,world
var ground

function setup() {
  createCanvas(800,400);

  engine=Engine.create();
  world=engine.world;
var option={

  isStatic:true
}




ground=Bodies.rectangle(400,400,800,50,option)
World.add(world,ground)
console.log(ground)
 ball=Bodies.circle(200,100,30,{restitution:1.5}) 
 World.add(world,ball)
}

function draw() {
  background(0);  

  Engine.update(engine)
  rectMode(CENTER)
rect(ground.position.x,ground.position.y,800,50)
ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,30,30)



}