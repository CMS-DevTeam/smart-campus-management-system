const AcademicOfficer = require("../models/academicOfficer.model");

const getAcademicOfficers = async (req, res) => {
  try {
    const academicOfficer = await AcademicOfficer.find();
    res.status(200).json({ data: academicOfficer });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createAcademicOfficer = async (req, res) => {
  try {
    console.log(req.body);
    res.status(201).json({ data: academicOfficer });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAcademicOfficer = async (req, res) => {
  try {
    const { id } = req.params;
    const academicOfficer = await AcademicOfficer.findById(id);
    res.status(200).json({ data: academicOfficer });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateAcademicOfficer = async (req, res) => {
  try {
    const { id } = req.params;
    const academicOfficer = await AcademicOfficer.findByIdAndUpdate(
      id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!academicOfficer) {
      return res.status(404).json({ message: "AcademicOfficer not found" });
    }

    const updateacademicOfficer = await AcademicOfficer.findById(id);
    res.status(200).json({ data: updateacademicOfficer });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteAcademicOfficer = async (req, res) => {
  try {
    const { id } = req.params;
    const academicOfficer = await AcademicOfficer.findByIdAndDelete(id);

    if (!academicOfficer) {
      return res.status(404).json({ message: "AcademicOfficer not found" });
    }
    res.status(200).json({ message: "AcademicOfficer deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAcademicOfficers,
  createAcademicOfficer,
  getAcademicOfficer,
  updateAcademicOfficer,
  deleteAcademicOfficer,
};
