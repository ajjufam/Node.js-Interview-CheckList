// Mongoose is an ODM (Object Data Modeling) library for MongoDB and Node.js.
// It helps you interact with MongoDB using JavaScript objects instead of raw database commands.

// Why ?
// | Feature           | Benefit                                                             |
// | ----------------- | ------------------------------------------------------------------- |
// | **Schema-based**  | Enforces structure and validation on MongoDB's flexible documents   |
// | **Models**        | Provides a clean way to define and reuse collections (like classes) |
// | **Validation**    | Built-in and custom validation support                              |
// | **Middleware**    | Add pre/post hooks for things like `save`, `remove`, etc.           |
// | **Query Helpers** | Chainable, promise-based MongoDB queries                            |
// | **Relationships** | Supports population (joins) using `.populate()`                     |
// | **Easy CRUD**     | Simplifies common database operations                               |

// npm install mongoose
const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/mydb");

// Schema
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
});

// Model
const User = mongoose.model("User", userSchema);

// Create and save a new user
async function createUser() {
  const user = new User({
    name: "Alice",
    age: 25,
    email: "alice@example.com",
  });

  await user.save();
  console.log("User saved!");
}

// Run
createUser();
