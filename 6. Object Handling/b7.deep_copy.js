// Deep Copy
//     A deep copy means copying everything, including nested objects.
//     👉 It creates a completely independent clone — no shared references.
//     👉 Changing the copy won't affect the original at any depth.

//     Why?
//     * When your object has nested objects/arrays and you want a full independent copy.
//     * To avoid accidental changes in the original object when modifying the copy.

//     How?
//     ✅ Using structuredClone() (modern and best way):
//     const deepCopy = structuredClone(original);

//     ✅ Using JSON.parse(JSON.stringify(object)) (older method):
//     const deepCopy = JSON.parse(JSON.stringify(original));

const person = {
  name: "Alice",
  address: {
    city: "New York",
  },
};

// Deep copy using structuredClone
const deepCopy = structuredClone(person);

// Modify deep copy
deepCopy.address.city = "Los Angeles";

console.log(person.address.city); // Output: New York (✅ Safe!)
console.log(deepCopy.address.city); // Output: Los Angeles

// Differences
// Feature               | Shallow Copy | Deep Copy
// Top-level properties  | ✅           | ✅
// Nested objects/arrays | ❌ Shared    | ✅ Separate

// Important Note :
// structuredClone() works with almost all types, including Date, Map, Set, etc.
// JSON.stringify method fails if:
//     * Object has functions
//     * undefined
//     * Symbol
//     * Circular references (object referring itself)
