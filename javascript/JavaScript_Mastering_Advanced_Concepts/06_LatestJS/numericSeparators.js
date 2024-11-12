/**
 * Numeric separators enhance readability by allowing underscores (_) to be inserted between digits in numeric literals.
 */

// Long numeric values can be hard to parse at a glance
const withoutSeparator = 1000000000;

// Using the numeric separator for better readability
const withSeparator = 1_000_000_000;
console.log(withSeparator); // Outputs: 1000000000
