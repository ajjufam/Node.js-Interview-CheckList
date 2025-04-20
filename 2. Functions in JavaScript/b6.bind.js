// bind()

// What ?
//     bind() is a method that creates a new function with a specific this value permanently bound to it.
//     Unlike call() or apply(), which invoke the function immediately, bind() returns a new function
//     that you can call later.

//Why ?
// * When you want a function to always use a specific this context.
// * Useful in callbacks, event listeners, or asynchronous code where this might get lost.
// * To pass preset arguments and create a partial function.

// ✅ bind() means:
// "Store the function with a fixed this context and/or preset arguments in a variable — and call it later."

// Ex 1
const person = {
  name: "Ajju",
  greet: function () {
    console.log("Hello :", this.name);
  },
};

const result = person.greet.bind(person);
result();

// Ex 2
const p2 = {
  name: "Devil",
};

const result2 = person.greet.bind(p2);
result2();

// Summary
// Method  | What it does                           | When it runs
// call()  | Changes this and calls immediately     | Now
// apply() | Like call(), but with array args       | Now
// bind()  | Returns a new function with bound this | Later
