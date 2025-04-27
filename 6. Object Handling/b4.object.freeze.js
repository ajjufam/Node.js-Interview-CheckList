// Object.freeze()
//     Object.freeze() is a method that freezes an object.
//     👉 It means: You cannot add, remove, or change properties of the object anymore.
//     👉 The object becomes immutable (unchangeable).

//     Why?
//     * To protect objects from being modified accidentally.
//     * Useful for creating constant configurations, settings, or secure data structures.

//     How?
//     Object.freeze(object);

const person = {
  name: "Alice",
  age: 25,
};

Object.freeze(person);

// Try to change a property
person.age = 30;
person.city = "New York"; // Try to add new property
delete person.name; // Try to delete property

console.log(person);
// Output: { name: 'Alice', age: 25 }

// Important Notes:
// Only shallow freeze:
// It only freezes first-level properties.
// Nested objects inside it are still changeable.

const user = {
  name: "Bob",
  address: {
    city: "Paris",
  },
};

Object.freeze(user);

user.address.city = "London"; // This will still change!
console.log(user.address.city); // Output: London

// Deep freeze needs a custom function to recursively freeze nested objects.
