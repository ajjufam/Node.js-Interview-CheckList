// Rest Operator
//     The rest operator (...) is used to collect the remaining properties of an object into a new object after some properties are pulled out.
//     👉 It's like:
//     * "Take the rest of the properties and put them together!"

//     Why?
//     * To extract only what you need.
//     * To separate or filter properties easily.
//     * To clean up objects without mutating the original.

//     How?
//     It’s used inside destructuring like this:
//     const { key1, key2, ...rest } = object;

const person = {
  name: "Alice",
  age: 25,
  city: "New York",
  country: "USA",
};

// Pull out name and age, collect the rest
const { name, age, ...locationInfo } = person;

console.log(name); // Output: Alice
console.log(age); // Output: 25
console.log(locationInfo);
// Output: { city: 'New York', country: 'USA' }

// Important Points:
// * You must destructure specific properties first and then collect the rest.
// * rest will be a new object with the remaining keys/values.
// * It's very useful when you don't want to manually delete properties.
