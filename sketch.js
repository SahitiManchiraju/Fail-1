const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boat;

function preload(){
  sea_img = loadImage("../images/sea.jpg");
  ship_img = loadImage("../images/ship.png"); 
  ship2_img = loadImage("../images/ship 2.png");  
  ball_img = loadImage("../images/ball.jpg");
  cannon_img = loadImage("../images/cannon.png");
  cannon2_img = loadImage("../images/cannon2.png");
 
}

function setup() {
  createCanvas(800,400);
  boat = new Boat(200,200,50,50,1,1); 
  ground = new Ground(0,height-1,width*2,1);
}

function draw() {
  background(189);
  image(sea_img,0,0);
  Engine.update(engine);
  boat.display();
  ground.display();  
  drawSprites();
}