import express from "express";
import {
  accessChat,
  fetchChats,
  sendMessage,
  getMessages,
} from "../controllers/chatController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import  protect  from "../middleware/authMiddleware.js";
const router = express.Router();

// 🟢 create or open chat
router.post("/access", authMiddleware, accessChat);

// 🟢 get all chats
router.get("/", authMiddleware, fetchChats);

// 🟢 send message
router.post("/message", authMiddleware, sendMessage);

// 🟢 get messages of a chat
router.get("/message/:chatId", authMiddleware, getMessages);

export default router;