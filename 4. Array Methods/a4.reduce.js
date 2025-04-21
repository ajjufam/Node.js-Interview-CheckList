// reduce()
//     The reduce() method reduces an array to a single value by running a callback function on each element,
//     while carrying forward an accumulator.

//     Why ?
//     Use it when you want to accumulate or combine values in an array into:
//     a single number (like sum or product),
//     an object,
//     or even another array.

// Syntax
// Array.reduce((accumulator, currentValue, index, array) => {
//   return updatedAccumulator;
// }, initialValue);

// Ex 1 (Sum of numbers)
console.log("************Sum of numbers************");
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = numbers.reduce((sum, num) => sum + num, 0);
console.log(sum);
// 55

// Ex 2 (Multiply all numbers)
console.log("************Multiply all numbers************");
const arr1 = [2, 3, 4];
const multiply = arr1.reduce((acc, cuu) => acc * cuu, 1);
console.log(multiply);
// 24

// Ex 3 (Count occurrences)
console.log("************Count occurrences************");
const fruits = ["jan", "feb", "mar", "feb", "mar", "jan", "aug"];
const overAllCount = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(overAllCount);

// Ex 4 (Flatten an array)
console.log("************Flatten an array************");
const nested = [[1, 2], [3, 4], [5]];
const flat = nested.reduce((acc, arr) => acc.concat(arr), []);
console.log(flat);
// [ 1, 2, 3, 4, 5 ]

// Ex 5 (Find max number)
console.log("************Find max number************");
const numbers1 = [34, 76, 12, 98, 65];
const max = numbers1.reduce((acc, val) => (val > acc ? val : acc), numbers1[0]);
console.log(max);
// 98
