// events module
//     * The events module allows handling custom events.
//     * You can create an event, listen for it, and trigger it.
//     * 📦 It's a built-in module — no installation needed.

//     Why?
//     * Helps build event-driven systems (core idea behind Node.js)
//     * Great for decoupling code — e.g., notify one part of your app when something happens in another

//     How?
//     using events module
//     const EventEmitter = require('events');

//     🛠️ How It Works
//     * Create an event emitter
//     * Listen for an event
//     * Emit (trigger) the event

// Ex 1 (Basic Example)
const EventEmitter = require("events");

const emitter = new EventEmitter();

// 1. Listen for 'greet' event
emitter.on("greet", (name) => {
  console.log(`Hello, ${name}`);
});

// 2. Trigger 'greet' event
emitter.emit("greet", "Ajju");

// Ex 2 ( Listen Once)
emitter.once("sayOnce", () => {
  console.log("This will run only once");
});

emitter.emit("sayOnce");
emitter.emit("sayOnce"); // Will NOT run again

// Ex 3 (Remove Event Listener)
function greets() {
  console.log("Hello");
}

emitter.on("hi", greets);
emitter.removeListener("hi", greets); // or: emitter.off('hi', greet)

// Ex 4 (📦 Real-World Use Case)
// Imagine a file upload service:
emitter.on("fileUploaded", (filename) => {
  console.log(`${filename} uploaded! Sending email...`);
});

// Somewhere after upload logic
emitter.emit("fileUploaded", "photo.png");

// Summary
// | Method             | Description                          |
// |--------------------|--------------------------------------|
// | `.on()`            | Listen for an event                  |
// | `.emit()`          | Emit/trigger an event                |
// | `.once()`          | Listen only once                     |
// | `.off()` / `.removeListener()` | Stop listening           |
// | `.listenerCount()` | Count listeners                      |
// | `.removeAllListeners()` | Remove all for a given event    |
