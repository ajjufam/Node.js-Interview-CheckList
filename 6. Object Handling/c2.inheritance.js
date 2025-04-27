// Inheritance
//     Inheritance means one object can use properties and methods of another object — without rewriting them.
//     👉 In JavaScript, inheritance happens through prototypes.
//     👉 An object can inherit from another object automatically via the prototype chain.

//     Why?
//     * To reuse code (no need to duplicate).
//     * To share behavior across multiple objects.
//     * To organize code cleanly (Parent → Child relationship).

//     How?
//     1. Using Object.create()
//     2. Using Constructor Functions + Prototypes
//     3. Using class syntax (ES6 way)

// Ex 1 ( Using Object.create())
const animal = {
  eats: true,
};

const dog = Object.create(animal); // dog inherits from animal

dog.barks = true;

console.log(dog.eats); // true (inherited)
console.log(dog.barks); // true (own property)

// Ex 2 (Using Constructor Functions + Prototypes)
function Animal(name) {
  this.name = name;
}

Animal.prototype.eat = function () {
  console.log(`${this.name} is eating`);
};

function Dog(name, breed) {
  Animal.call(this, name); // call parent constructor
  this.breed = breed;
}

// Inherit Animal prototype
Dog.prototype = Object.create(Animal.prototype);

// Fix constructor pointer
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
  console.log(`${this.name} is barking`);
};

const myDog = new Dog("Buddy", "Golden Retriever");

myDog.eat(); // Buddy is eating (inherited)
myDog.bark(); // Buddy is barking (own method)

// ✅ Here:

// Dog inherits properties from Animal.
// Dog inherits methods from Animal.prototype.

// Ex 3 (Using class syntax (ES6 way))
class Animal {
  constructor(name) {
    this.name = name;
  }
  eat() {
    console.log(`${this.name} is eating`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // call parent constructor
    this.breed = breed;
  }
  bark() {
    console.log(`${this.name} is barking`);
  }
}

const myDog1 = new Dog("Charlie", "Beagle");

myDog1.eat(); // Charlie is eating (inherited)
myDog1.bark(); // Charlie is barking (own method)

// ✅ extends keyword creates inheritance automatically!
// ✅ super() calls the parent constructor.

//Summary
// Type                             | How
// Object.create()                  | Basic object-to-object inheritance
// Constructor Function + Prototype | Traditional way before ES6
// class and extends                | Modern and clean ES6+ syntax
