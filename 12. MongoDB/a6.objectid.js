// ObjectId is the default unique identifier (_id) that MongoDB assigns to every document.
// It's a special 12-byte identifier that looks like this:
// "65143c5a3fd1a509b4a3e123"
// Each ObjectId is globally unique and contains:
// * 4 bytes: timestamp
// * 5 bytes: machine/process ID
// * 3 bytes: counter (auto-increment)

// Why ?
// ✅ It uniquely identifies every document
// ✅ It's automatically generated (no need for UUIDs manually)
// ✅ It's indexed by default (faster search on _id)
// ✅ It stores creation time (can extract when doc was created)
// ✅ It's used to build references between documents (like foreign keys)

// ex  1. Default _id usage
const user1 = await User.create({ name: "Rahul" });
console.log(user1._id); // e.g. 65143c5a3fd1a509b4a3e123

// ex 2. Referencing another model (like foreign key)
// Say a Post belongs to a User:
// 📁 post.model.js
const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Post", PostSchema);

// Then in code:
const user = await User.findOne({ email: "rahul@gmail.com" });
await Post.create({
  title: "Hello World",
  content: "My first post",
  author: user._id, // <--- ObjectId of the user
});

// ex 3. Manually creating ObjectId (useful for comparisons)
const mongoose = require("mongoose");

const id = mongoose.Types.ObjectId("65143c5a3fd1a509b4a3e123");
const user2 = await User.findById(id);

// ex 4. Query by ObjectId in route param
router.get("/user/:id", async (req, res) => {
  const id = req.params.id;
  const user = await User.findById(id); // id is ObjectId string
  res.json(user);
});
