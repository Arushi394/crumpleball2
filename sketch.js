
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	box1 = new Box(480,600,100,100) 
	paper = new Paper(20,600,30)
    ground = new Ground(400,700,800,20)

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(255);

  paper.display()
  ground.display()
  box1.display()
  

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:150,y:-150});
	}
}



