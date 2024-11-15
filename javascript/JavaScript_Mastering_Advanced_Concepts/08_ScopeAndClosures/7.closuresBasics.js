/**
 * Closures
 * The ability for inner functions to remember variables defined in outer
 * functions, long after the outer function has returned.
 */

function outerFunction() {
  let outerVariable = "I am from outer!";
  function innerFunction() {
    console.log("I AM THE INNER FUNCTION");
    console.log("outerVariable is", outerVariable);
  }
  return innerFunction;
}

const myClosure = outerFunction();
myClosure();

function idGenerator() {
  let count = 1;
  return function generate() {
    return count++;
  };
}

const nextId = idGenerator();
