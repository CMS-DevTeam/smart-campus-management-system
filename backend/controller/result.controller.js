const Result = require("../models/result.model");

const getResults = async (req, res) => {
  try {
    const result = await Result.find();
    res.status(200).json({ data: result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createResult = async (req, res) => {
  try {
    const result = await Result.create(req.body);
    res.status(201).json({ data: result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getResult = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Result.findById(id);
    res.status(200).json({ data: result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateResult = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Result.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!result) {
      return res.status(404).json({ message: "Result not found" });
    }

    const updateResult = await Result.findById(id);
    res.status(200).json({ data: updateResult });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteResult = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Result.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({ message: "Result not found" });
    }
    res.status(200).json({ message: "Result deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getResults,
  createResult,
  getResult,
  updateResult,
  deleteResult,
};
