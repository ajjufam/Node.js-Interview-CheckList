// ✅ Sending JSON in Express
// You send JSON when you want to respond with structured data (like an object or array). It's commonly used in APIs.

// How ?
// Use res.json() — it sets the Content-Type header to application/json automatically.

// Ex
app.get("/api/user", (req, res) => {
  const user = {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
  };
  res.status(200).json(user); // send JSON with status code
});

// ✅ Sending HTML in Express
// You send HTML when you're returning a complete web page (static or dynamically generated).

// How ?
// Use res.send() to send raw HTML content.

// Ex
app.get("/welcome", (req, res) => {
  res.send(`
    <html>
      <head><title>Welcome</title></head>
      <body>
        <h1>Hello, visitor!</h1>
        <p>Welcome to our website.</p>
      </body>
    </html>
  `);
});
