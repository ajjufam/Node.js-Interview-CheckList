//Arrow Function [ "()=>" ]
// WHAT ?
// Arrow functions are a shorter and cleaner way to write function expressions introduced in ES6.

// WHY
// Arrow functions are needed to write shorter functions and to lexically bind this from their surrounding scope.

// Differences from Regular Functions
// Feature           | Arrow Function              | Regular Function
// Syntax            | Short, => syntax            | Uses function keyword
// this binding      | ❌ No own this (lexical)   | ✅ Has its own this
// Constructor usage | ❌ Cannot be used with new | ✅ Can be used as constructor
// arguments object  | ❌ Not available           | ✅ Available

// ex 1
const add = (a, b) => {
  console.log("Arrow function :", a + b);
};

add(2, 3);

// ex 2 (One-liner (implicit return))
const multiply = (a, b) => a * b;
console.log(multiply(2, 5));

// ex 3
const sayHi = () => console.log("Hii");
sayHi();
