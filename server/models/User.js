import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
    {
        fullName: { type: String, required: true, trim: true },
        email: { type: String, required: true, trim: true, unique: true },
        password: { type: String, required: true, trim: true },
        mobileNumber: { type: String, required: true, trim: true },
        role: { type: String, required: true, enum: ["user", "doctor", "nurse", "compounder", "caretaker", "physiotherapist", "labTechnician", "admin"], default: "user" },
        profileImage: { type: String, trim: true, default: "https://res.cloudinary.com/dzcmadjlq/image/upload/v1690964417/default-profile-picture-1_oxh8l9.png" },
        isVerified: { type: Boolean, default: false },
        isActive: { type: Boolean, default: true },



    },
    {
        timestamps: true,
    }
);

const User = mongoose.model("User", userSchema);
export default User;