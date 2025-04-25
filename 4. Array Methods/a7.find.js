// find()
//     The find() method in JavaScript is used to find and return the first element in an array that satisfies
//     a given condition. If no element is found, it returns undefined.

//     Why ?
//     It is useful when you want to retrieve the first matching element based on a specific condition in the array.

const numbers = [1, 2, 3, 4, 5, 6];
const result = numbers.find((num) => num > 5);
console.log(result);

// In this example, find() looks through the array and returns the first number that is greater than 5.
// If no number is found that satisfies the condition, it would return undefined.
