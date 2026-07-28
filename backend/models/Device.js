const mongoose = require("mongoose");

const deviceSchema = new mongoose.Schema(
  {
    deviceName: {
      type: String,
      required: true,
    },

    ipAddress: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      default: "Online",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Device", deviceSchema);