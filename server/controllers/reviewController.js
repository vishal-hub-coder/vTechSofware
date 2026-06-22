import Review from "../models/Review.js";
import ProviderProfile from "../models/ProviderProfile.js";

// Add Review
export const addReview = async (req, res) => {
  try {
    const review = await Review.create({
      userId: req.user._id,
      ...req.body,
    });

    // Update Provider Rating
    const reviews = await Review.find({
      providerId: req.body.providerId,
    });

    const totalReviews = reviews.length;

    const averageRating =
      reviews.reduce((acc, item) => acc + item.rating, 0) /
      totalReviews;

    await ProviderProfile.findOneAndUpdate(
      {
        userId: req.body.providerId,
      },
      {
        rating: averageRating,
        totalReviews,
      }
    );

    res.status(201).json({
      success: true,
      message: "Review added successfully",
      review,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Provider Reviews
export const getProviderReviews = async (req, res) => {
  try {
    const reviews = await Review.find({
      providerId: req.params.providerId,
    })
      .populate("userId", "fullName profileImage")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      reviews,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};