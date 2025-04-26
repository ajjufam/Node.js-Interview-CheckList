// startsWith()
//     startsWith() in JavaScript checks if a string begins with a specific character or substring.
//     It returns true or false.

//     Why ?
//     Use it when you want to know if a string starts with something specific.

// NOTE : It is case-sensitive

const message = "Hello world";

console.log(message.startsWith("Hello")); // true

console.log(message.startsWith("world")); // false
console.log(message.startsWith("hello")); // false ('H' ≠ 'h')
