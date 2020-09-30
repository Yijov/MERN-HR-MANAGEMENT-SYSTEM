const mongoose = require("mongoose");
const { Schema } = mongoose;

const departmentSchema = new Schema(
  {
    departmentName: {
      type: String,
      required: true,
      max: 50,
      trim: true,
      unique: true,
    },
    manager: {
      ///Badge del Manager
      type: String,
      required: true,
      match: /BDG-\d{6}/,
      trim: true,
    },
    numOFemployees: {
      type: Number,
      required: true,
      trim: true,
      default: 0,
    },
  },
  {
    timestamps: true, /// gets timestamps of the time in witvh the emtry was created
  }
);

const Department = mongoose.model("department", departmentSchema);

module.exports = Department;
