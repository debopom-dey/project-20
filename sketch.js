var car,wall,speed,weight
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  speed=random(55,90);
  weight=random(400,1500);
}

function draw() {
  background(0)
  background(255,255,255);  
  car=createSprite(50,200,50,50);
  drawSprites();
}