/**
 * A curried function can be called with any number of arguments —
if you call it with fewer args than it takes, it returns a “smaller” partial,
which you can then call with remaining arguments.
*/

// function add3(a, b, c) {
//   return a + b + c;
// }

// const curry(add3);   // Get back a "curried" version of `add3`

// add3(1, 2, 3);   // works! == 6
// add3(1);         // returns a function that takes `b` and `c`
// add3(1, 2);      // returns a fuction that takes `c`
// add3(1)(2)(3);   // also works! == 6

function add3(x, y, z) {
  return x + y + z;
}

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

const curriedAdd = curry(add3);
