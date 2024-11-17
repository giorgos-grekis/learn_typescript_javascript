/**
 * Currying
 *
 * A curried function can be called with any number of arguments —
if you call it with fewer args than it takes, it returns a “smaller” partial,
which you can then call with remaining arguments.
 */

function add(a, b, c) {
  return a + b + c;
}

function addCurry(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

addCurry(3)(3)(1);
