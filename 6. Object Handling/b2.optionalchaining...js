// Optional Chaining (?.)
//     Optional Chaining allows you to safely access deeply nested properties of an object without worrying about whether intermediate properties are null or undefined.
//     👉 If a property is null or undefined, it won’t throw an error.
//     👉 It returns undefined instead of throwing a TypeError.

//     Why?
//     * To avoid runtime errors when accessing deep properties in objects that might not exist.
//     * Makes your code cleaner and avoids manual checks like if statements.

//     How?
//     const result = object?.property?.subproperty;
//     (If any part of the chain is null or undefined, it stops and returns undefined instead of throwing an error.)

const person = {
  name: "Alice",
  address: {
    city: "New York",
    country: "USA",
  },
};

// Safe access using optional chaining
const city = person?.address?.city;
console.log(city); // Output: New York

// Accessing a non-existing property safely
const zipCode = person?.address?.zipCode;
console.log(zipCode); // Output: undefined

//Without optional chaining, you'd have to check for existence like this:
const city1 = person && person.address && person.address.city;

// Use Cases for Optional Chaining:
// ✔️ Accessing properties in nested objects:
const user = { profile: { details: { name: "John" } } };
const name = user?.profile?.details?.name;
console.log(name); // Output: John

// ✔️ Calling methods on potentially undefined objects:
const person1 = { greet: () => "Hello!" };
console.log(person1?.greet?.()); // Output: Hello!

// ✔️ Arrays and objects safely:
const users = [{ name: "Alice" }, { name: "Bob" }];
const secondUser = users?.[1]?.name;
console.log(secondUser); // Output: Bob

// Important Notes:
// * Optional chaining is not available for older browsers (before ES2020). You may need to use a transpiler like Babel.
// * It only checks for null or undefined, not other falsy values (like 0, false, "").
