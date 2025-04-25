// Back Tracking
//     Backtracking is a problem-solving technique used to build solutions incrementally, and abandon a solution (backtrack) as
//     soon as it is determined not to be viable.
//     --Think of it like exploring all possible paths in a maze and reversing when a path is blocked.

//     Why ?
//     To solve combinatorial problems.
//     When you need to try all possibilities.
//     Common in:
//         * Puzzles (like Sudoku)
//         * Permutations/Combinations
//         * N-Queens problem
//         * Path finding

//     How ?
//     Choose an option.
//     Recur with the choice.
//     If it leads to a solution, return it.
//     Else, undo the choice and try the next.

//     Summary
//     🔸 Feature       | Description
//     What             | Recursive technique to build and backtrack solutions
//     Why              | For exhaustive search problems
//     How              | Recursion + undoing choices
//     Example Use Case | Subsets, permutations, N-Queens, Sudoku

// Ex
function generateSubsets(nums) {
  const result = [];

  function backtrack(index, current) {
    if (index === nums.length) {
      result.push([...current]);
      return;
    }

    // Include the current element
    current.push(nums[index]);
    backtrack(index + 1, current);

    // Exclude the current element (backtrack)
    current.pop();
    backtrack(index + 1, current);
  }

  backtrack(0, []);
  return result;
}

console.log(generateSubsets([1, 2]));
