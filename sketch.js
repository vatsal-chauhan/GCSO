var car,wall;
var speed,weight;

function setup(){
  var canvas =createCanvas(1000,400);
  car=createSprite(50,100,50,20);
  wall=createSprite(950,150,10,height/2);
  speed=random(55,90);
  weight=random(400,1500);
}

function draw(){
  background(0);
  car.velocityX=speed;
  
  if(wall.x-car.x < (car.width+wall.width)/2){

    car.velocityX=0;
    var deformation =0.5* weight* speed *speed/22500;
    if(deformation>180){
      car.shapeColor=color(255,0,0);
    }

    if(deformation<180 && deformation>100){
      car.shapeColor=color(230,230,0);
    }
    
    if (deformation<100) {
      car.shapeColor=color(0,255,0);
      
    }

  }
 // car.isTouching(wall)



  car.collide(wall);
drawSprites();
}
