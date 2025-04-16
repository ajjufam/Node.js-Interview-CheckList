// Block Scope
//     Created by { ... } like inside if, for, or just curly braces.
//     Variables declared with **let** or **const** inside a block are only accessible inside that block.
//     Not available outside.

//     NOTE : var cannot support in this

//     Feature         | Block Scope                        | Function (Local) Scope
//     Created by      | Any {} block (e.g., if, for, etc.) | Function body function () {}
//     Applies to      | let, const                         | var, let, const
//     var supported?  | ❌ No (var is function-scoped)     | ✅ Yes
//     Access outside? | ❌ No                              | ❌ No

// ex 1
{
  let a = 10;
  console.log("Block Scope :", a);
}
// console.log(a); // cannot be accessible

// ex 2
if (true) {
  let a = 10;
  console.log("Block Scope inside IF :", a);
}
// console.log(a); // cannot be accessible

// ex 3
for (let i = 0; i <= 2; i++) {
  const a = 10;
  console.log("Block scope inside for loop :", a);
}
// console.log(a); // cannot be accessible
