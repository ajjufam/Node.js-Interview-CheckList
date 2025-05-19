// HTTP status codes are 3-digit numbers sent in the response to indicate the result of the client's request.
// They help the client (like a browser or frontend app) understand what happened — success, error, redirect, etc.

// Why ?
// * To clearly communicate the result of the request
// * Helps with debugging, error handling, and UX
// * Required for RESTful APIs to follow best practices

// 🔹 Common Status Code Categories
// | Code Range | Category      | Meaning                         |
// | ---------- | ------------- | ------------------------------- |
// | 1xx        | Informational | Request received, processing    |
// | 2xx        | Success       | Request succeeded               |
// | 3xx        | Redirection   | Further action needed           |
// | 4xx        | Client Error  | Bad request from client         |
// | 5xx        | Server Error  | Server failed to handle request |

// 🔹 Frequently Used Codes
// | Code | Meaning               | Example Use Case                        |
// | ---- | --------------------- | --------------------------------------- |
// | 200  | OK                    | Request succeeded, send data            |
// | 201  | Created               | Resource created (e.g., POST /users)    |
// | 204  | No Content            | Success, but no body (e.g., DELETE)     |
// | 400  | Bad Request           | Validation failed, missing params, etc. |
// | 401  | Unauthorized          | Invalid or missing authentication       |
// | 403  | Forbidden             | Authenticated, but not allowed          |
// | 404  | Not Found             | Resource not found                      |
// | 500  | Internal Server Error | Generic server error                    |

// 🔹 How to Use in Express
app.get("/success", (req, res) => {
  res.status(200).json({ message: "OK" });
});

app.post("/create", (req, res) => {
  // create resource
  res.status(201).json({ message: "User created" });
});

app.get("/not-found", (req, res) => {
  res.status(404).json({ error: "Not Found" });
});

// ✅ Best Practice
// Always use .status() before .json() or .send()
res.status(400).send("Bad Request");
res.status(200).json({ data: "OK" });
