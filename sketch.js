
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var ground,stone,tree,boy,boyimage,mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,launcher;
var launchingForce=100;

function preload()
{
	boyimage=loadImage("boy.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground=new Ground(400,610,800,20);
	stone=new Stone(140,480,20);
	tree= new Tree(500,100,100,100);
	mango1=new Mango(500,240,20,20)
	mango2=new Mango(550,270,20,20);
	mango3=new Mango(510,330,20,20);
	mango4=new Mango(430,320,20,20);
	mango5=new Mango(580,360,20,20);
	mango6=new Mango(670,330,20,20);
	mango7=new Mango(600,300,20,20);
	mango8=new Mango(620,245,20,20);
	launcher=new Launcher(stone.body,{x:140,y:490});

	Engine.run(engine);
  
}


function draw() {
  background(265);

image(boyimage ,200,340,200,300);

Engine.update(engine);

detectCollision(stone,mango1);
detectCollision(stone,mango2);
detectCollision(stone,mango3);
detectCollision(stone,mango4);
detectCollision(stone,mango5);
detectCollision(stone,mango6);
detectCollision(stone,mango7);
detectCollision(stone,mango8);

  ground.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  launcher.display();
  stone.display();
}

function mouseDragged(){
	console.log("hello");
   Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    launcher.fly();	
}

 function detectCollision(Lstone,Lmango){
	mangoBodyPosition=Lmango.body.position;
	stoneBodyPosition=Lstone.body.position;
	
	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
	if(distance<=Lmango.radius+Lstone.radius){
		Matter.Body.setStatic(Lmango.body,false);
	}
	console.log(distance);
	}

	function keyPressed(){
		if(keyCode===32){
			Matter.Body.setPosition(stone.body, {x:140, y:480});
			launcher.attach(stone.body);
		}
	}