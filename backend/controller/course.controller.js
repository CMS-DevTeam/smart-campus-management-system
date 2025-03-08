const Course = require("../models/course.model.js");

const getCourses = async (req, res) => {
    try {
        const course = await Course.find();
        res.status(200).json({data: course});
    }catch (error){
        res.status(500).json({ message: error.message });
    }
};

const createCourse = async (req, res) => {
    try {
        const course = await Course.create(req.body);
        res.status(201).json({data: course});
    }catch (error){
        res.status(500).json({ message: error.message });
    }
};

const getCourse = async (req, res) => {
    try {
        const {id} = req.params;
        const course = await Course.findById(id);
        res.status(201).json({data: course});
    }catch (error){
        res.status(500).json({ message: error.message });
    }
};

const updateCourse = async (req, res) => {
    try {
        const {id} = req.params;
        const course = await Course.findByIdAndUpdate(
            id,
            req.body,
            {
                new: true, runValidators: true
            }
        );
        if (!course){
            return res.status(404).json({message: "Course not found"});
        }

        const updateEvent = await Course.findById(id);
        res.status(200).json({ data: updateEvent });

    }catch (error){
        res.status(500).json({ message: error.message });
    }
};

const deleteCourse = async (req, res) => {
    try {
        const { id } = req.params;
        const course = await Course.findByIdAndDelete(id);

        if (!course) {
            return res.status(404).json({ message: "Course not found" });
        }
        res.status(200).json({ message: "Course deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getCourses,
    createCourse,
    getCourse,
    updateCourse,
    deleteCourse,
};