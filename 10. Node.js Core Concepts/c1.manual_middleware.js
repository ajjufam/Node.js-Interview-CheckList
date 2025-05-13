// Manual Middleware
//     Middleware is a function that has access to:
//     (req, res, next)
//     * req → incoming request
//     * res → outgoing response
//     * next → callback to pass control to the next middleware

//     Proper Definition
//     In Node.js, middleware functions intercept incoming requests before they reach route handlers and can also
//     process outgoing responses. These functions have access to the request object (req), the response object (res),
//     and the next() function, which allows them to pass control to the subsequent middleware in the chain. Middleware
//     can perform various tasks such as: Executing code, Modifying request and response objects, Ending the
//     request-response cycle, and Calling the next middleware function.

//     Why?
//     * To add custom logic before reaching the final route handler
//     * For logging, authentication, validation, etc.
//     * To keep code modular and readable

// Ex 1 ( Basic manual middleware )
const express = require("express");
const app = express();

function logger(req, res, next) {
  console.log(`${req.method} ${req.url}`);
  next(); // // Call next to move to the next middleware or route
}

app.use(logger);

app.get("/inviting", (req, res) => {
  res.send("Hello from Home!");
});

// GET /inviting (logged in terminal)

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

// ✅ You can use middleware:
// Globally: app.use(middleware)
// Per route: app.get("/route", middleware, handler)
