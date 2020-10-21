class Player{
    constructor(){
        this.player=createSprite(50,height/2,40,40);

        this.player.maxSpeed = 2;
        this.player.friction = 0.99;
        this.player.addImage('1',vaccine);
        this.player.addImage('2',vaccine2)
        this.player.addImage('3',vaccine3)
        this.player.addImage('4',vaccine4)
        this.player.scale=0.125

    }
    move(){
      if(joystick.up()){
        this.player.y=this.player.y-8
      }
      if(joystick.down()){
        this.player.y=this.player.y+8
      }
      if(joystick.right()){
        this.player.x=this.player.x+8
      }
      if(joystick.left()){
        this.player.x=this.player.x-8
      }
          this.x=this.player.x;
          this.y=this.player.y;
          this.player.rotateToDirection = true;
          this.player.attractionPoint(0.5, posx,posy);
       
    }
    shoot(){
        if(frameCount%6===0){
            fill('yellow')
            bullets.push(  
              bullet = createSprite(this.player.x,this.player.y,5,5)
            )
              bullet.lifetime=70;
              bullet.addImage('hi',Drop);
          }
          
          if(bullets!==undefined){
            for(var i=0;i<bullets.length;i++){
              bullets[i].attractionPoint(BSpeed,posx,posy);
            }
          }
    }
    destroy(){
      this.player.destroy();
    }
    changeImage(no){
      this.player.changeImage(no)
    }
    collide(h){
      this.player.collide(h)
    }
}