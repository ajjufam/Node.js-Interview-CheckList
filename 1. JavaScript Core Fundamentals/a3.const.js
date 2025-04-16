//Definition
// const is a block-scoped variable declaration, similar to let.
// However, once a variable is declared with const, it cannot be reassigned.
// If the variable holds an object or array, the contents can still be modified, but the variable itself cannot be reassigned to a new value.

//Declaration
const a = 10;
console.log(a);

//Example for block scoped
function constEx() {
  if (true) {
    const b = 20;
    console.log(b); //works here
  }
  //   console.log(b); //wont works here
}
constEx();

//Cannot be reassignable
// a = 30;  // TypeError: Assignment to constant variable.
console.log(a);

// for let and var we can reassignable
