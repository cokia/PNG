//XSS vul
var express = require('express');
var fs = require("fs");
var opn = require('opn');
var path = require('path');
var router = express.Router();
var dirname = __dirname.split("/").slice(0,__dirname.split("/").length-1).join("/");

/* GET home page. */
router.get('/check', function(req, res, next) {
    var filename = path.basename(req.query.filename);
    if(fs.existsSync(dirname+"/uploads/"+filename)) {
        opn(`http://127.0.0.1:8080/test?filename=${filename}`);
        res.send("ok");
    } else {
        res.status = 404;
        res.send("404 Not Found");
    }
});

router.get('/test', function(req, res, next) {
    try{
        res.send(`<script> 
    var stateObj = { ab : "cdf" };
    history.pushState(stateObj, "page 2", "/secret");
    var stateObj = { foo: "bar" };
    history.pushState(stateObj, "page 3", "bar.html");
     var stateObj = { la: "lo" };
    history.pushState(stateObj, "page 4", "lo.html");
    </script>${req.query.filename} \n ${fs.readFileSync(dirname+"/uploads/"+path.basename(req.query.filename), 'utf8')}`);
    } catch (e)  {
        res.send("ERROR FILE");
    }
});

module.exports = router;