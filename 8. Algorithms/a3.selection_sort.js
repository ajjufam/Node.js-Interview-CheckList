// Selection Sort
//     Selection Sort is a simple comparison-based sorting algorithm.
//     It works by repeatedly finding the minimum element from the unsorted part and putting it at the beginning.

//     Why ?
//     Easy to understand and implement.
//     Good for small datasets.
//     Does not require extra memory (in-place sorting).
//     Not the most efficient for large arrays

//     Time Complexity -(n²) - for best, average, and worst
//     space complexity - O(1) - no extra space used
//     When to Use -- 	For small data or learning purposes

function selectionSort(arr) {
  let l = arr.length;
  for (let i = 0; i < l; i++) {
    let min = i;
    for (let j = i + 1; j < l; j++) {
      if (arr[j] < arr[i]) {
        min = j;
      }
    }
    if (min != i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }
  return arr;
}

console.log(selectionSort([3, 2, 5, 98, 4]));

//Algorithms
// Step:1 for i=>0 to len
// Step:2 assing i to variable min
// Step:3 for j=>i+1 to len
// Step:4 if arr[j] < arr[min] then min=j
// Step:5 if min != i (initial value) then swap  [arr[i], arr[min]] = [arr[min], arr[i]];
// Step:6 return arr
