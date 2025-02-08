class Mover {
    constructor() {
        this.pos = createVector(random(width), random(height));
        this.vel = createVector(random(-2, 2), random(-2, 2));
    }

    update() {
        this.pos.add(this.vel);
    }

    show() {
        stroke("black");
        fill("white");
        circle(this.pos.x, this.pos.y, 47);
    }

    checkEdges() {
        if (this.pos.x > width) {
            this.pos.x = 0;
        } else if (this.pos.x < 0) {
            this.pos.x = width;
        }

        if (this.pos.y > height) {
            this.pos.y = 0;
        } else if (this.pos.y < 0) {
            this.pos.y = height;
        }
    }
}

let mover;

function setup() {
    createCanvas(400, 400);
    mover = new Mover();
}

function draw() {
    console.log(mover);
    background(220);
    mover.update();
    mover.checkEdges();
    mover.show();
}
