// arguments objects

// What ?
//     arguments is an array-like object available inside regular functions (not arrow functions) that
//     holds all the arguments passed to the function.

// Why ?
//     * To access arguments without knowing how many were passed.
//     * Useful for functions that accept a variable number of arguments.

// Ex
function argu() {
  console.log(Array.from(arguments)); // [ 'Ajju', 22, 2025, 'Bangalore' ]

  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}

argu("Ajju", 22, 2025, "Bangalore");

// ⚠️ Note:
// arguments does not work in arrow functions.
// It is not a real array (so methods like map or forEach won't work unless you convert it).
