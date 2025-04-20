// Promises
//     Promises in Js is a eventual execution or failure of an asynchronous operation.

//     Why ?
//     * To avoid callback hell.
//     * To write cleaner, more readable asynchronous code.
//     * To handle success and failure easily using .then() and .catch().

// Ex 1
const promise1 = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Promise Resolved");
  } else {
    reject("Promise Rejected");
  }
});

promise1
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => console.log(err));

//   Ex 2
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { name: "Ajju", city: "Bangalore" };
      resolve(data);
    }, 1000);
  });
}

fetchData()
  .then((res) => console.log("Data Received ,", res))
  .catch((err) => console.log(err));

// NOTE : HOW to USE => Using new Promise(), then .then() for success, .catch() for failure.
