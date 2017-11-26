//XSS vul
var express = require('express');
var fs = require("fs");
var opn = require('opn');
var router = express.Router();

/* GET home page. */
router.get('/check', function(req, res, next) {
    var filename = req.query.filename;
    if(fs.existsSync("/home/environmentset/programming/JavaScript/png/uploads/"+filename)) {
        opn(`http://127.0.0.1:8080/test?filename=${filename}`);
        res.send("ok");
    } else {
        res.status = 404;
        res.send("404 Not Found");
    }
});

router.get('/test', function(req, res, next) {
    res.send(`<script> 
    var stateObj = { ab : "cdf" };
    history.pushState(stateObj, "page 2", "/secret");
    var stateObj = { foo: "bar" };
    history.pushState(stateObj, "page 3", "bar.html");
     var stateObj = { la: "lo" };
    history.pushState(stateObj, "page 4", "lo.html");
    </script>${req.query.filename} \n ${fs.readFileSync("/home/environmentset/programming/JavaScript/png/uploads/"+req.query.filename, 'utf8')}`);
});

module.exports = router;
