// replace()
//     replace() in JavaScript replaces a part of a string with a new substring.

//     Why?
//     Use it when you want to swap a specific part of the string with something else.

const message = "Hello World";

console.log(message.replace("World", "JavaScript"));
// "Hello JavaScript"

//NOTE

// By default, replace() only replaces the first occurrence.
// If you want to replace all occurrences, use a regular expression with the global flag (/g).

const message1 = "Hello World, World";
console.log(message1.replace(/World/g, "JavaScript"));
// "Hello JavaScript, JavaScript"
