// Hoisting is JavaScript's behavior of moving variable and function declarations to the top of
// their scope before code execution.

// // What gets hoisted?
// Declaration Type     | Hoisted? | Value after hoisting
// var                  | ✅ Yes   | undefined
// let / const          | ✅ Yes   | ❌ Hoisted, but not usable (TDZ)
// Function expression  | ❌ No    | ❌ Not hoisted as function
// Function declaration | ✅ Yes   | ✅ Usable before definition

// Example 1: var hoisting
console.log(a); // undefined
var a = 10;

// Example 2: let / const (Temporal Dead Zone) (REFERENCE ERROR)
console.log(b); // ReferenceError
let b = 20;

// b is hoisted but not initialized — it lives in the Temporal Dead Zone (TDZ)
// from the start of the block until the declaration is encountered.

// Example 3: Function Expressions (TypeError)
greet(); // TypeError: greet is not a function
var greet = function () {
  console.log("Hi!");
};

// Example 4: Function Declarations ✅(Works)
sayHi(); // "Hello!"
function sayHi() {
  console.log("Hello!");
}
