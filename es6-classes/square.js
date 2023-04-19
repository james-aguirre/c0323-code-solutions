/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Square */
class Square extends Shape { // new class Square being defined which extends the class Shape
  constructor(width) {
    super(width * width, 4 * width);
    this.width = width;

  }

  describe() {
    return super.describe() + ' The squares width is ' + this.width;
  }
}

const instanceSquare = new Square(50); // We have a new Square being estanciated;
console.log('instanceSquare: ', instanceSquare);
console.log(instanceSquare.describe());
