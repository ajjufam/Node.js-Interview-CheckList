// slice()
//     The slice() method in JavaScript is used to extract a portion of an array into a new array,
//     without changing the original.

//     Why ?
//     Use it when you want to get a subarray (part of an array) without affecting the original one.

const numbers = [10, 20, 30, 40, 50];

// Get elements from index 1 to 3 (3 not included)
const sliced = numbers.slice(1, 3);

console.log(sliced); // [20, 30]
console.log(numbers); // [10, 20, 30, 40, 50] (unchanged)

const ex1 = numbers.slice(2); // [30, 40, 50] — from index 2 to end
console.log(ex1);
