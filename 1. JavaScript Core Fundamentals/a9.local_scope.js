// Local Scope (Function Scope)
//     Local variables have Function Scope:
//         They can only be accessed from within the function.
//     Variables declared with var, let and const are quite similar when declared inside a function.

function localScope() {
  let aa = "Ajju";
  let age = 20;

  console.log(aa, age); // Ajju 20
}
localScope();

// console.log(aa); // Can not be accessible here
