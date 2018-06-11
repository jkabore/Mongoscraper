var express=require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
// Require all models
var db = require("./models");
// Initialize Express
var app = express();

// Axios is a promised-based http library, similar to jQuery's Ajax method
var axios = require("axios");
//require models from controllers
var routes = require('./controllers/controllers.js');
//require handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
    defaultLayout: "main",
   
}));
app.set("view engine", "handlebars");
 

var PORT = 3000;


app.use('/', routes);
// Use morgan logger for logging requests
app.use(logger("dev"));
// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));
// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));



// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/scraper");


// Start the server
app.listen(PORT, function(){
    console.log("App running on port " + PORT + "!")});
