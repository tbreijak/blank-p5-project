function setup() {
  createCanvas(800, 800);
}

function draw() {
 fill(100);
 rect(0, 200, 800, 600);

 fill(255);
 arc(250, 240, 280, 280, 0, PI, TWO_PI, CHORD);

 rect(230, 50, 10, 200);
 triangle(240, 50, 300, 150, 240, 250);
}
