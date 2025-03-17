const express = require("express");
const router = express.Router();
const {
    getCourses,
    getCourse,
    createCourse,
    updateCourse,
    deleteCourse,
} = require("../controller/course.controller");

router.get("/", getCourses);
router.post("/", createCourse);
router.get("/:id", getCourse);
router.put("/:id", updateCourse);
router.delete("/:id", deleteCourse);

module.exports = router;