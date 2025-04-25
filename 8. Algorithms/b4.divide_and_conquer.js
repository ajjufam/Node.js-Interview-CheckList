// Divide and Conquer
//     Divide and Conquer is a powerful algorithm design pattern where:
//     🧩 You divide the problem into smaller sub-problems.
//     🧠 Conquer (solve) each sub-problem recursively.
//     🔗 Combine the results to get the final solution.

//     Why ?
//     Great for breaking down large problems
//     Used in efficient sorting and searching algorithms
//     Often reduces time complexity from O(n²) to O(n log n) or better

//     Ex
//     Algorithm          | Uses Divide & Conquer?
//     Merge Sort         | ✅ Yes
//     Quick Sort         | ✅ Yes
//     Binary Search      | ✅ Yes
//     Karatsuba Multiply | ✅ Yes

//     Summary
//     🔸 Concept | 🧠 Explanation
//     What       | Break a big problem → smaller pieces → solve recursively
//     Why        | Efficient and clean solutions to hard problems
//     Key Steps  | Divide → Conquer → Combine
//     Used In    | Merge Sort, Quick Sort, Binary Search

// Example: Binary Search (Divide & Conquer)
function binarySearch(arr, target, start = 0, end = arr.length - 1) {
  if (start > end) return -1;

  let mid = Math.floor((start + end) / 2);

  if (arr[mid] === target) return mid;
  if (arr[mid] > target) {
    return binarySearch(arr, target, start, mid - 1);
  } else {
    return binarySearch(arr, target, mid + 1, end);
  }
}

console.log(binarySearch([1, 3, 5, 7, 9, 11], 7)); // Output: 3

// Example: Merge Sort (Another D&C Example)
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let result = [],
    i = 0,
    j = 0;

  while (i < left.length && j < right.length) {
    result.push(left[i] < right[j] ? left[i++] : right[j++]);
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}

console.log(mergeSort([6, 3, 8, 10, 1])); // Output: [1, 3, 6, 8, 10]
