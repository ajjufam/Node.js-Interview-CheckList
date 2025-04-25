// const objEx={students:[{name:"Ajju",age:20}]}
// Write the function to match the incomming parameter to the above given one

function validOrNot(par) {
  if (Object.keys(par).includes("students")) {
    if (!(par.students.length == 0)) {
      for (let i = 0; i < par.students.length; i++) {
        if (!(par.students[i].name && par.students[i].age)) {
          return "invalid";
        }
      }
    }
  }
  return "valid";
}

console.log(
  validOrNot({
    students: [
      { name: "Ajju", age: 22 },
      { name: "Devil", age: 30 },
    ],
  })
);
