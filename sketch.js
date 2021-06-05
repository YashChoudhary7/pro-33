const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var snow = [];
function preload(){
  backgroundImg = loadImage("snow3.jpg");
  childImg = loadImage("child.png");
snowImg = loadImage("snow5.webp");
snowImg2 = loadImage("snow4.webp");
}

function setup() {
  createCanvas(1500,700);
  engine = Engine.create()
  world = engine.world;
 child = createSprite(1350, 550, 50, 50);
 child.addImage(childImg);
 child.scale=0.2;

ground=createSprite(750, 670, 2000, 10);
}

var snow=[];
function draw() {
  background(backgroundImg); 
   fill("yellow"); textSize(20); text("Move the Child by Arrow keys", 400,70);
   fill("yellow"); textSize(20); text("AND", 500,100);
   fill("yellow"); textSize(20); text("Make him Jump by Space key", 400,130);
  if(keyDown("space") && child.y >= 559) {
    child.velocityY = -12;
  }

  child.velocityY = child.velocityY + 0.6
  child.collide(ground);
  if(keyDown("left_arrow")){
    child.x = child.x - 3;
  }
  if(keyDown("right_arrow")){
    child.x = child.x + 3;
  }
  if(frameCount%60===0){
    snow.push(new Snow(random(width/2-30, width/2+30),50,50));
  
  }

 //for (var j = 0; j < snow.length; j++) {
  
  // snow[j].display();
  //}
  spawnSnow();
  spawnSnow2();
  drawSprites();
}

function spawnSnow(){
  if(frameCount%40===0){
  snow1 = createSprite(Math.round(random(120, 1200)), 0)  
    snow1.addImage(snowImg);
    snow1.velocityY=1;
    snow1.lifetime=1000;
    snow1.collide(ground);
    snow1.scale=0.3;
    
  }
}

function spawnSnow2(){
  if(frameCount%100===0){
  snow2 = createSprite(Math.round(random(120, 1200)), 0)  
    snow2.addImage(snowImg2);
    snow2.velocityY=1;
    snow2.lifetime=1000;
    snow2.collide(ground);
    snow2.scale=0.3;
    
  }
}
