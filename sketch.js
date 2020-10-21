

var game,form,player,bullet,Ebullet,vaccine,corona,sprite1,sprite2,sprite3,sprite4,Hsprite,Dsprite,Ssprite,posx=100,posy=100;
var gameState='Start';
var playerHealth=20
var bullets=[];
var Ebullets=[];
var enemyGroup=[];
var coins=0;
var damage=1
var damageShow='Show';
var BSpeed=0.6
var speedShow='Show';
var healthShow='Show';
var enemyrate=150;
var damageCount=0;
var speedcount=0;
var damagecost=20;
var speedcost=20;
var joystick;
var edges;

function preload(){
  vaccine=loadImage('Vaccine.jpg');
  vaccine2=loadImage('Vaccine 3.jpg');
  vaccine3=loadImage('Vaccine 4.jpg');
  vaccine4=loadImage('Vaccine 5.jpg');
  corona=loadImage('Corona.jpg');
  health=loadImage('Health.png');
  Damage=loadImage('Damge.png');
  Drop=loadImage('Drop.jpg')
}
function setup() {
  createCanvas(windowWidth-10,windowHeight-10);
  vaccine2.resize(400,400);
  vaccine3.resize(700,700);
  health.resize(50,50);
  Damage.resize(50,50);
  Drop.resize(7,7)
  game=new Game();
  game.start();
  edges=createEdgeSprites();
 
}

function draw() {
  background('black');  
  //console.log(requestAnimationFrame);
  //console.log(frameCount%24===0,second())
  if(gameState==='Play'){
    form.hide();
    game.play();
  }
  if(gameState==='Lose'){
    for(var i=0;i<enemyGroup.length;i++){
      enemyGroup[i].destroy();
    }
    enemyGroup=[];
    Ebullets=[];
    bullets=[];
    player.destroy();
    gameState='Start';
    game.start();
  }
  if(gameState==='Shop'){
    form.shopB.hide();
    form.play.position(30,windowHeight-150);
    form.shop();
  }
  player.collide(edges)
  textSize(30);
  fill('blue')
  text('Your Health: '+playerHealth,width/2-30,40);
  fill('yellow')
  text('Coins: '+coins,width/2-220,40);
  drawSprites();
}
function checkTouch(obj1,obj2){
  var d=dist(obj1.x,obj1.y,obj2.x,obj2.y);
  if(d<45){
    return true;
  }else{
    return false;
  }
}
function touchStarted(){
  posx=mouseX;
  posy=mouseY;
}
function mouseReleased(){
  posx=mouseX;
  posy=mouseY;
}