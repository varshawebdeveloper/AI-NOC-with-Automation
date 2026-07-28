const express = require("express");

const router = express.Router();

const {
  getDevices,
  addDevice,
  updateDevice,
  deleteDevice,
} = require("../controllers/deviceController");

// GET all devices
router.get("/", getDevices);

// POST new device
router.post("/", addDevice);

// UPDATE device
router.put("/:id", updateDevice);

// DELETE device
router.delete("/:id", deleteDevice);

module.exports = router;