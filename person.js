const mongoose = require("mongoose");
const personSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      required: Date.now(),
    },
  },
  {
    collection: "Person",
  }
);

module.exports = mongoose.model("Person", personSchema);
