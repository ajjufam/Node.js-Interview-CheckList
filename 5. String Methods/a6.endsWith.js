// endsWith()
//     endsWith() in JavaScript checks if a string ends with a specific character or substring.
//     It returns true or false.

//     Why ?
//     Use it when you want to confirm the ending of a string.

// NOte : It is case-sensitive

const message = "Hello world";

console.log(message.endsWith("world")); // true
console.log(message.endsWith("d")); // true

console.log(message.endsWith("Hello")); // false
console.log(message.endsWith("D")); // false
