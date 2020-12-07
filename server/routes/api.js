const express = require("express");
const router = express.Router();
const User = require("../models/user");
const mongoose = require("mongoose");

const db = "mongodb://localhost:27017/eventsdb";

mongoose.connect(db,{ useNewUrlParser: true, useUnifiedTopology: true },(err) => {
    if (err) {
      console.error("Error! " + err);
    } else {
      console.log("Connected to Mongodb");
    }
  }
);

// this uses a get Method to send requests from frontend to the endpoint localhost:3000/api
router.get("/", (req, res) => {
  res.send("Called From api.js route");
});

// this uses a post Method to send requests from frontend to the endpoint localhost:3000/api/register
router.post("/register", (req, res) => {
  let userData = req.body; // retreves the data inputted in frontend
  let user = new User(userData); // passes the data into a new instance of the imported User class that Mongoose understands

  user.save((error, registerUser) => {
    // this saves the entered data into Mongodb
    if (error) {
      console.log("Error! " + error);
    } else {
      res.status(200).send(registerUser);
    }
  });
});

// this uses a post Method to send requests from frontend to the endpoint localhost:3000/api/login
router.post("/login", (req, res) => {
  let userData = req.body;

  // The findOne Method checks the mongodb to see if the entered email from the frontend exists in the db
  User.findOne({ email: userData.email }, (error, user) => {
    if (error) {
      console.log("Error!" + error);
    } else {
      if (!user) {
        res.status(401).send("Invalid email");
      } else if (user.password != userData.password) {
        res.status(401).send("Invalid password");
      } else {
        res.status(200).send(user);
      }
    }
  });
});

// this uses a get Method to send requests from frontend to the endpoint localhost:3000/api/events
router.get("/events", (req, res) => {
  // normally the list of events should be calling the data from mongodb using findAll method but this is test
  let events = [
    {
      _id: "1",
      name: "Auto Expo",
      description: "Lorem ipsum",
      date: "2012-04-23T18:25:43.511Z",
    },
    {
      _id: "2",
      name: "Auto Expo",
      description: "Lorem ipsum",
      date: "2012-04-23T18:25:43.511Z",
    },
    {
      _id: "3",
      name: "Auto Expo",
      description: "Lorem ipsum",
      date: "2012-04-23T18:25:43.511Z",
    },
    {
      _id: "4",
      name: "Auto Expo",
      description: "Lorem ipsum",
      date: "2012-04-23T18:25:43.511Z",
    },
    {
      _id: "5",
      name: "Auto Expo",
      description: "Lorem ipsum",
      date: "2012-04-23T18:25:43.511Z",
    },
  ];
  res.json(events); // this returs the list of events as json file
});

// this uses a get Method to send requests from frontend to the endpoint localhost:3000/api/special
router.get("/special", (req, res) => {
  // normally the list of special should be calling the data from mongodb using findAll method but this is test
  let events = [
    {
      _id: "1",
      name: "Auto Expo",
      description: "Lorem ipsum",
      date: "2012-04-23T18:25:43.511Z",
    },
    {
      _id: "2",
      name: "Auto Expo",
      description: "Lorem ipsum",
      date: "2012-04-23T18:25:43.511Z",
    },
    {
      _id: "3",
      name: "Auto Expo",
      description: "Lorem ipsum",
      date: "2012-04-23T18:25:43.511Z",
    },
    {
      _id: "4",
      name: "Auto Expo",
      description: "Lorem ipsum",
      date: "2012-04-23T18:25:43.511Z",
    },
  ];
  res.json(events); // this returs the list of special events as json file
});

module.exports = router;
