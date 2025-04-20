// Rest Parameters

// What ?
//     ...rest allows you to gather all remaining arguments into a single array.

// Why ?
//     * To accept any number of arguments in a function.
//     * It's a cleaner and more modern alternative to the arguments object.

// Ex
function count(...args) {
  console.log(args.reduce((acc, val) => acc + val, 0));
}

count(30, 50, 80, 90, 1000); // No limits to pass argumets (Pass N number of arguments)
