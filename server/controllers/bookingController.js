
import Booking from "../models/Booking.js";

// Create Booking
export const createBooking = async (req, res) => {
  try {
    console.log("Body", req.body);
    console.log("User", req.user);
    const {
      providerId,
      providerProfileId,
      serviceType,
      amount,
      startDate,
      endDate,
      address,
      notes,
    } = req.body;

    const booking = await Booking.create({
      userId: req.user._id,
      providerId,
      providerProfileId,
      serviceType,
      amount,
      startDate,
      endDate,
      address,
      notes,
    });

    res.status(201).json({
      success: true,
      message: "Booking created successfully",
      booking,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get My Bookings
export const getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({
      userId: req.user._id,
    })
      .populate("providerId", "-password")
      .populate("providerProfileId");

    res.status(200).json({
      success: true,
      bookings,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Provider Bookings
export const getProviderBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({
      providerId: req.user._id,
    }).populate("userId", "-password");

    res.status(200).json({
      success: true,
      bookings,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Accept Booking
export const acceptBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status: "accepted" },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Booking accepted successfully",
      booking,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Reject Booking
export const rejectBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status: "rejected" },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Booking rejected successfully",
      booking,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Complete Booking
export const completeBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status: "completed" },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Booking completed successfully",
      booking,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

