var move,fix
function setup() {
  createCanvas(800,800);
  move = createSprite(200,200,100,100);
  move.shapeColor = "orange";
  fix = createSprite(400,200,100,100);
  fix.shapeColor = "cyan";
}

function draw() {
  background("gray");  
 move.x = World.mouseX;
 move.y = World.mouseY;
 if(move.x-fix.x<move.width/2+fix.width/2&&
  fix.x-move.x<fix.width/2+move.width/2&&
  move.y-fix.y<move.height/2+fix.height/2&&
  fix.y-move.y<fix.height/2+move.height/2){
    move.shapeColor = "red";
    fix.shapeColor = "red";
  }else{
    fix.shapeColor = "cyan";
    move.shapeColor = "orange";
  }
 
 
 
 
 
 
 
 
 
 
  drawSprites();
}