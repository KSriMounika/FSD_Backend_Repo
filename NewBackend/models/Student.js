const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  hoot_id: Number,
  name: String,
  branch: String,
  college: String,
  gender: String,
  poolNo: String
});

module.exports = mongoose.model("Student", studentSchema);
