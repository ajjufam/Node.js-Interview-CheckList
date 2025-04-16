//Declaration
let a = "Ajju";
console.log(a);

//Example for block scoped
function letEx() {
  if (true) {
    let b = "Arjun";
    console.log(b); // works here
  }
  //   console.log(b); // wont works here
}

letEx();
