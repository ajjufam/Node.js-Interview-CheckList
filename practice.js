// //Callbacks
// // Callbacks are the fucntions which are passed as an argument to the another function and called after some operation

// // ex
// function person(name, callback) {
//   console.log("Hello", name);
//   callback();
// }

// function process() {
//   setTimeout(() => {
//     console.log("Delay of 2 sec");
//   }, 2000);
//   console.log("Hii I am Callback");
// }

// // person("Ajju", process);

// //callback hell
// // A multiple nested callbacks looks like pyramid or staircases and make hard to read maintain and debug is called callback hell

// // ex
// function task1(callback) {
//   setTimeout(() => {
//     console.log("Task 1");
//   }, 200);
//   callback();
// }

// function task2(callback) {
//   setTimeout(() => {
//     console.log("Task 2");
//   }, 200);
//   callback();
// }

// function task3(callback) {
//   setTimeout(() => {
//     console.log("Task 3");
//   }, 200);
//   callback();
// }

// // task1(function () {
// //   task2(function () {
// //     task3(function () {
// //       console.log("Yeah i am callback hell");
// //     });
// //   });
// // });

// //Promise
// // Its a eventual execution or failure of an asynchronous operation (Pening,Fullfilled,Rejected)
// // ex
// const myPromise = new Promise((resolve, reject) => {
//   const success = false;
//   if (success) {
//     resolve("True");
//   }
//   reject("False");
// });

// // myPromise
// //   .then((data) => {
// //     console.log("Then means success", data);
// //   })
// //   .catch((err) => console.log("Catched", err));

// function person() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const data = { name: "Ajju", age: 20 };
//       resolve(data);
//     }, 200);
//   });
// }

// person()
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// Async await
// these are synthetic siugars in node async is use
// ex
function person(name, age) {
  return new Promise((res) => {
    setTimeout(() => {
      res({ name, age });
    }, 3000);
  });
}

async function process() {
  console.log("Start");
  const data = await person("Ajju", 20);
  console.log(data);
  console.log("End");
}

process();
