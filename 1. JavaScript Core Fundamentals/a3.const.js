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

// for let and const we can reassignable
