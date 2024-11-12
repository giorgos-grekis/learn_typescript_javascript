/**
 * Logical assignments are a combination of logical operators (&&, ||, or ??) and assignment expressions.
 */

let num = 10;

// only assign the new value to num, if num already has a truthy value
num &&= 50;

// Logically equivalent to:
// num && (num = 50)

// example

let loggedInUser = null;

if (loggedInUser) {
  loggedInUser = { ...loggedInUser, colorPreference: "purple" };
}

// same as

loggedInUser &&= { ...loggedInUser, colorPreference: "purple" };
