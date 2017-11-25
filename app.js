var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var opn = require('opn');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));

var main = require("./src/main");
var upload = require("./src/upload");
var download = require("./src/download");
var _delete = require("./src/delete");
var checker= require("./src/checker");

console.log("Problem Server is Ready");
app.listen(8080);

app.use(main);
app.use(upload);
app.use(download);
app.use(_delete);
app.use(checker);

app.use(function(req, res, next) {
    res.status = 404;
    res.send("404 Not Found");
});

module.export = app;