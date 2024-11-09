class Circle {
  // We have to declare the private field before we can use it to our code.
  #radius;

  constructor(radius) {
    this.#radius = radius;
  }

  getRadius() {
    return this.#radius;
  }
}
