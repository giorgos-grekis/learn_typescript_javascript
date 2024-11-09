/**
 * POJO
 * Plain Old Javascript Object
 *
 * Properties that don’t exist evaluate to undefined:
 * All keys get “stringified”
 *
 * */

const key = "species";

const pet = {
  species: "Dog",
  name: "Elton",
  age: 1,
};

pet[true] = "hello";

pet.bark = function () {
  return "WOOF WOOF!!!";
};
