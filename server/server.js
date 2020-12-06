const express = require("express");
const bodyParser = require("body-parser");

const PORT = 3000;
const api = require('./routes/api')
const app = express();

app.use(bodyParser.json());

app.use('/api', api);

// this uses a get Method to send requests from frontend to the endpoint localhost:3000/ ie landing page
app.get("/", (req, res)=> {
    res.send('Hello world from server.js')
});

app.listen(PORT, function () {
  console.log("Server running on localhost: " + PORT);
});
