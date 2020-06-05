const mongoose = require("mongoose");
const express = require("express");
const person = require("./person");
var cors = require("cors");
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

app.post("/save", (req, res) => {
  var savedata = new person({
    name: req.body.name,
    age: req.body.age,
    createdAt: Date.now(),
  }).save(function (err, result) {
    if (err) throw err;
    if (result) {
      res.json(result);
    }
  });
});

app.get("/find/:name", cors(), (req, res) => {
  var query = req.params.query;
  console.log(query);
  person.find(
    {
      request: query,
    },
    function (err, result) {
      if (err) throw err;
      if (result) {
        res.json(result);
      } else {
        res.send(
          JSON.stringify({
            error: "Error",
          })
        );
      }
    }
  );
});

// mongoose.collection("customers").findOne({}, function (err, result) {
//   if (err) throw err;
//   console.log(result.name);
//   db.close();
// });

app.listen(3000);
