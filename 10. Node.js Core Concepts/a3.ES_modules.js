// ES Modules
//     ES Modules (ESM) is the official JavaScript module system introduced in ES6 (2015).
//     It's used in both browser and Node.js (modern versions).

//     Why?
//     * Native JavaScript module system.
//     * Supports asynchronous loading.
//     * Works in browsers and Node.js.
//     * Supports tree-shaking (removing unused code).
// 🟦 ES Module Syntax
// 🔹 1. Exporting
// file: math.js
export const add = (a, b) => a + b;
export const sub = (a, b) => a - b;

// You can also do a default export:
// file: greet.js
export default function greet(name) {
  console.log(`Hello, ${name}`);
}

// 🔹 2. Importing
// file: app.js
import { add, sub } from "./math.js";

console.log(add(2, 3)); // 5
console.log(sub(5, 1)); // 4

// For default export:
import greet from "./greet.js";
greet("Alice"); // Hello, Alice

// 🧠 How to Use ES Modules in Node.js
// Node needs to know you're using ESM. You can do it in either of these ways:
// Rename file to .mjs
// Or, in package.json, add:
// "type": "module"

// Key Features
// | Feature          | ES Modules (`import`)                     |
// |------------------|-------------------------------------------|
// | Native JS syntax | Yes                                       |
// | File Extension   | `.js` (with `"type": "module"`) or `.mjs` |
// | Loading          | Asynchronous                              |
// | Export Types     | Named & default exports                   |
// | Tree-shaking     | Yes (in bundlers like Webpack)            |
