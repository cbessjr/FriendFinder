// Dependencies
// var express = require("express");
// var path = require("path");

// Express
// var app = express();
// var PORT = 3000;

// Sets up the Express app to handle data parsing
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// Requiring Dependencies.
var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')

// Create an instance of express server.
var app = express();

// Our port will be whatever we are given, or if given nothing it will be 80.
var appPORT = process.env.PORT || 8080;

// Enabling Express to serve static files. (Allows our JavaScript & CSS files to be used)
app.use(express.static('app/public'));

// Body-parser middleware!
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// Requiring the files with routing information.
require('./app/routing/apiRoutes.js')(app); 
require('./app/routing/htmlRoutes.js')(app);

// Starts our server.
app.listen(appPORT, function() {
    console.log("Listening on port: " + appPORT);
});
