const Device = require("../models/Device");

// GET - Get all devices
const getDevices = async (req, res) => {
  try {
    const devices = await Device.find();
    res.json(devices);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// POST - Add new device
const addDevice = async (req, res) => {
  try {
    const device = await Device.create(req.body);
    res.status(201).json(device);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const updateDevice = async (req, res) => {
  try {
    const device = await Device.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!device) {
      return res.status(404).json({
        message: "Device not found",
      });
    }

    res.json(device);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
// DELETE - Delete device
const deleteDevice = async (req, res) => {
  try {
    const device = await Device.findByIdAndDelete(req.params.id);

    if (!device) {
      return res.status(404).json({
        message: "Device not found",
      });
    }

    res.json({
      message: "Device deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
module.exports = {
  getDevices,
  addDevice,
  updateDevice,
  deleteDevice,
};