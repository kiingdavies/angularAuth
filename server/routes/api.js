const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");

const db = "mongodb://localhost:27017/eventsdb";
mongoose.connect(db, (err) => {
  if (err) {
    console.error('Error!' + err);
  } else {
    {
      console.log('Connected to Mongodb');
      //useNewUrlParser: true;
    }
  }
});

router.get("/", (req, res) => {
  res.send("Called From api.js route");
});

module.exports = router;
