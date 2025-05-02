// const fs = require("fs");
// const http = require("http");
// const path = require("path");

// const server = http.createServer((req, res) => {
//   if (req.url === "/video") {
//     const videoPath = path.join(__dirname, "services/stream_video.mp4");
//     const stat = fs.statSync(videoPath);
//     const fileSize = stat.size;
//     const range = req.headers.range;

//     if (range) {
//       const parts = range.replace(/bytes=/, "").split("-");
//       const start = parseInt(parts[0], 10);
//       const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
//       const chunkSize = end - start + 1;
//       const file = fs.createReadStream(videoPath, { start, end });

//       res.writeHead(206, {
//         "Content-Range": `bytes ${start}-${end}/${fileSize}`,
//         "Accept-Ranges": "bytes",
//         "Content-Length": chunkSize,
//         "Content-Type": "video/mp4",
//       });

//       file.pipe(res);
//     } else {
//       res.writeHead(200, {
//         "Content-Length": fileSize,
//         "Content-Type": "video/mp4",
//       });

//       fs.createReadStream(videoPath).pipe(res);
//     }
//   } else {
//     res.end("Go to /video to stream video");
//   }
// });

// server.listen(3000, () => {
//   console.log("Server running on http://localhost:3000");
// });

const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

app.get("/video", (req, res) => {
  const videoPath = path.join(__dirname, "services/stream_video.mp4");
  const stat = fs.statSync(videoPath);
  const fileSize = stat.size;
  const range = req.headers.range;

  if (range) {
    const [startStr, endStr] = range.replace(/bytes=/, "").split("-");
    const start = parseInt(startStr, 10);
    const end = endStr ? parseInt(endStr, 10) : fileSize - 1;
    const chunkSize = end - start + 1;
    const videoStream = fs.createReadStream(videoPath, { start, end });

    res.writeHead(206, {
      "Content-Range": `bytes ${start}-${end}/${fileSize}`,
      "Accept-Ranges": "bytes",
      "Content-Length": chunkSize,
      "Content-Type": "video/mp4",
    });

    videoStream.pipe(res);
  } else {
    res.writeHead(200, {
      "Content-Length": fileSize,
      "Content-Type": "video/mp4",
    });

    fs.createReadStream(videoPath).pipe(res);
  }
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000/video");
});

// get : http://localhost:3000/video
