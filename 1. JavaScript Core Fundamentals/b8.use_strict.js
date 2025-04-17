// Strict Mode ("use strict")
//     "use strict" is a special mode in JavaScript that helps you write safer and cleaner code by
//     catching common mistakes.

// ex 1
// city = "bangalore"; // it becomes a global variable even if it inside the any function | if | loops
// console.log("Without 'use strict' :", city); // bangalore (works without use strict)

// ex 2
"use strict"; //NOTE : it should be declared in the top of the file it should not be wrapped with ()
age = 30; // ReferenceError: age is not defined
console.log(age);

// ex 3
function a() {
  "use strict"; // No need to use here if i used in the top of the code
  car = "BMW"; //ReferenceError: car is not defined
  console.log(car);
}
a();
