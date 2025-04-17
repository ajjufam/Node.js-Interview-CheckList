// The Temporal Dead Zone is the time between when a variable is hoisted and when it is initialized.
// During this period, accessing the variable will throw a ReferenceError.

// Applies to:
// ✅ let
// ✅ const
// ❌ "var" is not affected by TDZ — it's hoisted and initialized with "undefined".

// Keyword | Hoisted | Initialized Before Use? | Affected by TDZ?
// var     | ✅ Yes  | ✅ Yes (undefined)     | ❌ No
// let     | ✅ Yes  | ❌ No                  | ✅ Yes
// const   | ✅ Yes  | ❌ No                  | ✅ Yes

// ex 1
console.log(a); // ❌ ReferenceError: Cannot access 'a' before initialization
let a = 5;

// ex 2
{
  // TDZ starts
  // console.log(x); ❌ ReferenceError
  const x = 10; // TDZ ends here
  console.log(x); // ✅ 10
}
