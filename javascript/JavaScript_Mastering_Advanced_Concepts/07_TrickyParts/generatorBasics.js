/*** Generators and yield ***/

//JavaScript can have generator functions — functions that return a Generator that can be lazily looped over:

/**
 *
 *  Generator functions are basically functions that can pause their execution and then resume their execution.
 *
 * They allow us to produce a sequence of values on demand.
 *
 * We use the function declaration that keyword.
 *
 * And then within the function we use the word yield instead of return.
 *
 * And this will return a value.
 *
 * But it basically pauses execution of this function and allows us to then resume it later.
 *
 */

function* evens(n) {
  while (true) {
    yield n;
    n += 2;
  }
}

const evenGen = evens(10);

function* myCats() {
  yield "Blue";
  yield "Kitty";
  yield "Cream";
  yield "Creedence";
}

function* fibonacci() {
  let a = 0,
    b = 1;

  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

const fibGen = fibonacci();

for (let i = 0; i < 20; i++) {
  console.log(fibGen.next().value);
}
