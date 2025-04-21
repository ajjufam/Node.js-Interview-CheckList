// Promise.all
//     Promise.all is a method that takes multiple promises and runs them in parallel.
//     It waits for all of them to finish, and then gives you the results.

//     Why ?
//     To run many promises at the same time, and wait for all of them before continuing.

//VVVIMPPPPP
// It returns:
// ✅ a single promise that resolves when all given promises resolve.
// ❌ if any promise fails (rejects), the whole Promise.all fails.

//Syntax
// Promise.all([promise1, promise2, promise3]);

// Ex (With No Error)
const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);

Promise.all([p1, p2, p3])
  .then((resolve) => console.log("Resolved", resolve))
  .catch((reject) => console.log("Rejected :", reject)); //Resolved [ 1, 2, 3 ]

// Ex (With Error)
const p4 = Promise.resolve(4);
const p5 = Promise.reject("Something went wrong");

Promise.all([p4, p5])
  .then((resolve) => console.log("Resolved :", resolve))
  .catch((reject) => console.log("Rejected :", reject)); // Rejected : Something went wrong
