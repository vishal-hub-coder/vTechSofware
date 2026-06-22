import express from "express";

import {
  addReview,
  getProviderReviews,
} from "../controllers/reviewController.js";

import  protect  from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, addReview);

router.get("/:providerId", getProviderReviews);

export default router;