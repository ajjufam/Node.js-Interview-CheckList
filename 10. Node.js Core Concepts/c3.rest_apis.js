// REST APIs
//     REST (Representational State Transfer) is a design style for creating web APIs.
//     REST API uses:
//     * HTTP methods: GET, POST, PUT, DELETE
//     * JSON format for data
//     * URLs to identify resources

//     Why?
//     * Allows communication between frontend and backend
//     * Simple and scalable structure
//     * Easy to test and use (Postman, browser, etc.)

const express = require("express");
const app = express();
app.use(express.json()); // to parse JSON body

// Sample data
let books = [
  { id: 1, title: "Book One" },
  { id: 2, title: "Book Two" },
];

// GET all books
app.get("/books", (req, res) => {
  res.json(books);
});

// GET a single book
app.get("/books/:id", (req, res) => {
  const book = books.find((b) => b.id == req.params.id);
  book ? res.json(book) : res.status(404).send("Book not found");
});

// POST (create a new book)
app.post("/books", (req, res) => {
  const newBook = { id: books.length + 1, title: req.body.title };
  books.push(newBook);
  res.status(201).json(newBook);
});

// PUT (update a book)
app.put("/books/:id", (req, res) => {
  const book = books.find((b) => b.id == req.params.id);
  if (book) {
    book.title = req.body.title;
    res.json(book);
  } else {
    res.status(404).send("Book not found");
  }
});

// DELETE a book
app.delete("/books/:id", (req, res) => {
  books = books.filter((b) => b.id != req.params.id);
  res.send("Book deleted");
});

app.listen(3000, () => console.log("API running at http://localhost:3000"));
