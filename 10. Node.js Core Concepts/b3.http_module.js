// http module
//     The http module allows you to:
//     * Create an HTTP server
//     * Handle incoming requests
//     * Send back responses

//     You don’t need to install it — it’s built into Node.js.

// 1. Basic HTTP Server Example
const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Hello, World!");
  res.end();
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});

// 2. 🌍 Handle Different Routes

const server1 = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Home Page");
  } else if (req.url === "/about") {
    res.write("About Page");
  } else {
    res.statusCode = 404;
    res.write("404 Not Found");
  }
  res.end();
});

server1.listen(3001, () => {
  console.log("Server running at http://localhost:3001");
});

// 3. 🧾 Sending JSON Response

const server3 = http.createServer((req, res) => {
  const data = { name: "Node.js", type: "runtime" };

  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(data));
});

server3.listen(3002, () => {
  console.log("JSON server running at http://localhost:3002");
});

// 4. 📥 Get Data from Request Body

const server4 = http.createServer((req, res) => {
  if (req.method === "POST") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(`Received: ${body}`);
    });
  } else {
    res.end("Send a POST request");
  }
});

server4.listen(3003, () => {
  console.log("Listening for POST requests at http://localhost:3003");
});

// 5. 📤 Serve HTML File
const fs = require("fs");
const path = require("path");

const server5 = http.createServer((req, res) => {
  if (req.url === "/") {
    const filePath = path.join(__dirname, "index.html");
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end("Error loading file");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  } else {
    res.writeHead(404);
    res.end("Page not found");
  }
});

server5.listen(3004, () => {
  console.log("Serving HTML at http://localhost:3004");
});

// 6. 🔥 Streaming a File (like video)

http
  .createServer((req, res) => {
    if (req.url === "/video") {
      const videoPath = path.join(__dirname, "services/stream_video.mp4");
      const stat = fs.statSync(videoPath);
      const fileSize = stat.size;
      const range = req.headers.range;

      if (range) {
        const parts = range.replace(/bytes=/, "").split("-");
        const start = parseInt(parts[0], 10);
        const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;

        const chunkSize = end - start + 1;
        const file = fs.createReadStream(videoPath, { start, end });

        res.writeHead(206, {
          "Content-Range": `bytes ${start}-${end}/${fileSize}`,
          "Accept-Ranges": "bytes",
          "Content-Length": chunkSize,
          "Content-Type": "video/mp4",
        });

        file.pipe(res);
      } else {
        res.writeHead(200, {
          "Content-Length": fileSize,
          "Content-Type": "video/mp4",
        });
        fs.createReadStream(videoPath).pipe(res);
      }
    } else {
      res.end("Go to /video to stream the video.");
    }
  })
  .listen(3005, () =>
    console.log("Serving Streaming at http://localhost:3005")
  );

// Summary
//   | Feature               | Example / Use                                  |
// |------------------------|------------------------------------------------|
// | Create server          | `http.createServer()`                          |
// | Read route             | `req.url`                                      |
// | Get method             | `req.method`                                   |
// | Send plain text        | `res.write('text')`                            |
// | Send JSON              | `res.writeHead(200, { 'Content-Type': 'application/json' })` |
// | Get request body       | Use `req.on('data')` and `req.on('end')`       |
// | Serve file             | Use `fs.readFile()` or `fs.createReadStream()` |
// | Send HTML              | Set `Content-Type: text/html`                  |
// | Video streaming        | Use `range` header + `fs.createReadStream()`   |
