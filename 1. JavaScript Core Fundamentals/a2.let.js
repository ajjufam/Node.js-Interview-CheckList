//Definition
// let in JavaScript is block-scoped, which means it is only accessible within the block {} where it's declared.
// value can be reassignable

//Declaration
let a = "Ajju";
console.log(a); //Ajju

//Example for block scoped
function letEx() {
  if (true) {
    let b = "Arjun";
    console.log(b); // works here
  }
  //   console.log(b); // wont works here
}

letEx();

//Reassign
a = 40;
console.log(a); //40
