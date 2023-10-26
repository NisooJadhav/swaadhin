const express = require("express");
const Student = require("../models/Student");
const College = require("../models/College");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.post("/signup/student", async (req, res) => {
  try {
    const {
      username,
      password,
      fullName,
      mobile,
      email,
      dateOfBirth,
      aadharNumber,
      udidNumber,
      state,
      city,
      disability,
      gender,
    } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const student = new Student({
      username,
      password: hashedPassword,
      fullName,
      mobile,
      email,
      dateOfBirth,
      aadharNumber,
      udidNumber,
      state,
      city,
      disability,
      gender,
    });
    await student.save();
    res.json({ message: "Student signed up successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred while signing up" });
  }
});

router.post("/signup/college", async (req, res) => {
  try {
    const {
      username,
      password,
      fullName,
      mobile,
      email,
      aicteNumber,
      strength,
      state,
      city,
    } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const college = new College({
      username,
      password: hashedPassword,
      fullName,
      mobile,
      email,
      aicteNumber,
      strength,
      state,
      city,
    });
    await college.save();
    res.json({ message: "College signed up successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred while signing up" });
  }
});

router.post("/login/student", async (req, res) => {
  try {
    const { username, password } = req.body;
    const student = await Student.findOne({ username });

    if (!student || !(await bcrypt.compare(password, student.password))) {
      res.status(401).json({ message: "Invalid credentials" });
    } else {
      const token = jwt.sign({ id: student._id }, process.env.SECRET_KEY, {
        expiresIn: "1h",
      });
      res.json({ token });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred while logging in" });
  }
});

router.post("/login/college", async (req, res) => {
  try {
    const { username, password } = req.body;
    const college = await College.findOne({ username });

    if (!college || !(await bcrypt.compare(password, college.password))) {
      res.status(401).json({ message: "Invalid credentials" });
    } else {
      const token = jwt.sign({ id: college._id }, process.env.SECRET_KEY, {
        expiresIn: "1h",
      });
      res.json({ token });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred while logging in" });
  }
});

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(403).json({ message: "Token not provided" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(401).json({ message: "Invalid token" });
    }

    req.user = user;
    next();
  });
};

router.get("/user/info", verifyToken, async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ fullName: user.fullName });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

router.get("/user/collegeinfo", verifyToken, async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await College.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ userName: user.username });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;