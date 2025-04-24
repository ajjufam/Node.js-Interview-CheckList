// Insertion Sort
//     Insertion Sort builds the final sorted array one item at a time. It’s similar to how you might sort playing cards in your hand.

//     How ?
//     * Start from the second element (index 1).
//     * Compare it with the elements before.
//     * Shift all greater elements one position to the right.
//     * Insert the current element in the correct position.

// Time Complexity
//     Case    | Time
//     Best    | O(n) (alreay sorted)
//     Average | O(n²)
//     Worst   | O(n²)
//     Space   | O(1)

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}
console.log(insertionSort([29, 25, 87, 98, 13]));
