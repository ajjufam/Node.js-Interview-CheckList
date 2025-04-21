// filter()
//     filter() creates a new array with only those elements that pass a condition (i.e., the callback returns true).

//     Why ?
//     To select specific elements from an array based on a condition, without changing the original array.

//Syntax
// const newArray = oldArray.filter((value, index, array) => {
//   return condition; // // true to keep the item, false to discard it
// });

// Ex 1 ("**********Filter even numbers************")
console.log("**********Filter even numbers************");
const numbers = [1, 3, 2, 4, 5, 6, 8, 10];
const evenNumbers = numbers.filter((ele) => ele % 2 === 0);
console.log(evenNumbers);
// [ 2, 4, 6, 8, 10 ]

// Ex 2 ("**********Filter strings by length************")
console.log("**********Filter strings by length************");
const strings = ["a", "aa", "aaa", "aaaa", "aaaaa"];
const fixLength = strings.filter((ele) => ele.length > 2);
console.log(fixLength);
// [ 'aaa', 'aaaa', 'aaaaa' ]

// Ex 3 ("**********Filter objects based on property***********")
console.log("**********Filter objects based on property***********");
const users = [
  { name: "Ajju", isActive: true },
  { name: "Devil", isActive: false },
];
const allActiveUsers = users.filter((user) => user.isActive);
console.log(allActiveUsers);
// [ { name: 'Ajju', isActive: true } ]

// Ex 3 ("**********Using index***********")
console.log("**********Using index***********");
const elements = ["a", "b", "c", "d"];
const basedOnIndex = elements.filter((_, index) => index % 2 == 0);
console.log(basedOnIndex);
// [ 'a', 'c' ]

// ⚠️ Key Points:
// Returns a new array.
// Original array is unchanged.
// Only includes elements where callback returns true.

//Summary
// Feature            | filter()
// Changes original?  | ❌ No
// Returns new array? | ✅ Yes
// Used for?          | Selecting items that meet criteria
// Callback args      | value, index, array
