// Object.seal()
//     Object.seal() is a method that seals an object.
//     👉 You cannot add or delete properties.
//     👉 But you can still modify (update) the existing properties.

//     Why?
//     * To prevent structure changes (no adding/removing properties) while allowing updates to existing data.
//     * Useful when you want a fixed shape object but editable values.

//     How?
//     Object.seal(object);

// After sealing:
// ❌ Can't add new properties.
// ❌ Can't delete properties.
// ✅ Can update existing properties.

const person = {
  name: "Alice",
  age: 25,
};

Object.seal(person);

// Try to modify a property
person.age = 30; // ✅ Works

// Try to add a new property
person.city = "New York"; // ❌ Fails silently or throws error in strict mode

// Try to delete a property
delete person.name; // ❌ Fails silently or throws error in strict mode

console.log(person);
// Output: { name: 'Alice', age: 30 }

// Action             | Normal Object | Object.seal() | Object.freeze()
// Add new properties | ✅            | ❌            | ❌
// Delete properties  | ✅            | ❌            | ❌
// Modify properties  | ✅            | ✅            | ❌
