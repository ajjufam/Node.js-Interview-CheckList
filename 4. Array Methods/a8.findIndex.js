// findIndex()
//     The findIndex() method in JavaScript is used to find the index of the first element in an array that satisfies a given condition.
//     If no element satisfies the condition, it returns -1.

//     Why ?
//     It is useful when you need to know the index of the first element that meets a specific condition, rather than the element itself.

const numbers = [10, 20, 30, 40, 50];
const result = numbers.findIndex((num) => num > 25);
console.log(result); // 2, because 30 is the first number greater than 25 at index 2

// In this example, findIndex() checks for the first number greater than 25 and returns its index
// (which is 2 in this case). If no element matches, it would return -1.
