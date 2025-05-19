// Schema migration is the process of modifying your existing database schema
// (structure of your collections and documents) over time—especially when your application requirements change.
// MongoDB is schema-less (or schema-flexible), so technically you don’t need migrations like in SQL.
// But in real-world production apps, we often define schemas using Mongoose, and as business logic evolves, we must:

// * Add new fields
// * Remove old ones
// * Rename fields
// * Change data types
// * Backfill data (set default values for existing documents)
// This is called a schema migration.

// Why ?
// * Your application logic changes (e.g. add isActive to users)
// * You normalize/denormalize collections
// * You rename a field (e.g. fullName → name)
// * You improve performance (indexing, types, etc.)
// * Ensure consistency across old and new data
// * You add validations or required fields
// Even though MongoDB is flexible, without structured migrations your data can become messy and inconsistent.

/*
    🔧 Example: Manual Migration with Node.js + Mongoose
Imagine you have this user schema:
Initial user document:

{
  _id: ObjectId("..."),
  name: "John Doe",
  email: "john@example.com"
}

You now want to:
* Add a new field: isActive (default: true)
* Rename name → fullName

Migration Script (Node.js):
*/
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/mydb");

const userSchema = new mongoose.Schema({}, { strict: false });
const User = mongoose.model("User", userSchema);

const runMigration = async () => {
  const users = await User.find();

  for (const user of users) {
    const updates = {};

    // Rename field
    if (user.name) {
      updates.fullName = user.name;
      updates.$unset = { name: "" }; // remove old name
    }

    // Add isActive field if missing
    if (user.isActive === undefined) {
      updates.isActive = true;
    }

    await User.updateOne({ _id: user._id }, updates);
  }

  console.log("Migration completed!");
  mongoose.disconnect();
};

runMigration();

// After migration, document becomes:
// {
//   _id: ObjectId("..."),
//   fullName: "John Doe",
//   email: "john@example.com",
//   isActive: true
// }

/*🧰 Tools for Schema Migrations
For large projects, you might use dedicated tools:
| Tool                   | Notes                                             |
| ---------------------- | ------------------------------------------------- |
| migrate-mongo          | CLI-based migration framework                     |
| MongoDB Change Streams | For watching & transforming data on insert/update |
| Custom Scripts         | Most flexible using Node.js or Python             |
*/

/*
🔒 Best Practices
* Write idempotent migration scripts (can be run multiple times safely)
* Back up your DB before applying migrations
* Test on staging before production
* Log each migration step
* Track applied migrations (e.g., in a migrations collection)
*/
