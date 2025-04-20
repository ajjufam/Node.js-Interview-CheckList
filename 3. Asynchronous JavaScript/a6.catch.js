// catch()
//     .catch() is a method used with Promises to handle errors or rejected promises.

//     Why ?
//     To safely handle errors that may happen during asynchronous operations — like network failures,
//     bugs, or rejected promises.

//Syntax
// promise
//   .then((result) => {
//     // handle success
//   })
//   .catch((error) => {
//     // handle error
//   });

// Ex
const myPromise = new Promise((resolve, reject) => {
  let success = false;

  if (success) {
    resolve("✅ All good!");
  } else {
    reject("❌ Something went wrong!");
  }
});

myPromise
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.log(err); // Output: ❌ Something went wrong!
  });

// Ex (API Call)
fetch("https://wrong-api-url.com/data")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error("API Error:", err);
  });
