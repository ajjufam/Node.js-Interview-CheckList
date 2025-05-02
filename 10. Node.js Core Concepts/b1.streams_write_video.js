const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

app.post("/upload", (req, res) => {
  const videoPath = path.join(__dirname, "services/uploaded_video.mp4");
  const writeStream = fs.createWriteStream(videoPath);

  req.pipe(writeStream);

  req.on("end", () => {
    res.send("Video uploaded successfully!");
  });
});

app.listen(3000, () => {
  console.log("Upload server running on http://localhost:3000");
});

// post : http://localhost:3000/upload
