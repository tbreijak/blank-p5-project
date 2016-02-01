function setup() {
  var rocket = {
    tipTopX: 400,
    tipTopY: 100,
    noseLength: 200,
    bodyWidth: 200,
    bodyHeight: 350,
    wingHeight: 500,

    drawRocket: function() {
      this.drawNose();
      this.drawBody();
      this.drawWingR();
    },
    drawNose: function() {
      var noseX1 = this.tipTopX - this.bodyWidth / 2;
      var noseX2 = this.tipTopX + this.bodyWidth / 2;
      var bottomYPoint = this.tipTopY + this.noseLength;
      triangle(this.tipTopX, this.tipTopY, noseX1, bottomYPoint, noseX2, bottomYPoint); // draw the nose
   },
    drawBody: function() {
      var bodyX = this.tipTopX - this.bodyWidth / 2;
      var bodyY = this.tipTopY + this.noseLength;

      fill(150); // steel grey rocket
      rect(bodyX, bodyY, this.bodyWidth, this.bodyHeight); // rocket body
    },
    drawWingR: function() {
      var rightWingX1 = this.tipTopX + this.bodyWidth / 2;
      var rightWingY1 = wingHeight;
      var rightWingX2 = this.tipTopX + this.bodyWidth / 2;
      var rightWingY2 = wingHeight;

    },

  };


    createCanvas(800, 800); // make a canvas
  background(0); // make it night
  noStroke(); // no outline
  fill(100); // dark ground
  rect(0, 600, 800, 200); // draw the ground

  rocket.drawRocket();
//  fill(150) // steel grey rocket
//  rect(300, 300, 200, 350); // rocket body

fill(170); // different shade nose
// triangle(400, 100, 300, 300, 500, 300); // draw the nose
triangle(300, 500, 250, 650, 300, 650); // left wing
triangle(500, 500, 550, 650, 500, 650); // right wing

fill(250);
ellipse(400, 400, 50, 100, 400); // make a window

fill(255);
    ellipse(600, 100, 75, 75); // draw the moon
}

function draw() {

}
