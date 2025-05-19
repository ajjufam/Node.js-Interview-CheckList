// CORS stands for Cross-Origin Resource Sharing.
// It’s a browser security feature that controls which domains can access your backend APIs.

// Why ?
// By default, browsers block frontend JS code from calling a different domain (cross-origin).
// You need CORS to allow or restrict access to your server’s APIs from other domains.
// 🧠 Example:
// * Frontend: http://localhost:3000
// * Backend API: http://localhost:5000
// Without enabling CORS on your backend, this request will fail in the browser.

/*
🔹 How to Enable CORS in Express?
Use the official cors middleware package.
🔸 1. Install CORS package:
npm install cors

🔸 2. Basic setup (allow all origins):
*/
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors()); // allow all origins

app.get("/data", (req, res) => {
  res.json({ msg: "Hello from API" });
});

app.listen(5000);

// 🔹 Advanced CORS Options (Restrict Specific Origins)
const corsOptions = {
  origin: "http://localhost:3000", // only allow this origin
  methods: ["GET", "POST"], // only allow these methods
  credentials: true, // allow cookies (optional)
};

app.use(cors(corsOptions));

// Summary
// | Term     | Meaning                              |
// | -------- | ------------------------------------ |
// | CORS     | Cross-origin permission system       |
// | `cors()` | Middleware to enable CORS in Express |
// | `origin` | The allowed frontend URL(s)          |

// 🔸 Bonus: Enable CORS for One Route Only
app.get("/public-data", cors(), (req, res) => {
  res.json({ msg: "This route is CORS-enabled" });
});
