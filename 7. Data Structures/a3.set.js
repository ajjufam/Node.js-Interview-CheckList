// Set
//     A Set is a collection of unique values. Unlike arrays, sets do not allow duplicates.
//     * A Set can store any type of value (primitive values, objects, etc.).
//     * It is part of the ES6 (ECMAScript 2015) standard.

//     Why?
//     * To store unique values without duplicates.
//     * Sets provide efficient lookup and quick insertion.
//     * Useful when you want to eliminate duplicate values from a list.

// Ex 1 (Create a Set)
let fruits = new Set(["apple", "banana", "cherry", "apple"]);
console.log(fruits); // Set { "apple", "banana", "cherry" }
//       Notice that "apple" appears only once, even though it was added twice.

// Ex 2 (Add and Check Elements)
//      Adding elements to a Set:
let numbers = new Set();
numbers.add(1);
numbers.add(2);
numbers.add(3);
console.log(numbers); // Set { 1, 2, 3 }

//      Checking if an element exists in the Set:
console.log(numbers.has(2)); // true
console.log(numbers.has(4)); // false

// Ex 3 (Remove Elements)
numbers.delete(2);
console.log(numbers); // Set { 1, 3 }

//      To clear the Set:
numbers.clear();
console.log(numbers); // Set {}

// Ex 4 (Iterate Over a Set)
//      You can iterate through a Set using for...of loop or forEach():
let colors = new Set(["red", "blue", "green"]);

for (let color of colors) {
  console.log(color);
}
// Output:
// red
// blue
// green

// Ex 5 (Size of a Set)
console.log(colors.size); // 3

// Ex 6 ( Convert Set to Array)
let arrayFromSet = [...colors];
console.log(arrayFromSet); // ["red", "blue", "green"]

// Summary
// Set = A collection of unique values.
// No duplicates allowed.
// Good for removing duplicates, fast lookups, and storing unique values.
