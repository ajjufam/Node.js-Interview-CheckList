const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const mongoose = require("mongoose");
const path = require("path");
const Message = require("./models/Message");

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost/websocket-chat")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB error:", err));

// Create Express app and HTTP server
const app = express();
const server = http.createServer(app);

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// WebSocket Server
const wss = new WebSocket.Server({ server });

wss.on("connection", async (ws) => {
  console.log("Client connected.");

  // Send previous chat messages from DB
  const messages = await Message.find().sort({ timestamp: 1 }).limit(100);
  messages.forEach((msg) => {
    ws.send(JSON.stringify({ text: msg.text, timestamp: msg.timestamp }));
  });

  ws.on("message", async (data) => {
    const message = data.toString();
    console.log(`Received: ${message}`);

    // Save to DB
    const newMsg = new Message({ text: message });
    await newMsg.save();

    // Broadcast to others
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(
          JSON.stringify({ text: message, timestamp: newMsg.timestamp })
        );
      }
    });
  });

  ws.on("close", () => {
    console.log("Client disconnected.");
  });
});

// Start server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
