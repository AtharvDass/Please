class Form{
    constructor(){
        this.play = createButton('Play');
        this.shopB=createButton('Shop');
        this.Bspeed=createButton('Increase Bullet Speed');
        this.Health=createButton('Increase Health');
        this.damage=createButton('Increase Bullet Damage');
        this.img1=createButton('Equip');
        this.img2=createButton('Equip')
        this.img3=createButton('Equip');
        this.Reset=createButton('Equip');
    }
    display(){
        this.play.position(width/2,height/2);
        this.shopB.position(width/2,height/2+50);
        this.play.mousePressed(()=>{
            joystick = new VirtualJoystick();
            joystick.addEventListener('touchStartValidation', function(event){
              var touch	= event.changedTouches[0];
              if( touch.pageX > 200||touch.pageY<height-200 )	return false;
              return true
            });
            gameState='Play';
        });
        this.shopB.mousePressed(()=>{
            gameState='Shop';
            damageShow='Show';
            speedShow='Show';
            healthShow='Show';
            form.img1.show();
            form.img2.show();
            form.img3.show();
            form.Reset.show();
        })
    }
    hide(){
        this.play.hide();
        this.shopB.hide();
    }
  
    
    shop(){
        //damageadsfffffffffffffffffffffffffffffffffffffffffffffffffff
        if(damageShow==='Show'){
        this.damage.show();
        }else{
          this.damage.hide();
        }
        Dsprite=image(Damage,width/5,height/9)
        this.damage.position(width/6,height/4.75);
        
        
        this.damage.mousePressed(()=>{
          if(coins>=damagecost&&damageCount<=2){
          damage=damage+1
          coins=coins-damagecost;
          damagecost=damagecost+10
          damageCount=damageCount+1;
          if(damageCount==2){
            damageShow='Hide'
            }
          }
        })
      
      textSize(20)
      fill('yellow')
      text('Cost: '+damagecost,width/5,height/3.5);
        //speedds ahbafffffffffffffffffffffffffffffffffffffff
        if(speedShow==='Show'){
          this.Bspeed.show();
          }else{
            this.Bspeed.hide();
          }
          Ssprite=image(Damage,width/3,height/9)
          this.Bspeed.position(width/3.25,height/4.75);
          
          this.Bspeed.mousePressed(()=>{
            if(coins>=speedcost&&speedcount<=3){
            BSpeed=BSpeed+0.2
            speedcount=speedcount+1;
            coins=coins-speedcost
            speedcost=speedcost+10
            if(speedcount===3){
            speedShow='Hide'
            }
           }
          })
        
        fill('blue')
        text('Cost: '+speedcost,width/3,height/3.5)
          //healthdsaignnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnrffffffffffffffffff
          if(healthShow==='Show'){
            this.Health.show();
            }else{
              this.Health.hide();
            }
            Hsprite=image(health,width/2,height/9)
            this.Health.position(width/2.1,height/4.75);
            
            this.Health.mousePressed(()=>{
              if(coins>=50){
                playerHealth=30
                healthShow='Hide'
                coins=coins-50
              }
          })
        
        fill('cyan')
        text('Cost:50',width/2.05,height/3.5)
         //imagesgvrrrrrrrrrygggggggggggggggggggggggggg
          this.img1.position(width/5,height/2.25)
          this.img1.mousePressed(()=>{
            player.changeImage(2)
          })
          sprite1=image(vaccine2,width/4.8,height/2.75,40,40);
          //sgbxfgbdxvg
          this.img2.position(width/2.9,height/1.5);
          
          
            this.img2.mousePressed(()=>{
              if(coins>=150){
            player.changeImage(3);
            this.img1.hide();
            this.img3.hide();
            this.Reset.hide();
            this.img2.hide();
            damageShow="Hide";
            speedShow='Hide';
            healthShow='Hide';
            damage=4;
            BSpeed=1.2;
            enemyrate=40;
            playerHealth=50;
          }
          })
          
        
          textSize(20);
          fill('orange');
          text('Cost: 150 for vip',width/3.20,height/1.35);
          sprite2=image(vaccine3,width/2.85,height/1.75,40,40);
          //dgvsdgsdvgsd
          this.img3.position(width/2.9,height/2.25)
          this.img3.mousePressed(()=>{
            player.changeImage(4)
          })
          sprite3=image(vaccine4,width/2.85,height/2.75,40,40);

          this.Reset.position(width/2,height/2.25)
          this.Reset.mousePressed(()=>{
            player.changeImage(1)
          })
          sprite4=image(vaccine,width/2,height/2.75,40,40);
          //endgggggggggggggggggggggggggggggggggggg
      }
}