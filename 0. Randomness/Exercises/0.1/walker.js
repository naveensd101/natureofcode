let x;
let y;

function setup() {
  createCanvas(640, 240);
  background(200);
  x = width / 2;
  y = height / 2;
}

function draw() {
  stroke(0);
  fill(127);

  x += random(-1, 1.2);
  y += random(-1, 1.2);
  point(x, y);
}
