/**
 * Logical assignments are a combination of logical operators (&&, ||, or ??) and assignment expressions.
 */

let num;

// only assign the new value to num, if num has is null or undefined
num ??= 50;

// Logically equivalent to:
// num && (num = 50)

// example

let loggedInUser = null;

if (loggedInUser) {
  loggedInUser = { ...loggedInUser, colorPreference: "purple" };
}

// same as

loggedInUser &&= { ...loggedInUser, colorPreference: "purple" };
