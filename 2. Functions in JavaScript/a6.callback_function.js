// Callback function

// What ?
//     A callback function is a function that is passed as an argument to another function and is executed later,
//     usually after some task is done.

// Why ?
// * control the flow of code,
// * handle asynchronous tasks (like API calls, timeouts, etc.),
// * and allow reusable logic.

// ex 1
function greet(name, callback) {
  console.log("Hello", name);
  callback();
}

function sayBye() {
  console.log("Bye");
}

greet("ajju", sayBye);

// ex 2 (setTimeout)
setTimeout(() => {
  console.log("Callback : setTimeout");
}, 2000);
