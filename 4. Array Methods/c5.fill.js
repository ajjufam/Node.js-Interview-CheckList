// fill()
//     The fill() method in JavaScript fills all or part of an array with a static value.
//     It modifies the original array.

//     Why ?
//     Use it when you want to quickly initialize or overwrite array elements with the same value.

// Syntax
// array.fill(value, start, end);
// * value → what to fill with
// * start (optional) → index to start (default: 0)
// * end (optional) → index to stop before (default: array.length)

// Ex 1
const arr = [1, 2, 3, 4];
arr.fill(0);
console.log(arr); // [0, 0, 0, 0]

// Ex 2
const arr1 = [1, 2, 3, 4];
arr1.fill(9, 1, 3); // fill 9 from index 1 and stop before index 3
console.log(arr1);
