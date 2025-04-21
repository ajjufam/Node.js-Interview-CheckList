// Promise.race
//     Promise.race takes multiple promises and returns a single promise that settles as soon as the
//     first one settles (either resolves ✅ or rejects ❌).

//     Why ?
//     To get the result of whichever promise finishes first, useful for:
//     Setting timeouts ⏱️
//     Getting the fastest API response ⚡

//Syntax
// Promise.race([promise1, promise2, promise3]);

// Ex (With Resolve)
const fast = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Fast");
  }, 100); // 100 MSec
});

const slow = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Slow");
  }, 200); // 200 MSec
});

Promise.race([fast, slow])
  .then((value) => console.log("Promise.race :", value))
  .catch((error) => console.log("Error :", error));

// Ex (With Reject)
const rejectFast = new Promise((res, rej) => {
  let success = false;
  setTimeout(() => {
    if (success) {
      res("Resolved Fast");
    } else {
      rej("Reject Fast");
    }
  }, 1000); // 1M
});

const resolveSlow = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Resolve Slow");
  }, 2000); //2M
});

Promise.race([rejectFast, resolveSlow])
  .then((value) => console.log("Value :", value))
  .catch((error) => {
    console.log("Error :", error);
  });

//Summary
// Feature          | Description
// Runs promises    | In parallel
// Resolves/Rejects | As soon as any one promise settles
// Use case         | First-come-first-serve tasks, timeouts
