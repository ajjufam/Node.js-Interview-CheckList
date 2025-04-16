//Explanation
//  In JavaScript, Non-Primitive types are objects.
//  They are mutable, stored by reference, and can hold multiple values (unlike primitives).

// Feature       | Non-Primitive (Objects)
// ✅ Mutable   | Yes — can change values inside
// 📦 Stored by | Reference — not by value
// 🧱 Can hold  | Multiple values in a key-value format
// 🔁 Copying   | Copies the reference, not the actual data

// 1) Object
const user = {
  name: "Ajju",
  age: 22,
};

user.age = 23; // ✅ Mutating value
console.log("Objects :", user);

// 2) Array
const fruits = ["apple", "banana"];
fruits.push("mango"); // ✅ Arrays are objects, can be mutated
console.log("Arrays :", fruits);

// 3) Function
function greet(name) {
  return "Hello " + name;
}

console.log("Function :", greet("Ajju")); // "Hello Ajju"

// In JS, functions are also objects — they can have properties, be passed as arguments, etc.

// 4) Date
const today = new Date();
console.log("Date :", today.toDateString()); // e.g., "Wed Apr 16 2025"

///======>>> IMP (Call By Reference Behavior) <<<=========
const a = { value: 10 };
const b = a;

b.value = 20;
console.log("Reference Work :", a.value); // 20 — both point to the same object
