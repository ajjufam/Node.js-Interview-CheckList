// process.memoryUsage()
//     process.memoryUsage() returns an object that shows how much memory your Node.js process is using.
//     It's useful for:
//     * Monitoring performance
//     * Detecting memory leaks
//     * Debugging heavy operations

//     Why?
//     * Track memory used by your application
//     * Prevent memory overflows in large apps
//     * Optimize your code

// ex
const used = process.memoryUsage();
const gb = 1024;

console.log("Memory Usage");
console.log(`RSS          : ${(used.rss / 1024 / 1024).toFixed(2)} MB`);
console.log(`Heap Total   : ${(used.heapTotal / gb / gb).toFixed(2)} MB`);
console.log(`Heap Used    : ${(used.heapUsed / gb / gb).toFixed(2)} MB`);
console.log(`External     : ${(used.external / gb / gb).toFixed(2)} MB`);
console.log(`Array Buffer : ${(used.arrayBuffers / gb / gb).toFixed(2)} MB`);

//
// | Field          | Meaning                                                                  |
// | -------------- | ------------------------------------------------------------------------ |
// | `rss`          | Resident Set Size — total memory used (includes code, stack, heap, etc.) |
// | `heapTotal`    | Total memory allocated for JS objects (V8 heap)                          |
// | `heapUsed`     | Actual memory used by JS objects                                         |
// | `external`     | Memory used by C++ objects (like Buffers)                                |
// | `arrayBuffers` | Memory allocated for `ArrayBuffer` instances                             |

// 🔄 Live Monitoring (Optional Example):
setInterval(() => {
  console.log(process.memoryUsage());
}, 1000);

// This will print memory usage every second.
