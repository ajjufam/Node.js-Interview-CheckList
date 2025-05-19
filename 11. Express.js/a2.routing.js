// Routing (GET, POST, PUT, DELETE)
//     Routing is the process of defining endpoints (URLs) in your server and deciding how your server responds to
//     client requests made to those endpoints. Each route handles a specific HTTP method and URL path.

//     why ?
//     * To organize your app so different URLs and HTTP methods trigger specific logic.
//     * To handle client requests properly (fetch data, send data, update or delete data).
//     * To build RESTful APIs which use these methods to manage resources.

//     HTTP Methods
//     | Method | Purpose              | Example use case                   |
//     | ------ | -------------------- | ---------------------------------- |
//     | GET    | Retrieve data        | Get user details                   |
//     | POST   | Create new data      | Submit a new form or create a user |
//     | PUT    | Update existing data | Update user profile info           |
//     | DELETE | Remove data          | Delete a user or a resource        |

//     How ?
//     You use Express app methods that correspond to HTTP methods:
//     * app.get(path, handler)
//     * app.post(path, handler)
//     * app.put(path, handler)
//     * app.delete(path, handler)

// Example: Basic Routing in Express
const express = require("express");
const app = express();
const port = 3000;

// Middleware to parse json data
app.use(express.json());

// GET - fetch data
app.get("/users", (req, res) => {
  res.send(`GET request to fetch all users`);
});

// POST - create data
app.post("/users", (req, res) => {
  const newUser = req.body;
  res.send(`POST req to create user: ${JSON.stringify(newUser)} `);
});

// PUT - update data
app.put("/users/:id", (req, res) => {
  const userId = req.params.id;
  const updateData = req.body;
  res.send(
    `PUT req to update user ${userId} with data: ${JSON.stringify(updatedData)}`
  );
});

// DELETE - delete data
app.delete("/users/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`DELETE request to remove user with id ${userId}`);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
