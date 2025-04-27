// Prototypes
//     In JavaScript, every object has a hidden internal property called [[Prototype]] (or simply prototype).
//     It is like a backup object — if JS doesn't find a property/method on the object itself, it looks up the prototype chain.
//     👉 Think of it like:
//     If I don't know something, I'll ask my prototype!

//     Why?
//     * To share methods and properties across multiple objects without copying them.
//     * To make JavaScript more memory efficient and dynamic.
//     * It's the backbone of inheritance in JavaScript.

//     How?
//     ✅ When you create an object using a function constructor, its prototype is automatically linked.

// Ex 1
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.name}`);
};

const alice = new Person("Alice");
alice.sayHello(); // Output: Hello, my name is Alice
// ✅ Here:
// alice does not have a sayHello method directly.
// JS finds it in Person.prototype.

// Ex 2
const animal = {
  eats: true,
};

const dog = Object.create(animal); // dog inherits from animal

dog.barks = true;

console.log(dog.eats); // true (inherited from animal)
console.log(dog.barks); // true (own property)
// 👉 Here, dog's prototype is animal.
