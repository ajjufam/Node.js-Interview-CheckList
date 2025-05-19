// In MongoDB, creating a document means inserting a new JSON-like object into a collection in a database.
// {
//     "_id": ObjectId("..."),
//     "name": "John",
//     "email": "john@example.com"
// }

// Why ?
// You create documents to:
// * Store application data (users, orders, products, etc.)
// * Maintain schema-flexible records
// * Add entries to your collection
// * Build APIs that rely on persistent storage

// 🔨 Examples
// 1. Mongo Shell
// use myDatabase

db.users.insertOne({
  name: "Alice",
  age: 25,
  email: "alice@example.com",
});

// 2. Node.js (MongoDB Native Driver)
const { MongoClient } = require("mongodb");

async function createDocument() {
  const client = new MongoClient("mongodb://localhost:27017");
  await client.connect();

  const db = client.db("myDatabase");
  const result = await db.collection("users").insertOne({
    name: "Bob",
    email: "bob@example.com",
  });

  console.log("Inserted ID:", result.insertedId);
  await client.close();
}

// 3. Mongoose (ODM for Node.js)
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const User = mongoose.model("User", userSchema);

mongoose.connect("mongodb://localhost:27017/myDatabase").then(async () => {
  const newUser = new User({ name: "Charlie", email: "charlie@example.com" });
  await newUser.save();
  console.log("User saved!");
});

// 5. REST API with Express.js
app.post("/users", async (req, res) => {
  const user = await db.collection("users").insertOne(req.body);
  res.send(user);
});
