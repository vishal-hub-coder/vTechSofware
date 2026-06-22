import { Server } from "socket.io";

export const initSocket = (server) => {
  const io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    // join user room
    socket.on("setup", (userId) => {
      socket.join(userId);
      socket.userId = userId;
    });

    // join chat room
    socket.on("join chat", (chatId) => {
      socket.join(chatId);
    });

    // send message
    socket.on("new message", (message) => {
      // send to chat room (simple & correct)
      socket.to(message.chatId).emit("message received", message);
    });

    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
    });
  });

  return io;
};