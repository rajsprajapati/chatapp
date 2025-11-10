import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const server = createServer(app);
const io = new Server(server); // same-origin, no extra CORS needed

// Static files (client)
app.use(express.static("public"));

io.on("connection", (socket) => {
  console.log("✅ user connected:", socket.id);

  // join default room
  socket.join("general");

  // greet the new user only
  socket.emit("system", { text: "Welcome to the chat! 🎉", at: Date.now() });

  // announce to others
  socket
    .to("general")
    .emit("system", { text: "A new user joined.", at: Date.now() });

  // when a chat message comes in
  socket.on("chat:message", (msg, ack) => {
    // msg = { user, text }
    const payload = { ...msg, at: Date.now(), id: cryptoRandom() };
    // send to everyone in the room (including sender)
    io.to("general").emit("chat:message", payload);
    // optional acknowledgement back to sender
    if (ack) ack({ delivered: true, id: payload.id });
  });

  // typing indicator (lightweight, no persistence)
  socket.on("chat:typing", (user) => {
    socket.to("general").emit("chat:typing", user);
  });

  socket.on("disconnect", (reason) => {
    console.log("❌ user disconnected:", socket.id, reason);
    socket
      .to("general")
      .emit("system", { text: "A user left.", at: Date.now() });
  });
});

function cryptoRandom() {
  return Math.random().toString(36).slice(2);
}

const PORT = process.env.PORT || 3501;
server.listen(PORT, () => console.log(`🚀 http://localhost:${PORT}`));
