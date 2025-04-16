//Declaration
var number = 20;
console.log(number);

//Example for function scoped var
function varEx() {
  if (true) {
    var name = "Ajju";
  }
  console.log("Example for varibale(var)", name);
}
varEx();
