//Explanation
//     Converting one data type to another data type is called Type Conversion

// Converting Strings to Numbers
// Converting Numbers to Strings
// Converting Dates to Numbers
// Converting Dates to String
// Converting Booleans to Numbers
// Converting Booleans to Strings

// 1) Converting Strings to Numbers (Number(value/variable) , Using Unary Operator '+')
//Example 1 (Number(value/varibale)
console.log(
  "Strings to Numbers :",
  Number("89.98"), // 89.98
  Number(""), //0
  Number("98 87"), //NaN
  Number("Ajju") //NaN
);

//Example 2 (Unary Operator + )
let str = "50";
let num = +str + 100; // 150
console.log("String to Number using '+' :", num);

//NOTE : Number()	Returns a number, converted from its argument
//      parseFloat()	Parses a string and returns a floating point number
//      parseInt()	Parses a string and returns an integer

// 2) Converting Numbers to Strings (String(value/varibale) and value/variable.toString())
// Example 1 (String(value/varibale)
console.log(
  "Number to String :",
  String(78), // "78"
  String(0), //"0"
  String(39.978), //"39.978"
  String(0.0) //"0.0"
);

// Example 2 ((value/variable).toString())
console.log(
  "Number to String :",
  (78).toString(), // "78"
  (0).toString(), //"0"
  (39.978).toString(), //"39.978"
  (0.0).toString() //"0.0"
);

// 3 Dates to Numbers
let date = new Date();
console.log("Date to Number :", Number(date)); //1744816056686

// 4 Dates to Strings
// Example 1 (String)
console.log("Date to String :", String(date)); // Wed Apr 16 2025 20:40:09 GMT+0530 (India Standard Time)
//Example 2 (toString)
console.log("Date to String using toString :", date.toString()); // Wed Apr 16 2025 20:40:09 GMT+0530 (India Standard Time)

// 5 Booleans to Numbers
//Example
console.log(
  "Boolean to Number , true : ",
  Number(true), // 1
  " , false : ",
  Number(false) // 0
);

// 6 Booleans to Strings
//Example
console.log(
  "Boolean to String , true : ",
  String(true), // "true"
  " , false : ",
  false.toString() // "false"
);

// ===> Type Check (typeOf variable)
// example
let a = 10;
let b = "Ajju";
let c = {
  name: "Raju",
  age: 24,
};
let d = [1, 2, 3, 4];
console.log("Type Of :", typeof a, typeof b, typeof c, typeof d); //number string object object
