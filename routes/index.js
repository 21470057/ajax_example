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
      /*const existingInput = chartCollection.findOne({ key: data.key });

      if (existingInput) {
        // Update
        existingInput.value = existingInput.value + parseInt(data.value);
        chartCollection.update(existingInput);
      } else {*/
      // Create
      chartCollection.insert({
        key: data.key,
        value: parseInt(data.value),
      });
      //}
    } catch (err) {
      console.log(err);
    }
  });

  res.json({ result: true, data: chartCollection.find() });
});

module.exports = router;
