class Pixel {
  constructor(x, y, r, n) {
    this.x = x;
    this.y = y;
    this.c = color(0, 0, 0, 0);
    this.r = r;
    this.n = n;
  }

  show() {
    fill(this.c);
    strokeWeight(0);
    square(this.x, this.y, this.r + 1);
    
    if(mouseX > this.x && mouseX < (this.x + this.r)) {
      if(mouseY > this.y && mouseY < (this.y + this.r)) {
        fill(0, 0, 0, 50);
        square(this.x, this.y, this.r);
      }
    }
  }

  isTouchingMouse() {
    if(mouseX > this.x && mouseX < (this.x + this.r)) {
      if(mouseY > this.y && mouseY < (this.y + this.r)) {
        return true;
      }
    }
  }

  changeColor(c) {
    this.c = c;
  }
}
