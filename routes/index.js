const { json } = require("express");
var express = require("express");
var router = express.Router();

var loki = require("lokijs");

var db = new loki("data.json", {
  autoload: true,
  autoloadCallback: databaseInitialize,
  autosave: true,
  autosaveInterval: 4000,
});

function databaseInitialize() {
  var chart = db.getCollection("chart");
  if (chart === null) {
    chart = db.addCollection("chart");
  }
}

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// Create/ Update chart data
router.post("/data/", (req, res) => {
  const newData = req.body;

  var chartCollection = db.getCollection("chart");

  newData.forEach((data) => {
    try {
      const existingInput = chartCollection.findOne({ key: data.key });

      if (existingInput) {
        console.log(existingInput);
        existingInput.value = existingInput.value + parseInt(data.value);
        chartCollection.update(existingInput);
      } else {
        chartCollection.insert({
          key: data.key,
          value: parseInt(data.value),
        });
      }
    } catch (err) {
      console.log(err);
    }
  });

  // console.log(newData);
  res.json({ result: true, data: chartCollection.find() });
});

// Get Chart Data
router.get("/data/", (req, res) => {
  var result = db.getCollection("chart").find();

  res.json({ data: result });
});

module.exports = router;
