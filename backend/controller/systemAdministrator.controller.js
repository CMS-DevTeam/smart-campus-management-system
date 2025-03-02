const SystemAdministrator = require("../models/systemAdministrator.model");

const getSystemAdministrators = async (req, res) => {
  try {
    const systemAdministrators = await SystemAdministrator.find();
    res.status(200).json({ data: systemAdministrators });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createSystemAdministrator = async (req, res) => {
  try {
    const systemAdministrator = await SystemAdministrator.create(req.body);
    res.status(201).json({ data: systemAdministrator });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSystemAdministrator = async (req, res) => {
  try {
    const { id } = req.params;
    const systemAdministrator = await SystemAdministrator.findById(id);
    res.status(200).json({ data: systemAdministrator });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateSystemAdministrator = async (req, res) => {
  try {
    const { id } = req.params;
    const systemAdministrator = await SystemAdministrator.findByIdAndUpdate(
      id,
      req.body
    );

    if (!systemAdministrator) {
      return res.status(404).json({ message: "Addministrator not found" });
    }

    const updateSystemAdministrator = await SystemAdministrator.findById(id);
    res.status(200).json({ data: updateSystemAdministrator });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteSystemAdministrator = async (req,res) => {
    try {
        const { id } = req.params;
        const systemAdministrator = await SystemAdministrator.findByIdAndDelete(id);
    
        if (!systemAdministrator) {
          return res.status(404).json({ message: "Addministrator not found" });
        }
        res.status(200).json({ message: "Addministrator deleted successfully" });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
};

module.exports = {
    getSystemAdministrators,
    createSystemAdministrator,
    getSystemAdministrator,
    updateSystemAdministrator,
    deleteSystemAdministrator
}