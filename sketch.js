const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint=Matter.Constraint;
var score=0;

function setup(){
    createCanvas(1300,500)
    engine = Engine.create();
	world = engine.world;

    //grounds
    g1=new Ground(550,400,300,10)//(PYRAMID1BASE)
    g2=new Ground(1000,220,200,10)//(PYRAMID2BASE)
    g3=new Ground(650,495,1300,10)//(MAIN GROUND)

    //pyramid1
    //row1#bottom
    
    b1=new Box(460,380,35,40)
    b2=new Box(490,380,35,40)
    b3=new Box(520,380,35,40)
    b4=new Box(550,380,35,40)
    b5=new Box(580,380,35,40)
    b6=new Box(610,380,35,40)
    b7=new Box(640,380,35,40)
    //row#bottom2
  
    b8=new Box(490,360,35,40)
    b9=new Box(520,360,35,40)
    b10=new Box(550,360,35,40)
    b11=new Box(580,360,35,40)
    b12=new Box(610,360,35,40)
    //row#middle
    
    b13=new Box(520,340,35,40)
    b14=new Box(550,340,35,40)
    b15=new Box(580,340,35,40)
    //row#top2
  
    b16=new Box(535,320,35,40)
    b17=new Box(565,320,35,40)
    //row#top
    
    b18=new Box(550,300,35,40)

    //PYRAMID2
    //row#bottom
   
    b19=new Box(960,200,35,40)
    b20=new Box(995,200,35,40)
    b21=new Box(1015,200,35,40)
    b22=new Box(1030,20035,40)
    //row#middle
    
    b23=new Box(995,180,35,40)
    b24=new Box(1015,180,35,40)
    //row#top
  
    b25=new Box(1005,160,35,40)

    //polygon
    p1=new Polygon(100,300,20)

    s1=new String(p1.body,{x:150,y:300})
      
      Engine.run(engine);

}

function draw(){
    Engine.update(engine)
   background(0)
   textFont("Times New Roman")
   textSize(25)
   fill("white")
   text("SCORE:"+score,100,50)
   g1.display()
   g2.display()
   g3.display()
   fill(224,149,247)
   b1.display()
   b1.score()
   b2.display()
   b2.score()
   b3.display()
   b3.score()
   b4.display()
   b4.score()
   b5.display()
   b5.score()
   b6.display()
   b6.score()
   b7.display()
   b7.score()
   fill(121,235,125);
   b8.display()
   b8.score()
   b9.display()
   b9.score()
   b10.display()
   b10.score()
   b11.display()
   b11.score()
   b12.display()
   b12.score()
   fill("lightblue")
   b13.display()
   b13.score()
   b14.display()
   b14.score()
   b15.display()
   b15.score()
   fill("yellow")
   b16.display()
   b16.score()
   b17.display()
   b17.score()
   fill("pink")
   b18.display()
   b18.score() 
   fill(121,235,125);
   b19.display()
   b19.score()
   b20.display()
   b20.score()
   b21.display()
   b21.score()
   b22.display()
   b22.score()
   fill("pink")
   b23.display()
   b23.score()
   b24.display()
   b24.score()
   fill("yellow")
   b25.display()
   b25.score()


   p1.display()
   s1.display()
   

}

function mouseDragged(){
    Matter.Body.setPosition(p1.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    s1.fly()
}

function keyPressed(){
    if(keyCode===32){
    s1.attach(p1.body);
    }
}

async function changebg(){
var response=await fetch("https://worldclockapi.com/api/json/est/now");
var responseJSON=await response.json()
var daytime=responseJSON.currentDateTime
    var hour=daytime.slice(11,13)
  
    if(hour>=06 && hour <=18){
        background("lightblue")
    }

    else{
       background("black")
    }

}
