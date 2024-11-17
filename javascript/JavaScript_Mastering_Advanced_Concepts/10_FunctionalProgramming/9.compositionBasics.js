/**
 * * Composition
 *
 * * Function composition is a mechanism of combining
 * * multiple functions to build a more complicated one.
 *
 * * The result of each function is passed to the next one.
 *
 *  * In math, this can be expressed as f(g(x)).
 *
 *  * How to write functions for composition
 *
 *  * When composing functions together, it’s often best to not use methods, but instead create independent functions with a minimal number of arguments
 */

const add = (a, b) => a + b;
const square = (a) => a * a;

square(add(1, 3));
add(square(2), square(3));

const addAndSquare = (a, b) => square(add(a, b));

function lowerCaseString(str) {
  return str.toLowerCase();
}

function splitWords(str) {
  return str.split(" ");
}

function joinWithDash(array) {
  return array.join("-");
}

joinWithDash(splitWords(lowerCaseString("My Favorite Function")));
