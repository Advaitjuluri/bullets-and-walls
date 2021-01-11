var bullet,wall;
var speed,weight;
var thickness;
var bulletRightEdge,wallLeftEdge;


function preload(){
speed=random(223,321);

weight=random(30,52)

thickness=random(22,83);
}

function setup() {
  createCanvas(1600,400);

  

  
bullet=createSprite(50,200,50,20);
bullet.velocityX=speed;

wall=createSprite(1200,200,thickness,height/2);









}

function draw() {
  background("yellow");  
  bullet.shapeColor=color("white");
  wall.shapeColor=color(80,80,80);

 

  if(wall.x-bullet.x<(bullet.width+wall.width)/2){
bullet.velocityX=0;
var deformation=0.5*weight*speed*speed/(thickness*
thickness*thickness);

 }


if(deformation>10){

  wall.shapeColor=color("red");
}


if(deformation<10)
{
  wall.shapeColor=color("green");
}



 

 
  drawSprites();

  console.log(deformation);
}


