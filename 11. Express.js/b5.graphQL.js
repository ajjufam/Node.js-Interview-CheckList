// GraphQL is a query language for APIs and a runtime for executing those queries with your existing data.
// * Created by Facebook.
// * Fetches only the data you need.
// * Works over HTTP with a single endpoint.
// * Strongly typed with a defined schema.

// Why ?
// | Feature               | Benefit                               |
// | --------------------- | ------------------------------------- |
// | Single Endpoint       | `/graphql` handles all API operations |
// | Flexible Queries      | Client asks for specific data only    |
// | Strongly Typed Schema | Validation, auto-documentation        |
// | Better for Frontends  | Reduces over-fetching/under-fetching  |

// ✅ Project: Book Management GraphQL API
// Each Book has:
// id
// title
// author
// publishedYear

// 📦 1. Setup
// Install packages
// npm init -y
// npm install express apollo-server-express graphql uuid

// 🧱 2. Folder Structure
// /book-graphql-api
// ├── index.js

// ✏️ 3. Code — index.js
const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const { v4: uuidv4 } = require("uuid");

const app = express();

// In-memory "DB"
let books = [
  { id: "1", title: "1984", author: "George Orwell", publishedYear: 1949 },
  {
    id: "2",
    title: "The Alchemist",
    author: "Paulo Coelho",
    publishedYear: 1988,
  },
];

// ==================
// 1️⃣ Type Definitions
// ==================
const typeDefs = gql`
  type Book {
    id: ID!
    title: String!
    author: String!
    publishedYear: Int!
  }

  input CreateBookInput {
    title: String!
    author: String!
    publishedYear: Int!
  }

  input UpdateBookInput {
    title: String
    author: String
    publishedYear: Int
  }

  type Query {
    books: [Book!]!
    book(id: ID!): Book
  }

  type Mutation {
    createBook(input: CreateBookInput!): Book!
    updateBook(id: ID!, input: UpdateBookInput!): Book
    deleteBook(id: ID!): String
  }
`;

// ==================
// 2️⃣ Resolvers
// ==================
const resolvers = {
  Query: {
    books: () => books,
    book: (_, { id }) => books.find((book) => book.id === id),
  },
  Mutation: {
    createBook: (_, { input }) => {
      const newBook = { id: uuidv4(), ...input };
      books.push(newBook);
      return newBook;
    },
    updateBook: (_, { id, input }) => {
      const index = books.findIndex((book) => book.id === id);
      if (index === -1) return null;

      books[index] = { ...books[index], ...input };
      return books[index];
    },
    deleteBook: (_, { id }) => {
      const index = books.findIndex((book) => book.id === id);
      if (index === -1) return "Book not found";

      books.splice(index, 1);
      return "Book deleted";
    },
  },
};

// ==================
// 3️⃣ Apollo Server Setup
// ==================
async function startServer() {
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();

  server.applyMiddleware({ app });

  app.listen(4000, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
}

startServer();
