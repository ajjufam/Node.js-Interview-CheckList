// a8.
// path module
//     The path module provides utilities for working with file and directory paths in Node.js.
//     📦 It's a built-in module — no need to install it.

//     Why?
//     * Makes file paths OS-independent (/ on mac/linux, \\ on Windows)
//     * Helps join, resolve, normalize, extract paths
//     * Prevents hardcoding file paths manually

//     How?
//     Using path module
//     const path = require('path');
const path = require("path");

//NOTE : It won't creates any file

// Ex 1 (path.join()) Joins all path segments into one clean path.
const join = path.join("folder", "subfolder", "file.txt");
console.log(join); // folder\subfolder\file.txt

// Ex 2 (path.resolve()) Resolves a full absolute path from segments.
const resolve = path.resolve("folder", "file.txt");
console.log(resolve); // C:\Users\prajw\OneDrive\Desktop\Node.js-Interview-CheckList\10. Node.js Core Concepts\folder\file.txt

// Ex 3 (path.basename()) Returns just the file name from a path.
const basename = path.basename("/home/index/file.txt");
console.log(basename); // file.txt

// Ex 4 (path.dirname()) Returns just the directory from a path.
const dirname = path.dirname("/home/user/index.js");
console.log(dirname); // '/home/user'

// Ex 5 (path.extname()) Returns the file extension.
const extname = path.extname("hello.html");
console.log(extname); // '.html'

// Ex 6 (path.parse()) Returns an object with full path parts.
const parsed = path.parse("/home/user/app.js");
console.log(parsed);
// {
//   root: '/',
//   dir: '/home/user',
//   base: 'app.js',
//   ext: '.js',
//   name: 'app'
// }

// Ex 7 (path.format()) Builds a path from parts (opposite of .parse())
const formatted = path.format({
  dir: "/home/user",
  name: "app",
  ext: ".js",
});
console.log(formatted); // '/home/user/app.js'

// Summary
// | Function         | Purpose                           |
// |------------------|-----------------------------------|
// | `join()`         | Joins paths cleanly               |
// | `resolve()`      | Gets absolute path                |
// | `basename()`     | Gets filename                     |
// | `dirname()`      | Gets directory                    |
// | `extname()`      | Gets file extension               |
// | `parse()`        | Breaks path into parts            |
// | `format()`       | Builds path from parts            |
