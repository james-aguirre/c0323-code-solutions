/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Circle */
class Circle extends Shape {
  constructor(radius) {
    super(20, 60);
    this.radius = radius;

  }

  describe() {
    return super.describe() + ' The circles radius is ' + this.radius;
  }
}

const instanceCircle = new Circle(30);
console.log('instanceCircle: ', instanceCircle);
console.log(instanceCircle.describe());
