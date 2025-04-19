// Anonymous Function

// What ?
//     An anonymous function is a function without a name.
//     It's often used as a value—like passing to another function, assigning to a variable, etc.

// Why ?
// For short, throwaway tasks
// When you don’t need to reuse the function
// Useful for callbacks, event handlers, etc.

// ex 1 (Assign to a variable)
const greet = function () {
  console.log("Anonymous function");
};
greet();

// ex 2 (Pass as a callback)
setTimeout(function () {
  console.log("Anonymous function");
}, 1000);
