// padStart()
//     padStart() in JavaScript pads a string from the beginning to a specific length with a specified character or string.

//     Why?
//     Use it when you want to ensure a string reaches a certain length by adding characters at the start, such as
//     padding numbers with leading zeros.

const str = "5";

console.log(str.padStart(3, "0"));
// "005"
// It pads the string "5" to make it 3 characters long, adding "0" at the beginning.

// NOTE
// If the original string is already equal to or longer than targetLength, it doesn't change the string.
// You can pad with any character. If padString is longer than the remaining space, it gets truncated to fit.

const num = "42";
console.log(num.padStart(5, "0"));
// "00042"
