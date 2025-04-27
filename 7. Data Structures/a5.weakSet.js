// WeakSet
//     A WeakSet is a special type of Set where:
//     * It can only store objects (not primitive values like strings, numbers, etc.).
//     * The references to objects in a WeakSet are weak. This means if there are no other references to the object, it can be garbage collected.
//     * It does not have a size property (because it doesn't keep track of the number of objects, for memory optimization).
//     * It has fewer methods compared to the regular Set.

//     Why?
//     * Memory efficiency: Useful for scenarios where you want to store objects but don’t want them to prevent garbage collection.
//     * WeakSets are primarily used in cases where you want to track objects without preventing them from being cleaned up by the garbage collector.

// Ex 1 (Create a WeakSet)
let weakSet = new WeakSet();
let obj = { id: 1 };
let obj2 = { id: 2 };

weakSet.add(obj);
weakSet.add(obj2);

console.log(weakSet); // WeakSet { <items unknown> } // Wont works
// You can't directly log the contents of a WeakSet because it doesn’t expose its elements.

// Ex 2 (Check if an Object Exists in a WeakSet)
//      You can check whether an object is in the WeakSet using .has():
console.log(weakSet.has(obj)); // true
console.log(weakSet.has({ id: 3 })); // false

// Ex 3 (Remove an Object from a WeakSet)
weakSet.delete(obj);
console.log(weakSet.has(obj)); // false

// Ex 4 (No Size Property)

// Ex 5 (Garbage Collection)
//      Since WeakSet holds weak references, objects inside it can be garbage collected once
//      they are no longer referenced anywhere else.
let obj1 = { name: "test" };
let weakSet1 = new WeakSet();
weakSet1.add(obj1);

// Remove the reference to the object
obj1 = null;

// The object can now be garbage collected because the WeakSet holds only a weak reference.

// 🚫 Limitations of WeakSets
// * Only objects as values: You can only add objects, not primitive types (like numbers, strings, or booleans).
// * No iteration: You can’t loop over a WeakSet. This is by design since the elements could be garbage collected at any time.

// Summary
// * A WeakSet is a collection of unique objects where references to the objects are weak.
// * It's mainly useful when you want to track objects without preventing them from being garbage collected.
// * WeakSets do not have the .size property, and you can’t iterate over them.
