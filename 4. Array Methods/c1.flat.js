// flat()
//     The flat() method in JavaScript is used to flatten nested arrays into a single-level array.

//     Why ?
//     Use it when you want to remove nesting from arrays.

let arr = [1, 2, [3, 4], [5, [6, 7]]];
const lowerFlat = arr.flat(); // lower flatten // [ 1, 2, 3, 4, 5, [ 6, 7 ] ]

const deeperFlat = arr.flat(2); // deeper flatten // [ 1, 2, 3, 4, 5, 6, 7 ]
console.log(arr);
console.log("lowerFlat", lowerFlat);
console.log("deeperFlat", deeperFlat);
