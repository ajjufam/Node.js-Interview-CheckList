// process.exit()
//     It’s a method in Node.js that immediately stops the Node.js process.

//     Why?
//     * Stop execution manually
//     * Exit after completing a task
//     * Exit with an error code on failure
//     * End the program when a condition fails

//     How?
//     process.exit([code]);
//         code is an optional number that tells the OS why the process exited.
//         0 → success (default)
//         any other number → error/failure

// Without Any Code (defaults to 0)

// Ex 1 [Exit Normally (success)]
console.log("done");
// process.exit(0); // Or just process.exit()

// Ex 2 [Exit with Error]
// if (!process.env.Pass_Key) {
//   console.log("error");
//   process.exit(1);
// }

// Ex 3 (Exit inside a function)
function checkUserAccess(user) {
  if (!user.admin) {
    console.log("error");
    process.exit(1);
  }
}

checkUserAccess({ name: "Ajju" });
