// Indexing in MongoDB is a way to improve the speed of read/query operations by creating special data structures
// (indexes) that help MongoDB locate data faster — like a book’s index page.
// * By default, every MongoDB collection creates an index on the _id field.

// Why ?
// ✅ Makes queries much faster
// ✅ Reduces CPU/IO load
// ✅ Essential for large datasets
// ✅ Needed for sorting, filtering, pagination
// ✅ Allows constraints (e.g. unique email)

//*****************************************************************************************/
// Ex 1. Single Field Index
// Used when you frequently query a single field.
UserSchema.index({ email: 1 }); // 1 = ascending

// Use case:
User.findOne({ email: "rahul@gmail.com" }); // Fast

//*****************************************************************************************/
// Ex 2. Compound Index (multiple fields)
// Use when filtering by multiple fields together.
UserSchema.index({ email: 1, phone: 1 });

// Use case:
User.findOne({ email: "rahul@gmail.com", phone: "9999999999" });
// ⚠️ Order matters in compound indexes!

//*****************************************************************************************/
// Ex 3. Unique Index
// Ensures no duplicate values.
UserSchema.index({ email: 1 }, { unique: true });

// Use case:
// Prevents users from signing up with the same email.

//*****************************************************************************************/
// Ex 4. Text Index
// Used for searching across multiple fields (like a search bar).
PostSchema.index({ title: "text", content: "text" });

// Use case:
Post.find({ $text: { $search: "mongodb indexing" } });

//*****************************************************************************************/
// Ex 5. Hashed Index
// Used for sharding collections (horizontal scaling).
UserSchema.index({ _id: "hashed" });

// Rarely used in single-node systems. Mostly for distributed MongoDB clusters.

//*****************************************************************************************/
// Ex 6. Sparse Index
// Only indexes documents that have the field.
UserSchema.index({ phone: 1 }, { sparse: true });

// Use case:
// Only users with phone numbers are indexed — good for optional fields.

//*****************************************************************************************/
// Ex 7. TTL (Time To Live) Index
// Automatically deletes documents after a certain time.
TokenSchema.index({ createdAt: 1 }, { expireAfterSeconds: 3600 });

// Use case:
// One-time tokens that expire after 1 hour.

//*****************************************************************************************/
// Ex 8. Geospatial Index (2dsphere)
// Used for location-based queries.
StoreSchema.index({ location: "2dsphere" });

// Use case:
Store.find({
  location: {
    $near: {
      $geometry: { type: "Point", coordinates: [lng, lat] },
      $maxDistance: 5000, // meters
    },
  },
});

/*
🛠 Real Example from IMS/Insurance Project:
    You can use indexes like:
    email, phone: unique index
    claimId, policyNumber: single/compound index
    createdAt: for sorting/pagination
    city, pincode: for search filters
    expired tokens/sessions: TTL index
*/

// 🔎 How to View Existing Indexes
db.users.getIndexes();

// 🧼 How to Drop Index
User.collection.dropIndex("email_1");
