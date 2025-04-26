// indexOf()
//     indexOf() finds the first occurrence of a value in a string or array and returns its index.
//     If not found, it returns -1.

//     Why ?
//     Use it when you want to know where something appears (its position) inside an array or string.

let str = "hello hello";

let indexOf = str.indexOf("o"); // 4 (first index of 'o')
let index1 = str.indexOf("z"); // -1 ('z' is not available in the above str)

console.log(indexOf);
console.log(index1);
