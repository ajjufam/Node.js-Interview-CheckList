// Callback Hell
//     Callback Hell is when multiple nested callbacks are used, making the code look like a "pyramid" or
//     "staircase", and it's hard to read, maintain, or debug.

//     Why
//     When you have to do tasks in sequence, and each task depends on the result of the previous one
//     — especially in asynchronous code (like file reading, API requests, timers, etc).

// Ex
function task1(callback) {
  setTimeout(() => {
    console.log("Task 1 Done");
  }, 500);
  callback();
}

function task2(callback) {
  setTimeout(() => {
    console.log("Task 2 Done");
  }, 500);
  callback();
}

function task3(callback) {
  setTimeout(() => {
    console.log("Task 3 Done");
  }, 500);
  callback();
}

function task4(callback) {
  setTimeout(() => {
    console.log("Task 4 Done");
  }, 500);
  callback();
}

function task5(callback) {
  setTimeout(() => {
    console.log("Task 5 Done");
  }, 500);
  callback();
}

function task6(callback) {
  setTimeout(() => {
    console.log("Task 6 Done");
  }, 500);
  callback();
}

task1(function () {
  task2(function () {
    task3(function () {
      task4(function () {
        task5(function () {
          task6(function () {
            console.log("Haaaa Callback hell");
          });
        });
      });
    });
  });
});

//O/P
// Haaaa Callback hell
// Task 1 Done
// Task 2 Done
// Task 3 Done
// Task 4 Done
// Task 5 Done
// Task 6 Done

// 🔧 How to fix it?
// You can avoid callback hell by using:
// Named functions (instead of nesting)
// Promises
// Async/Await (most modern and readable)
