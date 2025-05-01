// DOM (Document Object Model) manipulation is typically associated with browsers,
// not directly with Node.js, because Node.js runs on the server-side, and there's no DOM in a
// Node.js environment by default.

// DOM Manipulation means accessing and changing elements in the HTML document (like adding, editing,
// or deleting elements) using JavaScript.
// 🕸️ In a browser, this allows you to dynamically change content, styles, or structure of web pages.

// Why DOM Manipulation is not native in Node.js?
// Node.js is not a browser, it runs JavaScript on the server, and doesn’t have access to the DOM (which is a browser API).
// But sometimes we still want to manipulate HTML files on the server (like parsing, modifying, or scraping content). In those cases,
// we use libraries to simulate DOM in Node.js.

// How to Do DOM Manipulation in Node.js?
// Even though Node.js doesn’t have a native DOM, we can use libraries like:
// * jsdom – simulates the DOM in Node.js.
// * cheerio – lightweight alternative for parsing and manipulating HTML (like jQuery).

// Example 1 using "jsdom"
// npm install jsdom
const { JSDOM } = require("jsdom");
//HTML
const html = `<html><body><h1 id="title">Hello</h1></body></html>`;
//Create DOM
const dom = new JSDOM(html);
//Access and manipulate
const document = dom.window.document;
const title = document.getElementById("title");

title.textContent = "Hello From NodeJS !";
console.log("jsdom : ", document.body.innerHTML);

// Example 2 using cheerio (faster & jQuery-like)
// npm install cheerio
const cheerio = require("cheerio");
//Load Html
const html1 = `<html><body><h1 class="heading">Welcome</h1></body></html>`;
const $ = cheerio.load(html1);

// Manipulate
$(".heading").text("Welcome from Cheerio NodeJS");
console.log("cheerio : ", $.html());

// When to Use DOM Manipulation in Node.js?
// * 📰 Web scraping (extract data from websites)
// * 🛠️ Server-side rendering or preprocessing HTML
// * 📨 Email template customization
// * 🧪 Testing front-end logic in Node
