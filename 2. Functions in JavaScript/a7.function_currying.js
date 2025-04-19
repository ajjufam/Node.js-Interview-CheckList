// Function Currying

//What ?
//     A function with multiple arguments is transformed into a series of functions,
//     each taking one argument at a time.

//     NOTE : Function Currying is a type of Higher-Order Function.
//     Because:
//     It returns another function — and that's exactly what a higher-order function does.

// Why ?
// To make reusable, customized functions.
// Helps in function composition and partial application.
// Makes code more readable and modular.

// ex 1 (Non-Curried)
function add(a, b) {
  console.log(a + b);
}
add(5, 5);

// ex 2 (Curried Version:)
function add1(a) {
  return function (b) {
    console.log(a + b);
  };
}
add1(8)(8);

// also we can reuse like
let add2 = add1(8); // a value
add2(8); // b value
