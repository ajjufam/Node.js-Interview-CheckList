// Queue
//     A Queue is a linear data structure that works on the FIFO principle:
//     * FIFO = First In, First Out
//     * (Meaning: the first item added is the first one to be removed.)

//     Why?
//     Order matters — first thing comes out first.
//     Useful for:
//     * Task scheduling (printer queue, message queue)
//     * Managing async operations (like API request queue)
//     * Breadth-first search (in trees, graphs)

// Ex 1 (Using Array as a Queue:)
let queue = [];

// Enqueue (add at end)
queue.push(1);
queue.push(2);
queue.push(3);

console.log(queue); // [1, 2, 3]

// Dequeue (remove from start)
let firstItem = queue.shift();
console.log(firstItem); // 1

console.log(queue); // [2, 3]

// push() → Add to end
// shift() → Remove from start

// Action             | Method
// Add to Queue       | push()
// Remove from Queue  | shift()
// View First Element | queue[0]

// ✅
// Stack = push & pop
// Queue = push & shift
