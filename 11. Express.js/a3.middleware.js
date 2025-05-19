// Middleware is a function that sits between the request and response cycle in Express. It has access to the request
// (req), response (res), and the next middleware function (next) in the pipeline.

// Middleware functions can:
// * Execute any code
// * Make changes to the request or response objects
// * End the request-response cycle
// * Call the next middleware in the stack

// Why ?
// * To modularize and reuse code across routes
// * To handle common tasks like parsing request bodies, authentication, logging, error handling, etc.
// * To control request flow (allow or block requests based on conditions)
// * To inject functionality into the request pipeline easily

// Types of Middleware
// * Application-level middleware
//   Applied globally or to specific routes on the Express app.

// * Router-level middleware
//   Applied only on specific Express routers.

// * Built-in middleware
//   Comes with Express, e.g., express.json(), express.static().

// * Third-party middleware
//   Like morgan (logging), cors (Cross-Origin Resource Sharing), helmet (security).

// Examples of Middleware
// 1. Application-level Middleware — Logging every request
const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log(`${req.method} request to ${req.url}`);
  next(); // Pass control to the next middleware/route handler
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000);

// 2. Built-in Middleware — Parsing JSON body
app.use(express.json());

app.post("/data", (req, res) => {
  res.send(`Received JSON data: ${JSON.stringify(req.body)}`);
});

// 3. Router-level Middleware
const router = express.Router();

router.use((req, res, next) => {
  console.log("Router-level middleware triggered");
  next();
});

router.get("/test", (req, res) => {
  res.send("Router test route");
});

app.use("/api", router);

// 4. Third-party Middleware — Using morgan for logging
// npm install morgan
const morgan = require("morgan");
app.use(morgan("dev"));

// 5. Middleware for Authentication (simple example)
function authMiddleware(req, res, next) {
  if (req.headers.authorization === "secret-token") {
    next(); // Authorized, proceed
  } else {
    res.status(401).send("Unauthorized");
  }
}

app.use("/secure", authMiddleware);

app.get("/secure/data", (req, res) => {
  res.send("Secure data accessed");
});

// 6 Example: Custom Error Handling Middleware
app.get("/error", (req, res, next) => {
  const error = new Error("Something went wrong!");
  error.status = 500;
  next(error); // Pass the error to error-handling middleware
});

// Your regular routes here
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Custom error handler middleware
app.use((err, req, res, next) => {
  console.error(err.stack); // Log error stack for debugging

  const statusCode = err.status || 500;
  res.status(statusCode).json({
    status: "error",
    message: err.message || "Internal Server Error",
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

// Middleware Flow Summary
// * Middleware functions are executed in the order they are added.
// * If middleware doesn’t call next(), the request will not proceed further.
// * Middleware can modify req and res objects and pass data downstream.
