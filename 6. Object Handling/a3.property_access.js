// Property Access
//     Property Access means getting (reading) or setting (changing) the value of a key inside an object.

//     Why?
//     * To use the object's data.
//     * To update or modify properties.
//     * To dynamically access keys.

//     How?
//     There are two ways:
//     1. Dot Notation — easiest and most common
//     2. Bracket Notation — useful when the key is dynamic or has special characters

const person = {
  name: "Alice",
  age: 25,
  "favorite color": "blue",
};

// 1. Dot Notation
console.log(person.name); // Output: Alice
console.log(person.age); // Output: 25

// 2. Bracket Notation
console.log(person["favorite color"]); // Output: blue

// Dynamic key example
const key = "name";
console.log(person[key]); // Output: Alice
