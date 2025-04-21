// Promise.allSettled
//     Promise.allSettled() takes multiple promises and returns a single promise that resolves when all of
//     them have settled, meaning either resolved ✅ or rejected ❌.

//     Why ?
//     Use it when you want the outcome of every promise, regardless of whether it succeeded or failed.

//Syntax
// Promise.allSettled([promise1, promise2, promise3])

// Ex
const p1 = Promise.resolve("Resolved");
const p2 = Promise.reject("Rejected");
const p3 = Promise.resolve("Resolved");
const p4 = Promise.reject("Rejected");

Promise.allSettled([p1, p2, p3, p4])
  .then((value) => console.log("Values", value))
  .catch((err) => console.log("Error :", err));

// O/P
// Values [
//     { status: 'fulfilled', value: 'Resolved' },
//     { status: 'rejected', reason: 'Rejected' },
//     { status: 'fulfilled', value: 'Resolved' },
//     { status: 'rejected', reason: 'Rejected' }
//   ]

// Summary
// Feature         | Description
// Waits for       | All promises to finish (resolved or rejected)
// Result contains | Status (fulfilled or rejected) and value/reason
// Useful when     | You want the result of all tasks, good or bad
