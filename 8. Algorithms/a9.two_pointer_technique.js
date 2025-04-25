// Two Pointer Technique
//     The Two Pointer Technique is a method where you use two pointers (variables) to traverse
//     data (like arrays) from different ends or directions.

//     Why ?
//     Efficient for sorted arrays
//     Reduces time complexity
//     Commonly used in:
//         * Finding pairs
//         * Reversing arrays
//         * Removing duplicates
//         * Merging arrays

//     How ?
//     One pointer starts at the beginning
//     The other starts at the end (or another place)
//     Move them based on some logic or condition

//     Summary
//     Concept       | Explanation
//     What          | Using two pointers to traverse array
//     Use Cases     | Search, reverse, sort, remove duplicates
//     Works best on | Sorted arrays or lists
//     Benefit       | Efficient & easy to implement

//Ex 1 (Has pairs or not)
function hasPairs(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum == target) {
      return true;
    }
    if (sum < target) left++;
    else right--;
  }
  return false;
}

console.log(hasPairs([1, 2, 3, 4, 6], 10)); // true

// Ex 2 (Reverse array)
function reverseArr(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
  return arr;
}
console.log(reverseArr([3, 4, 2, 7, 8, 9])); // [ 9, 8, 7, 2, 4, 3 ]
