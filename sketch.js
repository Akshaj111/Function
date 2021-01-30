//bouncing off code
var fixedRect, movingRect;
// var go1,go2,go3,go4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
bounceOff(movingRect,fixedRect)
  
  drawSprites();
}
//collision code
// var fixedRect, movingRect;
// var go1,go2,go3,go4;
// function setup() {
//   createCanvas(1200,800);
//   fixedRect = createSprite(600, 400, 50, 80);
//   fixedRect.shapeColor = "green";
//   fixedRect.debug = true;
//   movingRect = createSprite(400,200,80,30);
//   movingRect.shapeColor = "green";
//   movingRect.debug = true;
//   go1 = createSprite(100,100,50,50);
//   go1.shapeColor = "orange";
//   go2 = createSprite(200,100,50,50);
//   go2.shapeColor = "orange";
//   go3 = createSprite(300,100,50,50);
//   go3.shapeColor = "orange";
//   go4 = createSprite(400,100,50,50);
//   go4.shapeColor = "orange";
// }

// function draw() {
//   background(0,0,0);  
//   movingRect.x = World.mouseX;
//   movingRect.y = World.mouseY;
  
//   if(isTouching(movingRect,go1)){
//     movingRect.shapeColor = "red";
//     go1.shapeColor = "red";
//   }
//   else{
//     movingRect.shapeColor = "cyan";
//     go1.shapeColor = "cyan";
//   }
  
//   drawSprites();
// }


