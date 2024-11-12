/**
 * Logical assignments are a combination of logical operators (&&, ||, or ??) and assignment expressions.
 */

const todo = { priority: "LOW", task: "Finish Editing Course" };

// only assign the new value to num, if num already has a falsy value
// Is priority falsy?  If so, set it to  "MEDIUM"
todo.priority ||= "MEDIUM";

// Logically equivalent to:
// todo.priority || (todo.priority = "MEDIUM");
