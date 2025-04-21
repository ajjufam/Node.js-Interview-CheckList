// a2.
// map()
//     map() creates a new array by applying a function to each element of the original array.

//     Why ?
//     To transform array elements without changing the original array.

//Syntax
// const newArray = originalArray.map((val, index, arr) => {});

// Ex 1 (Basic Example)
console.log("*******Basic Example*******");
const numbers = [1, 2, 3, 4];
const doubled = numbers.map((num) => num * 2);
console.log(doubled);
// [ 2, 4, 6, 8 ]

// Ex 2 (Convert strings to uppercase:)
console.log("*******Convert strings to uppercase*******");
const names = ["ajju", "dev", "max"];
const uppered = names.map((name) => name.toUpperCase());
console.log(uppered);
// [ 'AJJU', 'DEV', 'MAX' ]

// Ex 3 (Extract values from array of objects:)
console.log("*******Extract values from array of objects*******");
const persons = [
  { name: "ajju", age: 20 },
  { name: "devil", age: 25 },
];
const onlyNames = persons.map((person) => person.name);
console.log(onlyNames);
// [ 'ajju', 'devil' ]

// Ex 4 (Add index to value:)
console.log("*******Add index to value*******");
const letters = ["a", "b", "c"];
const withIndex = letters.map((letter, index) => `${letter}:${index}`);
console.log(withIndex);
// [ 'a:0', 'b:1', 'c:2' ]

// Ex 5 (Using Named Function:)
console.log("*******Using Named Function*******");
function square(n) {
  return n * n;
}
let arrr = [20, 30, 40];
const result = arrr.map(square);
console.log(result);
// [ 400, 900, 1600 ]

// ⚠️ Important Notes:
// map() returns a new array.
// It does not change the original array.
// map() always expects a return value inside the callback.

//Summary
// Feature            | map()
// Changes original?  | ❌ No
// Returns new array? | ✅ Yes
// Used for?          | Transforming array elements
// Callback args      | value, index, array
