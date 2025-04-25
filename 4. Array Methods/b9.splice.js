// splice()
//     The splice() method in JavaScript is used to add, remove, or replace elements in an array.
//     It modifies the original array.

//     Why ?
//     Use it when you need to insert, delete, or replace items directly in the array.

// Ex 1 (Remove items)
let fruits = ["apple", "banana", "candy", "dragon"];

// removing "candy"
fruits.splice(2, 1); // at index 2 remove 1 item
console.log(fruits);

// Ex 2 (Add items)
let colors = ["red", "blue", "green", "pink"];

// Adding "black" in index 1
colors.splice(1, 0, "black"); // in index 1 remove 0 element and add "black"
console.log(colors);

// Ex 3 (Replace items)
let nums = [1, 2, 3];

// replacing 2 with 99
nums.splice(1, 1, 99); // in index 1 remove 1 item and add 99
console.log(nums);
