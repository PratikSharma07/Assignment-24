const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var bg;

var ground;

var tank;

function preload(){
bg = loadImage("assets/bg.jpg");
}
function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    
    tank = new Tanker(100,430);
}

function draw() {
// Remember to update the Matter Engine and set the background.
background(bg);

Engine.update(engine);

ground.display();

tank.display();
}

