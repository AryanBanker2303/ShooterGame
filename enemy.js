class enemy{
    //Give the health and according to it, its size will change.
    //REMEMBER: change velocities as well
    constructor(health){
        this.enemy = ellpise(xPos,yPos,health/2);
    }  
    
    this.display(){

    fill("Orange");
    stroke("red");
    strokeWeight(health/15);
text(health, this.enemy.position.x, this.enemy.position.y);
    }
    
getSide(){
var xPos = 0;
var yPos = 0    

var sideNo = random(0,5);

if(round(sideNo)===1){
    xPos = 0;
    yPos = random(0,700);
}
if(round(sideNo)===2){
    xPos = random(0,1500);
    yPos = 700;
}
if(round(sideNo)===3){
    xPos = 1500;
    yPos = random(0,700);
}
if(round(sideNo)===4){
    xPos = random(0,1500);
    yPos = 0;
}

}
}