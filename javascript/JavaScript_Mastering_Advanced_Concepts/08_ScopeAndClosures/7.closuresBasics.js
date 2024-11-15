/**
 * Closures
 * The ability for inner functions to remember variables defined in outer
 * functions, long after the outer function has returned.
 */

/**
 * While closures and classes in JavaScript can both encapsulate data, they have different underlying mechanisms.
 *
 * Closures vs. Classes: A class is a formalized way to create objects with properties and methods, encapsulating data and behavior within instances. Closures, on the other hand, are created when a function accesses a variable defined in an outer scope. They’re not designed specifically for creating object instances but can mimic some of that behavior, as we saw with the counter example.
 *
 * Implementation Differences: JavaScript classes use a more object-oriented approach, where data and behavior are encapsulated within class instances, which may share methods through prototyping. Closures rely on function scope to hide data, and each function call creates a new closure with its own copy of the variables it "closes over."
 *
 * Why Use Closures?: Closures offer a lightweight way to create private variables that aren’t accessible outside of their scope. This can be particularly useful for creating single-use instances or simple modules without the overhead of defining a full class. In scenarios where we only need limited encapsulation (like counters or simple state management), closures provide an efficient and readable solution without the formality of a class.
 *
 * To summarize, JavaScript classes aren’t implemented via closures but both can be used to encapsulate data. Closures offer simplicity, while classes provide structure and reusability for more complex objects.
 *
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
