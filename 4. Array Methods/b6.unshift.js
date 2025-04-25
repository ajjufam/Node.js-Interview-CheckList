// unshift()
//     The unshift() method in JavaScript adds one or more elements to the beginning of an array
//     and returns the new length of the array.

//     Why ?
//     Use it when you want to add items to the start of an array.

let arr = [1, 2, 3, 4, 5];
let unshift = arr.unshift(50, 100); // 50 and 100(added in the biggining of the array)

console.log(unshift); // 7
console.log(arr); // [ 50, 100, 1, 2, 3, 4, 5 ]
