// Mongoose validation is a way to enforce rules on your MongoDB documents before they get saved to the database.
// It helps ensure data integrity by validating fields according to your specified constraints (like required fields,
// min/max length, value ranges, enums, custom validation, etc.).

// Why ?
// * To prevent bad or invalid data from being saved in your database.
// * To ensure data consistency across your application.
// * To provide meaningful errors back to the user or API client.
// * To reduce bugs and unexpected behavior by controlling data shape and values early.

// Examples
// 1. Required
// Make a field mandatory.
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

// 2. String Length (minlength & maxlength)
// Limit string length.
const userSchema1 = new mongoose.Schema({
  username: { type: String, minlength: 3, maxlength: 20 },
});

// 3. Number Range (min & max)
// Limit number values.
const productSchema = new mongoose.Schema({
  price: { type: Number, min: 0, max: 10000 },
});

// 4. Enum
// Allow only specific string values.
const userSchema2 = new mongoose.Schema({
  role: { type: String, enum: ["user", "admin", "moderator"], default: "user" },
});

// 5. Match (Regex)
// Validate using regex pattern.
const userSchema3 = new mongoose.Schema({
  email: { type: String, match: /.+\@.+\..+/ },
});

// 6. Custom Validation
// Custom validator functions.
const userSchema4 = new mongoose.Schema({
  age: {
    type: Number,
    validate: {
      validator: (v) => v >= 18,
      message: "Age must be 18 or above",
    },
  },
});

// 7. Validate Async
// Async validators for complex validations (e.g., checking uniqueness in DB).
const userSchema5 = new mongoose.Schema({
  username: {
    type: String,
    validate: {
      validator: async function (value) {
        const count = await this.model("User").countDocuments({
          username: value,
        });
        return count === 0;
      },
      message: "Username already exists",
    },
  },
});

// 1. type: String
// This says the username field must be a string.

// 2. validate: { ... }
// This adds custom validation logic.

// Inside that:
// ✅ validator: async function (value) { ... }
// This is an async validator function that runs whenever you try to save or update a document.
// * value → this is the value of the username field being validated.
// * this.model('User') → refers to the Mongoose model for the same collection (used to query).
// * countDocuments({ username: value }) → counts how many users already exist with this username.
// If count === 0 → it returns true → means validation passed.
// If count > 0 → returns false → triggers validation error: "Username already exists"
// Note: This doesn’t work well on update if you're updating the same user with the same username. In that case, you may want to exclude the current document's _id in the query.

// Complete Example Schema with Multiple Validations
const mongoose = require("mongoose");

const userSchema6 = new mongoose.Schema({
  name: { type: String, required: true, minlength: 3, maxlength: 30 },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  },
  age: {
    type: Number,
    min: 18,
    max: 65,
    validate: {
      validator: (v) => v % 1 === 0,
      message: "Age must be an integer",
    },
  },
  role: { type: String, enum: ["user", "admin", "moderator"], default: "user" },
  phone: {
    type: String,
    validate: {
      validator: function (v) {
        return /\d{10}/.test(v);
      },
      message: "Phone must be 10 digits",
    },
  },
});

const User = mongoose.model("User", userSchema6);

module.exports = User;
