//  Explanation
// These are the most basic data types in JavaScript. They are immutable and stored by value

// ========> Immutable <========
// Once a primitive value is created, it cannot be altered.
// You can reassign a new value to a variable, but you’re not changing the original value — you're creating a new one.

let name = "Ajju";
name[0] = "B"; // ❌ Doesn’t change the string
console.log(name); // 👉 "Ajju"

let age = 25;
age = age + 1; // ✅ Creates a new number, doesn't change original 25

// Concept     | Mutable         | Immutable
// Can modify? | ✅ Yes          | ❌ No
// Examples    | Arrays, Objects | String, Number, Boolean, etc
// Stored as   | Reference       | Value

// 1) string (Textual data)
let city = "Bangalore";
console.log("string :", city);

// 2) Number (Integer or floating-point numbers)
let num1 = 10;
let num2 = -10;
let num3 = 10.05;
console.log("Number :", num1, num2, num3);

// 3) Boolean (Logical values) true,false
let bol1 = true;
let bol2 = false;
console.log("Boolean :", bol1, bol2);

// 4) Undefined (Declared but not assigned a value)
let x;
console.log("Undefined :", x);

// 5) null (Represents "no value")
let nul1 = null;
console.log("Null :", nul1);

// 6) BigInt (For very large integers) We can store phnumber also
let bigInt1 = 1234567890134567890;
let bigInt2 = 9876768909;
console.log("BigInt :", bigInt1, bigInt2);

// 7) Symbol (Unique and immutable values)
// Every time you create a Symbol, it’s unique — even if the description is the same.
//Example 1
const mySymbol1 = Symbol("Hi");
const mySymbol2 = Symbol("Hi");
console.log("Symbol: ", mySymbol1 === mySymbol2); // return false even if the description is same bcz its unique

//Example 2
const ID = Symbol("id");

const user = {
  name: "Ajju",
  [ID]: 101, // using symbol as key
};

console.log(user[ID]); // ✅ 101
console.log(user.id); // ❌ undefined
