const User = require("../models/user.model");
const AppError = require("../utils/AppError");
const Student = require("../models/student.model")

// Get all pending users
exports.getPendingUsers = async (req, res, next) => {
    try {
        const users = await User.find({ status: "pending" }).select("-password");

        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
}

// Approve user
exports.approveUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return next(new AppError("User not found", 404))
        }

        user.status = "approved";
        await user.save();

        // If approved user is STUDENT -> create student profile
        if (user.role === "student") {
            await Student.create({
                userId: user._id,
                email: user.email,
                enrollmentNo: user.enrollmentNo,
                name: "New student"
            })
        }

        res.status(200).json({
            message: "User approved successfully"
        })
    } catch (error) {
        next(error)
    }
}

// Reject user
exports.rejectUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return next(new AppError("User not found", 404))
        }

        user.status = "rejected";
        await user.save();

        res.status(200).json({
            message: "User rejected successfully"
        })
    } catch (error) {
        next(error)
    }
}
