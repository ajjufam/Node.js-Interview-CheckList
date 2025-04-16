//Definition
// var in JavaScript is function-scoped, meaning it’s only visible within the function in which it is declared
//  — even if it's inside a block like if, for, or {} and it can be reassignable

//Declaration
var number = 20;
console.log(number); //20

//Example for function scoped var
function varEx() {
  if (true) {
    var name = "Ajju";
  }
  console.log("Example for varibale(var)", name);
}
varEx();

// Reassign
number = 50;
console.log(number); //50
