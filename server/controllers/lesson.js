const Lesson = require("../models/Lesson");

module.exports = {
  // get all lessons of each user
  getLessons: async (req, res) => {
    try {
      // populate to get all fields
      const lessons = await Lesson.find({ user: req.userId }).populate("user", [
        "username",
      ]);
      res.json({ success: true, lessons });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  },

  // create lesson
  createLesson: async (req, res) => {
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

      res.json({
        success: true,
        message: "Lesson created successfully",
        Lesson: newLesson,
      });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  },

  // update lesson
  updateLesson: async (req, res) => {
    const { title, description, url, status } = req.body;
    // Simple validation
    if (!title)
      return res
        .status(400)
        .json({ success: false, message: "Title is required" });
    try {
      let updateLesson = {
        title,
        description: description || "",
        url: (url.startsWith("https://") ? url : `https://${url}`) || "",
        status: status || "TO LEARN",
      };

      const lessonUpdateCondition = { _id: req.params.id, user: req.userId };
      updateLesson = await Lesson.findOneAndUpdate(
        lessonUpdateCondition,
        updateLesson,
        { new: true }
      );
      // User not authorised to update lesson or lesson not found
      if (!updateLesson)
        return res.status(401).json({
          success: false,
          message: "User not authorized or lesson not found",
        });
      res.json({
        success: true,
        message: "Update successfully",
        lesson: updateLesson,
      });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  },

  // delete lesson
  deleteLesson: async (req, res) => {
    try {
      const lessonDeleteCondition = { _id: req.params.id, user: req.userId };
      const deletedLesson = await Lesson.findOneAndDelete(
        lessonDeleteCondition
      );
      // User not authorised to update lesson or lesson not found
      if (!deletedLesson)
        return res.status(401).json({
          success: false,
          message: "User not authorized or lesson not found",
        });
      res.json({ success: true, lesson: deletedLesson });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  },
};
