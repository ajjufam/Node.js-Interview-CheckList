// every()
//     The every() method in JavaScript checks if every element in an array satisfies a given condition.

//     Why ?
//     It is useful when you want to test if all items in the array meet a specific condition.

// Ex
const numbers = [2, 4, 6, 8, 10];
const result = numbers.every((num) => num % 2 == 0);
console.log(result); // True (All the elements satisfies the condition)
