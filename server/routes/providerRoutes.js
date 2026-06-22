// src/routes/providerRoutes.js

import express from "express";
import {
  createProfile,
  getMyProfile,
  updateProviderProfile,
  getAllProviders,
  getProviderById,
  searchProviders,
} from "../controllers/providerController.js";

import  protect  from "../middleware/authMiddleware.js";

const router = express.Router();

// Protected Routes
router.post("/", protect, createProfile);

router.get("/me", protect, getMyProfile);

router.put("/", protect, updateProviderProfile);
router.get("/all", getAllProviders);

router.get("/search", searchProviders);

router.get("/:id", getProviderById);

export default router;