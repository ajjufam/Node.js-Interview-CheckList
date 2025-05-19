// ✅ Route Parameters (req.params)
// Route parameters are named URL segments used to capture values from the URL.

// Why ?
// To identify resources — like a specific user, product, or order.

// Syntax
app.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`User ID: ${userId}`);
});

// 🔹 Example:
// Request → GET /users/42
// Response → User ID: 42
// Use when the value is part of the path structure.

// ✅ Query Parameters (req.query)
// Query parameters are key-value pairs in the URL after the ?.

// Why ?
// To filter, sort, paginate, or search data without changing the route path.

// Syntax
app.get("/search", (req, res) => {
  const keyword = req.query.q;
  res.send(`Search keyword: ${keyword}`);
});

// 🔹 Example:
// Request → GET /search?q=apple
// Response → Search keyword: apple
// Use when the value is optional or for additional instructions.

// ✅ Combined Example
app.get("/products/:id", (req, res) => {
  const productId = req.params.id;
  const showDetails = req.query.details;

  res.send(`Product ID: ${productId}, Show details: ${showDetails}`);
});

// URL: /products/123?details=true
// Output: Product ID: 123, Show details: true

// Summary
// | Type        | Use for                           | Access with  | Example URL        |
// | ----------- | --------------------------------- | ------------ | ------------------ |
// | Route Param | Required identifiers (e.g. `/id`) | `req.params` | `/users/5`         |
// | Query Param | Optional filters/sorting          | `req.query`  | `/users?sort=name` |
