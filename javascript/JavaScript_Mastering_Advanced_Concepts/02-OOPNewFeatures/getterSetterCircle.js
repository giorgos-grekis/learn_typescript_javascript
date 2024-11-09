/**
 * Allow you to retrieve the value of an object's property.
 */

// class Circle {
//   constructor(radius) {
//     this._radius = radius;
//   }

//   // Getter for the diameter
//   get diameter() {
//     return this._radius * 2;
//   }

//   get radius() {
//     return this._radius;
//   }
// }

// const circle = new Circle();
// console.log(circle.diameter);

class Circle {
  static allowedColors = new Set(["red", "green", "blue"]);

  setColor(newColor) {
    if (!Circle.allowedColors.has(newColor)) throw new Error("That color is not allowed");
    this._color = newColor;
  }

  constructor(radius, color) {
    this._radius = radius;
    this.setColor(color);
  }

  get radius() {
    return this._radius;
  }

  set radius(value) {
    if (value < 0) {
      throw new Error("Radius cannot be negative!");
    } else {
      this._radius = value;
    }
  }

  get color() {
    return this._color;
  }

  set color(newColor) {
    this.setColor(color);
  }
}
