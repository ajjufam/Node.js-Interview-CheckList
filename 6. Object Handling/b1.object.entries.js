// Object.entries()
//     Object.entries() is a method that returns an array of arrays, where each inner array is a key-value pair from the object.
//     👉 You get both keys and values together.

//     Why?
//     * To work with both key and value at the same time.
//     * Very useful for looping, transforming, or mapping objects.

//     How?
//     Object.entries(object);

const person = {
  name: "Alice",
  age: 25,
  city: "New York",
};

const entries = Object.entries(person);

console.log(entries);
// Output: [ ['name', 'Alice'], ['age', 25], ['city', 'New York'] ]

// Typical Uses:
// ✔️ Loop through both key and value:
Object.entries(person).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});

// ✔️ Convert an object into a different structure:
const modified = Object.entries(person).map(([key, value]) => {
  return `${key.toUpperCase()}: ${value}`;
});

console.log(modified);
// Output: [ 'NAME: Alice', 'AGE: 25', 'CITY: New York' ]
