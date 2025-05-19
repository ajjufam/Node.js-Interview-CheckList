// Aggregation in MongoDB is a way to process data records and return computed results. It's similar to SQL
// GROUP BY and JOIN but much more powerful.

// Aggregation uses a "pipeline" where multiple stages (like $match, $group, $sort) are applied one after another
// to transform the data.

// Why ?
// ✅ To perform complex queries like filtering + grouping + counting
// ✅ To generate reports and dashboards
// ✅ To join multiple collections (with $lookup)
// ✅ To reshape data (projection, computed fields)
// ✅ To perform analytics directly in the DB (instead of in Node.js code)

// Syntax
// Model.aggregate([
//   // Stage 1
//   { $stageOperator1: { ...options } },

//   // Stage 2
//   { $stageOperator2: { ...options } },

//   // Stage 3 ......
// ]);

// 📚 Sample students Collection check in  (a8.db_connection.js)
// NOTE : Data should be stored in the Mongodb

const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  age: Number,
  department: String,
  scores: [Number],
  joined: Date,
  scholarship: Boolean,
});

const Student = mongoose.model("Student", studentSchema);

// ex 1. $match
//Use: Filters documents by a condition.
// ✅ Filters only CS students
async function match() {
  console.log("*********************MATCH***********************");

  const result = await Student.aggregate([{ $match: { department: "CS" } }]);
  console.log(" $match :", result);

  console.log("*********************MATCH***********************");
}

// ex 2 $project
// Use: Include/exclude fields or add computed fields.
async function project() {
  console.log("*********************PROJECT***********************");

  const result = await Student.aggregate([
    { $project: { name: 1, avgScore: { $avg: "$scores" } } },
  ]);
  console.log("$project", result);

  console.log("*********************PROJECT***********************");
}

// ex 3 $unwind
// Use: Deconstructs arrays into multiple docs.
async function unwind() {
  console.log("*********************UNWIND***********************");

  const result = await Student.aggregate([{ $unwind: "$scores" }]);
  console.log("$unwing", result);

  console.log("*********************UNWIND***********************");
}

// ex 4 $group
// Use: Groups documents and calculates aggregates.
async function group() {
  console.log("*********************GROUP***********************");

  const result = await Student.aggregate([
    {
      $group: {
        _id: "$department",
        avgAge: { $avg: "$age" },
        count: { $sum: 1 },
      },
    },
  ]);
  console.log("$group", result);

  console.log("*********************GROUP***********************");
}

// ex 5 $sort
// Use: Sorts documents.
async function sort() {
  console.log("*********************SORT***********************");

  const result = await Student.aggregate([{ $sort: { age: -1 } }]); // 1 for asc -1 for desc
  console.log("$sort", result);

  console.log("*********************SORT***********************");
}

// ex 6 $limit
// Use: Limits number of results.
async function limit() {
  console.log("*********************LIMIT***********************");

  const result = await Student.aggregate([{ $limit: 1 }]); // prints only 1 data
  console.log("$limit", result);

  console.log("*********************LIMIT***********************");
}

// ex 7 $skip
// Use: Skips N documents.
async function skip() {
  console.log("*********************SKIP***********************");

  const result = await Student.aggregate([{ $skip: 1 }]); // skips stating 1 data prints (2,3,...)
  console.log("$skip", result);

  console.log("*********************SKIP***********************");
}

// ex 8 $addFields
// Use:Adds computed fields without removing existing ones.
async function addFields() {
  console.log("*********************addFields***********************");

  const result = await Student.aggregate([
    { $addFields: { avgScore: { $avg: "$scores" } } },
  ]);
  console.log("addFields", result);

  console.log("*********************addFields***********************");
}

// ex 9 $lookup
// Use: Join with another collection.
async function lookup() {
  console.log("*********************lookup***********************");
  const result = await Student.aggregate([
    {
      $lookup: {
        from: "departments",
        localField: "department",
        foreignField: "_id",
        as: "deptInfo",
      },
    },
  ]);
  console.dir(result, { depth: null });

  console.log("*********************lookup***********************");
}

// ex 10 $count
// Use: Count number of documents.
async function count() {
  console.log("*********************count***********************");

  const result = await Student.aggregate([{ $count: "totalStudents" }]);
  console.log("$count", result);

  console.log("*********************count***********************");
}

// ex 11 $out
// Use: Writes result to a new collection.
// NOTE : It wont prints anything in console u can check this in Compass new document got created
async function out() {
  console.log("*********************out***********************");

  const result = await Student.aggregate([
    { $project: { name: 1, avgScores: { $avg: "$scores" } } },
    { $out: "avg_scores" },
  ]);
  console.log("$out", result);

  console.log("*********************out***********************");
}

// ex 12 $facet
// Use: Run multiple pipelines at once.
async function facet() {
  console.log("*********************facet***********************");

  const result = await Student.aggregate([
    {
      $facet: {
        byDept: [{ $group: { _id: "$department", count: { $sum: 1 } } }],
        ageStats: [
          {
            $group: { _id: null, avg: { $avg: "$age" }, max: { $max: "$age" } },
          },
        ],
      },
    },
  ]);
  console.dir(result, { depth: null }); // NOTE (How to console)

  console.log("*********************facet***********************");
}

// ex 13 $bucket
// Use: Group by range.
async function bucket() {
  console.log("*********************bucket***********************");
  const result = await Student.aggregate([
    {
      $bucket: {
        groupBy: "$age",
        boundaries: [20, 22, 24, 26],
        default: "Others",
        output: { count: { $sum: 1 } },
      },
    },
  ]);
  console.log("$bucket", result);

  console.log("*********************bucket***********************");
}

// ex 14 $replaceRoot
// Use: Replace doc with a nested field or computed object.
async function replaceRoot() {
  console.log("*********************replaceRoot***********************");
  const result = await Student.aggregate([
    { $replaceRoot: { newRoot: { name: "$name", scoreList: "$scores" } } },
  ]);
  console.log("$replaceRoot", result);

  console.log("*********************replaceRoot***********************");
}

// ex 15 $merge
// Use: Merge output into an existing collection.
// NOTE : It wont prints anything in console u can check this in Compass new document got created
async function merge() {
  console.log("*********************merge***********************");
  const result = await Student.aggregate([
    {
      $merge: {
        into: "final_students",
        whenMatched: "merge",
        whenNotMatched: "insert",
      },
    },
  ]);
  console.log("merge", result);

  console.log("*********************merge***********************");
}

async function runAggregation() {
  // Connect to the same database
  await mongoose.connect("mongodb://localhost:27017/Aggregation_Practice");

  // 1) $match
  await match();

  // 2) $project
  await project();

  // 3) $unwind
  await unwind();

  // 4) $group
  await group();

  // 5) $sort
  await sort();

  // 6) $limit
  await limit();

  // 7) $skip
  await skip();

  // 8) $addFields
  await addFields();

  // 9) $lookup
  await lookup();

  //10) $count
  await count();

  //11) $out
  await out();

  //12) $facet
  await facet();

  // 13) $bucket
  await bucket();

  // 14) $replaceRoot
  await replaceRoot();

  // 15) $merge
  await merge();

  await mongoose.disconnect();
}
runAggregation();
