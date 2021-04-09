
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var paper;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
   ground=new Ground(400,700,1000,20)
	//Create the Bodies Here.
	paper=new PAPER(100,200,20,20)
     rect1=new Dustbin(550,640,20,100)
	 rect2=new Dustbin(610,680,100,20)
	 rect3=new Dustbin(670,640,20,100)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  Engine.update(engine);
  paper.display()
  ground.display()
  rect1.display()
  rect2.display()
  rect3.display()
  drawSprites();
 
}

function keyPressed()
{
	if(keyCode===UP_ARROW)
	{
       Matter.Body.applyForce(paper.body,paper.position,{x:70,y:-50} )
	   
	}
}

