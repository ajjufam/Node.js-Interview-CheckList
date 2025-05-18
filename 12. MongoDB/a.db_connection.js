const mongoose = require("mongoose");
const mongouri = process.env.MONGODB_URI;

const connectDB = () => {
  mongoose
    .connect(mongouri)
    .then(() => console.log(`Mongoose connected successfully`))
    .catch((err) => console.log(`Error while connecting to mongo`, err));
};

module.exports = connectDB;
