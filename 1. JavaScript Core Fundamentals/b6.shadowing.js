// Shadowing
//     Variable Shadowing in JavaScript occurs when the inner variable hides or overrides the outer variable
//     within the local scope. In this situation, the outer variable cannot be accessed within the inner scope,
//     only the inner variable is used in that scope.

//     * Variable Shadowing occurs when we declare the same name for the variable in the inner and outer scope.
//     * The inner variable will hide or override the outer variable.
//     * The outer variable will become inaccessible until the code exists in the inner scope.

// ex
let n = 10;
function a() {
  let n = 50; // Its shadowing the global variable n
  console.log("Shadowing", n); // 50
}

a();
console.log(n); // 10 from global variable
