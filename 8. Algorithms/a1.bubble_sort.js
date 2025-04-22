//visualgo.net/en/sorting

// Bubble Sort
//     Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.
//     It keeps "bubbling" the largest value to the end in each pass — like bubbles rising in water 💧.

//     How ?
//     * Compare two adjacent elements.
//     * Swap if the left is greater than the right.
//     * Repeat until the array is sorted.

// Algorithm
//     1. Start from the beginning of the array.
//     2. Compare the current element with the next element.
//     3. If the current element is greater than the next one, swap them.
//     4. Move to the next pair of elements and repeat Step 2–3.
//     5. After one full pass, the largest element will be at the end of the array.
//     6. Repeat the above steps for the remaining (unsorted) portion of the array.
//     7. Stop when no swaps are needed in a full pass (i.e., array is sorted).

// Time Complexity
//     Case    | Time
//     Best    | O(n)
//     Average | O(n²)
//     Worst   | O(n²)

// Hints
// 1. Required 2 loops
// 2. i from 0 to n / n-1
// 3. j from 0 to j-i-1 / j-1-i
// 4. if arr[j] > arr[j+1] then swap
// 5. [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
// 6. return arr

// Ex 1 (Basic)
https: function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

console.log(bubbleSort([29, 25, 87, 98, 13]));

// Ex 2 (Optimized)
function optimizedBubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return arr;
}
console.log(optimizedBubbleSort([29, 25, 87, 98, 13]));
