// a1.
// Global Objects
//     Global Objects in Node.js are objects available in every module. You don't need to require them —
//     they are automatically available.

const { log } = require("util");

//     Why?
//     * Help you access useful values or functions anywhere in your code.
//     * Reduce the need for importing common utilities.
//     * Offer system-level functionalities like current directory, timers, buffer handling, etc.

// Ex 1 (__dirname)
// Absolute path of the current directory.
console.log("__dirname : ", __dirname);

// Ex 2 (__filename)
// Absolute path of the current file.
console.log("__filename : ", __filename);

// Ex 3 (global)
// Like window in browsers. Can be used to set variables globally.
global.myValue = 123;
console.log("global : ", myValue);

// Ex 4 (process)
// Provides info about the current Node.js process.
console.log("process platform : ", process.platform);

require("dotenv").config(); // npm i dotenv
console.log(process.env.NODE_ENV);

// Ex 5 (setTimeout, setInterval, clearTimeout, clearInterval)
// Timer functions like in the browser.
setTimeout(() => {
  console.log("Hello after 1 second");
}, 1000);

// Ex 6 (Buffer)
// Used for handling binary data (like file or network data).
const buf = Buffer.from("hello");
console.log("Buffer : ", buf);

// Ex 7 (console)
// For logging.
console.log("Hello");
console.error("Something went wrong!");

// Ex 8 (module and exports)
// Related to how Node.js handles modules.
// file: add.js
module.exports = (a, b) => a + b;

// file: index.js
// const add = require("./add");
// console.log(add(2, 3)); // 5

// Ex 9 (require())
// Used to import modules.
const fs = require("fs");

// Summary
// | Global Object       | Description                         |
// |---------------------|-------------------------------------|
// | `__dirname`         | Current directory path              |
// | `__filename`        | Current file path                   |
// | `global`            | Global scope object                 |
// | `process`           | Process and environment info        |
// | `setTimeout`        | Run a function after delay          |
// | `setInterval`       | Run a function repeatedly           |
// | `Buffer`            | Binary data handling                |
// | `console`           | Logging                             |
// | `module`, `exports` | Module system                       |
// | `require()`         | Import other files/modules          |
