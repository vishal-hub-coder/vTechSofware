import express from "express";
import {
  register,
  login,
  getProfile,
  updateProfile
} from "../controllers/authController.js";

import { registerValidator } from "../validators/authValidator.js";
import protect from "../middleware/authMiddleware.js";


const router = express.Router();

router.post("/register", registerValidator, register);

router.post("/login", login);

router.get("/profile", protect, getProfile);

router.put("/profile", protect, updateProfile);

export default router;