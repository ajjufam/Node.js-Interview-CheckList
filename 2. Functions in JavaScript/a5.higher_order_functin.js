// Higher-Order Functions

//What ?
//     A Higher-Order Function is a function that does at least one of the following:
//         1. Takes another function as an argument, or
//         2. Returns a function.

//Why ?
// Because it allows you to:
//  * abstract logic,
//  * reuse code,
//  * and write cleaner functional code (like with map, filter, reduce, etc.).

// ex 1 (Takes a function as an argument)
function greet(name) {
  return "Hello :" + name;
}

function process(name, callback) {
  console.log(callback(name));
}

process("Ajju", greet);

//ex 2 (Returns a function)
function multiply(num) {
  return function (x) {
    return x * num;
  };
}

const double = multiply(10); //num
console.log(double(5)); // x

// ex 3 (Real World Example: map)
let num = [1, 2, 3];
const multi = num.map((n) => n * 2);
console.log(multi);
