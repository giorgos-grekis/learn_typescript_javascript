/**
 * JavaScript represents numbers as floating point, like 1.234.
 * Sometimes, this leads to mildly imprecise results:
 */

// 0.1 + 0.2 === 0.30000000000000004;

// JavaScript uses IEEE 754 (Institute of Electrical and Electronic Engineers)

function areFloatsEqual(a, b, epsilon = 1e-10) {
  return Math.abs(a - b) < epsilon;
}

// Number.MAX_SAFE_INTEGER;

// BigInt("1231232143245234324")
// is same
// 1231232143245234324n

/*** Checking for NaN ***/

// All NaN values are considered unique, so NaN === NaN is false.

// If we need to check for NaN, there are two different ways:

// This returns true if n is NaN or is a value that cannot be coerced into a number:
// isNaN();

isNaN(0 / 0); // => true
isNaN("sdsada"); // => true
isNaN([]); // => false, because empty array coerced to a number
isNaN(false); // => false, because empty array coerced to a number

// This returns true only if n is NaN
// - everything else returns false.
// Number.isNaN();

Number.isNaN(0 / 0); // => true
Number.isNaN("nope"); // => false

/*** ++x and x++ ***/

// There is a difference between ++x and x++:

// let x = 5;
// let y = ++x; // add 1 to x then evaluate: y and x are both 6

// let x = 5;
// let y = x++; // evaluate x and set y that, then add 1 to x
