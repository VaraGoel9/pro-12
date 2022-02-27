var jakeImg, pathImg, path, jake, left_boundary, right_boundary;
function preload(){
 
  jakeImg=loadAnimation("jake1.png", "jake2.png", "jake3.png", "jake4.png", "jake5.png");
  pathImg=loadImage("path.png");

}

function setup(){
  createCanvas(400,400);
  //moving backgroung
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY= 4;
  path.y=path.height/30;
  // moving jake
  jake=createSprite(180,340,50,170);
  jake.addAnimation("running", jakeImg);
  // creating  invisible boundaries
  left_boundary=createSprite(0,300,100,600);
  right_boundary=createSprite(390,300,80,600);
 left_boundary.visible=false;
right_boundary.visible=false;
}

function draw() {
  background(0);
  
  //moving jake along the x-axis
  jake.x=World.mouseX;
  // code to reset the background
  if(path.y>400) {
  path.y=height/2 ;
  
 }
  
// colliding jake with the boundaries
  jake.collide(left_boundary);
  jake.collide(right_boundary);
  edges=createEdgeSprites();
  jake.collide(edges[3]);
drawSprites();
}