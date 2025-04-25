// from()
//     The Array.from() method in JavaScript creates a new array from:
//     * array-like objects (like strings, NodeLists)
//     * or iterables (like sets, maps)

//     Why ?
//     Use it when you want to convert something into an array or create an array with custom values.

// Ex 1 (From a string)
const arr = Array.from("hello");
console.log(arr); // ['h', 'e', 'l', 'l', 'o']

// Ex 2 (From a Set)
const set = new Set([1, 2, 3]);
const arr1 = Array.from(set);
console.log(arr1); // [1, 2, 3]

// Ex 3 (With a mapping function)
const arr3 = Array.from({ length: 5 }, (_, i) => i * 2);
console.log(arr3); // [0, 2, 4, 6, 8]

// (_, i) => i * 2
// This is an arrow function that acts as the map function. It runs once for each index (0 to 4).
// (_, i): The two arguments:
// _: the current element (we don’t use it, so it's named _)
// i: the current index (0, 1, 2, 3, 4)
// i * 2: Multiply the index by 2
