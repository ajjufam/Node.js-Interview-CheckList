// Promise States

//There are 3 states in Promise (pending, fulfilled, rejected)

//     State     | What It Means
//     pending   | The initial state — the promise is still processing.
//     fulfilled | The operation completed successfully (resolved).
//     rejected  | The operation failed (rejected with an error).

const myPromise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("State Fullfilled");
  } else {
    reject("State Rejected");
  }
});

console.log("State Pending...");

myPromise.then((res) => console.log(res)).catch((err) => console.log(err));

// State     | Happens When                       | Controlled By
// pending   | Right after the promise is created | JavaScript
// fulfilled | resolve() is called                | Your code
// rejected  | reject() is called or error thrown | Your code
