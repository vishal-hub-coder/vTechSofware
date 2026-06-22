import mongoose from "mongoose";

const providerProfileSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },

    qualification: {
      type: String,
      required: true,
    },

    specialization: {
      type: String,
    },

    experience: {
      type: Number,
      default: 0,
    },

    about: {
      type: String,
    },

    languages: [
      {
        type: String,
      },
    ],

    charges: {
      perHour: {
        type: Number,
        default: 0,
      },

      perDay: {
        type: Number,
        default: 0,
      },

      perMonth: {
        type: Number,
        default: 0,
      },

      perYear: {
        type: Number,
        default: 0,
      },
    },

    availability: {
      type: Boolean,
      default: true,
    },

    address: {
      type: String,
    },

    city: {
      type: String,
    },

    rating: {
      type: Number,
      default: 0,
    },

    totalReviews: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const ProviderProfile = mongoose.model(
  "ProviderProfile",
  providerProfileSchema
);

export default ProviderProfile;