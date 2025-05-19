// multer is a Node.js middleware for handling multipart/form-data, which is primarily used for uploading files.
// Express by default does not understand file uploads, so we use multer to process them.

// Why ?
// * Parses incoming file data in requests
// * Stores files to disk or memory
// * Adds req.file or req.files to access uploaded file info
// * Works great for uploading profile images, PDFs, etc.

// 🔹 Install multer
// npm install multer

// 🔸 Basic Setup for File Upload
// ✅ Single File Upload
const express = require("express");
const multer = require("multer");
const app = express();

// Set storage engine
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // directory to save files
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname); // rename the file
  },
});

const upload = multer({ storage });

app.post("/upload", upload.single("myFile"), (req, res) => {
  console.log(req.file); // contains uploaded file info
  res.send("File uploaded successfully!");
});

app.listen(3000);

// 🔸 Sample HTML Form for Testing
<form
  action="http://localhost:3000/upload"
  method="POST"
  enctype="multipart/form-data"
>
  <input type="file" name="myFile" />
  <button type="submit">Upload</button>
</form>;

// 🔸 Multiple Files Upload
app.post("/upload-multiple", upload.array("myFiles", 5), (req, res) => {
  console.log(req.files); // array of files
  res.send("Multiple files uploaded!");
});

// 🔸 Upload with Additional Data
app.post("/upload-with-data", upload.single("file"), (req, res) => {
  const name = req.body.name;
  const file = req.file;
  res.json({ name, file });
});

// 🔸 Memory Storage (No disk write)
const memoryUpload = multer({ storage: multer.memoryStorage() });

app.post("/upload-memory", memoryUpload.single("file"), (req, res) => {
  console.log(req.file.buffer); // file content in memory
  res.send("File held in memory!");
});

// 🔸 File Type Filtering
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Only images are allowed!"), false);
  }
};

const uploadImgOnly = multer({ storage, fileFilter });

app.post("/upload-image", uploadImgOnly.single("img"), (req, res) => {
  res.send("Image uploaded!");
});

// Summary
// | Feature        | Function/Method                  |
// | -------------- | -------------------------------- |
// | Single file    | `upload.single('file')`          |
// | Multiple files | `upload.array('files', count)`   |
// | With data      | Access `req.body` and `req.file` |
// | Memory storage | `multer.memoryStorage()`         |
// | File filtering | `fileFilter` function            |
