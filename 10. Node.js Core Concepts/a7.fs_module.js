// fs module
//     The fs module in Node.js lets you work with the file system — reading, writing, updating, and deleting
//     files or folders.

//     Why?
//     To Read, Write, Update, and Delete operations in file system

//     How?
//     Using fs module
//     const fs = require('fs');

// Ex 1. Read a File
// **** Asynchronous
const { log } = require("console");
const fs = require("fs");

fs.readFile("services/fs.read.txt", "utf8", (err, data) => {
  // utf8 Unicode Transformation Format - 8-bit
  if (err) throw err;
  console.log("fs.read asynchronous", data);
});

// **** Synchronous
const data = fs.readFileSync("services/fs.read.txt", "utf8");
console.log("fs.read synchronous", data);

// **** Promise based
const fsPromises = require("fs").promises;
async function readFile() {
  const data = await fsPromises.readFile("services/fs.read.txt", "utf8");
  console.log("fs.read promises", data);
}
readFile();

// Ex 2 Write to a File
// Asynchronous
fs.writeFile("services/fs.write.txt", "Hello Write file using FS", (err) => {
  if (err) throw err;
  console.log("fs.write File Written");
});

// Synchronous
fs.writeFileSync("services/fs.write.txt", "Hello Sync!");

// Ex 3 Append to a File
fs.appendFile("services/fs.append.txt", "\nAppended line", (err) => {
  if (err) throw err;
  console.log("Appended");
});

// Ex 4 Delete a File (it will deletes the file fs.unlink.txt)
// fs.unlink("services/fs.unlink.txt", (err) => {
//   if (err) throw err;
//   console.log("Deleted !");
// });

//FOLDERS
// Ex 5 (Create a Folder) (It creates a folder myfolder)
// fs.mkdir("myfolder", (err) => {
//   if (err) throw err; // file already exists
//   console.log("Folder created!");
// });

// Ex 6 (Read Folder Contents)
fs.readdir("./", (err, file) => {
  if (err) throw err;
  console.log(file);
});

// Ex 7 Remove a Folder
// fs.rmdir("folderName", (err) => {
//   if (err) throw err;
//   console.log("Folder removed");
// });

// For non-empty folders (use { recursive: true })
// fs.rm("myfolder", { recursive: true, force: true }, console.log);

// Ex 8 (Check if File Exists)
const existFile = fs.existsSync("10.txt");
console.log("existFile", existFile);

// Ex 9 Get File Info (Stats)
fs.stat("10.txt", (err, stats) => {
  if (err) throw err;
  console.log(stats.isFile());
  console.log(stats.size);
});

// Ex 10 (Rename/Move File)
// fs.rename("old.txt", "new.txt", (err) => {
//   if (err) throw err;
//   console.log("Renamed!");
// });

// Ex 11 (Watch for File Changes)
fs.watch("a7.fs_module.js", (eventType, filename) => {
  console.log(`${filename} file Changed!`);
});

// Summary
// | Action          | Method                    |
// |-----------------|---------------------------|
// | Read file       | `fs.readFile`, `fs.readFileSync` |
// | Write file      | `fs.writeFile`, `fs.writeFileSync` |
// | Append file     | `fs.appendFile`           |
// | Delete file     | `fs.unlink`               |
// | Create folder   | `fs.mkdir`                |
// | Remove folder   | `fs.rmdir`, `fs.rm`       |
// | Rename          | `fs.rename`               |
// | Check exists    | `fs.existsSync`           |
// | Get stats       | `fs.stat`                 |
// | Watch file      | `fs.watch`                |
