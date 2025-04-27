// Map
//     A Map is a collection of key-value pairs where the keys can be of any data type (including objects or functions), unlike objects, where keys are always strings or symbols.
//     A Map remembers the insertion order of the keys.
//     It allows any data type as a key (even objects, arrays, and functions).

//     Why?
//     * Map offers flexible keys (can be any type).
//     * It provides efficient lookups and insertion times (similar to Sets).
//     * It is good for storing key-value pairs and maintaining insertion order.

// Ex 1 (Create a Map)
let map = new Map();
map.set("name", "Alice");
map.set("age", 30);
map.set("city", "Wonderland");

console.log(map); // Map { "name" => "Alice", "age" => 30, "city" => "Wonderland" }

// Ex 2 ( Access Elements in a Map)
//      To get the value of a key:
console.log(map.get("name")); // Alice
console.log(map.get("age")); // 30

// Ex 3 ( Check if a Key Exists)
console.log(map.has("city")); // true
console.log(map.has("country")); // false

// Ex 4 ( Remove Elements from a Map)
//      You can delete a key-value pair:
map.delete("city");
console.log(map); // Map { "name" => "Alice", "age" => 30 }

//      To clear all elements:
map.clear();
console.log(map); // Map {}

// Ex 5 (Size of a Map)
console.log(map.size); // 3

// Ex 6 ( Iterate Over a Map)
//      You can use a for...of loop or .forEach() to iterate over the Map:
let map1 = new Map([
  ["name", "Alice"],
  ["age", 30],
  ["city", "Wonderland"],
]);

// Using for...of loop
for (let [key, value] of map1) {
  console.log(`${key}: ${value}`);
}
// Output:
// name: Alice
// age: 30
// city: Wonderland

// Using forEach method
map1.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});
// Output:
// name: Alice
// age: 30
// city: Wonderland

// Ex 7 (Map with Different Data Types as Keys)
// A key in a Map can be an object, array, or even a function:
let objKey = { id: 1 };
let arrKey = [1, 2, 3];
let funcKey = function () {
  return "I am a function!";
};

let mapWithKeys = new Map();
mapWithKeys.set(objKey, "Object Key");
mapWithKeys.set(arrKey, "Array Key");
mapWithKeys.set(funcKey, "Function Key");

console.log(mapWithKeys.get(objKey)); // Object Key
console.log(mapWithKeys.get(arrKey)); // Array Key
console.log(mapWithKeys.get(funcKey)); // Function Key

// Summary
// * A Map stores key-value pairs.
// * It supports any data type as a key (including objects and functions).
// * Provides methods to add, retrieve, delete, and iterate over key-value pairs.
// * Useful for cases that require ordered key-value collections or complex keys.
