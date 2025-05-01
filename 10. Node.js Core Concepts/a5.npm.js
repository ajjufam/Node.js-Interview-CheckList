// NPM
//     NPM stands for Node Package Manager.
//     It’s the default package manager for Node.js.

//     Why?
//     * Install open-source packages (like express, mongoose)
//     * Manage project dependencies
//     * Run project scripts
//     * Share your own packages

// 🟦 Common NPM Commands (with examples)
// 🔹 1. Initialize a project
// npm init
// Creates a package.json file (stores project info and dependencies).
// Use -y to skip questions:

// 🔹 2. Install a package
// npm install express || npm i express
// Adds to node_modules/ and package.json.

// 🔹 3. Install a dev dependency
// Used for development (e.g., testing tools):
// npm i nodemon --save-dev

// 🔹 4. Install all dependencies
// If you cloned a project and see a package.json, run:
// npm install

// 🔹 5. Uninstall a package
// npm uninstall express

// 🔹 6. Run scripts
// In package.json, you can define scripts:
// "scripts": {
//   "start": "node app.js",
//   "dev": "nodemon app.js"
// }
// then
// npm run start
// npm run dev

// 🔹 7. Check outdated packages
// npm outdated

// 🔹 8. Update a package
// npm update express

// 🟪 Files Involved
// | File                | Description                              |
// |---------------------|------------------------------------------|
// | `package.json`      | Lists dependencies and metadata          |
// | `package-lock.json` | Locks exact versions installed           |
// | `node_modules/`     | Directory with installed packages        |

// 🟧 Global vs Local Install
// | Type   | Command                    | Example                     |
// |--------|----------------------------|-----------------------------|
// | Local  | `npm install package`      | `npm i express`             |
// | Global | `npm install -g package`   | `npm i -g nodemon`          |

// 📦 Popular Packages
// express – web server
// mongoose – MongoDB
// dotenv – env variables
// nodemon – auto-reload dev server
// axios – HTTP client
