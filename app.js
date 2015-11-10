"use strict";

var express = require("express");
var bodyParser = require('body-parser');
var marked = require('marked');
console.log(marked('I am using __markdown__.'));

var app = express();

app.set('view engine', 'jade');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get("/", function(req, res){
  res.render("index");
});

app.post("/", function(req, res){
  var mdText = req.body;
  var html = marked(req.body.string);
  res.send(html);
});

var port = process.env.port || 3000;
app.listen(port);
