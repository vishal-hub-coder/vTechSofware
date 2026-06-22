import Chat from "../models/Chat.js";
import Message from "../models/Message.js";

// 🟢 Create or get one-to-one chat
export const accessChat = async (req, res) => {
  try {
    const { userId } = req.body; // second user

    if (!userId) {
      return res.status(400).json({ message: "userId is required" });
    }

    const existingChat = await Chat.findOne({
      participants: { $all: [req.user._id, userId] },
    }).populate("participants", "-password");

    if (existingChat) {
      return res.json(existingChat);
    }

    const newChat = await Chat.create({
      participants: [req.user._id, userId],
      lastMessage: "",
    });

    const fullChat = await Chat.findById(newChat._id).populate(
      "participants",
      "-password"
    );

    res.status(201).json(fullChat);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🟢 Get all chats of logged-in user
export const fetchChats = async (req, res) => {
  try {
    const chats = await Chat.find({
      participants: req.user._id,
    })
      .populate("participants", "-password")
      .sort({ updatedAt: -1 });

    res.json(chats);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🟢 Send message
export const sendMessage = async (req, res) => {
  try {
    const { chatId, text } = req.body;

    if (!chatId || !text) {
      return res.status(400).json({ message: "chatId and text required" });
    }

    const message = await Message.create({
      chatId,
      senderId: req.user._id,
      text,
    });

    await Chat.findByIdAndUpdate(chatId, {
      lastMessage: text,
    });

    const fullMessage = await Message.findById(message._id)
      .populate("senderId", "name email")
      .populate("chatId");

    res.status(201).json(fullMessage);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🟢 Get all messages of chat
export const getMessages = async (req, res) => {
  try {
    const { chatId } = req.params;

    const messages = await Message.find({ chatId })
      .populate("senderId", "name email")
      .sort({ createdAt: 1 });

    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};