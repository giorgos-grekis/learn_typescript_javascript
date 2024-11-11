// function Dog(name, breed) {
//   this.name = name;
//   this.breed = breed;
// }

// Dog.prototype.bark = function () {
//   return `${this.name} says woof!`;
// };

// Dog.prototype.sleep = function () {
//   return `${this.name} is sleeping!`;
// };

/**
 * new Keyword
 * The new keyword does four things
 * 1. Creates an empty object
 * 2. Sets the keyword "this" to be that object
 * 3. Returns the object - return "this"
 * 4. Creates a link to the object's prototype
 */

/**
 * Στην JavaScript, το new keyword χρησιμοποιείται για να δημιουργήσουμε ένα καινούργιο instance ενός αντικειμένου που βασίζεται σε μια constructor function ή σε μια class. Όταν χρησιμοποιούμε το new, η JavaScript εκτελεί τα εξής βήματα:
 *
 * 1. Δημιουργεί ένα καινούργιο αντικείμενο. Το αντικείμενο αυτό είναι αρχικά κενό.
 *
 * 2. Ορίζει το this στο εσωτερικό της constructor function ώστε να αναφέρεται στο καινούργιο αντικείμενο. Αυτό επιτρέπει να ορίσουμε ιδιότητες και μεθόδους στο νέο instance.
 *
 * 3. Επιστρέφει το καινούργιο αντικείμενο, εκτός αν η constructor function επιστρέψει ρητά κάποιο άλλο αντικείμενο.
 *
 * 4. Συνδέει το καινούργιο αντικείμενο με το πρωτότυπο (prototype) της constructor function. Δηλαδή, το καινούργιο αντικείμενο αποκτά πρόσβαση στις μεθόδους και τις ιδιότητες που ορίζονται στο prototype.
 */

const myObj = {
  color: "purple",
  score: 99,
  greet() {
    console.log("HIII!");
  },
};

class Dog {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }
  bark() {
    return `${this.name} says woof!`;
  }
  sleep() {
    return `${this.name} is sleeping!`;
  }
}

// class GuideDog extends Dog {
//   constructor(name, breed, owner) {
//     super(name, breed);
//     this.owner = owner;
//   }
//   alert() {
//     return `${this.name} alerts you to danger.  Good dog!`;
//   }
// }

// /*** This is a constructor function ***/
// function Dog(name, breed) {
//   console.log("THIS IS :", this);

//   this.name = name;
//   this.breed = breed;
//   this.bark = function () {
//     return `${this.name} says woof!`;
//   };
//   this.sleep = function () {
//     return `${this.name} is sleeping!`;
//   };
// }

// /*** This is a constructor function ***/
// function User(username, email) {
//   this.username = username;
//   this.email = email;
//   this.isAdmin = false;
// }

const grandparent = {
  greet() {
    return "HI THERE!!!";
  },
};

const parent = {
  color: "purple",
  sing() {
    return "LA LA LA";
  },
  __proto__: grandparent,
};

const child = {
  num: 2,
  __proto__: parent,
};

// const person = {
//   sing() {
//     return "LALALA";
//   },
//   isHuman: true,
// };
