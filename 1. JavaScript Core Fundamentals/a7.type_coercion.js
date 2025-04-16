// / Explanation
//      Type Coercion is the process where JavaScript automatically converts one data type to another
//      when performing operations involving mixed types.

// Two types of coercion 1)Implicit 2) Explicit

// 1) Implicit
//   JS automatically converts types
//Ex
console.log(
  "Implicit Type Coercion :",
  5 + "5", //"55"
  true + 10, //11 => 1+10, value of true = 1
  false + 10, //10 => 0+10, value of false = 0
  "5" + 5, //"55"
  null + 10, // 10 => 0+10
  undefined + 10 // undefined
);

// 2) Explicit
//   Converting one dataType to another manually
console.log(
  "Explicit Type Coercion :",
  Number("5") + 5, //10
  parseInt("10") + 10, //20
  String(100), //"100"
  (100).toString() //"100"
);

//NOTE : Important to Know
// Falsy values [0, "", null, undefined, NaN, false], except all others are truthy values
console.log(
  "Falsy Values :",
  Boolean(0), // false
  Boolean(""), // false
  Boolean(null), // false
  Boolean(undefined), // false
  Boolean(NaN), // false
  Boolean(false) // false
);

// Truthy values [any number, any string, {}, [],true]
console.log(
  "Truthy values :",
  Boolean("Ajju"), // true
  Boolean("H"), // true
  Boolean(1), // true
  Boolean(10.9), // true
  Boolean({}), // true
  Boolean([]), // true
  Boolean(true) // true
);

//Empty object and array
console.log([] + 10); // "10" ==> "" + 10
console.log([] + {}); // [object Object]
console.log({} + []); // [object Object]

console.log("===============");

//Except + operator all others are directly work as numerical operations
console.log("5" + 5); // Adds or Concats
console.log("5" - 10);
console.log("10" * 10);
console.log("10" / 5);
