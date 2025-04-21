// forEach()
// ** I can use this if i want to chnage entire array similar to something

//     forEach() is an array method that executes a callback function once for each element in an array — in order.

//      Why ?
//      To iterate over an array and perform an action (like logging or modifying something externally) for each item.

// Syntax
// Array.forEach(function (element, index, array) {});

// here
// function ==> callback Function
// element ==> current element
// index ==> (Optional) index of the element
// arrsy ==> (Optional) The full array being iterated

// Ex 1 (Basic Iteration)
console.log("*******Basic Iteration******");

const colors = ["Red", "Yello", "Blue"];
colors.forEach((color) => {
  console.log(color);
});
// Red
// Yello
// Blue

// Ex 2 (Accessing Index)
console.log("*******Accessing Index******");

const fruits = ["Apple", "Banana", "Mango"];
fruits.forEach((fruit, index) => {
  console.log(`index :${index}, fruit :${fruit}`);
});
// index :0, fruit :Apple
// index :1, fruit :Banana
// index :2, fruit :Mango

// Ex 3 (Using all parameters) // used function keyword
console.log("*******Using all parameters******");

const nums = [2, 3, 4, 5, 6];
nums.forEach(function (num, index, arr) {
  console.log(`index :${index}, num :${num}, arr :${arr}`);
});
// index :0, num :2, arr :2,3,4,5,6
// index :1, num :3, arr :2,3,4,5,6
// index :2, num :4, arr :2,3,4,5,6
// index :3, num :5, arr :2,3,4,5,6
// index :4, num :6, arr :2,3,4,5,6

// Ex 4 (Summing Numbers)
console.log("*******Summing Numbers******");

const numbers = [10, 20, 30, 40];
let sum = 0;
numbers.forEach((num) => {
  sum += num;
});
console.log(sum);
//100

// EX 5 (Modifying External Variable)
console.log("*******Summing Numbers******");

const names = ["arjun", "ajju"];
let uppered = [];
names.forEach((name) => {
  uppered.push(name.toUpperCase());
});
console.log(uppered);
// [ 'ARJUN', 'AJJU' ]

// Ex 6 (ForEach on array of objects)
console.log("*******ForEach on array of objects******");

const persons = [
  { name: "Ajju", age: 22 },
  { name: "Devil", age: 25 },
];
persons.forEach((person) => {
  console.log(person.name);
});
// Ajju
// Devil

// Ex 7 (Using forEach to Update Object Values)
console.log("*******Using forEach to Update Object Values******");

const items = [
  { name: "Oil", price: 100 },
  { name: "Basen", price: 50 },
];
items.forEach((item) => {
  item.price *= 2; // double price
});
console.log(items);
// [ { name: 'Oil', price: 200 }, { name: 'Basen', price: 100 } ]

// Ex 8 (Using forEach() with a Named Function)
console.log("*******Using forEach() with a Named Function******");

function greet(name) {
  console.log("Hello", name);
}
["Ajju", "Devil"].forEach(greet);
// Hello Ajju
// Hello Devil

//Summary
// Use Case                 | Works with forEach()?
// Loop through array       | ✅ Yes
// Modify external variable | ✅ Yes
// Modify array inside loop | ✅ Yes (mutable)
// Return new array         | ❌ No (use map)
// Break out of loop        | ❌ No (use for/for...of)
// Use on array of objects  | ✅ Yes
// Use in DOM with NodeList | ✅ Yes
