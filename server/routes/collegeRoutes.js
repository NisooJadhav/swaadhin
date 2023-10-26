const express = require("express");
const router = express.Router();

const College = require("../models/College");
const verifyToken = require("../routes/verifyToken.js");

router.get("/collegeinfo", verifyToken, async (req, res) => {
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