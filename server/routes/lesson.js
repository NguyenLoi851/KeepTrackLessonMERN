const express = require("express");
const router = express.Router();
const verifyToken = require('../middleware/auth')

const Lesson = require("../models/Lesson");

// @route POST api/lessons
// @desc Create lesson
// @access Private
router.post("/",verifyToken, async (req, res) => {
  const { title, description, url, status } = req.body;

  // Simple validation
  if (!title)
    return res
      .status(400)
      .json({ success: false, message: "Title is required" });
  try {
    const newLesson = new Lesson({
      title,
      description,
      url: url.startsWith("https://") ? url : `https://${url}`,
      status: status || "TO LEARN",
      user: req.userId,
    });

    await newLesson.save();

    res.json({ success: true, message: "Lesson created successfully",Lesson: newLesson });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

module.exports = router