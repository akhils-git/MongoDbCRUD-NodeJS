const mongoose = require("mongoose");
const express = require("express");
const studentRouter = require("./Routers/student-router");

const app = new express();

app.use(express.json());

mongoose.connect(
  "mongodb+srv://root:1234@iti-dbmyx.mongodb.net/CRUDOprations",
  { useNewUrlParser: true },
  (err) => {
    if (!err) {
      console.log("Sucesss");
    } else {
      console.log("Err");
    }
  }
);

app.use("/college", studentRouter);
app.listen(4000);
