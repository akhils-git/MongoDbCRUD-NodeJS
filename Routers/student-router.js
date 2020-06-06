const router = require("express").Router();

router.get("/student", (req, res) => {
  res.send("done");
});

module.exports = router;
