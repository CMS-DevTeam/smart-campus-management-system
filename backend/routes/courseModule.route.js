const express = require("express");
const router = express.Router();
const {
    getCourseModules,
    createCourseModule,
    getCourseModule,
    updateCourseModule,
    deleteCourseModule,
} = require("../controller/courseModule.controller");

router.get("/", getCourseModules);
router.post("/", createCourseModule);
router.get("/:id", getCourseModule);
router.put("/:id", updateCourseModule);
router.delete("/:id", deleteCourseModule);

module.exports = router;
