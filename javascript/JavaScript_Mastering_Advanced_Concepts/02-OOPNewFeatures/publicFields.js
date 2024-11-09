/**
 *
 */

// class MyClass {
//   // public Field
//   publicField = "Public Field";

//   // Private field
//   #privateField = "Private Field";

//   getPrivateField() {
//     return this.#privateField;
//   }
// }

class Cat {
  static numOfCats = 0;
  name;
  breed;
  numLegs = 4;
  hasTail = true;

  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
    Cat.numOfCats += 1;
  }

  amputate() {
    this.numLegs -= 1;
  }
}
