const express = require('express');
const router = express.Router();

const {
  createStudent,
  getStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
  updateOwnProfile
} = require('../controllers/student.controller');

const { protect, restrictToAdmin } = require("../middlewares/auth.middleware")

// view (admin + student)
router.get("/", protect, getStudents)

// Student own profile update
router.put("/me/profile", protect, updateOwnProfile)

// Admin only
router.post("/", protect, restrictToAdmin, createStudent)

// view (admin + student)
router.get("/:id", protect, getStudentById);

// Admin only
router.put("/:id", protect, restrictToAdmin, updateStudent)
router.delete("/:id", protect, restrictToAdmin, deleteStudent)


module.exports = router;
