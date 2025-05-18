// Reading means querying or retrieving documents from a MongoDB collection.
// This can be:
// * One document → findOne(), findById()
// * Many documents → find(), with filters, projections, sorting, etc.

// why ?
// To:
// * Show user data in dashboards
// * Authenticate users
// * List orders/products
// * Check status, verify inputs
// * Populate dropdowns or relations
// In short: any time we fetch data from DB, we use read queries.

// Assume you already connected Mongoose and have a User schema like:
// user.model.js:
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  role: String,
  age: Number,
});

module.exports = mongoose.model("User", UserSchema);

// ex 1. Get all users — for admin dashboard
const User = require("./model/user.model.js");
const users = await User.find();
/*O/P
        [
            { _id: ..., name: 'Amit', email: 'amit@x.com', role: 'admin' },
            { _id: ..., name: 'Sara', email: 'sara@x.com', role: 'user' }
        ]
*/

// ex 2. Get one user by ID — for profile page
const getUserById = async (id) => {
  return await User.findById(id); // auto cast to ObjectId
};
/*
        { _id: ..., name: 'Amit', email: 'amit@x.com', role: 'admin' }
*/

// ex 3. Find One by Filter
const getUserByEmail = async (email) => {
  return await User.findOne({ email });
};
/*
        { _id: ..., name: 'Amit', email: 'amit@x.com', role: 'admin' }
*/

// ex 4. Filter + Select Specific Fields (Projection)
const getUserBasicInfo = async (email) => {
  return await User.findOne({ email }).select("name role"); // only name and role
};
/*
        [ { name: 'Amit', role: 'admin' }, { name: 'Sara', role: 'user' } ]
*/

// ex 5. Find with Sorting
const getUsersSortedByName = async () => {
  return await User.find().sort({ name: 1 }); // ascending
};
/*
        name sorted ascending
*/

// ex 6. Find with Limit and Skip (Pagination)
const getPaginatedUsers = async (page, limit) => {
  const skip = (page - 1) * limit;
  return await User.find().skip(skip).limit(limit);
};
/*
    skip(n) tells MongoDB to skip the first n documents from the result.
    So if skip(10), MongoDB ignores the first 10 documents and starts returning from the 11th.

    Now let’s say:
    limit = 5 // You want 5 records per page
    Then the skip value changes depending on page number:
        Page 1 → skip = (1 - 1) × 5 = 0 → MongoDB returns users 1-5
        Page 2 → skip = (2 - 1) × 5 = 5 → MongoDB skips 5, returns users 6-10
        Page 3 → skip = (3 - 1) × 5 = 10 → MongoDB skips 10, returns users 11-15
*/

// ex 7. Find with Regex (Search)
const searchUsersByName = async (keyword) => {
  return await User.find({
    name: { $regex: keyword, $options: "i" }, // case-insensitive search
  });
};
/*
    const users = await User.find({ name: { $regex: 'am', $options: 'i' } });

    Matches names like Amit, Sam, Ram, etc.
*/

// ex 8. Nested field query — e.g. search orders from city = Mumbai
// shippingAddress: {
//   city: String,
//   street: String
// }
Order.find({ "shippingAddress.city": "Mumbai" });

// ex 9. populate
// populate is used to automatically replace the ObjectId in one document
// with the actual document it references — like a JOIN in SQL.
