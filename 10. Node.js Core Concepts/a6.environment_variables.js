// Environment Variables
//     Environment Variables are key-value pairs used to store config values outside your code.
//     🛡️ Useful for keeping sensitive info like passwords, API keys, and URLs secure and separate from code.

//     Why?
//     🔒 Security – avoid hardcoding secrets
//     🔁 Portability – config changes without changing code
//     📦 Environment-specific setup – dev, staging, production

// 🟦 How to Use Environment Variables in Node.js
// 🔹 1. Create a .env file
// PORT=3000
// DB_URI=mongodb://localhost:27017/myapp
// JWT_SECRET=supersecret123
// (This file should NOT be pushed to GitHub!)

// 🔹 2. Install dotenv package
// npm i dotenv

// 🔹 3. Load .env in your app
// app.js or main.js
require("dotenv").config();

const port = process.env.PORT;
console.log(`Server running on port ${port}`);

// 🔐 Best Practices
// | Rule                    | Explanation |
// |------                   |-------------|
// | ✅ Use `.env` files    | For local development |
// | 🔒 Use `.gitignore`    | Add `.env` to prevent uploading it |
// | 🧪 Use `dotenv` early  | At the top of your main file |
// | 🚀 Use secrets manager | For production (like AWS Secrets Manager) |
