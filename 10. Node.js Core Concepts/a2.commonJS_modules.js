// CommonJS Modules
//     CommonJS (CJS) is the module system used in Node.js.
//     It allows you to import and export code between files.

//     Why?
//     * Helps split code into reusable parts.
//     * Keeps code organized and maintainable.
//     * Built-in support in Node.js (no setup needed).

// CommonJS Syntax
// 🔹 1. Exporting
// file: math.js
const add = (a, b) => a + b;
const sub = (a, b) => a - b;

module.exports = { add, sub };

// 🔹 2. Importing
// file: app.js
const math = require("./math");

console.log(math.add(2, 3)); // 5
console.log(math.sub(5, 1)); // 4

// 🧠 Behind the Scenes
// When you use require(), Node does this:
// Wraps the code in a function like this:
(function (exports, require, module, __filename, __dirname) {
  // your module code here
});

// SUmmary
// | Term              | Description                                |
// |------------------ |--------------------------------------------|
// | `require()`       | Loads a module                             |
// | `module.exports`  | Exports values from a module               |
// | `exports`         | Shortcut to `module.exports`               |
// | `__filename`      | Absolute path to the current file          |
// | `__dirname`       | Absolute path to the current directory     |

// 📦 Built-in Modules with CommonJS
// You can also import Node's built-in modules:
const fs = require("fs");
const path = require("path");
