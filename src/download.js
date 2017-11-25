var express = require('express');
var fs = require("fs");
var router = express.Router();

/* GET home page. */
router.get('/load', function(req, res, next) {
    res.sendFile("/home/environmentset/programming/JavaScript/png/routes/load.html");
});

router.post('/download', function(req,res,next) {
    var filename = req.body.filename;
    if(fs.existsSync("/home/environmentset/programming/JavaScript/png/uploads/"+filename)) {
        res.sendFile("/home/environmentset/programming/JavaScript/png/uploads/"+filename);
    } else {
        res.status = 404;
        res.send("404 Not Found");
    }
});

router.get('/move', function(req,res,next) {
    res.sendFile("/home/environmentset/programming/JavaScript/png/routes/Download.html");
});

module.exports = router;