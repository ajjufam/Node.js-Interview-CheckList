// Spread Operator
//     The spread operator (...) is used to copy or expand properties of one object into another object.
//     Basically:
//     👉 Take everything from an object and spread it somewhere else.

//     Why?
//     * To copy objects easily.
//     * To merge objects together.
//     * To add or update properties while copying.

//     How?
//     Syntax
//     const newObject = { ...oldObject };

// Ex 1 (Copying an Object)
const person = { name: "Alice", age: 25 };
const copiedPerson = { ...person };
console.log(copiedPerson);
// Output: { name: 'Alice', age: 25 }

// Ex 2 (Merging Two Objects)
const address = { city: "New York", country: "USA" };
const personDetails = { ...person, ...address };
console.log(personDetails);
// Output: { name: 'Alice', age: 25, city: 'New York', country: 'USA' }

// Ex 3 (Adding/Updating While Copying)
const updatedPerson = { ...person, age: 26, hobby: "Reading" };
console.log(updatedPerson);
// Output: { name: 'Alice', age: 26, hobby: 'Reading' }

// Important Points:
// If keys conflict, the later value overwrites the earlier one.
// It shallow copies (only top level, not deeply nested objects).
