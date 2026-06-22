import express from "express";

import {
  createBooking,
  getMyBookings,
  getProviderBookings,
  acceptBooking,
  rejectBooking,
  completeBooking,
} from "../controllers/bookingController.js";

import  protect  from "../middleware/authMiddleware.js";

const router = express.Router();

// User Routes

// Create Booking
router.post("/", protect, createBooking);

// Get Logged-in User Bookings
router.get("/my-bookings", protect, getMyBookings);

// Provider Routes

// Get Provider Booking Requests
router.get("/provider-bookings", protect, getProviderBookings);

// Accept Booking
router.put("/:id/accept", protect, acceptBooking);

// Reject Booking
router.put("/:id/reject", protect, rejectBooking);

// Complete Booking
router.put("/:id/complete", protect, completeBooking);

export default router;