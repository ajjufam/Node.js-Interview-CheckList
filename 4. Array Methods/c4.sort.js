// sort()
//     The sort() method in JavaScript sorts the elements of an array in place (modifies the original array)
//     and by default, sorts as strings.

//     Why ?
//     Use it to arrange items in order (like alphabetically or numerically).

// EX 1 (Array of strings)
let strArr = ["devil", "camel", "apple", "ball"];
let strSort = strArr.sort();
console.log(strSort); // [ 'apple', 'ball', 'camel', 'devil' ]

// Ex 2 (Array of numbers)
let numArr = [3, 2, 1, 4, 8, 5];
// let numSort = numArr.sort(); // It wont works for numbers
let numSort = numArr.sort((a, b) => a - b);
console.log(numSort); // [ 1, 2, 3, 4, 5, 8 ]
