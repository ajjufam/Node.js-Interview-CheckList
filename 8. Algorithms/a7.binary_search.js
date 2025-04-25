// Binary Search
//     Binary Search is an efficient algorithm to find an element in a sorted
//     array by repeatedly dividing the search space in half.

//     Why ?
//     Much faster than Linear Search for large, sorted arrays
//     Time Complexity: O(log n)
//     Requires the array to be sorted

//     Summary
//     Feature         | Detail
//     Type            | Search Algorithm
//     Time Complexity | O(log n)
//     Space           | O(1)
//     Sorted Required | ✅ Yes
//     Faster than     | Linear Search on large datasets
// <=======

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1; // Search right half
    } else {
      right = mid - 1; // Search left half
    }
  }
  return -1;
}

let arr = [1, 2, 4, 3, 9, 8, 7, 8];
console.log(binarySearch(arr, 8)); // 5
console.log(binarySearch(arr, 2)); // 1
console.log(binarySearch(arr, 10)); // -1
