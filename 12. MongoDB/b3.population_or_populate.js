// In Mongoose, populate() is a way to automatically replace the specified path in a document with actual documents
// from another collection.
// 👉 It's like doing a "JOIN" in SQL — MongoDB doesn't support JOINs directly, but Mongoose gives us this feature via populate.

// Why ?
// Imagine you have 2 collections:
//     * Users
//     * Posts
// Each Post has a reference (userId) to a User. But when you query Posts, you want the full user info,
// not just the userId.
// Instead of making 2 separate queries, you use populate to "pull in" the user details directly.

// 🧠 populate is used to initialize the "foreign key" in MongoDB — meaning:
// * You store just the ObjectId of the related document (like userId in a Post)
// * But when you use populate(), Mongoose goes and fetches the actual document (like full user details)
// * It replaces the ObjectId with the full object

// ✅ Step-by-Step Examples
// Let’s say we have 2 schemas:
// * User
// * Post (which has a reference to User)
// 🔹 1. Basic Example — One-to-One
// 🧾 user.model.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

module.exports = mongoose.model("User", userSchema);

// 🧾 post.model.js
const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // reference to User model
  },
});

module.exports = mongoose.model("Post", postSchema);

// 👨 Create sample data:
const user = await User.create({ name: "Bro", email: "bro@example.com" });
await Post.create({
  title: "First Post",
  content: "Hello world",
  userId: user._id,
});

// 📥 Fetch post with user populated:
const posts = await Post.find().populate("userId");
console.log(posts);

// o/p
[
  {
    _id: "post-id",
    title: "First Post",
    content: "Hello world",
    userId: {
      _id: "user-id",
      name: "Bro",
      email: "bro@example.com",
    },
  },
];

// 🔹 2. Select specific fields
const posts1 = await Post.find().populate("userId", "name");

// O/p
// {
//   "userId": {
//     "name": "Bro"
//   }
// }

// 🔹 3. Nested Populate (One-to-Many)
// Add a Comment schema that refers to Post:
// 🧾 comment.model.js
const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  text: String,
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
  },
});

module.exports = mongoose.model("Comment", commentSchema);

// Then you can do nested populate:
const comments = await Comment.find().populate({
  path: "postId",
  populate: {
    path: "userId",
    model: "User",
  },
});

console.log(comments);

// o/p
[
  {
    text: "Great post",
    postId: {
      title: "First Post",
      userId: {
        name: "Bro",
      },
    },
  },
];

// 🔹 4. Populate Virtual Field (Advanced)
// Let’s say you want to fetch all posts written by a user without storing post IDs in the user schema.
// Use virtuals.
// 🧾 In user.model.js:
userSchema.virtual("posts", {
  ref: "Post",
  localField: "_id",
  foreignField: "userId",
});

userSchema.set("toObject", { virtuals: true });
userSchema.set("toJSON", { virtuals: true });

// 🔍 Now you can do:
const userWithPosts = await User.find().populate("posts");
console.log(userWithPosts);

// o/p
[
  {
    name: "Bro",
    posts: [
      {
        title: "First Post",
        content: "Hello world",
      },
    ],
  },
];

// Summary
// | Type              | Example                                     |
// | ----------------- | ------------------------------------------- |
// | Basic             | populate('userId')                          |
// | With fields       | populate('userId', 'name')                  |
// | Nested            | populate({ path: 'postId', populate: ... }) |
// | Virtual (reverse) | Define virtual & populate('posts')          |
