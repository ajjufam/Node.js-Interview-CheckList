// Static files are files that don’t change and are served as-is to the browser.
// These include:
// * HTML files
// * CSS stylesheets
// * JavaScript files
// * Images (PNG, JPG, SVG)
// * Fonts, PDFs, etc.

// Why ?
// * To show web pages and assets to users
// * Required for frontend of most web apps
// * Speeds up performance since they don't require server-side rendering

// 🔹 How to Serve Static Files in Express?
// Use the built-in middleware:

app.use(express.static("public"));

// This tells Express to serve files from the public directory.
// 🔹 Example Structure:
// project/
// ├── public/
// │   ├── index.html
// │   ├── styles.css
// │   └── script.js
// ├── server.js

// 🔹 server.js
const express = require("express");
const app = express();

// Serve static files from the 'public' folder
app.use(express.static("public"));

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

// Now u can access
// http://localhost:3000/index.html
// http://localhost:3000/styles.css
// http://localhost:3000/script.js

// 🔹 Optional: Change the Static URL Path
app.use("/static", express.static("public"));

// Now files are served from /static:
// http://localhost:3000/static/index.html

// Summary
// | Feature            | Use                               |
// | ------------------ | --------------------------------- |
// | `express.static()` | Middleware to serve static assets |
// | Folder name        | Usually called `public`           |
// | File types         | HTML, CSS, JS, images, etc.       |
