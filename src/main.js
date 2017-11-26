var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendFile(__dirname.split("/").slice(0,__dirname.split("/").length-1).join("/")+"/routes/main.html");
});

module.exports = router;