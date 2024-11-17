// You can think of this function as f(g(x))
// Take x, pass it to the first function g and then take that value and pass it to f.
function compose(fn1, fn2) {
  return function (val) {
    return fn1(fn2(val));
  };
}

function repeatTwice(str) {
  return str.repeat(2);
}

function upperCase(str) {
  return str.toUpperCase();
}

const repeatAndUppercase = compose(repeatTwice, upperCase);

const square = (a) => a * a;
const double = (a) => a * 2;

const doubleAndThenSquare = compose(square, double);
