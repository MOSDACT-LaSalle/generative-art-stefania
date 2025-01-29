let data = [];
let src;

function preload() {
  src = loadImage('Assets/Screenshot.png');}


function setup() {
  createCanvas(windowWidth, windowHeight);
  data = Array(width).fill().map(() => Array(height).fill(0)); // Initialize 2D array
  genNoise(data);
  background(0);
  src.resize(width, height);
}

function genNoise(data) {
  let noiseScale = 0.0075;
  noiseDetail(1, 0.5);
  
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
      data[i][j] = noise(j * noiseScale, i * noiseScale);
    }
  }
}

function draw() {
  for (let i = 0; i < 2000; i++) {
    let nX = int(random(width));
    let nY = int(random(height));
    let d = data[nX][nY];

    push();
    let c = src.get(nX, nY); // Get pixel color from the image
    fill(c);
    noStroke();
    translate(nX, nY);
    rotate(map(d, 0, 1, -PI, PI)); // Rotate based on noise value
    let newLength = map(nY, 0, height, 10, 75);
    let newWidth = map(nY, 0, height, 3, 10);
    rectMode(CENTER);
    rect(0, 0, newLength, newWidth);
    pop();
  }
}

function keyPressed() {
  if (key === 's') {
    saveCanvas(); // Save the current frame
    noLoop(); // Stop the sketch
  }
}
