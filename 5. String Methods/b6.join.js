// join()
//     join() in JavaScript joins all elements of an array into a single string.

//     Why?
//     Use it when you want to combine array items into one string (with or without a separator).

const words = ["Hello", "World"];

console.log(words.join(" ")); // "Hello World"
// It joins with a space between words.

// NOTE
// If you don't pass anything, it joins with a comma , by default.
console.log(words.join());
// "Hello,World"
