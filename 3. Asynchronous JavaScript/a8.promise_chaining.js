// Promise Chaining
//     Promise chaining is when you attach multiple .then() handlers one after another to handle
//     sequential asynchronous operations.

//     Why
//     * Handle multiple async steps in order.
//     * Avoid callback hell.
//     * Keep code clean and readable.

// Syntax
// doSomething()
//   .then(result => doNextThing(result))
//   .then(nextResult => doAnotherThing(nextResult))
//   .then(finalResult => console.log("Done!", finalResult))
//   .catch(error => console.error("Error:", error));

// Ex
function task1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Task1 Done");
      resolve("Result 1");
    }, 1000);
  });
}

function task2(preResult) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Task2 Done", preResult);
      resolve("Task2 Result");
    }, 1000);
  });
}

function task3(preResult) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Task3 Done", preResult);
      resolve("Task3 Result");
    }, 1000);
  });
}

// Promise Chaining
task1()
  .then(task2)
  .then(task3)
  .then((final) => console.log("All task done Promise Chaining", final))
  .catch((err) => console.log("Something went wrong", err));
