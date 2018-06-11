var express= require("express");
var mongoose= require("mongoose");
var app= express();
var path = require("path");
var cheerio= require("cheerio");
var db= require("./models");
app.get('/', function(req, res) {
    res.redirect('/articles');
});