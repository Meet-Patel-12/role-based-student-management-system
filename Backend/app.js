const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const studentRoutes = require("./routes/student.routes");
const authRoutes = require("./routes/auth.routes");
const adminRoutes = require("./routes/admin.routes");
const errorHandler = require("./middlewares/error.middleware");

const app = express();

/* ===================== MIDDLEWARES ===================== */
app.use(express.json());
app.use(cookieParser());

app.use(
    cors({
        origin: "http://localhost:5173", // Frontend URL (Vite)
        credentials: true,
    })
);

/* ===================== ROUTES ===================== */
app.use("/api/auth", authRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/admin", adminRoutes);

/* ===================== HEALTH CHECK ===================== */
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "API is running",
    });
});

/* ===================== ERROR HANDLER ===================== */
app.use(errorHandler);

module.exports = app;
