// Destructuring
//     Destructuring means pulling out properties from an object and storing them directly into variables.
//     (Instead of accessing each property manually.)

//     Why?
//     * Makes code shorter and cleaner.
//     * Easier to grab multiple values at once.
//     * Organizes your code better.

//     How?
//     Syntax
//     const { key1, key2 } = object;

const person = {
  name: "Alice",
  age: 25,
  city: "New York",
};

// Destructuring
const { name, age } = person;

console.log(name); // Output: Alice
console.log(age); // Output: 25

// More Cool Things You Can Do:

// ✔ Rename while destructuring:
const { name: fullName } = person;
console.log(fullName); // Output: Alice

// ✔ Set default values:
const { country = "USA" } = person;
console.log(country); // Output: USA

// ✔ Destructure nested objects:
const user = {
  id: 1,
  profile: {
    firstName: "Bob",
    lastName: "Smith",
  },
};

const {
  profile: { firstName },
} = user;
console.log(firstName); // Output: Bob
