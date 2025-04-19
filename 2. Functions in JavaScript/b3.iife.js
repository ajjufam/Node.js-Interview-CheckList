// IIFE (Immediately Invoked Function Expressions)

// What ?
//     An IIFE is a function that:
//     * Defines itself
//     * Immediately calls itself
//     * It runs as soon as it’s defined — no need to call it separately!

// Why ?
// Avoid polluting global scope
// Create a private scope
// Useful in older JS patterns before let/const and modules

// Ex 1 (without parameter)
(function () {
  let msg = "Hello, IIFE";
  console.log(msg);
})();

// Ex 2 (With parameter)
(function (name) {
  console.log("Hello ", name);
})("ajju");
