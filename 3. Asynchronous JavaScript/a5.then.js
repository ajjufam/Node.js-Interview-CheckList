// then()
//     .then() is a method used with Promises to handle the result when the promise is fulfilled (successful).

//     Why
//     To perform some action after the async task completes successfully — like getting API data, finishing
//     a delay, etc.

// Syntax
// promise.then((result) => {
//   //// do something with the result
// });

// EX
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("✅ Data loaded");
  }, 1000);
});

promise.then((message) => {
  console.log(message); // Output after 1 sec: ✅ Data loaded
});
