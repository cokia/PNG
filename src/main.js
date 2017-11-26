var express = require('express');
var dirname = __dirname.split("/").slice(0,__dirname.split("/").length-1).join("/");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendFile(dirname+"/routes/main.html");
});

module.exports = router;