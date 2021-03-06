
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground;
var survivalTime=0;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
}



function setup() {
  createCanvas(400,400);
  monkey= createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale= 0.2;
  
  ground= createSprite(400,350,900,15);
  ground.velocityX= -4;
  ground.x= ground.width/2;
  console.log(ground.x);
  
  FoodGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {
background("lightblue");
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
    survivalTime= Math.ceil(frameCount/frameRate());
  text("Survival Time:"+ survivalTime,100,50);
  
  
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
  if(keyDown("space") ) {
    monkey.velocityY= -12;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  spawnBananas();
  spawnObstacles();
  
  drawSprites();
}

function spawnBananas(){
  if(frameCount%80==0){
    var num= Math.round(random(120,200));
    banana= createSprite(400,num,20,20);
    banana.addImage(bananaImage);
    banana.velocityX= -3;
    banana.scale= 0.1;
    banana.lifetime= 200;
    FoodGroup.add(banana);
  }
}

function spawnObstacles(){
  if(frameCount%300==0){
    obstacle= createSprite(400,310,20,20);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX= -3;
    obstacle.scale= 0.2;
    obstacle.lifetime= 200;
    obstacleGroup.add(obstacle);
  }
}



