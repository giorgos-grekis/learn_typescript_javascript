const person = { name: "Teddy", age: 2 };
Object.freeze(person);

const nums = [1, 2, 3, 4];

function push(arr, val) {
  return [...arr, val];
}

function removeLastItem(arr) {
  return arr.slice(0, -1);
}

const newPerson = { name: "Teddy" };

//  - mutable approach -
// person.age = 3;

// - immutable approach -
const newNewPerson = { ...newPerson, age: 2 };
