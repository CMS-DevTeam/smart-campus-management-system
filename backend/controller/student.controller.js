const Student = require("../models/student.model");
const getStudents = async (req, res) => {
    try {
        const student = await Student.find();
        res.status(200).json({ data: student });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createStudent = async (req, res) => {
    try {
        const student = await Student.create(req.body);
        res.status(201).json({ data: student });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getStudent = async (req, res) => {
    try {
       const {firstName} = req.params;
       const student = await Student.findOne({firstName});

       if(!student){
        return res.status(404).json({message: "Student not found"});
       }

       res.status(200).json({data: student});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const student = await Student.findByIdAndUpdate(
            id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }

        const updateStudent = await Student.findById(id);
        res.status(200).json({ data: updateStudent });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const student = await Student.findByIdAndDelete(id);

        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }
        res.status(200).json({ message: "Student deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getStudents,
    createStudent,
    getStudent,
    updateStudent,
    deleteStudent,
};