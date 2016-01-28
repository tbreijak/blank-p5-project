function setup() {
  createCanvas(800, 800); // make a canvas
  background(0); // make it night
  noStroke(); // no outline
  fill(100); // dark ground
  rect(0, 600, 800, 200); // draw the ground

  fill(150); // steel grey rocket
  var bodyX = 300;
  var bodyY = 300;
  var bodyWidth = 200;
  var bodyHeight = 350;
  var tipTopX = 400;
  var tipTopY = 100;
  var topLeftX = 300;
  var topLeftY = 500;
  var outerLeftX = 250;
  var outerLeftY = 650;
  var innerLeftX = 300;
  var innerLeftY = 650;
  var topRightX = 500;
  var topRightY = 500;
  var outerRightX = 550;
  var outerRightY = 650;
  var innerRightX = 500;
  var innerRightY = 650;
  rect(bodyX, bodyY, bodyWidth, bodyHeight);

  fill(170); // different shade nose
  triangle(tipTopX, tipTopY, tipTopX - 100, tipTopY + 200, tipTopX + 100, tipTopY + 200); // draw the nose
  triangle(tipTopX - 100, tipTopY + 400, outerLeftX, outerLeftY, innerLeftX, innerLeftY); // left wing
  triangle(topRightX, topRightY, outerRightX, outerRightY, innerRightX, innerRightY); // right wing


  fill(250);
  ellipse(400, 400, 50, 100, 400); // make a window

  fill(255);
  ellipse(600, 100, 75, 75);
}

function draw() {

}
