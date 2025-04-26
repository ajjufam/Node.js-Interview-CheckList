// concat()
//     concat() in JavaScript is used to combine multiple strings into one string.

//     Why?
//     Use it when you want to join two or more strings together into a single string.

const greeting = "Hello";
const name = "World";

console.log(greeting.concat(" ", name));
// "Hello World"

// Note
// concat() does not change the original strings, it returns a new string.
// You can chain multiple concat() calls together:

console.log(greeting.concat(" ", name).concat("!", " How are you?"));
// "Hello World! How are you?"
