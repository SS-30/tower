const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	block1=new Block(600,400,30,30)
	block2=new Block(650,400,30,30)
	block3=new Block(700,400,30,30)
	block4=new Block(630,350,30,30)
	block5=new Block(670,350,30,30)
	block6=new Block(650,300,30,30)
	block7=new Block(900,400,30,30)
	block8=new Block(950,400,30,30)
	block9=new Block(1000,400,30,30)
	block10=new Block(930,350,30,30)
	block11=new Block(970,350,30,30)
	block12=new Block(950,300,30,30)
	ball=new Polygon(50,150,70,50)
	slingshot = new Rope(ball.body,{x:100, y:500});


  
}


function draw() {
  rectMode(CENTER);
  background(0);
  fill("red")
  block1.display()
  block2.display()
  block3.display()
  fill("blue")
  block4.display()
  block5.display()
  fill("green")
  block6.display()
  fill("red")
  block7.display()
  block8.display()
  block9.display()
  fill("blue")
  block10.display()
  block11.display()
  fill("green")
  block12.display()
  ball.display()
  fill("pink")
  slingshot.display()
  drawSprites();
 
}

function mouseDragged(){
      Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode===32){
        slingshot.attach(this.polygon)
    }
}
