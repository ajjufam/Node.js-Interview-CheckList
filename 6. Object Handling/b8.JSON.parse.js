// JSON.parse()
//     JSON.parse() is a method that converts a JSON string into a JavaScript object.
//     👉 JSON (JavaScript Object Notation) is a string format to represent objects/data.
//     👉 JSON.parse() reads that string and builds the real object back.

//     Why?
//     * To convert data received (from APIs, files, storage) into usable JavaScript objects.
//     * To work with JSON data easily in your code.

//     How?
//     const obj = JSON.parse(jsonString);
//         You give it a valid JSON string, and it gives you a real object.

const jsonString = '{"name": "Alice", "age": 25}';

const person = JSON.parse(jsonString);

console.log(person); // { name: 'Alice', age: 25 }

console.log(person.name); // Output: Alice
console.log(person.age); // Output: 25

// The input must be proper JSON format:
// Keys and strings must use double quotes " (not single quotes ').
// If the JSON is invalid, JSON.parse() throws an error.

// Bonus Tip:
// You can also pass a reviver function to JSON.parse() to customize how values are parsed.
const jsonString1 = '{"birthYear": 2000}';

const user = JSON.parse(jsonString1, (key, value) => {
  if (key === "birthYear") {
    return 2025 - value; // calculate age
  }
  return value;
});

console.log(user); // { birthYear: 25 }
