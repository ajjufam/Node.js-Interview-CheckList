// Deleting a document means permanently removing a record from your MongoDB collection.
// Mongoose gives you several ways to delete:
//     * deleteOne()
//     * deleteMany()
//     * findByIdAndDelete()
//     * findOneAndDelete()
// There’s also the soft delete pattern (where you just mark deleted: true).

// Why ?
// In real-world apps, we delete documents when:
//     * A user deletes their account
//     * Admin removes a product or post
//     * An expired session/token is removed
//     * An order is canceled and should not appear anymore
// Note: Sometimes, we soft delete instead of hard delete — more on that below.

// 📦 Example Schema — user.model.js
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  isDeleted: { type: Boolean, default: false }, // for soft delete
});

module.exports = mongoose.model("User", UserSchema);

// ex 1. Delete by ID
// Hard delete:
await User.findByIdAndDelete(userId);

// ex 2. Delete by condition
await User.deleteOne({ email: "john@example.com" });

// ex 3: Delete multiple users (e.g., test/demo accounts)
await User.deleteMany({ email: /testuser/ });
// 🧾 Use case: Bulk delete after testing or seeding

// ex 4: Soft delete (recommended for most real-world apps)
// Instead of actually removing the document, just mark it as deleted:
await User.findByIdAndUpdate(userId, { isDeleted: true });

// And then make sure to exclude soft-deleted documents in queries:
const users = await User.find({ isDeleted: false });

// 🧨 Danger of hard deletes:

// You lose data permanently
// No undo option
// Can break related documents (foreign keys, refs)
// So always ask yourself: do I need a real delete or soft delete?

// ex 5: Delete with findOneAndDelete
const deletedUser = await User.findOneAndDelete({ email: "demo@gmail.com" });
console.log("Deleted user:", deletedUser);
