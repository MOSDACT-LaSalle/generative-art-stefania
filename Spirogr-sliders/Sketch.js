/*let nb = 30;
let rot= 3;
let dim = 350;
let f = 1.0;
let fmin= 0.5;
//let sliderNb, sliderRot, sliderFmin;

let mic; // Audio input
let fft; // Frequency analysis
let amplitude; // Amplitude analysis



function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  angleMode(DEGREES);
  //sliderNb = createSlider(2, 50, nb, 1);
  //sliderRot = createSlider(0,90, rot);
  //sliderFmin = createSlider(0.0, 1.0, fmin, 0.1);

    // Setup audio input
    mic = new p5.AudioIn();
    mic.start();

    // Amplitude analyzer
    amplitude = new p5.Amplitude();
    amplitude.setInput(mic);
    // Increase amplitude sensitivity
    amplitude.smooth(0.9); // Smooth the amplitude data for more consistent values
  
    // FFT for frequency analysis
    fft = new p5.FFT();
    fft.setInput(mic);
  
}

function draw() {
  //nb = sliderNb.value();
  //rot = sliderRot.value();
  //fmin = sliderFmin.value();

    // Get current volume level (amplitude) from the mic
    let level = amplitude.getLevel();
      // Increase the sensitivity by scaling the amplitude value
    level *= 50.0; // Increase the sensitivity (you can adjust this factor)


    // Log the amplitude level for debugging
    console.log("Amplitude Level: " + level);
  
    // Use the amplitude to control the number of squares, rotation, and size
    nb = int(map(level, 0, 1, 2, 50)); // Map amplitude to number of squares
    rot = map(level, 0, 1, 0, 90); // Map amplitude to rotation
    fmin = map(level, 0, 1, 0.5, 1); // Map amplitude to minimum scaling factor
  
  
  background(0);
  translate(width/2,height/2);
  noFill();
  stroke(255);


  // Draw squares based on amplitude-reactive parameters

  for(let i=0; i<nb; i=i+1)
  {
    f= map(i, 0, nb-1, 1, fmin);
    square(0,0,f*dim);
    rotate(rot);
  }
}

*/

let nb = 30;
let rot = 3;
let dim = 350;
let f = 1.0;
let fmin = 0.5;

let mic; // Audio input
let amplitude; // Amplitude analysis

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  angleMode(DEGREES);

  // Setup audio input
  mic = new p5.AudioIn();
  mic.start();

  // Amplitude analyzer
  amplitude = new p5.Amplitude();
  amplitude.setInput(mic);
  amplitude.smooth(0.9); // Smooth the amplitude data for more consistent values

  // Ensure audio context is properly started in browsers
  userStartAudio();
}

function draw() {
  // Get current volume level (amplitude) from the mic
  let level = amplitude.getLevel();
  level *= 50.0; // Increase the sensitivity

  // Log the amplitude level for debugging
  console.log("Amplitude Level: " + level);

  // Use the amplitude to control the number of squares, rotation, and size
  nb = int(map(level, 0, 1, 2, 50)); // Map amplitude to number of squares
  rot = map(level, 0, 1, 0, 90); // Map amplitude to rotation
  fmin = map(level, 0, 1, 0.5, 1); // Map amplitude to minimum scaling factor

  background(0);
  translate(width / 2, height / 2);
  noFill();
  stroke(255);

  // Draw squares based on amplitude-reactive parameters
  for (let i = 0; i < nb; i++) {
    f = map(i, 0, nb - 1, 1, fmin);
    square(0, 0, f * dim);
    rotate(rot);
  }
}
