// streams
//     Streams are a way to read or write data piece by piece, instead of loading the entire data at once.
//     👉 Useful for handling large files, video/audio, network data, etc.

//     Why?
//     | Without Streams         | With Streams              |
//     |-------------------------|---------------------------|
//     | Loads all data at once  | Handles data in chunks    |
//     | Can crash on big files  | Memory efficient          |
//     | Slower performance      | Fast and scalable         |

//     Types?
//     | Stream Type       | Purpose                 |
//     |-------------------|-------------------------|
//     | `Readable`        | Read data (e.g. from file) |
//     | `Writable`        | Write data (e.g. to file)  |
//     | `Duplex`          | Both read and write       |
//     | `Transform`       | Modify data while streaming (e.g. compress)

//     Common Modules That Use Streams
//     * fs (file system)
//     * http
//     * zlib (compression)
//     * net
//     * crypto

// Ex 1 (Read a file using stream)
const fs = require("fs");
const readStream = fs.createReadStream("10.txt", "utf8");

readStream.on("data", (chunk) => {
  console.log("---chunk---");
  console.log(chunk);
});

readStream.on("end", () => {
  console.log("Finished reading file");
});

// Ex 2 (Write to a file using stream)
const writeStream = fs.createWriteStream("services/write_stream.txt"); // If file is not present it will create and write
writeStream.write("Hello\n");
writeStream.write("World\n");
writeStream.end();

// Ex 3 (Pipe (Read → Write in one line))
// 📌 This is a common pattern in Node.js for copying, transforming files, etc.
const read = fs.createReadStream(".env");
const write = fs.createWriteStream("services/pipe_stream.txt");

read.pipe(write);

// Ex 4 🔧 Transform Stream Example (Uppercase)
const { Transform } = require("stream");
const upperCase = new Transform({
  transform(chunk, encoding, callback) {
    callback(null, chunk.toString().toUpperCase());
  },
});

process.stdin.pipe(upperCase).pipe(process.stdout);
// Try typing anything in the terminal — it will show in UPPERCASE

// 📌 Real-World Use Cases
// Reading large CSV files
// Streaming video/audio content
// Uploading files to a server
// Sending large files via HTTP
// Compressing data with gzip (zlib)

// Summary
// | Method/Concept     | Purpose                          |
// |--------------------|----------------------------------|
// | `.createReadStream()` | Read file as a stream         |
// | `.createWriteStream()`| Write file as a stream        |
// | `.pipe()`          | Connect streams (source → target) |
// | `Transform`        | Modify data on the fly          |
