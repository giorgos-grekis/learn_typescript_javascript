console.log(food);

var food = "pizza";

function blah() {
  // TEMPORAL DEAD ZONE STARTS
  console.log(color);
  // ReferenceError: Cannot access 'color' before initialization
  let color = "black";
  // Temporal Dead Zone ends
}
