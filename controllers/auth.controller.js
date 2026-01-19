const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const User = require("../models/user.model")
const AppError = require("../utils/AppError")

// STUDENT REGISTER (NO PASSWORD)
exports.registerStudent = async (req, res, next) => {
    try {
        const { email, enrollmentNo } = req.body;

        if (!email || !enrollmentNo) {
            return next(new AppError("Email and enrollment number are required", 400))
        }
        // Check if user already exists
        const existingUser = await User.findOne({
            $or: [{ email }, { enrollmentNo }]
        })

        if (existingUser) {
            return next(new AppError("User already exists", 400))
        }

        const student = await User.create({
            email,
            enrollmentNo,
            role: "student",
            status: "pending"
        })

        res.status(201).json({
            message: "Student registration submitted. Waiting for admin approval."
        })
    } catch (error) {
        next(error)
    }
}

// Student Login
exports.studentLogin = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return next(new AppError("Email and password are required", 400))
        }

        const student = await User.findOne({
            email,
            role: "student"
        }).select("+password")

        if (!student) {
            return next(new AppError("Student not found", 404));
        }

        if (student.status !== "approved") {
            return next(new AppError("Student is not approved yet", 403));
        }

        if (!student.password) {
            return next(new AppError("Password not set yet", 400));
        }

        const isMatch = await bcrypt.compare(password, student.password);
        if (!isMatch) {
            return next(new AppError("Invalid credentials", 401))
        }

        const token = jwt.sign(
            { id: student._id, role: student.role },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        )

        res.status(200).json({
            message: "Student login successful",
            token
        })
    } catch (error) {
        next(error)
    }
}

// ADMIN REGISTER (NO PASSWORD)
exports.registerAdmin = async (req, res, next) => {
    try {
        const { email } = req.body;

        if (!email) {
            return next(new AppError("Email is required", 400))
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return next(new AppError("User already exists", 400))
        }

        await User.create({
            email,
            role: "admin",
            status: "pending"
        })

        res.status(201).json({
            message: "Admin registration request submitted. Awaiting approval."
        })
    } catch (error) {
        next(error)
    }
}

// Admin Login
exports.adminLogin = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return next(new AppError("Email and password are required", 400));
        }

        const admin = await User.findOne({ email, role: "admin" }).select("+password");

        if (!admin) {
            return next(new AppError("Admin not found", 404));
        }

        if (admin.status !== "approved") {
            return next(new AppError("Admin is not approved yet", 403))
        }

        if (!admin.password) {
            return next(new AppError("Password not set yet", 400));
        }

        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return next(new AppError("Invalid credentials", 401))
        }

        const token = jwt.sign(
            { id: admin._id, role: admin.role },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        res.status(200).json({
            message: "Admin login successful",
            token
        })
    } catch (error) {
        next(error);
    }
}

// Set password for both like admin and student
exports.setPassword = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return next(new AppError("Email and password are required", 400))
        }

        const user = await User.findOne({ email }).select("+password");

        if (!user) {
            return next(new AppError("User not found", 404))
        }

        if (user.status !== "approved") {
            return next(new AppError("User is not approved yet", 403))
        }

        if (user.password) {
            return next(new AppError("Password already set", 400))
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        user.password = hashedPassword;
        await user.save();

        res.status(200).json({
            message: "Password set successfully. You can now login."
        })
    } catch (error) {
        next(error)
    }
}