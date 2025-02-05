let position, velocity;
function setup() {
  createCanvas(640, 240);
  position = createVector(100, 100);
  velocity = createVector(1, 2);
}

function draw() {
  background(245);
  position.add(velocity)

  if (position.x > width || position.x < 0) {
    velocity.x *= -1;
  }
  if (position.y > height || position.y < 0) {
    velocity.y *= -1;
  }

  stroke(0);
  fill(127);
  circle(position.x, position.y, 48);
}
