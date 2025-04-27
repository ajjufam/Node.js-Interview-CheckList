// Hash Table
//     A Hash Table is a key-value storage where you store and access data super fast using a key.
//     * In JavaScript, Object {} and Map are basically hash tables internally.

//     Why?
//     * Fast 🔥 lookups
//     * Fast 🔥 insertions
//     * Fast 🔥 deletions
//     * Used when you want to find something quickly using a key (like a dictionary 📖)

// Ex
let hashTable = {};

// Add some key-value pairs
hashTable["name"] = "John";
hashTable["age"] = 25;
hashTable["city"] = "New York";

// Accessing values
console.log(hashTable["name"]); // John
console.log(hashTable["age"]); // 25

// Updating value
hashTable["city"] = "Los Angeles";

// Deleting a key
delete hashTable["age"];

console.log(hashTable);
// { name: 'John', city: 'Los Angeles' }

// Summary
// Term          | Meaning
// Hash Table    | Key → Value storage for fast access
// Hash Function | Converts key to index
// Object / Map  | JavaScript’s built-in Hash Table

// ✅ Array = access by number (index)
// ✅ Hash Table = access by name (key)
