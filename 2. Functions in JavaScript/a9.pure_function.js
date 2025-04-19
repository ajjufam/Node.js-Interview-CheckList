// Pure Function

// What ?
// A pure function is a function that:
// * Always returns the same output for the same input.
// * Doesn’t change anything outside itself (no side effects).

// Why ?
// Easier to test
// More predictable
// Works well with functional programming style

// ex 1
function add(a, b) {
  return a + b;
}
console.log("Pure Function :", add(10, 10));

// here it not taking any outside value from function and not doing any changing

// Summary:
// Pure Function = Same Input → Same Output + No Side Effects
