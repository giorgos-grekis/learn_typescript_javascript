const person = {
  name: "Conan",
  city: "Los Angeles",
  sing() {
    console.log("THIS is:", this);
    return `${this.name} sings LA LA LA`;
  },
};

class Cat {
  constructor(firstName) {
    this.firstName = firstName;
  }

  dance(style = "tango") {
    return `Meow I am ${this.firstName} and I like to ${style}`;
  }
}

function greet() {
  return "HI THERE!!";
}

/**
 * When we call a function, we technically calling it on the global object
 * What the global object is depends on
 *  - in browser is typically, "window" Object
 *  - in server (nodejs) is "global" Object
 * */

function whatIsThis() {
  console.log("The value of this is: ", this);
}

const obj = {
  color: "purple",
  age: 2,
  whatIsThis: whatIsThis,
};
