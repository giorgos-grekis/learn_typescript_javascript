// Imperative Programming
/**
 * Imperative programming is all about describing how a program operates using statements and code to manipulate a program's state.
 */
let sum = 0;
for (let i = 1; i <= 5; i++) {
  sum += i;
}

// Functional Programming
/**
 * A functional programming approach would look something maybe like this.
 */
[1, 2, 3, 4, 5].reduce((acc, val) => acc + val, 0);

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Imperative Approach
const evens = [];
for (let num of nums) {
  if (num % 2 === 0) {
    evens.push(num);
  }
}

// Functional Approach
nums.filter((n) => n % 2 === 0);

// Imperative Approach
let numbers = [1, 2, 3, 4, 5];
let max = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}
console.log(max);

// Functional Approach

Math.max(...numbers);
