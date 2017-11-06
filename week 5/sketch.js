
var x = 180;
var y = 720;
var xspeed = 9;
var yspeed = 10;


// p5.js initial setup
function setup() {
  createCanvas(windowWidth, windowHeight);
  background (10, 10, 10);
}

// p5.js draw loop
function draw() {
  // distance from center of the screen
  var d = dist(windowWidth/2, windowHeight/13, mouseX, mouseY);

  fill (random(20, 250, 100), random(20, 50, 200), (250,0, 0));
  ellipse (x, y, d, d);

  // bouncing horizontally
  x = x + xspeed;

  if (x > windowWidth || x < 12)  {
    xspeed = -xspeed;
  }

  // bouncing veritcally
  y = y + yspeed;

  if (y > windowHeight || y < 8) {
    yspeed = -yspeed;
  }
}