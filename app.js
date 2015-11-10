"use strict";

var express = require("express");
var bodyParser = require('body-parser');
var marked = require('marked');
console.log(marked('I am using __markdown__.'));

var app = express();

app.set('view engine', 'jade');
app.use(express.static('public'));

app.get("/", function(req, res){
  res.render("index");
});

var port = process.env.port || 3000;
app.listen(port);