//from Vera Molnar works

int nb = 20;
float dim = 0;
float margin = 40;
float x, y;

void setup() {
  size(500, 500);
  dim = (height - 2 * margin) / nb;
  noLoop();
}

void draw() {
  background(255);
  for (int j = 0; j < nb; j++) {
    for (int i = 0; i < nb; i++) {
      x = margin + i * dim;
      y = margin + j * dim;
      
      noFill();
      stroke(0);
      strokeWeight(4);
      int rnd = int(random(0, 4));
      
      if (rnd == 0) {
        line(x, y, x + dim, y + dim);
      } else if (rnd == 1) {
        line(x, y + dim, x + dim, y);
      } else if (rnd == 2) {
        line(x + dim / 2, y, x + dim / 2, y + dim);
      } else if (rnd == 3) {
        line(x, y + dim / 2, x + dim, y + dim / 2);
      }
    }
  }
}


void keyPressed() {
  redraw();
}
