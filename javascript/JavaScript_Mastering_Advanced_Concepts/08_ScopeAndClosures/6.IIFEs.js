/*** Immediately Invoked Function Expressions ***/

// IIEF is used for
// 1. privacy
// 2. help us avoid global scope pollution.

(function () {
  // secret only exist in this function scope
  let secret = 10;
  console.log("HELLO FROM IIFE!!!");
  console.log("SECRET IS: ", secret);
})();
