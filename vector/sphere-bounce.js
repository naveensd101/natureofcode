let pos, vel;
function setup() {
    createCanvas(500, 400, WEBGL);
    pos = createVector(random(-100, 100), random(-100, 100), random(-100, 100));
    vel = createVector(2, 5, 2);
}

function draw() {
    background(200);
    noFill();

    // Enable orbiting with the mouse.
    orbitControl();

    if (pos.x < -100 || pos.x > 100) {
        vel.x *= -1;
    }
    if (pos.y < -100 || pos.y > 100) {
        vel.y *= -1;
    }
    if (pos.z < -100 || pos.z > 100) {
        vel.z *= -1;
    }

    box(200);
    translate(pos.add(vel));
    sphere(10);
}
