// buffers
//     A Buffer is a way to handle binary data (like images, videos, or raw files) directly in memory.
//     In Node.js, buffers are used when you’re dealing with streams, files, TCP sockets, or raw binary data.

//     Why?
//     * JavaScript normally deals with strings (text), but not raw binary.
//     * Buffers help you store and manipulate binary data.
//     * Very useful when working with fs, net, or stream modules.

// 📘 Creating Buffers
// 1.  From a string
const buf = Buffer.from("Hello");
console.log(buf); // <Buffer 48 65 6c 6c 6f>

// 2. From an array of bytes
const buf2 = Buffer.from([72, 101, 108, 108, 111]);
console.log(buf2.toString()); // Hello

// 3. Allocating fixed size (filled with 0s)
const buf3 = Buffer.alloc(10);
console.log(buf3); // <Buffer 00 00 00 00 00 00 00 00 00 00>

// 🛠️ Common Buffer Operations
// ➕ Concatenate two buffers
const a = Buffer.from("Hi ");
const b = Buffer.from("there");
const combined = Buffer.concat([a, b]);
console.log(combined.toString()); // Hi there

// 🔤 Convert to string
const buf4 = Buffer.from("Node.js");
console.log(buf4.toString()); // Node.js

//📏 Get buffer length
const buf5 = Buffer.from("Hello");
console.log(buf5.length); // 5

// 📦 Use Case: Read file as Buffer
const fs = require("fs");

const data = fs.readFileSync("services/stream_video.mp4"); // Returns a Buffer
console.log(Buffer.isBuffer(data)); // true

// 🔄 Modify buffer
const buf6 = Buffer.from("Hello");
buf[0] = 72; // ASCII 'H'
console.log(buf6.toString()); // Hello

// Buffer is used in streams
// readStream.on("data", (chunk) => {
//   console.log(chunk); // Each chunk is a Buffer
// });

// Summary
// | Feature        | Example                     |
// |----------------|-----------------------------|
// | Create         | `Buffer.from("Hi")`         |
// | Read from file | `fs.readFileSync()`         |
// | Write to file  | `fs.writeFileSync(buf)`     |
// | Convert        | `buf.toString()`            |
// | Combine        | `Buffer.concat([buf1, buf2])` |
