// Object Creation (Constructor)
//     Object creation (constructor) means creating objects using a constructor function (special function meant to build objects).
//     It’s a blueprint to create multiple objects with the same structure easily.

//     Why?
//     * Reuse code to create many similar objects.
//     * Dynamic: Each object can have different values.
//     * Used when you need a lot of similar objects (like users, products, etc.)

//     How ?
//     1. Define a function (constructor) with capital first letter (by convention).
//     2. Inside, use this.key = value.
//     3. Use new keyword to create objects.

function Person(name, age) {
  this.name = name;
  this.age = age;
}

//Create Objects
const person1 = new Person("Ajju", 22);
const person2 = new Person("Arjun", 25);

console.log(person1.name); // Ajju
console.log(person2.age); // 25

// NOte
// new keyword automatically:
// * Creates a new empty object {}.
// * Sets this to that object.
// * Returns the object at the end.
