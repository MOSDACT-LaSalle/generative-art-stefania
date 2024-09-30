

let nb = 1000;
let dMin = 50;
let noiseScale = 0.03;
let p = Array(nb);
let ageMax = 300;
let noiseAngle = 360;
let noiseSpeed = 1.2;

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
  background("#243748");

  for(let i=0; i<nb; i=i+1)
  {
     p[i] = new Particle(random(0,width),random(0,height)); 
  }
  //p = new Particle(250, 250);
}

function draw() {
  //noStroke();
  //stroke(255);
   stroke(255, map(frameCount,1,ageMax,255,0));
  for(let i=0; i<nb; i=i+1)
  {
    p[i].draw();
  }
  //p.draw();
 
 

    
  
  
}

class Particle
{
  constructor(x,y)
  {
    this.x = x;
    this.y = y;
    this.vx = random(-2,2);
    this.vy = random(-2,2);
  }
  
  draw()
  {
    let n = noiseAngle*noise(noiseScale*this.x,noiseScale*this.y);
    this.vx = noiseSpeed*cos(n);
    this.vy = noiseSpeed*sin(n);
    
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;
    
    if(this.x < 0 || this.x> width || this.y <0 || this.y > height)
    {
      this.x = random(0,width);
      this.y = random(0,height);
    } //don't escape!
    

    //circle(this.x, this.y, 5);
    point(this.x, this.y);
  }
}