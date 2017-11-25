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
    res.send(`<script> //여기에 히스토리 설정 </script>${req.query.filename} \n ${fs.readFileSync("/home/environmentset/programming/JavaScript/png/uploads/"+req.query.filename, 'utf8')}`);
});

module.exports = router;
