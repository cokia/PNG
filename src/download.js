var express = require('express');
var fs = require("fs");
var path = require('path');
var dirname = __dirname.split("/").slice(0,__dirname.split("/").length-1).join("/");
var router = express.Router();

/* GET home page. */
router.get('/load', function(req, res, next) {
    res.sendFile(dirname+"/routes/load.html");
});

router.post('/download', function(req,res,next) {
    var filename = path.basename(req.body.filename);
    if(fs.existsSync(dirname+"/uploads/"+filename)) {
        res.sendFile(dirname+"/uploads/"+filename);
    } else {
        res.status = 404;
        res.send("404 Not Found");
    }
});

router.get('/move', function(req,res,next) {
    res.sendFile(dirname+"/routes/Download.html");
});

module.exports = router;