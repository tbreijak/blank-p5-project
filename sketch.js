function setup() {
  createCanvas(800, 800)
}

function draw() {
  rect(300, 400, 450, 100); // draw the body
  quad(450, 350, 600, 350, 625, 400, 400, 400); // draw the top

  ellipse(360, 500, 75, 75); // draw the front tire
  ellipse(650, 500, 75, 75); // draw the rear tire

  rect(725, 450, 30, 30); // draw tail light


}
