// child_process
//     The child_process module allows you to run system commands or scripts (like running a Python file, shell command, etc.) from a Node.js app.
//     You can interact with external processes just like you would from a terminal.

//     Why?
//     * Run shell commands (ls, mkdir, etc.)
//     * Execute other programs (e.g., Python, Java)
//     * Create separate Node.js processes (for heavy work)
//     * Automate system tasks

// Ex 1 : exec()
// Runs a command, buffers the output (good for small output)
const { exec } = require("child_process");
const command = process.platform === "win32" ? "dir" : "ls"; // dir is windows command
exec(command, (err, stdout, stderr) => {
  if (err) {
    // console.error("Error", err);
    return;
  }
  //   console.log("Output:", stdout);
});

// Ex 2 : spawn()
// Runs a command and streams output (better for large output)
const { spawn } = require("child_process");
const child = spawn("node", ["-v"]);
child.stdout.on("data", (data) => {
  console.log(`Output: ${data} `);
});

child.stderr.on("data", (data) => {
  console.error(`Error : ${data}`);
});

// Ex 3 : fork()
// Used to run another Node.js file as a child process (built-in IPC)
//parent.js
const { fork } = require("child_process");
const child1 = fork("b5.child.js");
child1.on("message", (msg) => {
  console.log("Message from child :", msg);
});

child1.send("Hello");

//check ===> b5.child.js

// Ex 4 execFile()
// Like exec, but directly runs a file (e.g., a .sh, .exe, .py)
const { execFile } = require("child_process");
execFile("node", ["-v"], (err, stdout) => {
  console.log("Node version :", stdout);
});
