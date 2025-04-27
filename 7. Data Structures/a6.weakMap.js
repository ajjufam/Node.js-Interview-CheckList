// WeakMap
//     A WeakMap is like a Map, but:
//     * Keys must be objects (not primitive values like numbers or strings).
//     * Keys are held weakly — if no other reference to a key exists, it can be garbage collected.
//     * It does not expose its size or allow iteration (for memory safety reasons).

//     Why?
//         * To associate data with an object without preventing garbage collection.
//         * It helps when you want to store private data related to an object that should be cleaned up
//         automatically once the object is no longer used.

// Ex 1 (Creating a WeakMap)
let weakMap = new WeakMap();
let obj = { name: "Alice" };

weakMap.set(obj, "Some information");
console.log(weakMap.get(obj)); // "Some information"

// Ex 2
// Methods Available
//  * .set(key, value) → Adds a new entry
//  * .get(key) → Gets the value associated with a key
//  * .has(key) → Checks if a key exists
//  * .delete(key) → Removes an entry

console.log(weakMap.has(obj)); // true
weakMap.delete(obj);
console.log(weakMap.has(obj)); // false

// Ex 3 (Automatic Garbage Collection)
// If the only reference to the object is inside the WeakMap, and you remove all other references,
// the object and its associated value in WeakMap are automatically garbage collected:

let person = { id: 1 };
let details = new WeakMap();
details.set(person, "Person Details");

person = null; // Now the key (and its value) can be garbage collected automatically.

//SUMMARY
// Feature         | WeakMap
// Key types       | Only Objects
// Memory behavior | Keys are weakly held
// Iteration       | Not possible
// Size            | Cannot be determined
// Use cases       | Private data, caching, DOM tracking
