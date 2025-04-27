// Object.keys()
//     Object.keys() is a method that returns an array of the object’s own property names (keys).
//     👉 Only keys, not values.
//     👉 Only enumerable (visible) properties.

//     Why?
//     * To get all keys of an object quickly.
//     * Useful for looping, validations, or counting properties.

//     How?
//     Object.keys(object);

const person = {
  name: "Alice",
  age: 25,
  city: "New York",
};

const keys = Object.keys(person);

console.log(keys);
// Output: [ 'name', 'age', 'city' ]

// Typical Uses:
// ✔️ Loop through keys:
Object.keys(person).forEach((key) => {
  console.log(key, person[key]);
});

// ✔️ Count properties:
const propertyCount = Object.keys(person).length;
console.log(propertyCount); // Output: 3
