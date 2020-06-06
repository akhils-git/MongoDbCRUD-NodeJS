const mongoose = new require("mongoose");

const studentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  mark: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: Date.now,
  },
});

module.exports = mongoose.model("Student", studentSchema);
