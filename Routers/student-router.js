const router = require("express").Router();
const Student = require("../Model/Student");

//Get all students
router.get("/student", async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.json({ message: err });
  }
});

//Get single student
router.get("/student/:studentId", async (req, res) => {
  try {
    const student = await Student.findById(req.params.studentId);
    res.json(student);
  } catch (error) {
    res.json(err);
  }
});

//Save Student
router.post("/student", async (req, res) => {
  const student = new Student({
    name: req.body.name,
    department: req.body.department,
    mark: req.body.mark,
    remarks: req.body.remarks,
  });
  try {
    const savedStudent = await student.save();
    res.json(savedStudent);
  } catch (err) {
    res.json({ message: err });
  }
});

//Delete Student
router.delete("/student/:studentId", async (req, res) => {
  try {
    const deletedStudent = await Student.remove({ _id: req.params.studentId });
    res.json(deletedStudent);
  } catch (error) {
    res.json({ message: err });
  }
});

//Update Student
router.patch("/student/:studentId", async (req, res) => {
  try {
    const updatedStudent = await Student.updateOne(
      { _id: req.params.studentId },
      {
        $set: {
          name: req.body.name,
          departement: req.body.departement,
          mark: req.body.mark,
        },
      }
    );
    res.json(updatedStudent);
  } catch (error) {
    res.json({ message: err });
  }
});
module.exports = router;
