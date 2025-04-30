require("dotenv").config();
const express = require("express");
const db = require("./config/db.config");
const app = express();
const port = process.env.PORT;
const userRouter = require("./routes/users.routes");

app.use(express.json());
app.use("/api/v1/users", userRouter);

db();
app.listen(port, () => {
  console.log(`Listening on port number ${port}`);
});
