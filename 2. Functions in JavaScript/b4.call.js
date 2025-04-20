// call()

// What ?
//     The call() method lets you call a function and explicitly set the value of this inside that function.

// Why ?
//     Used To borrow methods from one object and use them on another.

// Syntax ?
// functionName.call(thisArg, arg1, arg2, ...);

// thisArg: The value you want this to refer to

// arg1, arg2: Optional arguments passed to the function

// ex 1
let person1 = {
  name: "Devil",
  greet: function () {
    console.log("Hello :", this.name);
  },
};

let person2 = {
  name: "Ajju",
};

person1.greet.call(person2); //Hello : Ajju

// 🔸 person1.greet is used
// 🔸 But this is changed to refer to person2 using .call()

// ex 2
function intro(city, age) {
  console.log(`${this.name} from ${city} age ${age}`);
}

let p2 = {
  name: "Ajju",
};

intro.call(p2, "Bangalore", 22); //Ajju from Bangalore age 22
