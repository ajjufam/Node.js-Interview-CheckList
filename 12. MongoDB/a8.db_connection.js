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

const departmentSchema = new mongoose.Schema({
  _id: String,
  faculty: String,
});

const Department = mongoose.model("Department", departmentSchema);

async function insertStudents() {
  await mongoose.connect("mongodb://localhost:27017/Aggregation_Practice");

  await Department.insertMany([
    { _id: "CS", faculty: "Engineering" },
    { _id: "Math", faculty: "Science" },
  ]);
  console.log("Department inserted");

  await Student.insertMany([
    {
      _id: 1,
      name: "Alice",
      age: 23,
      department: "CS",
      scores: [85, 90, 78],
      joined: new Date("2021-08-10"),
      scholarship: true,
    },
    {
      _id: 2,
      name: "Bob",
      age: 21,
      department: "Math",
      scores: [70, 75, 80],
      joined: new Date("2022-01-15"),
      scholarship: false,
    },
    {
      _id: 3,
      name: "Charlie",
      age: 24,
      department: "CS",
      scores: [88, 92],
      joined: new Date("2020-06-25"),
      scholarship: true,
    },
  ]);

  console.log("Students inserted");
  mongoose.disconnect();
}

insertStudents();
