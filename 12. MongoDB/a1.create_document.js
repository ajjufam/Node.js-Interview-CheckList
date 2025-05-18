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

// Ex 1 : Basic Schema
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

module.exports = mongoose.model("User", UserSchema);

// Ex 2: With Enum Field
const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: String,
  category: {
    type: String,
    enum: ["electronics", "clothing", "grocery"], // only allowed values
    required: true,
  },
  price: Number,
});

module.exports = mongoose.model("Product", ProductSchema);

// Ex 3: Nested Document (Embedded Subdocument)
const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  customerName: String,
  shippingAddress: {
    street: String,
    city: String,
    pincode: Number,
  },
  totalAmount: Number,
});

module.exports = mongoose.model("Order", OrderSchema);

// Ex 4: Array of Subdocuments
const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
  title: String,
  content: String,
  comments: [
    {
      user: String,
      message: String,
      createdAt: { type: Date, default: Date.now },
    },
  ],
});

module.exports = mongoose.model("Blog", BlogSchema);

// Ex 5: With Required, Default, and Validation
const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, default: "staff" },
  salary: { type: Number, min: 10000 },
  email: {
    type: String,
    required: true,
    match: /.+\@.+\..+/, // basic email regex
  },
});

module.exports = mongoose.model("Employee", EmployeeSchema);
