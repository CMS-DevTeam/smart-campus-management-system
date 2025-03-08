const CourseModule = require("../models/courseModule.model");

const getCourseModules = async (req, res) => {
    try {
        const courseModule = await CourseModule.find();
        res.status(200).json({data: courseModule});
    }catch (error){
        res.status(500).json({ message: error.message });
    }
};

const createCourseModule = async (req, res) => {
    try {
        const courseModule = await CourseModule.create(req.body);
        res.status(201).json({data: courseModule});
    }catch (error){
        res.status(500).json({ message: error.message });
    }
};

const getCourseModule = async (req, res) => {
    try {
        const {id} = req.params;
        const courseModule = await CourseModule.findById(id);
        res.status(201).json({data: courseModule});
    }catch (error){
        res.status(500).json({ message: error.message });
    }
};

const updateCourseModule = async (req, res) => {
    try {
        const {id} = req.params;
        const courseModule = await CourseModule.findByIdAndUpdate(
            id,
            req.body,
            {
                new: true, runValidators: true
            }
        );
        if (!courseModule){
            return res.status(404).json({message: "CourseModule not found"});
        }

        const updateModule = await CourseModule.findById(id);
        res.status(200).json({ data: updateModule });

    }catch (error){
        res.status(500).json({ message: error.message });
    }
};

const deleteCourseModule = async (req, res) => {
    try {
        const { id } = req.params;
        const courseModule = await CourseModule.findByIdAndDelete(id);

        if (!courseModule) {
            return res.status(404).json({ message: "CourseModule not found" });
        }
        res.status(200).json({ message: "CourseModule deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getCourseModules,
    getCourseModule,
    createCourseModule,
    updateCourseModule,
    deleteCourseModule,
};