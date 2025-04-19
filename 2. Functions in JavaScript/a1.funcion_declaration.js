//What ?
// A Function Declaration is the most common way to define a function in JavaScript
// using the function keyword.

//Why ?
// To declare a function

// Syntax
function functionName(parameters) {
  // function body
}

// Example
function sample(name) {
  console.log("Function :", name);
}
sample("Ajju");

// Function can be hoisted, meaning you can call it before it's defined in the code.
calling("Hoisted");
function calling(para) {
  console.log("Hoisted function :", para);
}
