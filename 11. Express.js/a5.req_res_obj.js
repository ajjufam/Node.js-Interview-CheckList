// * req stands for request object — it represents the HTTP request from the client.
// * res stands for response object — it is used to send back the HTTP response to the client.
// They are the two core objects you work with inside every route handler or middleware.

// What does req contain?
// The req object holds information about the client’s request, such as:
// * req.params — route parameters (e.g., /users/:id → req.params.id)
// * req.query — query string parameters (e.g., /search?q=term → req.query.q)
// * req.body — data sent in the body of POST/PUT requests (requires body parser middleware)
// * req.headers — HTTP headers sent by the client
// * req.method — HTTP method (GET, POST, etc.)
// * req.url — the full URL requested

// What can you do with res?
// The res object lets you craft and send the response:
// * res.send() — send a response (string, buffer, JSON, etc.)
// * res.json() — send a JSON response (sets content-type automatically)
// * res.status(code) — set the HTTP status code (e.g., 200, 404, 500)
// * res.redirect(url) — redirect the client to another URL
// * res.render() — render a template view (if using a view engine)
// * res.set() — set response headers

// Example: Using req and res
app.get("/users/:id", (req, res) => {
  const userId = req.params.id; // get route parameter
  const filter = req.query.filter; // get query parameter

  // Fake user data response
  const user = { id: userId, name: "Alice", filterUsed: filter };

  res.status(200).json(user); // send JSON response with status 200
});

// Summary
// | Object | Key Usage                                            |
// | ------ | ---------------------------------------------------- |
// | `req`  | Access request data — params, query, body, headers   |
// | `res`  | Send responses — text, JSON, status codes, redirects |
