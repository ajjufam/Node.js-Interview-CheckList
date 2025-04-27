// Property Deletion
//     Property Deletion means removing a key-value pair from an object completely.

//     Why?
//     * To clean up unused data.
//     * To remove sensitive or temporary properties.
//     * To update the object structure.

//     How?
//     Use the delete keyword.

//     Syntax
//     delete object.property;     (or)   delete object["property"];

// Important:

// delete only removes own properties (not inherited ones).
// delete returns true if successful.
// It does NOT affect other properties.

const person = {
  name: "Alice",
  age: 25,
  city: "New York",
};

console.log(person);
// Output: { name: 'Alice', age:25, city: 'New York' }

// Deleting a property
delete person.age;

console.log(person);
// Output: { name: 'Alice', city: 'New York' }
