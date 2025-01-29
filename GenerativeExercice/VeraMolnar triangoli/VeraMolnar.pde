//from Vera Molnar works //tasselazione


int nb = 20;
float dim = 0;
int margin = 40;
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

      noStroke();
      fill(0);
      int rnd = int(random(0, 4));

      if (rnd == 0) {
        triangle(x + dim, y, x + dim, y + dim, x, y + dim);
      } else if (rnd == 1) {
        triangle(x, y, x + dim, y + dim, x, y + dim);
      } else if (rnd == 2) {
        triangle(x, y, x + dim, y + dim, x, y + dim);
      } else if (rnd == 3) {
        triangle(x, y, x + dim, y, x + dim, y + dim);
      }
    }
  }
}

void keyPressed() {
  redraw();
}
