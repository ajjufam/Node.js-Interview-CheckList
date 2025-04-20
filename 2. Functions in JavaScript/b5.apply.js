// apply()

// What ?
//     apply() is just like call() — it allows you to call a function and set the this context.

//     🔑 The only difference:
//     While call() takes arguments separately,
//     apply() takes them as an array.

// Why ?
// * To explicitly set this when calling a function.
// * When you already have arguments in an array or array-like form, apply() saves you from manually unpacking them.
// * Useful in scenarios like using Math.max on an array or forwarding arguments

//Syntax
// functionName.apply(thisArg, [arg1, arg2, ...]);

// Ex 1
function applyEx(city, age) {
  console.log(`${this.firstName} ${this.lastName} from ${city} age ${age}`);
}

const person = {
  firstName: "Ajju",
  lastName: "AU",
};

applyEx.apply(person, ["Bangalore", 25]);

//Summary
// Feature        | call()                       | apply()
// Context (this) | ✅ Yes                       | ✅ Yes
// Arguments      | Comma-separated (arg1, arg2)  | As an array ([arg1, arg2])
// Use case       | When you know exact arguments | When arguments are already in array
