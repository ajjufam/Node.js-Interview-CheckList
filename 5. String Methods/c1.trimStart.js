// trimStart()
//     trimStart() in JavaScript removes whitespace from the beginning (start) of a string.

//     Why?
//     Use it when you want to clean up a string by removing spaces, tabs, or newlines from the beginning of the
//     string, but keep the spaces at the end intact.

const message = "   Hello World!   ";

console.log(message.trimStart()); // "Hello World!   "

// Note
// It only removes leading whitespace (spaces, tabs, newlines) from the start.
// Does not affect spaces in the middle or at the end.
