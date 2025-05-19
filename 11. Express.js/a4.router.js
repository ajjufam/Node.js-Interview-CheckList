// A Router in Express is a mini, modular subset of the main app that can handle its own routes and middleware.
// It lets you organize your application’s routes into smaller, manageable pieces instead of cluttering everything
// in one big file.

// Why ?
// * To organize routes logically by feature or resource (e.g., users, products, orders).
// * To keep code modular and maintainable.
// * To apply middleware only to specific groups of routes.
// * To reuse and mount route handlers in different parts of your app.

// How to Use
// * Create a router object with express.Router().
// * Define routes on this router.
// * Export the router if in a separate file.
// * Mount the router in your main app using app.use().

// Example: Using Router for user-related routes
const express = require("express");
const app = express();
const port = 3000;

// Create a router
const userRouter = express.Router();

// Define routes on userRouter
userRouter.get("/", (req, res) => {
  res.send("Get all users");
});

userRouter.post("/", (req, res) => {
  res.send("Create a new user");
});

userRouter.get("/:id", (req, res) => {
  res.send(`Get user with id ${req.params.id}`);
});

// Mount the userRouter on /users path
app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
