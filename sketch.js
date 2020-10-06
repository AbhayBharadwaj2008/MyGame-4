const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var gameState = 0;
var b1,b2,b3;
var form1, form2, form3;
var engine,world;
var playerS1,playerS2;
var build1;

function preload(){

b1=loadImage("images/screenshot.png")
b2=loadImage("images/BG1.jpg")
}
function setup(){
    engine = Engine.create();
    world = engine.world;
    canvas = createCanvas(1300, 600);
    build1 = new Building(200,200)
//playerS2 = new Player(650,300)

}
function draw(){
    background(b1);
    Engine.update(engine);
    
    if(gameState === 0){
        form1 = new firstForm()
        form1.display();

    }
    if(gameState === 1){
        
        form2 = new secondForm()
        form2.display();
       
    }
    if(gameState = 2){
     //s1();
     background(b2);
     playerS1 = new Player(650,300)
     playerS1.display();
    }
    //playerS2.display();
    build1.display();
    console.log(gameState)

}