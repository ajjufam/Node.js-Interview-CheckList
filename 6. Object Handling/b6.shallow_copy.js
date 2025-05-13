// Shallow Copy
//     A shallow copy means copying only the top-level properties of an object.
//     👉 If a property is a primitive (number, string, boolean), it copies the value.
//     👉 If a property is a reference type (object, array), it copies the reference, NOT the actual object.

//     Why?
//     * To quickly make a simple copy of an object.
//     * Useful when deep relationships inside the object are not important.

//     How?
//     ✅ Using Object.assign():
//     const copy = Object.assign({}, original);

//     ✅ Using spread operator (...):
//     const copy = { ...original };`

const person = {
  name: "Alice",
  address: {
    city: "New York",
  },
};

// Shallow copy
const shallowCopy = { ...person };

// Modify shallow copy
shallowCopy.name = "Bob"; // Changes only in shallowCopy
shallowCopy.address.city = "Los Angeles"; // Changes in BOTH!

console.log(person.address.city); // Output: Los Angeles (😮)

// ✅ Shallow copy is good for simple flat objects.
// ❌ For deep/nested objects, use a deep copy (like structuredClone() or custom functions).
