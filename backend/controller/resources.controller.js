const Resource = require("../models/resources.model");

const getResources = async (req, res) => {
  try {
    const resource = await Resource.find();
    res.status(200).json({ data: resource });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createResource = async (req, res) => {
  try {
    const resource = await Resource.create(req.body);
    res.status(201).json({ data: resource });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getResource = async (req, res) => {
  try {
    const { id } = req.params;
    const resource = await Resource.findById(id);
    res.status(200).json({ data: resource });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateResource = async (req, res) => {
  try {
    const { id } = req.params;
    const resource = await Resource.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!resource) {
      return res.status(404).json({ message: "Resource not found" });
    }

    const updateresource = await Resource.findById(id);
    res.status(200).json({ data: updateresource });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteResource = async (req, res) => {
  try {
    const { id } = req.params;
    const resource = await Resource.findByIdAndDelete(id);

    if (!resource) {
      return res.status(404).json({ message: "Resource not found" });
    }
    res.status(200).json({ message: "Resource deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getResources,
  createResource,
  getResource,
  updateResource,
  deleteResource,
};
