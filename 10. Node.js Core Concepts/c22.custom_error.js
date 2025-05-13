// Basic Setup
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  throw new Error("Home route error ");
});

// async error
app.get("/async", async (req, res, next) => {
  try {
    // Simulate async error
    throw new Error("Async error!");
  } catch (err) {
    next(err); // Pass error to global error handler
  }
});

// Global error handler
app.use((err, req, res, next) => {
  console.error("Error :", err.message);
  res.status(500).json({ error: err.message });
});

app.listen(3000, () => console.log("Server running"));
