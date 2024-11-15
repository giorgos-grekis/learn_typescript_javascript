/*** Array.from method ***/

// It help us with generating new arrays from some sort of initial non array

// So we can pass in an array like object anything that's an iterable such as a string like "hello".
// And it will turn into an array.

Array.from("hello"); // => ['h', 'e', 'l', 'l', 'o']

Array.from([1, 2, 3]); // => [1,2,3]

const set = new Set([1, 2, 3, 4]); // => Set(4) {1,2,3,4}
Array.from(set); // => [1,2,3,4]

// One of the most useful places for Array.from is when we are working with DomNode lists

// example with 2 buttons in dom
const buttons = document.querySelectorAll("button");

buttons; // => NodeList(2) [button, button]

// filter does not exist because that's an array method
// buttons.filter();

// We need first to turn into an Array
Array.from(buttons); // => [button, button]

// Now filter works
// buttons.filter(x => x);

// Array.from() can generate big arrays
Array.from({ length: 2 }); // > [undefined,undefined]

Array.from({ length: 2 }, (el) => true); // > [true,true]

Array.from({ length: 2 }, (el, index) => index); // > [0,1]
