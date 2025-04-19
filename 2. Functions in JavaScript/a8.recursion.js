// Recursion
// What ?
//     Recursion is when a function calls itself to solve a smaller piece of a bigger problem.
//     It keeps calling itself until it reaches a base condition that stops the calls.

// Why ?
// To solve problems that can be broken into smaller sub-problems, like:
// factorial
// Fibonacci
// tree/graph traversal
// nested objects/arrays

// ⚠️ Be Careful:
// Always include a base case to prevent infinite loops.
// Too many recursive calls can lead to stack overflow.

// ex 1 (Factorial)
function factorial(n) {
  if (n == 0) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5));

//NOTE: Recusion have 2 phases when executing
// 1. Recursive calls phase (Going down)
// This is where the function keeps calling itself, starting from factorial(5)
// all the way down to factorial(0) (the base case):

// factorial(5)
//  └──> factorial(4)
//       └──> factorial(3)
//            └──> factorial(2)
//                 └──> factorial(1)
//                      └──> factorial(0)

// 2. Return phase (Coming back up)
// Once it hits the base case, it starts returning the values back up the stack:
// factorial(0) returns 1
//   ↑
// factorial(1) returns 1 * 1 = 1
//   ↑
// factorial(2) returns 2 * 1 = 2
//   ↑
// factorial(3) returns 3 * 2 = 6
//   ↑
// factorial(4) returns 4 * 6 = 24
//   ↑
// factorial(5) returns 5 * 24 = 120
