var express = require('express');
var fs = require("fs");
var router = express.Router();

/* GET home page. */
router.get('/load', function(req, res, next) {
    res.sendFile(__dirname.split("/").slice(0,__dirname.split("/").length-1).join("/")+"/routes/load.html");
});

router.post('/download', function(req,res,next) {
    var filename = req.body.filename;
    if(fs.existsSync(__dirname.split("/").slice(0,__dirname.split("/").length-1).join("/")+"/uploads/"+filename)) {
        res.sendFile(__dirname.split("/").slice(0,__dirname.split("/").length-1).join("/")+"/uploads/"+filename);
    } else {
        res.status = 404;
        res.send("404 Not Found");
    }
});

router.get('/move', function(req,res,next) {
    res.sendFile(__dirname.split("/").slice(0,__dirname.split("/").length-1).join("/")+"/routes/Download.html");
});

module.exports = router;