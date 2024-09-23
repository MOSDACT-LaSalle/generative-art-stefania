let cityscape; // Image variable for the cityscape silhouette
let bgColor;

function preload() {
  // Load the cityscape image from the assets folder
  cityscape = loadImage('assets/cityscape.png');
}

function setup() {
  createCanvas(600, 600);
  bgColor = color(5, 10, 35); // Dark blue night sky
  
  // Resize the cityscape to fit the width of the canvas
  cityscape.resize(width, height / 2);
}

function draw() {
  background(bgColor);
  
  // Draw the red circle (sun/moon)
  noStroke();
  fill(255, 0, 0);
  ellipse(width / 2, height / 2, 300, 300);
  
  // Draw the cityscape silhouette on the bottom
  image(cityscape, 0, height - cityscape.height);
  
  // Draw the inverted cityscape silhouette on the top
  push();
  translate(width, 0);
  scale(-1, 1); // Flip horizontally
  image(cityscape, 0, 0);
  pop();
}
