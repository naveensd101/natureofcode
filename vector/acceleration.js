let mover;
function setup() {
    createCanvas(800, 600);
    mover = new Mover();
}
function draw() {
    background(0);
    mover.update();
    mover.checkEdges();
    mover.show();
}

function keyPressed() {
    if (keyCode === RIGHT_ARROW) {
        mover.acc = createVector(0.1, 0);
    }
    if (keyCode === LEFT_ARROW) {
        mover.acc = createVector(-0.1, 0);
    }
}

class Mover {
    constructor() {
        this.pos = createVector(width / 2, height / 2);
        this.vel = createVector(0, 0);
        this.topSpeed = 10;
    }

    update() {
        let mouse = createVector(mouseX, mouseY);
        let direction = p5.Vector.sub(mouse, this.pos);
        direction.normalize();
        direction.mult(0.2);

        this.acc = direction;

        this.pos.add(this.vel);
        this.vel.add(this.acc);

        this.vel.limit(this.topSpeed);
    }

    show() {
        stroke(0);
        fill(175);
        circle(this.pos.x, this.pos.y, 48);
    }

    checkEdges() {
        if (this.pos.x > width || this.pos.x < 0) {
            this.vel.x *= -1;
        }
        if (this.pos.y > height || this.pos.y < 0) {
            this.vel.y *= -1;
        }
    }
}
