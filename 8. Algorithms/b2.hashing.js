// Hashing
//     Hashing is the process of converting data (like a string or number) into a fixed-size value
//     (called a hash) — usually done using a hash function.
//     Think of it as:
//     🔑 Input → hashFunction() → 🔒 Hashed Value

//     Why ?
//     🔍 Fast data access (constant time O(1))
//     🔐 Secure storage (like passwords)
//     💡 Used in data structures like Hash Tables (i.e., Map or Object in JS)

//     How ?
//     You maintain a window (subset of elements) that "slides" over the data:
//     * Keep track of a start and end
//     * Move one or both to grow/shrink the window
//     * Update the result based on current window

//     Use Cases
//     Hash Maps / Hash Tables
//     Checking duplicates in arrays
//     Password storage with hashing
//     Data lookup and retrieval

//     Summary
//     🔸 Feature | 🔍 Description
//     What       | Converts input into a fixed-size output
//     Why        | Fast lookups, duplicate checks, secure data
//     In JS      | Objects, Maps, crypto module
//     Use Cases  | Passwords, sets, dictionaries, caching

// Ex 1 (Basic Hash Table with Object)
const phoneBook = {
  Alice: "12345",
  Bob: "67890",
};

console.log(phoneBook["Alice"]); // Output: 12345

// Ex 2 (Using Map for more control)
const users = new Map();

users.set("john", { age: 25 });
users.set("jane", { age: 30 });

console.log(users.get("jane")); // Output: { age: 30 }

// Ex 3 (Hashing a password using crypto (Node.js))
const crypto = require("crypto");

const password = "secret123";
const hash = crypto.createHash("sha256").update(password).digest("hex");

console.log(hash); // A long hex string (hash of the password)
