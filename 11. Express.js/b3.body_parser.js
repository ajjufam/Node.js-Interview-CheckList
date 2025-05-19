// Body parsing is the process of extracting data sent by the client (like from a form or API request) in the
// body of an HTTP request, usually in:
// * JSON format (application/json)
// * URL-encoded form (application/x-www-form-urlencoded)

// Why ?
// * To access user-submitted data in req.body
// * Required for routes handling POST, PUT, PATCH requests
// Without body parsing, req.body will be undefined.

// 🔹 How to Use in Express (v4.16.0+)
// Express comes with built-in body-parsing middleware:
const express = require("express");
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));
