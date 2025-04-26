// substring()
//     substring() in JavaScript gets part of a string between two indexes and returns it as a new string.

//     Why?
//     Use it when you want to extract some part of a string — similar to slice() but behaves slightly
//     differently with negative numbers.

const message = "Hello World";

console.log(message.substring(0, 5)); // "Hello"
console.log(message.substring(6)); // "World"

// ✅ Important Notes:
// If start > end, JavaScript swaps them automatically!
console.log(message.substring(5, 0)); // "Hello" (works same as substring(0, 5))

// Differenec from slice()
// Feature          | slice()     | substring()
// Negative indexes | ✅ Works   | ❌ Treated as 0
// Start > End      | ❌ No swap | ✅ Auto swap
