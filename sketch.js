var PLAY = 1;
var END = 0;
var gameState = PLAY;
var rand= randomNumber(1,3)

var backedground,ground,player,rand,groundimg,playerimg,backedgroundimg,count,obstaclesGroup;
var invisibleground,obstacleimg;

function preload(){
  groundimg=loadImage("ground.png")
  playerimg=loadAnimation("player.gif")
  backedgroundimg=loadImage("00.png")
  obstacleimg=loadImage("obstacle2.png")
  
}
function setup() {
  createCanvas(1600,800);

  backedground=createSprite(800,400,20,20);
  backedground.velocityX=-4
 backedground.addImage(backedgroundimg)
   ground = createSprite(900,780,1600,40);
   ground.addImage(groundimg)
   ground.scale=0.2
ground.velocityX=-4
invisibleground=createSprite(800,760,1600,30)
invisibleground.setCollider("rectangle")
invisibleground.visible=false;
player=createSprite(200,650,100,100)
//.addAnimation(playerimg)
player.scale=0.5
player.setCollider("circle")
obstaclesGroup=createGroup()
}

function draw() {
  background(0);
    if(ground.x<700){
   ground.x=800
    }
    if(backedground.x<700){
backedground.x=width/2
    }
    if (gameState===PLAY){
   
      if(keyDown("space") && player.y >= 159) {
        player.velocityY = -12;
      }
    
     player.velocityY = player .velocityY + 0.8
    
      if (ground.x < 0){
        ground.x = ground.width/2;
      }
    
    
    
      if(obstaclesGroup.isTouching(player)){
          gameState = END;
      }
    }
    
  else if (gameState === END) {
   
    
    
    ground.velocityX = 0;
    player.velocityY = 0;
    backedground.velocityX=0;
    obstaclesGroup.setVelocityXEach(0);
  
    obstaclesGroup.setLifetimeEach(-1);

    
   
    }
    
    player.collide(invisibleground)
    spawnobstaclesGroup();
    
  drawSprites();
  
}
function  spawnobstaclesGroup(){
      if(frameCount%200===0){
        var obstacle=createSprite(800,735,20,20);
        obstacle.velocityX=-4
        obstacle.lifetime=1000
        obstacle.addImage(obstacleimg);
        obstacle.scale=0.2
        obstacle.setCollider("circle")
        obstaclesGroup.add(obstacle);
      }

}