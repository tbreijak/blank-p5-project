function setup() {
  createCanvas(800, 800); // make a canvas
  background(0); // make it night
  noStroke(); // no outline
  fill(100); // dark ground
  rect(0, 600, 800, 200); // draw the ground

  fill(255);
  ellipse(600, 100, 75, 75);
  drawRocket();
}
function drawRocket()  {
  fill(150); // steel grey rocket
  var bodyX = 300;
  var bodyY = 300;
  var bodyWidth = 200;
  var bodyHeight = 350;
  var tipTopX = 500;
  var tipTopY = 200;
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

  rect(tipTopX - bodyWidth / 2, tipTopY + tipTopY, bodyWidth, bodyHeight);

  fill(170); // different shade nose
  triangle(tipTopX, tipTopY, tipTopX - tipTopY / 2, tipTopY + tipTopY, tipTopX + tipTopY / 2, tipTopY + tipTopY); // draw the nose
  triangle(tipTopX - tipTopY / 2, tipTopY + tipTopY * 2, tipTopX - bodyX / 2, tipTopY + outerRightX, tipTopX - tipTopY / 2, tipTopY + outerRightX); // left wing
  triangle(tipTopX + tipTopY / 2, tipTopY + tipTopY * 2, tipTopX + topLeftX / 2, tipTopY + outerRightX, tipTopX + tipTopY / 2, tipTopY + outerRightX); // right wing


  fill(250);
  ellipse(tipTopX, tipTopY + topLeftX, outerRightX - topRightX, tipTopY / 2, tipTopY * 2); // make a window
}
function draw() {
  drawRocket();
}
