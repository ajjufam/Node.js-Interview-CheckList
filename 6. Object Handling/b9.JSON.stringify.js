// JSON.stringify()
//     JSON.stringify() is a method that converts a JavaScript object into a JSON string.
//     👉 It turns an object, array, etc., into a text format that can be easily stored or sent
//     (like in APIs, localStorage, files).

//     Why?
//     * To send data over a network (API calls, etc.)
//     * To store objects in places that accept only strings (like localStorage).
//     * To log objects nicely for debugging.

//     How?
//     const jsonString = JSON.stringify(object);
//         You pass a JS object, and it gives back a JSON string.

const person = {
  name: "Alice",
  age: 25,
};

const jsonString = JSON.stringify(person);

console.log(jsonString);
// Output: '{"name":"Alice","age":25}'

// Important Points:
// Functions (function() {}), undefined, and Symbol values are ignored.
// Circular references (object referring to itself) will cause an error.
// Dates are automatically converted to ISO strings.

// Special Features:
// ✅ Pretty Print (format nicely with spaces):
const formatted = JSON.stringify(person, null, 2); // 2 is the space
console.log(formatted);

// ✅ Custom Serialization with Replacer:
const customJson = JSON.stringify(person, ["name"]);
console.log(customJson);
// Output: '{"name":"Alice"}'

//Differences
// Method              | Purpose
// JSON.stringify(obj) | JS object ➡️ JSON string
// JSON.parse(string)  | JSON string ➡️ JS object
