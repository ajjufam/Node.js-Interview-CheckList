// split()
//     split() in JavaScript divides a string into an array based on a separator.

//     Why?
//     Use it when you want to break a string into parts (words, letters, etc.).

const message = "Hello World";

console.log(message.split(" ")); // ["Hello", "World"]
// It splits the string wherever it finds a space " ".

// If no separator is given → whole string stays as 1 array element.
// If separator is "" (empty string) → splits every character.

console.log(message.split()); // [ 'Hello World' ]
console.log(message.split("")); // ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"]
