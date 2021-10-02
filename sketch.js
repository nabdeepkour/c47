var ninja;
var coin;


function preload(){
  ninjaImg=loadAnimation("imagefolder2/ninja1.png","imagefolder2/ninja2.png","imagefolder2/ninja3.png","imagefolder2/ninja4.png","imagefolder2/ninja5.png","imagefolder2/ninja6.png")
bgImg =loadImage("imagefolder2/backgroundimage4.jpg");
coinImg=loadImage("imagefolder2/goldCoin.png");


  
  
}




function setup() {
  createCanvas(980,600);
  bgsprite= createSprite(100, 200, 200, 200);
  bgsprite.addImage(bgImg);
  bgsprite.scale=1.6;
  bgsprite.velocityX=-1;
 //bgsprite.velocityY=-2;
  ninja=createSprite(100,450,40,200);
  ninja.addAnimation("running",ninjaImg);
  edges=createEdgeSprites();
  invisiblesprite1=createSprite(750,340,400,10);
  invisiblesprite1.velocityX=-1;
}

function draw() {
  background(0);  
  //if(bgsprite.y<50){
  //bgsprite.y=100;
  //}
  if(keyDown("RIGHT_ARROW")){
    ninja.x=ninja.x+2
  }
  if(keyDown("LEFT_ARROW")){
    ninja.x=ninja.x-2
  }
  if(keyDown("space")){
    ninja.velocityY=-10;
  }
  ninja.velocityY=ninja.velocityY+0.8;
  ninja.collide(edges[3]);
  spawncoins();
if(bgsprite.x<200){
  bgsprite.x=490;
  invisiblesprite1.x=bgsprite.x+650;
}

  drawSprites();
}
function spawncoins(){
  if(frameCount%100=== 0){
    coin=createSprite(980,random(50,600),20,20);
    coin.velocityX=-3;
    coin.addImage(coinImg);
    coin.scale=0.1;
  }
}