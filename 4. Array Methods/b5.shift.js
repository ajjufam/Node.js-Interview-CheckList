// shift()
//     The shift() method in JavaScript removes the first element from an array
//     and returns that removed element.

//     Why ?
//     Use it when you want to remove the first item of an array.

let arr = [1, 2, 3, 4, 5];
let shift = arr.shift();

console.log(shift); // 1 (element removed)
console.log(arr); // [2,3,4,5]
