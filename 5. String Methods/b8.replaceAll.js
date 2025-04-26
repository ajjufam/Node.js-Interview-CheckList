// replaceAll()
//     replaceAll() in JavaScript replaces all occurrences of a substring or pattern in a string with a new substring.

//     Why?
//     Use it when you want to replace every occurrence of a pattern in the string, without using regular expressions.

const message = "Hello World, World!";

console.log(message.replaceAll("World", "JavaScript"));
// "Hello JavaScript, JavaScript!"
// It replaces all occurrences of "World" with "JavaScript".

// Note
// Unlike replace(), replaceAll() replaces every occurrence in the string.
// replaceAll() can take a string or a regular expression as the searchValue.

const message1 = "apple, apple, apple";

console.log(message1.replaceAll(/apple/g, "orange"));
// "orange, orange, orange"

// TIP
// If you need case-insensitive replacement, you can use regular expressions with the i flag.
