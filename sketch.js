
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


let engine;
let world;
var ball;
var rectangle;
var square;
var floor;
var plane;

function preload()
{
	
}

function setup() {
	createCanvas(400, 600);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.

	 var circle_options = {
		 restitution: 0.5,
		 friction: 0.02,
		 frictionAir: 0

	 }

	 var square_options = {
		restitution: 0.7,
		friction: 0.01,
		frictionAir: 0.1
	}

	var rectangle_options = {
		restitution: 0.01,
		friction: 1,
		frictionAir: 0.3
	}

	var plane_options = {
		isStatic = true,
	}

	ball = Bodies.circle(220, 10, 10, circle_options);
	World.add(world,ball);
	
	square = Bodies.rectangle(110, 50, 10, 10, square_options);
	World.add(world,square);

	rectangle = Bodies.rectangle(350, 50, 10, 10, rectangle_options);
	World.add(world,rectangle);

	plane = Bodies.rectangle(0, 350, 400, 10, plane_options);
	World.add(world,plane);

	rectMode(CENTER);
	elipseMode(RADIUS);

	Engine.run(engine);
	
  
}


function draw() {
  background('green');
  drawSprites();

  Engine.update(engine);

  fill('red');
  rect(rectangle.position.x, rectangle.position.y, 10, 10);

  fill('red');
  rect(plane.position.x, plane.position.y, 10, 10);

  fill('red');
  elipse(ball.position.x, ball.position.y, 10)


 
}



