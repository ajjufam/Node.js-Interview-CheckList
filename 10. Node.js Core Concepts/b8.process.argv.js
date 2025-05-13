// process.argv
//     process.argv is an array in Node.js that contains the command-line arguments passed when starting the script.

//     Why?
//     * To read user input from the command line
//     * To build custom CLI tools
//     * To change script behavior dynamically

//     How?
//     process.argv

// Ex 1 basic
console.log(process.argv);
// [
//   'C:\\Program Files\\nodejs\\node.exe',   // (process.argv[0] → Node executable path)
//   'C:\\Users\\prajw\\OneDrive\\Desktop\\Node.js-Interview-CheckList\\10. Node.js Core Concepts\\b8.process.argv.js' // (process.argv[1] → Path to your script)
//      process.argv[2] onward → User arguments
// ]

// Ex 2 (user input)
console.log("user input", process.argv[2]);
// cli cmd ( node .\b8.process.argv.js hello ) // o/p hello
// cli cmd ( node .\b8.process.argv.js "hello world" ) // o/p hello world

// Ex 3 (Simple calculator)
let input1 = parseFloat(process.argv[2]);
let oprator = process.argv[3];
let input2 = parseFloat(process.argv[4]);

let result;
switch (oprator) {
  case "+":
    result = input1 + input2;
    break;
  case "-":
    result = input1 - input2;
    break;
  case "*":
    result = input1 * input2;
    break;
  case "/":
    result = input1 / input2;
    break;
  case "%":
    result = input1 % input2;
    break;
  default:
    console.log("Invalid operator");
    process.exit(1);
}

console.log("Result :", result);
