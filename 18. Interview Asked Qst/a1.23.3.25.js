// Count the number of occurance of each months in the given string
// "januaryfebruaryjanuaryfebruarymarchjanuarymarchfebruarymarchmayjunejuly"

function countMonths(str, months) {
  let result = {};
  for (let i = 0; i < months.length; i++) {
    let count = (str.match(new RegExp(months[i], "gi")) || []).length;
    result[months[i]] = count;
  }
  return result;
}

let months = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];
let str =
  "januaryfebruaryjanuaryfebruarymarchjanuarymarchfebruarymarchmayjunejuly";
console.log(countMonths(str, months));
