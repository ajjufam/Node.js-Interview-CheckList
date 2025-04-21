// Promise.any
//     Promise.any() takes multiple promises and returns the first one that fulfills (resolves successfully).

//     Why ?
//     Use it when you want the result of the first successful promise — and you're okay ignoring failures.

// Syntax
// Promise.any([p1, p2, p3]);

// Ex
const p1 = Promise.reject("rejected");
const p2 = Promise.reject("rejected");
const p3 = Promise.reject("rejected");
const p4 = Promise.resolve("resolved");

Promise.any([p1, p2, p3, p4])
  .then((value) => console.log("Value :", value))
  .catch((err) => console.log("Error", err)); // Value : resolved

// Ex (WHAT if all fails)
Promise.any([p1, p2, p3])
  .then((value) => console.log("Value :", value))
  .catch((err) => console.log("Error", err));

//o/p
//   Error [AggregateError: All promises were rejected] {
//     [errors]: [ 'rejected', 'rejected', 'rejected' ]
//   }

// Summary
// Feature      | Description
// Waits for    | The first successful promise
// Ignores      | All rejected promises unless all fail
// Error on all | Throws AggregateError if none succeed
// Useful when  | You need any valid result, fast
