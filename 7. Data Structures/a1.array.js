// Array
//     * Array = a special data structure that holds a list of values in a single variable.
//     * Each value inside the array is called an element.
//     * Each element has an index (starts from 0).

//     let fruits = ["apple", "banana", "cherry"];
//     // Indexes:    0        1         2

//     Why?
//     * To store multiple related values together.
//     * To organize data neatly.
//     * To iterate easily over items (using loops).
//     * To perform batch operations like sorting, filtering, mapping, etc.
//     * Saves memory and makes code cleaner.

// Ex 1 (Create an Array)
let numbers = [1, 2, 3, 4, 5];
let emptyArray = []; // empty array

// Ex 2 (Access Elements)
let first = numbers[0]; // 1
let last = numbers[numbers.length - 1]; // 5

// Ex 3 (Modify Elements)
numbers[1] = 20;
console.log(numbers); // [1, 20, 3, 4, 5]

// Ex 4 (4. Add Elements)
// At the end: push()
numbers.push(6);
console.log(numbers); // [1, 20, 3, 4, 5, 6]

// At the start: unshift()
numbers.unshift(0);
console.log(numbers); // [0, 1, 20, 3, 4, 5, 6]

// Ex 5 (Remove Elements)
//      From the end: pop()
numbers.pop();
console.log(numbers); // [0, 1, 20, 3, 4, 5]

//      From the start: shift()
numbers.shift();
console.log(numbers); // [1, 20, 3, 4, 5]

// Ex 6(Find Elements)
console.log(numbers.indexOf(20)); // 1
console.log(numbers.includes(4)); // true

// 7 (Iterate Over an Array)
//      Using for
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

//      Using for...of
for (let num of numbers) {
  console.log(num);
}

//      Using forEach
numbers.forEach((num) => console.log(num));

// Ex 8 (Transform Arrays)
//      map()
let doubled = numbers.map((num) => num * 2);
console.log(doubled); // [2, 40, 6, 8, 10]

//      filter()
let even = numbers.filter((num) => num % 2 === 0);
console.log(even); // [20, 4]

//      reduce()
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 33

// Ex 9 (Sort Arrays)
let sorted = numbers.sort((a, b) => a - b);
console.log(sorted); // [1, 3, 4, 5, 20]

// ⚡ Real-World Examples
// List of products in a cart
// List of users
// List of messages in a chat
// List of scores in a game
// List of tasks in a todo app

// Different Kinds of Arrays
// Type             | Example
// Array of numbers | [1, 2, 3]
// Array of strings | ["a", "b", "c"]
// Array of objects | [{name: "John"}, {name: "Jane"}]
// Array of arrays  | [[1,2], [3,4]] (nested array)
// Mixed array      | [1, "two", {three: 3}]
