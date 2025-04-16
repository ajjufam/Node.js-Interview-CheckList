// * Variables declared Globally (outside any function) have Global Scope.
// * Global variables can be accessed from anywhere in a JavaScript program.
// * Variables declared with var, let and const are quite similar when declared outside a block.
// * If you assign a value to a variable that has not been declared, it will "automatically become a GLOBAL variable".

let a = 10; //declare outside from all scope (GLOBAL SCOPE)
if (true) {
  console.log(a); //10
}

function global() {
  console.log("Global Scope :", a); //10
}
global();

function autoGloScope() {
  carName = "BMW"; // Automatically Global scope no variable type declared ***[DANGER NOT PREFERED]***
}
autoGloScope(); // required to call the function
console.log(carName); //BMW
