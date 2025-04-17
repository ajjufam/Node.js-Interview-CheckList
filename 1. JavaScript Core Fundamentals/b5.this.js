// "this" refers to the object that is executing the current function

// ex 1
const user = {
  name: "Ajju",
  greet() {
    console.log("this :", this.name); //here this is required
  },
};

user.greet(); // "Ajju" — this refers to `user` object

// ex 2 [Arrow Functions 🚫 (No own this)]
const user2 = {
  name: "Ajju",
  greet1: () => {
    console.log("this :", this.name); //wont works here, NOTE: with "this" (undefined), ReferenceError: without "this"
  },
};

user2.greet1();

// ex 3 [In Constructors (new keyword)]
function Person(name) {
  this.name = name;
}

let p1 = new Person("Ajju");
console.log(p1.name);
