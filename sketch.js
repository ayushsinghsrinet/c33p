const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world

var backg;

var obs=[]
var balls
var divi=[]
var te
var gamestate="play"
var backimg;
var ground;
var score=0
var count =0
var d1,d2
function preload(){
backimg=loadImage("c33p.jpg")
}
function setup() {
    backg=createCanvas(500,600)
    engine=Engine.create()
        world=engine.world

        var gsat={
            isStatic:true,
        }
ground=Bodies.rectangle(250,600,500,10,gsat)
World.add(world,ground)
for(var a=25;a<=width-20;a=a+60){
   obs.push(new particle(a,60,5))
}

for(var a=45;a<=width-20;a=a+60){
    obs.push(new particle(a,100,5))
 }
 for(var a=25;a<=width-20;a=a+60){
    obs.push(new particle(a,150,5))
 }

 for(var a=45;a<=width-20;a=a+60){
    obs.push(new particle(a,200,5))
 }

 for(var a=10;a<=width-20;a=a+60){
    obs.push(new particle(a,250,5))
 }

 for(var b=10;b<=500;b=b+70){
     divi.push(new divider(b,548,20,150))
 }


}

function draw(){
   
    background(backimg)
    
    textSize(20)
    fill("black")
    text("Score:"+score,20,300)

    textSize(20)
fill("black")
text("Press Mouse Anywhere on the Canvas.",90,30)
    Engine.update(engine)
    fill("black")
text("500",25,480)
text("500",235,480)
text("100",300,480)
text("500",100,480)
text("200",380,480)
text("200",450,480)
text("300",170,480)
if(balls!=null){
    balls.display()
    if(balls.body.position.y>550&&balls.body.position.x<120){
        score=score+500
        balls=null
        if(count>=5){
            gamestate="end"
        }
        }
        else if(balls.body.position.x<280&&balls.body.position.x>200&&balls.body.position.y>550){
            score=score+500
            balls=null
            if(count>=5){
                gamestate="end"
            }
        }
        else if(balls.body.position.x<350&&balls.body.position.x>300&&balls.body.position.y>550){
            score=score+100
            balls=null
            if(count>=5){
                gamestate="end"
            }
        }
        else if(balls.body.position.x<490&&balls.body.position.x>350&&balls.body.position.y>550){
            score=score+200
            balls=null
            if(count>=5){
                gamestate="end"
            }
        }
        else if(balls.body.position.x<180&&balls.body.position.x>120&&balls.body.position.y>550){
            score=score+300
            balls=null
            if(count>=5){
                gamestate="end"
            }
        }

}
if(gamestate==="end"){
    textSize(50)
    text("GameOver",150,300)
}

for(var a=0;a<obs.length;a++){
    obs[a].display()
}
for(var b=0;b<divi.length;b++){
    divi[b].display()
}
  
rectMode(CENTER)
rect(ground.position.x,ground.position.y,500,10)


}

function mousePressed(){
    if(gamestate!="end"){
        count++
balls=new ball(mouseX,10,5)
    }
}