// Express is a minimal and flexible Node.js web application framework that provides a robust set of features to
// build web and mobile applications. It simplifies handling HTTP requests, routing, middleware, and server-side logic.

// Why ?
// * Simplifies server creation — you don’t have to work with the raw Node.js HTTP module.
// * Routing made easy — organize your endpoints with clean and readable code.
// * Middleware support — easily add functionality like logging, authentication, error handling.
// * Extensible — integrates with many template engines, databases, and other Node.js libraries.
// * Lightweight and fast — minimal overhead, giving you control and performance.

/*
Step-by-step:
1. Initialize a new Node.js project
    npm init -y

2. Install Express
    npm install express

3. Create an app file (e.g., app.js or index.js)

4. Write basic Express server code:
*/
const express = require("express");
const app = express();
const port = 3000;

// Middleware example: parse JSON bodies
app.use(express.json());

// Define a simple route
app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// 5. Run your app
// node app.js

// 6. Open browser and visit http://localhost:3000 to see the message.
