var back;
var rect1,rect2,rect3;
var rect4,rect5,rect6;
var ground,blacky;
var cyanBall,cyanGrp;
var pinkBall,pinkGrp;
//<script src="p5.js"></script> line 6

function preload (){
  back = loadImage ("images/sky4.jpg");
  
}

function setup(){
  createCanvas(600,700);
  rect1 = createSprite (100,625,20,120);
  rect2 = createSprite(155,685,128,20);
  rect3 = createSprite (210,625,20,120);
  rect4 = createSprite(400,685,128,20);
  rect5 = createSprite(345,625,20,120);
  rect6 = createSprite(455,625,20,120);
  ground = createSprite (300,695,600,10);
  cyanGrp = new Group();
  pinkGrp = new Group();
 
}


function draw(){
  background(back);

  //Creating dotted line or the thresh-hold
  for (var i=0; i < 650; i=i+20) {
    line(i,500,i+15,500);
    stroke ("green");
  }
  
  rect1.shapeColor = "cyan";
  rect2.shapeColor = "cyan";
  rect3.shapeColor = "cyan";
  ground.shapeColor = "black";
  rect4.shapeColor = "pink";
  rect5.shapeColor = "pink";
  rect6.shapeColor = "pink";

  pinkGrp.collide(rect4);
  pinkGrp.collide(rect5);
  pinkGrp.collide(rect6);
  pinkGrp.collide(ground);
  cyanGrp.collide(rect1);
  cyanGrp.collide(rect2);
  cyanGrp.collide(rect3);
  cyanGrp.collide(ground);
  cyanGrp.collide(pinkGrp);
  pinkGrp.collide(cyanGrp);
  cyanGrp.collide(cyanGrp);
  pinkGrp.collide(pinkGrp);
  pinkGrp.collide(rect1);
  pinkGrp.collide(rect2);
  pinkGrp.collide(rect3);
  cyanGrp.collide(rect4);
  cyanGrp.collide(rect5);
  cyanGrp.collide(rect6);

  spawnCyan();
  spawnPink();
  drawSprites();
}

function spawnCyan (){

    if(frameCount % 50===0) {
      cyanBall = createSprite (random(50,500),-10,20,20);
      cyanBall.shapeColor = "cyan";
     cyanBall.velocityY = 2;
     cyanGrp.add(cyanBall);
    
  }
  
}

function spawnPink(){
  if(frameCount % 50===0) {
    pinkBall = createSprite (random(50,500),50,20,20);
    pinkBall.shapeColor = "pink";
   pinkBall.velocityY = 2;
   pinkGrp.add(pinkBall);
  
}
}

function mousePressed(){
console.log("hi");
  pinkBall.visibility = false;
}
