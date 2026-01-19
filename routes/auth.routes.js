const express = require("express")
const router = express.Router();
const {
    registerStudent,
    studentLogin,
    registerAdmin,
    adminLogin,
    setPassword
} = require("../controllers/auth.controller")

// Student registration
router.post("/student/register", registerStudent);

// Admin registration
router.post("/admin/register", registerAdmin);

// Student login
router.post("/student/login", studentLogin)

// Admin login
router.post("/admin/login", adminLogin)

// Set Password
router.post("/set-password", setPassword)

module.exports = router;