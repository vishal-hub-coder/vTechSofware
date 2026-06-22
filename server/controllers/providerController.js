// src/controllers/providerController.js

import ProviderProfile from "../models/ProviderProfile.js";

export const createProfile = async (req, res) => {
  try {
    const profileExists = await ProviderProfile.findOne({
      userId: req.user._id,
    });

    if (profileExists) {
      return res.status(400).json({
        success: false,
        message: "Profile already exists",
      });
    }

    const profile = await ProviderProfile.create({
      userId: req.user._id,
      ...req.body,
    });

    res.status(201).json({
      success: true,
      profile,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getMyProfile = async (req, res) => {
  try {
    const profile = await ProviderProfile.findOne({
      userId: req.user._id,
    }).populate("userId", "-password");

    res.status(200).json({
      success: true,
      profile,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const updateProviderProfile = async (req, res) => {
  try {
    const profile = await ProviderProfile.findOneAndUpdate(
      {
        userId: req.user._id,
      },
      req.body,
      {
        new: true,
      }
    );

    res.status(200).json({
      success: true,
      profile,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const getAllProviders = async (req, res) => {
  try {
    const providers = await ProviderProfile.find()
      .populate(
        "userId",
        "fullName email mobileNumber role profileImage"
      )
      .sort({ rating: -1 });

    res.status(200).json({
      success: true,
      count: providers.length,
      providers,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const getProviderById = async (req, res) => {
  try {
    const provider = await ProviderProfile.findById(req.params.id)
      .populate(
        "userId",
        "fullName email mobileNumber role profileImage"
      );

    if (!provider) {
      return res.status(404).json({
        success: false,
        message: "Provider not found",
      });
    }

    res.status(200).json({
      success: true,
      provider,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const searchProviders = async (req, res) => {
  try {
    const { specialization, city } = req.query;

    let query = {};

    if (specialization) {
      query.specialization = {
        $regex: specialization,
        $options: "i",
      };
    }

    if (city) {
      query.city = {
        $regex: city,
        $options: "i",
      };
    }

    const providers = await ProviderProfile.find(query)
      .populate(
        "userId",
        "fullName email mobileNumber role profileImage"
      )
      .sort({ rating: -1 });

    res.status(200).json({
      success: true,
      count: providers.length,
      providers,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};