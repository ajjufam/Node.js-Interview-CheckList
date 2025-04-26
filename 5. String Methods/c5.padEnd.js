// padEnd()
//     padEnd() in JavaScript pads a string from the end to a specific length with a specified character or string.

//     Why?
//     Use it when you want to ensure a string reaches a certain length by adding characters at the end, like
//     formatting data for alignment in tables or displaying fixed-length strings.

const str = "42";

console.log(str.padEnd(5, "0"));
// "42000"
