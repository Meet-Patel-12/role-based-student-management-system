const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    enrollmentNo: {
      type: String,
      required: true
    },
    course: String,
    year: {
      type: Number,
      min: 1,
      max: 4
    },
    semester: {
      type: Number,
      min: 1,
      max: 8
    },
    age: Number,
  },
  { timestamps: true }
);

studentSchema.index({ email: 1 })
studentSchema.index({ name: 1 })
studentSchema.index({ enrollmentNo: 1 })

module.exports = mongoose.model('Student', studentSchema);
