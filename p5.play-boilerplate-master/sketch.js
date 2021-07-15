var bgImage, bg1;
var logoImg, logo;
var gameState = 0;

function preload(){
  bgImage = loadImage("ps/bg1.jpg");
  logoImg = loadImage("ps/logo.jpg");
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
    logo = createSprite(displayWidth/2,displayHeight/5.5);
    logo.addImage(logoImg);
    logo.scale = 0.15;
    
    textStyle(BOLDITALIC)
    textSize(30);
    fill("black");
    text("Hey! WELCOME to the Cave Adventures!",displayWidth/2-300,displayHeight/2-90);
    text("There are many rumours in the village about Gold Treasure in the Cave Of Tharsis",displayWidth/2-600,displayHeight/2-50);
    text("A boy went there to find it!",displayWidth/2-300+10,displayHeight/2-10);
    text("Now, you are going to help that boy...",displayWidth/2-300,displayHeight/2+30);
    fill("red");
    text("CAUTION: Don't touch any of obstacle or you have to start again!!!",displayWidth/2-550,displayHeight/2+70);
    
    this.button = createButton('Perss To Start');
    this.button.position(displayWidth/2-700,displayWidth/2+100);
  }
    
  drawSprites();
}
