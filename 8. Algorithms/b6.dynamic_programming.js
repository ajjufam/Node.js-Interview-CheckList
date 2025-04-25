// Dynamic Programming (DP)
//     Dynamic Programming is a technique to solve problems by breaking them down into smaller subproblems,
//     solving each only once, and storing their results (memoization or tabulation).
//     🔁 It’s useful when subproblems repeat — known as overlapping subproblems and optimal substructure.

//     Why ?
//     * Avoid redundant calculations (unlike recursion alone)
//     * Great for optimization problems (max/min/count)
//     * Converts exponential time to polynomial time

//     Ex
//     * Fibonacci numbers
//     * Knapsack problem
//     * Longest common subsequence
//     * Climbing stairs
//     * Coin change

//     Approach
//     Approach  | Technique
//     Top-Down  | Recursion + Memoization
//     Bottom-Up | Tabulation (Iterative)

//     Summary
//     🧩 Concept  | 🧠 Description
//     What        | Solve subproblems and store their solutions
//     Why         | Optimizes recursive problems, saves time & space
//     How         | Memoization (top-down) or Tabulation (bottom-up)
//     Used For    | Fib, Knapsack, LCS, Climbing Stairs, etc.

// Ex 1 (Fibonacci (Top-Down))
function fib(n, memo = {}) {
  if (n <= 1) return n;
  if (memo[n]) return memo[n];
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
}

console.log(fib(6)); // Output: 8

// Ex 2 (Fibonacci (Bottom-Up))
function fib(n) {
  if (n <= 1) return n;
  let dp = [0, 1];
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}

console.log(fib(6)); // Output: 8

// Ex 3 (Climbing Stairs (Similar to Fibonacci))
function climbStairs(n) {
  if (n <= 2) return n;
  let a = 1,
    b = 2;
  for (let i = 3; i <= n; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}

console.log(climbStairs(5)); // Output: 8
