// REPL
//     🔁 Read
//     ⚙️ Eval
//     📝 Print
//     ⏹️ Loop
//     It’s an interactive environment where you can run JavaScript code line-by-line — like a live playground!

//     Why?
//     * Test small pieces of code quickly 🧪
//     * Debug expressions and functions 🐞
//     * Explore Node.js APIs easily 🚀
//     * No need to create a file or run node file.js 💡

// 🟦 How to Start REPL
// Just open a terminal and type:
// node
// You'll see:
// >
// Now you're inside the Node.js REPL.

// 🔹 Example Commands in REPL
// > 2 + 3
// 5

// > const name = "Alice"
// undefined

// > name.toUpperCase()
// 'ALICE'

// > [1, 2, 3].map(n => n * 2)
// [ 2, 4, 6 ]

// 🔹 Use REPL for Node.js Modules
// > const fs = require('fs')
// > fs.readdirSync('.')
// [ 'app.js', 'package.json' ]

// 🧠 Fun Tip
// You can even run REPL code from a file:
// node -i -e "$(< script.js)"

// 🔸 REPL Shortcuts
// | Shortcut                  | Action                           |
// |---------------------------|----------------------------------|
// | `.help`                   | Show REPL commands help          |
// | `.exit` or `Ctrl+C` twice | Exit REPL                        |
// | `.clear`                  | Clear REPL context               |
// | `_`                       | Last evaluated result            |

// > 5 + 5
// 10
// > _ * 2
// 20
