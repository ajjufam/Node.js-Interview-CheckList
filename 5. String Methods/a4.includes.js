// includes()
//     includes() in JavaScript checks if a string contains a certain character or substring.
//     It returns true or false.

//     Why ?
//     Use it when you want to simply check if something exists inside a string.

// NOTE : It is case-sensitive

const message = "Hello world";

console.log(message.includes("world")); // true
console.log(message.includes("o")); // true

console.log(message.includes("bye")); // false
console.log(message.includes("World")); // false (capital 'W' vs small 'w')
