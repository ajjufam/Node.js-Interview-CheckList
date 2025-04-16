// A closure is a nested (inner) function that has access to the outer function’s variables, even after the
// outer function has finished executing.

// ex 1
function outer() {
  let name = "Ajju";

  function inner() {
    console.log("Closure :" + name);
  }

  return inner; // retuning here but still inner function can access the name variable
}

const greet = outer(); // outer() runs and returns inner function
greet(); // Hello, Ajju

// How it works:
// inner() forms a closure over name.
// JS keeps name alive in memory because it's used by inner() even after outer() is done.
// This is called lexical scoping — inner() looks "up" to where it was defined, not where it's called.

// ex 2
function createCounter() {
  let count = 0;

  return function () {
    count++;
    console.log("Closure :", count);
  };
}

const counter1 = createCounter();
counter1(); // 1
counter1(); // 2

const counter2 = createCounter();
counter2(); // 1 (separate closure!)

// Each call to createCounter() creates a new closure with its own count.
