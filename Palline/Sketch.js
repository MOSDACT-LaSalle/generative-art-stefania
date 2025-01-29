let nb = 20;
let dim =0;
let margin = 100;
let f = 0.25;
let frequenza = -2.5;
let x,y;


function setup() {
  createCanvas(windowWidth/2, windowHeight);

  dim = (width-2*margin)/nb;
  angleMode(DEGREES);
  //createLoop({duration:2, gif:true}); //per creare GIF
}

function draw() {
  background(0);
  //noStroke();
  fill(255);
  stroke(155);
  //noFill();
  rectMode(CENTER);
  
  for(let j=0; j<nb; j=j+1)
  {
    for(let i=0; i<nb; i=i+1)
    {
      
      x = margin+dim/2+i*dim;
      y = margin+dim/2+j*dim;
      f= sin(frequenza *frameCount +3.0*dist(width/2, height/2,x,y));
//f= sin(frequenza *animLoop.theta +3.0*dist(width/2, height/2,x,y)); //per creare GIF
      
      circle(x, y,f*dim) 
      //circle(margin+dim/2+i*dim, margin+dim/2+j*dim, f*dim);
      //rect(dim/2+i*dim, dim/2+j*dim, 0.7*dim, 0.2*dim);
      
      
    }
  }
}