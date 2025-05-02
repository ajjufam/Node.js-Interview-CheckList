// os module
//     The os module in Node.js provides information about the operating system — like CPU, memory, platform, etc.
//     * It’s built-in. No need to install it.

//     Why?
//     * To get OS type (Windows, Linux, etc.)
//     * To check free and total memory
//     * To know CPU details
//     * To get system uptime
//     * To find current user info
//     * To get home directory path
//     * To check network details (like IP)
//     * To write OS-based logic in apps

const os = require("os");

// Ex 1. os.platform()
// Returns the platform (OS type): 'win32', 'linux', 'darwin', etc.
console.log("platform :", os.platform());

// Ex 2. os.arch()
// Returns the CPU architecture: 'x64', 'arm', etc.
console.log("arch ", os.arch());

// Ex 3. os.cpus()
// Returns an array of CPU core info.
console.log("cpus :", os.cpus());

// Ex  4. os.totalmem() & os.freemem()
// Returns total and free memory in bytes.
console.log("Total Memory:", os.totalmem());
console.log("Free Memory:", os.freemem());

// 🧮 You can convert to MB/GB if needed:
console.log("Free Memory in MB:", os.freemem() / 1024 / 1024);

// Ex 5 os.uptime()
// Returns the system uptime in seconds.
console.log("Uptime (seconds):", os.uptime());

// Ex 6. os.hostname()
// Returns the host name of the machine.
console.log("Hostname:", os.hostname());

// Ex 7. os.userInfo()
// Returns info about the current logged-in user.
console.log("userInfo : ", os.userInfo());

// Ex 8. os.networkInterfaces()
// Returns info about all network interfaces.
console.log("networkInterfaces :", os.networkInterfaces());

// Ex 9. os.homedir()
// Returns the home directory of the current user.
console.log("Home Directory:", os.homedir());

// Ex os.type()
// Returns the OS name: 'Linux', 'Darwin', 'Windows_NT'
console.log("type :", os.type());
