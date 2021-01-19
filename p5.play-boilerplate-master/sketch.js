var bullet,wall,speed,weight,thickness
function preload(){
  bg=loadImage("bg.jpg")
  bullet1=loadImage("bullet1.png")
}
function setup() {
  createCanvas(1600,400);
  
  thickness=random(22,83)
 speed=random(223,321)
 weight=random(30,52)

 bullet=createSprite(50,200,50,50)
 bullet.velocityX=speed
 bullet.shapeColor="blue"
 bullet.addImage(bullet1)
 bullet.scale=0.5
  wall=createSprite(1200,200,thickness,height/2)
  wall.shapeColor=(80,80,80)
}

function draw() {
  background(bg);
  if(hasCollided(bullet, wall)) { bullet.velocityX=0;
     var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);
     if(damage>10) { wall.shapeColor=color(255,0,0); }
      if(damage<10) { wall.shapeColor=color(0,255,0); }
     }


 
  drawSprites();
}
function hasCollided(lbullet, lwall) { bulletRightEdge=lbullet.x +lbullet.width; 
  wallLeftEdge=lwall.x; 
  if (bulletRightEdge>=wallLeftEdge) { return true } return false; }