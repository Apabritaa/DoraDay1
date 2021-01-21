const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;





var dora,jack;

var edges;
var wall1,wall2;


function setup() {
  createCanvas(600,600);
  engine=Engine.create();
  world=engine.world;
  //createSprite(400, 200, 50, 50);
  dora=new Player(50,50,"girl");
  //dora.shapeColor="blue";
  jack=new Player(50,550,"boy");
  //jack.shapeColor="red";
  //edges=createEdgeSprites();

  

  wall1= new Wall(200,200,50,300);
  wall2= new Wall(300,300,300,50);

  

}

function draw() {
  background("lightgreen");  
  Engine.update(engine);
wall1.display();
wall2.display();
dora.display();
jack.display();

  
 
}