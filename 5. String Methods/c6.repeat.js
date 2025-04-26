// repeat()
//     repeat() in JavaScript repeats a string a specified number of times and returns the new string.

//     Why?
//     Use it when you need to repeat a string multiple times, such as for generating patterns or repeating characters.

const str = "abc";

console.log(str.repeat(3)); // "abcabcabc"

// Note
// If count is 0, the result is an empty string.
// If count is negative or not an integer, it will throw an error.

const str1 = "hello";
console.log(str1.repeat(0)); // ""

// Tip:
// repeat() is useful for generating repeated text patterns,
// like dashes for separators or creating repeated content for UI elements.
