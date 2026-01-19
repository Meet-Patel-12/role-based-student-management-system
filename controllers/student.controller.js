const Student = require('../models/student.model');
const AppError = require('../utils/AppError')

// Create Student
exports.createStudent = async (req, res, next) => {
  try {
    const student = await Student.create({
      ...req.body,
      userId: req.body.userId // comes from approved student user
    });
    res.status(201).json(student);
  } catch (error) {
    next(error)
  }
};

// Get all the student
exports.getStudents = async (req, res, next) => {
  try {
    // 1️⃣ Pagination values
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    // 2️⃣ Search value & sorting params
    const { search, sortBy, order } = req.query;

    // 3️⃣ Ownership filter
    let query = {};

    // If student -> only own record
    if (req.user.role === "student") {
      query.userId = req.user._id;
    }

    // 4️⃣ Search filter
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { enrollmentNo: { $regex: search, $options: "i" } }
      ]
    }

    // 5️⃣ Sorting logic
    let sortOptions = {}
    const allowedSortFields = ["name", "year", "enrollmentNo", "createdAt"];

    if (allowedSortFields.includes(sortBy)) {
      sortOptions[sortBy] = order === "asc" ? 1 : -1;
    } else {
      sortOptions.createdAt = -1; // Default
    }

    // 6️⃣ DB query
    const students = await Student.find(query)
      .sort(sortOptions)
      .skip(skip)
      .limit(limit);

    // 7️⃣ Total count (for pagination info)
    const total = await Student.countDocuments(query);

    res.status(200).json({
      page,
      limit,
      total,
      results: students.length,
      sortBy: sortBy || "createdAt",
      order: order || "desc",
      students
    });

  } catch (error) {
    next(new AppError(error.message, 500));
  }
};

// Get student by id
exports.getStudentById = async (req, res, next) => {
  try {
    const student = await Student.findById(req.params.id)

    if (!student) {
      return next(new AppError("Student not found", 404))
    }

    // If student role -> allow only own data
    if (
      req.user.role === "student" &&
      student.userId.toString() !== req.user._id.toString()
    ) {
      return next(new AppError("Access denied", 403));
    }

    res.status(200).json(student);
  } catch (error) {
    next(new AppError("Invalid student ID", 400))
  }
}

// Update student by admin
exports.updateStudent = async (req, res, next) => {
  try {
    const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

    if (!updatedStudent) {
      return next(new AppError("Student not found", 404))
    }

    res.status(200).json(updatedStudent)
  } catch (error) {
    next(new AppError("Invalid student ID", 400))
  }
}

// Delete student by admin
exports.deleteStudent = async (req, res, next) => {
  try {
    const deletedStudent = await Student.findByIdAndDelete(req.params.id)

    if (!deletedStudent) {
      return next(new AppError("Student not found", 404))
    }
    res.status(200).json({ message: "Student deleted successfully" })
  } catch (error) {
    next(new AppError("Invalid student ID", 400))
  }
}

// Update student by own
exports.updateOwnProfile = async (req, res, next) => {
  try {
    const student = await Student.findOne({ userId: req.user._id });

    if (!student) {
      return next(new AppError("Student profile not found", 404))
    }

    // Allowed field only
    const allowedUpdates = ["name", "course", "year", "semester", "age"];
    allowedUpdates.forEach(field => {
      if (req.body[field] !== undefined) {
        student[field] = req.body[field];
      }
    })

    await student.save();

    res.status(200).json({
      message: "Profile updated successfully",
      student
    })
  } catch (error) {
    next(error)
  }
}