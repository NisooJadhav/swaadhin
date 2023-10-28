const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  aadharNumber: {
    type: String,
    required: true,
  },
  udidNumber: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  disability: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  profilePic: {
    type: String,
    required: false,
  },
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
