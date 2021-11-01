
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ceiling, obj1, obj2, obj3, obj4;
var rope1, rope2, rope3, rope4;

function preload() {

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ceiling = Matter.Bodies.rectangle(400, 50, 600, 20, { isStatic: true });
	World.add(world, ceiling);

	obj1 = Matter.Bodies.circle(100, 100, 30);
	World.add(world, obj1);
	obj2 = Matter.Bodies.circle(200, 100, 30);
	World.add(world, obj2);
	obj3 = Matter.Bodies.circle(300, 100, 30);
	World.add(world, obj3);
	obj4 = Matter.Bodies.circle(400, 100, 30);
	World.add(world, obj4);

	var options1 = {
		bodyA: ceiling,
		bodyB: obj1,
		stiffness:0.5, 
		length: 300
	}
	var options2 = {
		bodyA: ceiling,
		bodyB: obj2,
		stiffness:0.5, 
		length: 300
	}
	var options3 = {
		bodyA: ceiling,
		bodyB: obj3,
		stiffness:0.5, 
		length: 300
	}
	var options4 = {
		bodyA: ceiling,
		bodyB: obj4,
		stiffness:0.5, 
		length: 300
	}

	rope1 = Constraint.create(options1);
World.add(world, rope1);

rope2 = Constraint.create(options2);
World.add(world, rope2);

rope3 = Constraint.create(options3);
World.add(world, rope3);

rope4 = Constraint.create(options4);
World.add(world, rope4);

	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background("lightyellow");

	rect(ceiling.position.x, ceiling.position.y, 600, 20);
	ellipse(obj1.position.x, obj1.position.y, 30);
	ellipse(obj2.position.x, obj2.position.y, 30);
	ellipse(obj3.position.x, obj3.position.y, 30);
	ellipse(obj4.position.x, obj4.position.y, 30);
	line(obj1.position.x, obj1.position.y,ceiling.position.x, ceiling.position.y )
	line(obj2.position.x, obj2.position.y,ceiling.position.x, ceiling.position.y )
	line(obj3.position.x, obj3.position.y,ceiling.position.x, ceiling.position.y )
	line(obj4.position.x, obj4.position.y,ceiling.position.x, ceiling.position.y )
}



