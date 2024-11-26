/**
 *
 * Module Pattern
 *
 * The Module Pattern ensures private and public encapsulation in JavaScript, protecting the global namespace and diminishing naming conflicts.
 */

// const ChickenModule = (() => {
//   const eggColor = "white"; // private variable
//   const cluck = () => console.log("Cluck! Cluck!"); // private function
//   return {
//     layEgg: () => {
//       console.log("Laid a", eggColor, "egg.");
//       cluck();
//     },
//   };
// })();

// ChickenModule.layEgg();

const myModule = (() => {
  const privateVar = "I AM PRIVATE!!!";
  const privateMethod = () => "I AM A PRIVATE METHOD";

  return {
    publicVar: "I AM PUBLIC!!!",
    publicMethod: () => {
      console.log("calling private method: ", privateMethod());
    },
  };
})();

const counter = (() => {
  let count = 1;
  return {
    getCount: () => count,
    increment: () => count++,
  };
})();
