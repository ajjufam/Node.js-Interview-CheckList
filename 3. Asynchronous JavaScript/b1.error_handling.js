// Error Handling in async code
//     Why ?
//     Because async functions use Promises, and like any Promise, they can fail (get rejected).
//     Without handling, errors can crash your app or leave you wondering what went wrong.

//     How ?
//     Use try...catch blocks inside async functions.

// Ex
function fetchData(shouldFail) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject("Something Went Wrong");
      } else {
        resolve("Data Fetched");
      }
    }, 1000);
  });
}

async function getData() {
  try {
    const result = await fetchData(true); // passing true to simulate error
    console.log(result);
  } catch (error) {
    console.log("Caught Error :", error);
  } finally {
    console.log("Operation done");
  }
}

getData();

//Summary
// Keyword | Purpose
// try     | Run code that might fail
// catch   | Handle the error if it happens
// finally | Always runs after try/catch
