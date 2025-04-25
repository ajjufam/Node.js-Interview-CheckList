// Recursion
//     Recursion is a technique where a function calls itself to solve smaller instances of a problem.

//     Why ?
//     To break down complex problems into simpler ones
//     Useful for problems like tree traversal, factorial, fibonacci, etc.
//     Makes code cleaner and shorter in some cases

//     How ?
//     A recursive function has:
//     Base Case – when to stop recursion
//     Recursive Case – when the function calls itself

//     Summary
//     Concept               | Description
//     Function calls itself | ✅ Yes
//     Base case needed      | ✅ To stop recursion
//     Useful for            | Tree, graphs, math problems
//     Risk                  | Stack overflow (if not handled well)

function factRecursion(n) {
  if (n === 0 || n === 1) return 1;
  return n * factRecursion(n - 1);
}

console.log(factRecursion(5));
