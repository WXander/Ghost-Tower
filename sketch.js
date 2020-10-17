var ghost, ghostImage;
var climber, climberImage;
var door, doorImage;
var tower, towerImage;



function preload(){
  ghostImage = loadImage("ghost-standing.png");
  
  climberImage = loadImage("climber.png");
  
  doorImage = loadImage("door.png");
  
  towerImage = loadImage("tower.png");
  
}

function setup(){
  createCanvas(600,600);

  
  tower = createSprite(300,300);
  tower.addImage(towerImage);
  tower.velocityY = 4;
  
  ghost = createSprite(300,300);
  ghost.addImage(ghostImage);
  ghost.scale = 0.4;
  
  
  
}

function draw(){
  background(100);

  if (tower.y > 600){
    tower.y = 300;
    
  }
  
  createObsticals();
  drawSprites();
}

function createObsticals(){
  if (frameCount % 150 === 0){
    door = createSprite(Math.round(random(100,500)), -50)
    door.addImage(doorImage);
    door.velocityY = 3;
    climber = createSprite(door.x, door.y + 65);
    climber.addImage(climberImage);
    climber.velocityY = 3;
    
       
     }
     
   }




