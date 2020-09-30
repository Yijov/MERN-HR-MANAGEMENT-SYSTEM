const mongoose = require("mongoose");
const { Schema } = mongoose;

const employeeSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      max: 50,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      max: 50,
      trim: true,
    },
    department: {
      type: String,
      required: true,
      trim: true,
    },
    position: {
      type: String,
      required: true,
      trim: true,
    },
    badge: {
      type: String,
      match: /BDG-\d{6}/,
      required: true,
      unique: true,
      trim: true,
    },
    hireDate: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true, /// gets timestamps of the time in witvh the emtry was created
  }
);

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
