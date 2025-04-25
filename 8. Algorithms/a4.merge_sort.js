// OPtional

// Merge Sort
//     Merge Sort is a divide and conquer algorithm that:
//     1. Divides the array into halves,
//     2. Sorts each half recursively,
//     3. Merges the sorted halves back together.

//     Why ?
//     Very efficient for large datasets.
//     Stable sort (maintains order of equal elements).
//     Consistent O(n log n) time complexity.

function mergeSort(arr) {
  if (arr.length <= 1) return arr; // required

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }
  return result.concat(left.slice(i)).concat(right.slice(j));
}

console.log(mergeSort([38, 27, 43, 3, 9, 82, 10]));

// Keep as optional
