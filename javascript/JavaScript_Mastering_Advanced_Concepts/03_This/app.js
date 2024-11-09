const conan = {
  name: "Conan",
  city: "Los Angeles",
  sing() {
    console.log("THIS is:", this);
    return `${this.name} sings LA LA LA`;
  },
};

const lisa = {
  name: "Lisa",
  city: "Los Angeles",
};

class Cat {
  constructor(firstName) {
    this.firstName = firstName;
  }

  static getRandomCat() {
    console.log("THIS IS: ", this);
  }

  dance(style = "tango") {
    console.log("THIS IS: ", this);
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

const ringo = {
  firstName: "Ringo",
  greet(greeting, punctuation) {
    console.log(`${this.firstName} says ${greeting}${punctuation}`);
  },
};

const george = {
  firstName: "George",
  lastName: "Harrison",
};

const nums = [1, 2, 3, 69, 42];

function maximum() {
  console.log(arguments);
  return Math.max.apply(null, arguments);
}

const lisaSing = conan.sing.bind(lisa);

// Binding Arguments
function applySalesTax(taxRate, price) {
  return price + price * taxRate;
}

const applyCASalesTax = applySalesTax.bind(null, 0.0725);
const applyMTSalesTax = applySalesTax.bind(null, 0);

function multiply(a, b) {
  return a * b;
}

const double = multiply.bind(null, 2);
const triple = multiply.bind(null, 3);

const alwaysNine = multiply.bind(null, 3, 3);
