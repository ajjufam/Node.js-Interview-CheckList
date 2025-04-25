// some()
//     The some() method in JavaScript is used to check if at least one element in an array
//     satisfies a given condition.

//     Why ?
//     It is useful when you want to test if any item in the array meets a specific condition, without needing
//     to check every item or loop through the entire array manually.

// Ex 1
const number = [1, 2, 3, 4, 5, 6];
const result = number.some((num) => num > 3);
const result2 = number.some((num) => num > 10);

console.log(result); // true (bcz 4,5,6 are > than 3)
console.log(result2); // false (no element present > 10)
