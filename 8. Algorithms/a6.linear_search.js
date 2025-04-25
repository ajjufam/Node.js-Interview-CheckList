// Linear Search
//     Linear Search is the simplest search algorithm.
//     It checks each element one by one until the desired value is found or the array ends.

//     Why ?
//     Best for small datasets
//     No sorting required
//     Works on unsorted arrays
//     Very easy to implement

//     Summary
//     Feature         | Detail
//     Type            | Search Algorithm
//     Time Complexity | O(n)
//     Space           | O(1)
//     When to use     | Small or unsorted arrays
//     Stable          | ✅ Yes
//     Simple          | ✅ Very Easy

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

let arr = [1, 2, 4, 3, 9, 8, 7, 8];
console.log(linearSearch(arr, 8)); // 5
console.log(linearSearch(arr, 2)); // 1
console.log(linearSearch(arr, 10)); // -1
