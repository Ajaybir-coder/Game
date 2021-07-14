var bgImage, bg1;
var gameState = 0;

function preload(){
  bgImage = loadImage("ps/bg1.jpg");
}
function setup() {
  var canvas = createCanvas(displayWidth, displayHeight);

 // bg1 = createSprite(displayWidth/2, displayHeight/2 );
 // bg1.addImage("story",bgImage);
}

function draw() {
 // background(255);
  if(gameState === 0){
    background(bgImage)
    //displayWidth/2,displayHeight/
    textStyle()
    text("")
  }
    
  drawSprites();
}