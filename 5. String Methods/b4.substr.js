// substr() (deprecated)
//     substr() in JavaScript extracts part of a string, starting from a position, for a given length.

//     Why?
//     Use it when you want to cut a piece of a string based on start position + how many characters you want.

const message = "Hello World";

console.log(message.substr(0, 5)); // "Hello"
console.log(message.substr(6, 5)); // "World"
// Start at index 0 → take 5 characters → "Hello".
// Start at index 6 → take 5 characters → "World".

// If start is negative, it counts from the end.
console.log(message.substr(-5, 5)); // "World"

// substr() is older — modern JS prefers using slice() or substring()
