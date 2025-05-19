// Error middleware in Express is a special type of middleware designed to catch and handle errors in one central place.
// Instead of writing error handling logic inside each route, you can offload it to a dedicated function.

// Why ?
// * To centralize error handling logic
// * To log, format, and respond to errors consistently
// * To improve code maintainability and debugging

// How ?
// It must have four arguments:
// (err, req, res, next)

// Express knows it's an error handler because of these four parameters.

// 🔹 Example: Basic Error Middleware
const express = require("express");
const app = express();

// A route that triggers an error
app.get("/fail", (req, res, next) => {
  const err = new Error("Something broke!");
  err.status = 500;
  next(err); // forward the error to the error handler
});

// ✅ Error Middleware (at the bottom, after routes)
app.use((err, req, res, next) => {
  console.error(err.stack); // log the full stack trace (optional)

  res.status(err.status || 500).json({
    status: "error",
    message: err.message || "Internal Server Error",
  });
});

app.listen(3000, () => console.log("Server running on port 3000"));

// 🔹 Advanced: Handle 404 and Custom Errors
// Handle 404 not found
app.use((req, res, next) => {
  res.status(404).json({ message: "Route not found" });
});

// Custom error handler for all errors
app.use((err, req, res, next) => {
  const statusCode = err.status || 500;

  res.status(statusCode).json({
    status: "error",
    error: err.name || "Error",
    message: err.message || "Something went wrong",
  });
});

// Summary
// | Term   | Meaning                               |
// | ------ | ------------------------------------- |
// | `err`  | The error object (e.g., from `throw`) |
// | `req`  | Request object                        |
// | `res`  | Response object                       |
// | `next` | Passes control to the next middleware |
