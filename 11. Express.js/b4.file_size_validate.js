// ✅ 1. multer Setup with File Size & Type Validation
const express = require("express");
const multer = require("multer");
const app = express();

// Storage setup (disk storage example)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

// File type filter
const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];

  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("❌ Only JPEG, PNG, and PDF files are allowed"), false);
  }
};

// 10MB limit = 10 * 1024 * 1024 bytes
const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10 MB
  fileFilter,
});

// ✅ 2. Upload Route
app.post("/upload", upload.single("file"), (req, res) => {
  res.send("✅ File uploaded successfully!");
});

// ✅ 3. Error-Handling Middleware for Size/Type Errors
app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    if (err.code === "LIMIT_FILE_SIZE") {
      return res
        .status(400)
        .json({ error: "❌ File too large. Max allowed is 10MB." });
    }
    return res.status(400).json({ error: `Multer error: ${err.message}` });
  } else if (err) {
    return res.status(400).json({ error: err.message });
  }
  next();
});

// Summary
// | Rule                | Code                                                     |
// | ------------------- | -------------------------------------------------------- |
// | Max file size       | `limits: { fileSize: 10 * 1024 * 1024 }`                 |
// | Accepted file types | Check in `fileFilter` using `file.mimetype`              |
// | Error response      | Custom error handler middleware with meaningful messages |
