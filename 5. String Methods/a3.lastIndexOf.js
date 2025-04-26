// lastIndexOf()
//     lastIndexOf() in JavaScript finds the last occurrence of a character or substring in a string, and returns its index.
//     If not found, it returns -1.

//     Why ?
//     Use it when you want to find where something appears last in a string.

const message = "hello world hello";
console.log(message.lastIndexOf("hello")); // 12

// * First "hello" at index 0
// * Second "hello" at index 12
// * lastIndexOf('hello') gives 12 (the last one)
