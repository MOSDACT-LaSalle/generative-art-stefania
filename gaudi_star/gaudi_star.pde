int posx, posy; 
int distance;
int conty1, contx1, contx2, conty2;
color c = color(#999999);



void setup() 
{
  size(600, 500);
  frameRate(5);
  noStroke();
  smooth();
  init();
}

void draw()
{
    disegno();
    render();
    if(conty1 >= posy){
      init();
    }
}
  
void disegno()
{
  line(contx1, posy, posx, conty1);
  line(posx, conty1, contx2, posy);
  line(posx, conty2, contx1, posy);
  line(posx, conty2, contx2, posy);
}
  
  
void render()
{
   // Move the endpoint of the line
   contx1 = contx1 - distance;
   conty1 = conty1 + distance;
   conty2 = conty2 - distance;
   contx2 = contx2 + distance;
}
  
void init()
{
   // Reset the line's endpoint to the center, starting on the y-axis
   //stroke(0000, 100);
   //background(color(214, 148, 50));
   background(color(214, 148, 50));
   stroke(c, 100);
   distance = 10;
   posy = height/2;
   posx = width/2;
   contx1 = posx;
   conty1 = 0;
   contx2 = posx;
   conty2 = posy*2;
}
