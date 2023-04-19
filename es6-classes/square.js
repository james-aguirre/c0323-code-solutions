/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Square */
class Square extends Shape {
  constructor(width) {
    super(30, 20);
    this.width = width;

  }

  describe() {
    return super.describe() + ' The squares width is ' + this.width;
  }
}

const instanceSquare = new Square(50);
console.log('instanceSquare: ', instanceSquare);
console.log(instanceSquare.describe());
