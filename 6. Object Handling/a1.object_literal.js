// Object Creation (Literal)
//     Object creation (literal) means creating an object directly using {} without using any class, constructor, or function.

//     Why ?
//     * It's quick and easy to create small objects.
//     * Best for simple data structures like settings, configurations, simple records, etc.
//     * Readable and clean syntax.

//     How ?
//     Use curly braces {} and define key: value pairs inside.

//     Syntax
//     let obj = {
//       key1: value1,
//       key2: value2
//     };

const person = {
  name: "Alice",
  age: 25,
  isStudent: true,
};

console.log(person.name); // Output: Alice
console.log(person.age); // Output: 25
console.log(person.isStudent); // Output: true
