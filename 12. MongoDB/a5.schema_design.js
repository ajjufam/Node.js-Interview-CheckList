// Schema Design is the process of defining the structure of your documents in a MongoDB collection using fields,
// types, relationships, constraints, and indexes.
// In Mongoose (Node.js), you define schemas using new mongoose.Schema(), then create models based on that schema.

// Why ?
// * Ensures data consistency (type-safe: name = string, age = number)
// * Controls validation (required, unique, enums, etc.)
// * Improves query performance (via indexing and structure)
// * Supports complex/nested relationships
// * Makes your codebase maintainable and scalable

// ex 1 :Basic Flat Schema (User)
// 📁 user.model.js
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, unique: true },
  isDeleted: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", UserSchema);

// Ex 2. Schema with Enum (Order Status)
// 📁 order.model.js
const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  orderNumber: { type: String, required: true },
  status: {
    type: String,
    enum: ["pending", "confirmed", "shipped", "delivered", "cancelled"],
    default: "pending",
  },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Order", OrderSchema);

// ex  3. Nested Schema (Address inside User)
// 📁 user.model.js
const AddressSchema = new mongoose.Schema(
  {
    city: String,
    state: String,
    zip: String,
  },
  { _id: false }
);

const UserSchema1 = new mongoose.Schema({
  name: String,
  email: String,
  address: AddressSchema,
});

module.exports = mongoose.model("User", UserSchema1);

// Ex 4. Array of Nested Subdocs (User with multiple addresses)
const AddressSchema1 = new mongoose.Schema(
  {
    label: { type: String, enum: ["home", "work"] },
    city: String,
    zip: String,
  },
  { _id: false }
);

const UserSchema2 = new mongoose.Schema({
  name: String,
  email: String,
  addresses: [AddressSchema1],
});

// Use Case: User can save multiple addresses (Amazon-style)

// ex 5. Referenced Documents (Post + Comments)
// 📁 post.model.js
const PostSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Post", PostSchema);

// 📁 comment.model.js
const CommentSchema = new mongoose.Schema({
  postId: { type: mongoose.Schema.Types.ObjectId, ref: "Post" },
  content: String,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Comment", CommentSchema);

// Use Case: Blog or forum app

// 🛠 Bonus: Indexes for performance
UserSchema.index({ email: 1 }, { unique: true });
OrderSchema.index({ orderNumber: 1 });
