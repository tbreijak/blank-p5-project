function setup() {
    createCanvas(800, 800); // make a canvas
  background(0); // make it night
  noStroke(); // no outline
  fill(100); // dark ground
  rect(0, 600, 800, 200) // draw the ground

  fill(150) // steel grey rocket
  rect(300, 300, 200, 350); // rocket body

fill(170); // different shade nose
triangle(400, 100, 300, 300, 500, 300); // draw the nose
triangle(300, 500, 250, 650, 300, 650) // left wing
triangle(500, 500, 550, 650, 500, 650) // right wing

fill(250);
ellipse(400, 400, 50, 100, 400); // make a window

fill(255);
    ellipse(600, 100, 75, 75);
}

function draw() {

}
