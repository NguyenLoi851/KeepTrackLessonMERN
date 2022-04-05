const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/auth");

const Lesson = require("../models/Lesson");
const {
  getLessons,
  createLesson,
  updateLesson,
  deleteLesson,
} = require("../controllers/lesson");

// @route GET api/lessons
// @desc Get lessons
// @access Private
router.get("/", verifyToken, async (req, res) => {
  await getLessons(req, res);
});

// @route POST api/lessons
// @desc Create lesson
// @access Private
router.post("/", verifyToken, async (req, res) => {
  await createLesson(req, res);
});

// @route PUT api/lessons
// @desc Update lesson
// @access Private
router.put("/:id", verifyToken, async (req, res) => {
  await updateLesson(req, res);
});

// @route DELETE api/lessons
// @desc Delete lesson
// @access Private
router.delete("/:id", verifyToken, async (req, res) => {
  await deleteLesson(req, res);
});

module.exports = router;
