// Object.values()
//     Object.values() is a method that returns an array of an object’s own property values.
//     👉 Only values, not keys.
//     👉 Only enumerable (visible) properties.

//     Why?
//     * To get all the values of an object quickly.
//     * Useful for processing, searching, or filtering data.

//     How?
//     Object.values(object);

const person = {
  name: "Alice",
  age: 25,
  city: "New York",
};

const values = Object.values(person);

console.log(values);
// Output: [ 'Alice', 25, 'New York' ]

// Typical Uses:
// ✔️ Loop through values:
Object.values(person).forEach((value) => {
  console.log(value);
});

// ✔️ Find a value:
const hasNewYork = Object.values(person).includes("New York");
console.log(hasNewYork); // Output: true
