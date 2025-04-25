// Sliding Window Technique
//     The Sliding Window technique is used to reduce the time complexity when dealing with
//     contiguous blocks of data in arrays or strings.

//     Why ?
//     * Efficient for problems with subarrays, substrings, or fixed-length patterns
//     * Reduces nested loops → better performance (often from O(n²) to O(n))

//     How ?
//     You maintain a window (subset of elements) that "slides" over the data:
//     * Keep track of a start and end
//     * Move one or both to grow/shrink the window
//     * Update the result based on current window

//     Summary
//     Concept      | Explanation
//     What         | A technique using a "window" (subarray or string)
//     Use Cases    | Subarrays, substrings, longest/shortest patterns
//     Benefits     | Improves performance, replaces nested loops
//     Common Tasks | Max/min sum, unique chars, pattern matching

// Example 1: Max sum of subarray of size k
function maxSubarraySum(arr, k) {
  let maxSum = 0;
  let windowSum = 0;

  // First window
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }
  maxSum = windowSum;

  // Slide window
  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k];
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}

console.log(maxSubarraySum([2, 1, 5, 1, 3, 2], 3)); // Output: 9

//  Example 2: Find longest substring without repeating characters
function longestUniqueSubstring(str) {
  let start = 0,
    maxLength = 0;
  let seen = {};

  for (let end = 0; end < str.length; end++) {
    const char = str[end];

    if (seen[char] >= start) {
      start = seen[char] + 1;
    }

    seen[char] = end;
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}

console.log(longestUniqueSubstring("abcabcbb")); // Output: 3
