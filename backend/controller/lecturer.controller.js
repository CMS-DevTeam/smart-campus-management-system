const Lecturer = require("../models/lecturer.model");

const getLecturers = async (req, res) => {
  try {
    const lecturer = await Lecturer.find();
    res.status(200).json({ data: lecturer });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createLecturer = async (req, res) => {
  try {
    console.log(req.body);
    res.status(201).json({ data: lecturer });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getLecturer = async (req, res) => {
  try {
    const { id } = req.params;
    const lecturer = await Lecturer.findById(id);
    res.status(200).json({ data: lecturer });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateLecturer = async (req, res) => {
  try {
    const { id } = req.params;
    const lecturer = await Lecturer.findByIdAndUpdate(
      id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!lecturer) {
      return res.status(404).json({ message: "Lecturer not found" });
    }

    const updatelecturer = await Lecturer.findById(id);
    res.status(200).json({ data: updatelecturer });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteLecturer = async (req, res) => {
  try {
    const { id } = req.params;
    const lecturer = await Lecturer.findByIdAndDelete(id);

    if (!lecturer) {
      return res.status(404).json({ message: "Lecturer not found" });
    }
    res.status(200).json({ message: "Lecturer deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getLecturers,
  createLecturer,
  getLecturer,
  updateLecturer,
  deleteLecturer,
};
