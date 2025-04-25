// concat()
//     The concat() method in JavaScript is used to combine two or more arrays into a new array.
//     It does not change the original arrays.

//     Why ?
//     Use it when you want to merge arrays without modifying the originals.

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

const concat = arr1.concat(arr2);
console.log(concat); // [ 1, 2, 3, 4, 5, 6 ]

const concat1 = arr1.concat([7, 8]);
console.log(concat1); // [ 1, 2, 3, 7, 8 ]

console.log(arr1); // [ 1, 2, 3 ]
console.log(arr2); // [ 4, 5, 6 ]
