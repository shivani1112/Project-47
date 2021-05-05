var gameState=0;
var player;
var game;
var ground;
var bgImg;

function preload(){
  bgImg  = loadImage("images/Bg.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  player = new Player(100,windowHeight-50);
  ground = createSprite(windowWidth/2,windowHeight-20,windowWidth,20);
  ground.visible = false;
  game = new Game();
}

function draw() {
  background(255,255,255);
  
  image(bgImg,-500,0,width*6,height); 
  drawSprites();
  if(gameState === 0){
    game.start();
  }

  if(gameState === 1){
    game.play();
  }

  if(gameState === 2){
    game.end();
  }
 
}