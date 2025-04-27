// Nullish Coalescing (??)
//     The Nullish Coalescing Operator (??) is used to provide a default value when the left-hand side is null or undefined.
//     👉 It only checks for null or undefined, not other falsy values like 0, false, or "".

//     Why?
//     * To safely assign fallback values when something might be null or undefined.
//     * Better and more precise than using || (logical OR), because || treats many things as falsy.

//     How?
//     const result = value ?? defaultValue;

//     If value is null or undefined, it will return defaultValue.
//     Otherwise, it returns value.

const person = {
  name: null,
  age: 0,
};

const userName = person.name ?? "Anonymous";
console.log(userName); // Output: Anonymous

const userAge = person.age ?? 18;
console.log(userAge); // Output: 0 (NOT 18, because 0 is not null/undefined)

// If you used || here, 0 would be treated as falsy and you'd mistakenly get 18.
