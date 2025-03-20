const Assignment = require("../models/assignment.model");

const getAssignments = async (req, res) => {
  try {
    const assignment = await Assignment.find();
    res.status(200).json({ data: assignment });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createAssignment = async (req, res) => {
  try {
    const assignment = await Assignment.create(req.body);
    res.status(201).json({ data: assignment });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAssignment = async (req, res) => {
  try {
    const { id } = req.params;
    const assignment = await Assignment.findById(id);
    res.status(200).json({ data: assignment });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateAssignment = async (req, res) => {
  try {
    const { id } = req.params;
    const assignment = await Assignment.findByIdAndUpdate(
      id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!assignment) {
      return res.status(404).json({ message: "Assignment not found" });
    }

    const updateassignment = await Assignment.findById(id);
    res.status(200).json({ data: updateassignment });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteAssignment = async (req, res) => {
  try {
    const { id } = req.params;
    const assignment = await Assignment.findByIdAndDelete(id);

    if (!assignment) {
      return res.status(404).json({ message: "Assignment not found" });
    }
    res.status(200).json({ message: "Assignment deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAssignments,
  createAssignment,
  getAssignment,
  updateAssignment,
  deleteAssignment,
};
