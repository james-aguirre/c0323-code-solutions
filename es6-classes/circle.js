/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Circle */
class Circle extends Shape {
  constructor(radius) {
    super(Math.PI * radius * radius, 2 * Math.PI * radius);
    this.radius = radius;
  }

  describe() {
    return super.describe() + ' The circles radius is ' + this.radius;
  }
}

const instanceCircle = new Circle(18);
console.log('instanceCircle: ', instanceCircle);
console.log(instanceCircle.describe());
