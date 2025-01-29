
//click and drag inside the canves



function setup() {
  createCanvas(1500, 1500);
  background(0);

}

function draw() 
{
  //fill(0);
  noFill();
  stroke(255, 40);
  strokeWeight(2);
  if(mouseIsPressed == true)
  {  
      //circle(mouseX, mouseY, random(50,100)); 
    //circle(50+mouseX, 50+mouseY,random(10,50)); 
      //circle(100+mouseX, 100+mouseY,random(10,50)); 
     //circle(100-mouseX, 100-mouseY, 50); 
    myPattern(mouseX, mouseY, 25, mouseY/10);
    
  }
}

 function keyPressed(){
  console.log("key pressed");
  save("export.png");
}

function myPattern(x, y, d,amp){
  beginShape();
    vertex(x-d/2+random(-amp, amp), y-d/2+random(-amp, amp)); //0
    vertex(x+d/2+random(-amp, amp), y-d/2+random(-amp, amp)); //1
    vertex(x+d/2+random(-amp, amp), y+d/2+random(-amp, amp)); //2
    vertex(x-d/2+random(-amp, amp), y+d/2+random(-amp, amp)); //3
  endShape(CLOSE);
}