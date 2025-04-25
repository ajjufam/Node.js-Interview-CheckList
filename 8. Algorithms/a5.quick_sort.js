// Optional

// Quick Sort
//     Quick Sort is a Divide & Conquer algorithm.
//     It selects a pivot, partitions the array around it, and recursively sorts the sub-arrays.

//     Why ?
//     Efficient for large datasets
//     Average Time: O(n log n)
//     Worst-case: O(n²) (rare, can be avoided with random pivots)
//     In-place and fast in practice

function quickSort(arr) {
  if (arr.length <= 1) return arr;

  const pivot = arr[arr.length - 1]; // Pick l;ast element as pivot
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    // Condition should be arr.length-1 (bcz last element is assigned to pivot)
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([12, 4, 3, 5, 6, 8, 9, 14]));
