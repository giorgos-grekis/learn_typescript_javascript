/**
 * What can you do in the constructor?
 * Whatever you want!
 * Common things:
 *  Validate data
 *  Assign properties
 *
 *
 * Inheritance
 *  Basically extends a class "class ShyTriangle extends Triangle"
 */

class Triangle {
  constructor(a, b) {
    if (!Number.isFinite(a) || a <= 0) throw new Error(`Invalid a: ${a}`);
    if (!Number.isFinite(b) || b <= 0) throw new Error(`Invalid b: ${b}`);

    this.a = a;
    this.b = b;
  }

  getArea() {
    return (this.a + this.b) / 2;
  }
  getHypotenuse() {
    return Math.sqrt(this.a ** 2 + this.b ** 2);
  }

  seyHi() {
    return `The triangle with side A of ${this.a} and side B of ${this.b} and with an area of ${this.getArea()} SAYS HI!!!`;
  }
}

class ShyTriangle extends Triangle {
  // don't repeat if not different:
  // will "inherit" from "parent"

  describe() {
    return `(runs and hide)`;
  }

  beShy() {
    return "I AM SHY!!";
  }
}

// const tri = new Triangle(5,12)

// let myTri = {
//   a: 3,
//   b: 4,
//   getArea: function () {
//     return (this.a + this.b) / 2;
//   },
//   getHypotenuse: function () {
//     return Math.sqrt(this.a ** 2 + this.b ** 2);
//   },
// };
