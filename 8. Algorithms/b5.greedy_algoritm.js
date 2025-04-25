// Greedy Algorithm
//     A Greedy Algorithm is an approach where you:
//     "Make the best choice at each step, hoping it leads to the global optimum."
//     It does not backtrack or look ahead—just picks the most beneficial move at the moment.

//     Why ?
//     🔥 Fast and simple
//     🧠 Works well for specific problems where local optima lead to global optima
//     ⚠️ Doesn't always guarantee the best solution for every problem

//     Summary
//     🔸 Feature | ✅ Description
//     What       | Pick the best choice at each step
//     Why        | Fast and works for problems with optimal substructure
//     Used In    | Coin change, Activity selection, Huffman coding, Kruskal’s MST
//     Caution    | Doesn’t always give the best solution for every case

// Example Problem: Coin Change Problem (Greedy Approach)
// Problem: Given coins [1, 5, 10, 25] and an amount, return the fewest coins needed.

function greedyCoinChange(coins, amount) {
  coins.sort((a, b) => b - a); // Sort descending
  let count = 0;
  let i = 0;

  while (amount > 0 && i < coins.length) {
    if (coins[i] <= amount) {
      amount -= coins[i];
      count++;
    } else {
      i++;
    }
  }

  return amount === 0 ? count : -1;
}

console.log(greedyCoinChange([1, 5, 10, 25], 30)); // Output: 2 (25 + 5)

// Example: Activity Selection Problem
// Select the maximum number of non-overlapping activities.

const activities = [
  { start: 1, end: 3 },
  { start: 2, end: 5 },
  { start: 4, end: 6 },
  { start: 6, end: 7 },
  { start: 5, end: 8 },
];

function activitySelection(activities) {
  activities.sort((a, b) => a.end - b.end);
  const result = [activities[0]];
  let lastEnd = activities[0].end;

  for (let i = 1; i < activities.length; i++) {
    if (activities[i].start >= lastEnd) {
      result.push(activities[i]);
      lastEnd = activities[i].end;
    }
  }

  return result;
}

console.log(activitySelection(activities));
