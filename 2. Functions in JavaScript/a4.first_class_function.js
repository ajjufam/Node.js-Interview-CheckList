// First-Class Functions

// What ?
// In JavaScript, functions are treated as values, meaning they can be:
//     * stored in variables,
//     * passed as arguments,
//     * returned from other functions.

// Why ?
// Because it lets you write more flexible, reusable, and functional-style code — like
// callbacks, higher-order functions, etc.

// ex 1 ( Assign function to a variable)
const sayHello = function () {
  console.log("Function assigned to variable :", "Hello");
};
sayHello();

//ex 2 (Pass function as an argument)
function greet(fn) {
  fn();
}
greet(sayHello); // sayHello is the function from ex 1

// ex 3 ( Return function from another function)
function outer() {
  return function () {
    console.log("Returned function called");
  };
}

const result = outer();
result();
