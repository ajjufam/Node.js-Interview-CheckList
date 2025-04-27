// Stack
//     A Stack is a linear data structure that works on the LIFO principle:
//     * LIFO = Last In, First Out
//     * (Meaning: the last item added is the first one to be removed.)

//     Why?
//     * To reverse something (like a string).
//     * To track history (like browser back button, undo actions).
//     * To manage function calls (like JavaScript call stack).

// Ex 1 (Using Array as a Stack:)
let stack = [];

// Push element into the stack
stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack); // [ 10, 20, 30 ]

// Pop Element from the stack
let lastItem = stack.pop();
console.log(lastItem); // 30

console.log(stack); // [10, 20]

// push() → Adds element to the top
// pop() → Removes element from the top

// Ex 2
function reverseString(str) {
  let stack = str.split("");
  let reversed = "";

  while (stack.length > 0) {
    reversed += stack.pop();
  }

  return reversed;
}

console.log(reverseString("hello")); // "olleh"

// Summary
// Action            | Method
// Add to Stack      | push()
// Remove from Stack | pop()
// View Top of Stack | stack[stack.length - 1]

// 🎯 Conclusion:
// Array is multi-purpose.
// Stack is a special behavior using Array (only LIFO: push/pop).
// When you say "Stack", you mean "I’m using Array but only push/pop like a stack".
