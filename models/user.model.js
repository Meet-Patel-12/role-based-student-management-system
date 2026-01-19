const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },

        role: {
            type: String,
            enum: ["admin", "student"],
            required: true
        },

        status: {
            type: String,
            enum: ["pending", "approved", "rejected"],
            default: "pending"
        },

        enrollmentNo: {
            type: String,
            unique: true,
            sparse: true
            // sparse allows null for admins
        },

        password: {
            type: String,
            select: false
            // password will be added later (after approval)
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
