// flatMap()
//     The flatMap() method in JavaScript first maps each element using a function,
//     then flattens the result one level deep.

//     Why ?
//     Use it when you want to transform + flatten an array in one step.

let arr = [1, 2, 3];

const flatMap = arr.flatMap((num) => [num, num * 2]);
console.log(flatMap); // [ 1, 2, 2, 4, 3, 6 ]

// [ 1, 2, 2, 4, 3, 6 ] ==> 1, 1*2 , 2, 2*2, 3, 3*2
