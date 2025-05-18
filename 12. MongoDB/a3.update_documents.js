// Updating a document means modifying one or more fields in an existing MongoDB record
// (document) based on a condition — typically by _id.

// Why ?
// You use it when:
//     * A user updates their profile (name, age, etc.)
//     * Admin changes user role or status
//     * A product’s price is updated
//     * A booking status is changed from pending → confirmed

// You don’t want to delete or recreate the record — just update it.
// 🔧 Methods to update (via Mongoose):
//     * findByIdAndUpdate
//     * updateOne
//     * updateMany
//     * findOneAndUpdate
//     * Document.save()

// 📦 Example schema: user.model.js
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  role: { type: String, enum: ["user", "admin"], default: "user" },
  age: Number,
});

module.exports = mongoose.model("User", UserSchema);

// ex 1: Update one field by ID (name change)
await User.findByIdAndUpdate(
  userId,
  { name: "New Name" },
  { new: true } // return updated document
);

// ex 2: Update multiple fields
await User.findByIdAndUpdate(userId, {
  name: "Amit Raj",
  age: 30,
});

// ex 3: Update by condition — e.g., role = admin
await User.updateOne({ email: "admin@gmail.com" }, { role: "admin" });

// ex 4: Update many users — e.g., increase age of all users above 30
await User.updateMany(
  { age: { $gt: 30 } },
  { $inc: { age: 1 } } // increment age by 1
);

// ex 5: Using .save() for custom logic
// Example: Load → modify → save
const user = await User.findById(userId);
user.name = "Updated Name";
user.age = 29;
await user.save();

// ex 6: Set nested fields (e.g., update address)
/* If your schema has:
address: {
  city: String,
  pin: Number
}
*/
await User.findByIdAndUpdate(userId, { "address.city": "Mumbai" });

// ex 7: Conditional update with $set
await User.updateOne(
  { email: "amit@example.com" },
  { $set: { role: "admin", name: "Amit Admin" } }
);

/*
—
🔒 Good practice: always use { new: true } to get updated doc.
—
*/
