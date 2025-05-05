// cluster
//     The cluster module allows you to create child processes (workers) that all share the same server port.
//     Node.js runs in a single thread. With cluster, you can use multiple CPU cores to improve performance — especially for HTTP servers.

//     Why?
//     * Utilize multi-core CPUs
//     * Handle more requests concurrently
//     * Improve server performance
//     * Build scalable backend services

//     How?
//     You split the app into:
//     * Master process – creates and manages workers
//     * Worker processes – handle actual work (like HTTP requests)

// EX 1 Basic cluster server
const cluster = require("cluster");
const http = require("http");
const os = require("os");

const numCPUs = os.cpus().length;
console.log(numCPUs);

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // Fork workers
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  //Optional : log when worker exits
  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
  });
} else {
  // Workers shares the same server port
  http
    .createServer((req, res) => {
      res.writeHead(200);
      res.end(`Handled by worker ${process.pid}\n`);
    })
    .listen(3000);

  console.log(`Worker ${process.pid} started`);
} // http://localhost:3000

// Ex 2: Restart worker when it Crashes
// cluster.on("exit", (worker, code, signal) => {
//   console.log(`Worker ${worker.process.pid} crashed, Starting a new one...`);
//   cluster.fork();
// });

// Ex 3 (Send message B/T master and worker)
//Master
// const worker=cluster.fork()
// worker.send("Hello Worker")

//Worker
// process.on("message", (msg) => {
//   console.log(`Message from master : ${msg}`);
// });
