// trim()
//     trim() in JavaScript removes whitespace (spaces, tabs, newlines) from the beginning and end of a string.

//     Why?
//     Use it when you want to clean up a string by removing unwanted spaces at the start or end, but keep the inner spaces intact.

const message = "   Hello World!   ";

console.log(message.trim()); // "Hello World!"

// Notes:

// Does not change the original string, but returns a new string.
// It only removes whitespace characters like space, tab, newline (\n), etc.

const text = "\t   Hello \n";
console.log(text.trim()); // "Hello"

// TIP
// If you only want to remove spaces from the start or end, you can use trimStart() or trimEnd().
