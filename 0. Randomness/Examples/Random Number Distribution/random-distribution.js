let randomCountrs = [];

let total = 20;

function setup() {
  createCanvas(640, 240);
  for (let i = 0; i < total; i++) {
    randomCountrs[i] = 0;
  }
}

function draw() {
  background(255);
  let index = floor(random(randomCountrs.length));
  randomCountrs[index]++;
  stroke(0);
  fill(127);
  let w = width / randomCountrs.length;

  for (let x = 0; x < randomCountrs.length; x++) {
    rect(x * w, height - randomCountrs[x], w - 1, randomCountrs[x]);
  }
}
