// Impure Function

//What ?
//     A function is impure if it:
//     * Modifies things outside itself (has side effects)
//     * Returns different output for the same input

// Why ?
// If we want to change the outer variable value for nxt iterations

// ex 1
let count = 0;
function impure(a) {
  return a + count++;
}
console.log("Impure function :", impure(10)); // 10
console.log("Impure function :", impure(10)); // 11

// Here same input value but getting diff output value

//ex 2 (Logging to console / DOM / API calls)
function logMessage(message) {
  console.log(message); // side effect
  return message;
}

// using console inside function is also a impure function
// bcz console is a side effect

// Summary
// Pure Function ✅             | Impure Function ❌
// No side effects               | Has side effects
// Same input → same output      | Output may vary
// Doesn't modify external state | Modifies external state
