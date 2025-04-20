// finally()
//     .finally() is a method that runs after a Promise is settled, no matter if it was resolved or rejected.

//     Why ?
//     To run cleanup code or final actions — like hiding a loader, closing a connection, etc. —
//     whether the operation succeeded or failed.

// Syntax
// promise
//   .then((result) => {
//     // handle success
//   })
//   .catch((error) => {
//     // handle error
//   })
//   .finally(() => {
//     // runs always
//   });

// Ex
const task = new Promise((resolve, reject) => {
  let done = false;

  if (done) {
    resolve("Task done");
  } else {
    reject("Task failed");
  }
});

task
  .then((msg) => {
    console.log("Success:", msg);
  })
  .catch((err) => {
    console.log("Error:", err);
  })
  .finally(() => {
    console.log("Always runs - done or failed");
  });
