// async/await
//     async/await is syntactic sugar over Promises.
//     It lets you write asynchronous code in a synchronous style, making it easier to read and maintain.

//     Why ?
//     * Cleaner than .then() chains
//     * Avoids callback hell
//     * Makes async code easier to understand

// How it works:
// async before a function means it returns a Promise
// await pauses the execution until the Promise resolves

function person(name, age) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name, age });
    }, 1000);
  });
}

async function process() {
  // create the async function
  console.log("Fetching Data ...");
  const data = await person("Devil", 22); // Pauses the execution
  console.log("Data:", data);
  console.log("Fetching Completed");
}

process();
