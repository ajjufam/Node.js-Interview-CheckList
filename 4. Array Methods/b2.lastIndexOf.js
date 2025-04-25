// lastIndexOf()
//     The lastIndexOf() method in JavaScript returns the last occurrence's index of a specified
//     value in an array. If the value is not found, it returns -1

//     Why ?
//     Use it when you want to find the last position a value appears in an array.

let arr = [1, 3, 4, 7, 8, 9, 3];
let index = arr.indexOf(3); // 1

let lastIndex = arr.lastIndexOf(3); // 6
console.log("index", index, "lastIndex", lastIndex);
