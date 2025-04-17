// Function Expression
//     A Function Expression is when you assign a function to a variable.

//     Unlike function declarations, function expressions are NOT hoisted,
//     so you cannot use them before they are defined.

// ****** It cant be hoisted

// Diff B/W regular function and function expression
// Feature                  | Function Declaration | Function Expression
// Keyword used             | function             | function (assigned to var)
// Hoisting                 | ✅ Yes               | ❌ No
// Can be anonymous         | ❌ No                | ✅ Yes (can be anonymous)
// Example Call Before Def. | ✅ Works             | ❌ Error

// ex 1
let fun1 = function (name) {
  console.log("Function Expression :", name);
};
fun1("Ajju");

// ex 2 (It cant be Hoisted)
fun2("Ajju"); // We cant caal it here NOTE : But we can call it in normal function
let fun2 = function (name) {
  console.log(name);
};
