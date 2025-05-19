// Mongoose connection refers to connecting your Node.js application to your MongoDB database using the Mongoose library.
// It's how you tell your app:
// "Here’s the database I want to use."

// Why ?
// * It establishes a link between your code and MongoDB.
// * Without connecting, you can’t read/write/update/delete data.
// * You can define how Mongoose handles errors, retries, timeouts, etc.
// * You can manage connection pooling, events (like on open, error), and more.

// Examples
// 1. 🔄 Using Async/Await (Modern Way – Recommended)
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/myapp", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB connected using async/await");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1); // exit app if DB connection fails
  }
};

connectDB();

// 2. ⛓️ Using Promises (.then/.catch)
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/myapp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected using Promise"))
  .catch((err) => {
    console.error("❌ Connection error:", err.message);
    process.exit(1);
  });

// 3. 🧠 One-time Connection with Connection Events
// You can listen to mongoose.connection to log connection states:
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/myapp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (err) => console.error("❌ MongoDB error:", err));
db.once("open", () => console.log("✅ MongoDB connected (events)"));
