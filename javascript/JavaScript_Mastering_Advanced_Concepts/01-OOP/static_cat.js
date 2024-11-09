/**
 * JS gives us “static methods”, where the method is called on a Class, not an object
 * therefore it cannot have access to individual object attributes
 */

class Cat {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }

  static meow() {
    console.log("THIS IS: ", this);
  }

  static species = "felis catus";
}
