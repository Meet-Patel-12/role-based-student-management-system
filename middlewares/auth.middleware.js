const jwt = require("jsonwebtoken")
const User = require("../models/user.model")
const AppError = require("../utils/AppError")

exports.protect = async (req, res, next) => {
    try {
        let token;

        if (
            req.headers.authorization &&
            req.headers.authorization.startsWith("Bearer")
        ) {
            token = req.headers.authorization.split(" ")[1];
        }

        if (!token) {
            return next(new AppError("Not authenticated", 401));
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(decoded.id);
        if (!user || user.status !== "approved") {
            return next(new AppError("User not authorized"), 401)
        }

        req.user = user;
        next();
    } catch (error) {
        next(new AppError("Invalid token", 401))
    }
}

exports.restrictToAdmin = (req, res, next) => {
    if (req.user.role !== "admin") {
        return next(new AppError("Admin access only", 403))
    }
    next();
}