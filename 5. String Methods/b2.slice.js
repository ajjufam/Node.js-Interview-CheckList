// slice()
//     slice() in JavaScript cuts a part of a string and returns it as a new string.

//     Why?
//     Use it when you want to take out part of a string (without changing the original).

const message = "Hello World";

console.log(message.slice(0, 5)); // "Hello"
console.log(message.slice(6)); // "World"

// ✅ Notes:
// If you skip end, it goes till the end of the string.
// You can also use negative numbers to count from the end.
// Example with negative:
console.log(message.slice(-6)); // " World"
