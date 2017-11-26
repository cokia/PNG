var express = require('express');
var fs = require("fs");
var router = express.Router();

/* GET home page. */
router.get('/delete', function(req, res, next) {
    res.sendFile(__dirname.split("/").slice(0,__dirname.split("/").length-1).join("/")+"/routes/delete.html");
});

router.post('/delete', function(req,res,next) {
    var filename = req.body.filename;
    if(fs.existsSync(__dirname.split("/").slice(0,__dirname.split("/").length-1).join("/")+"/uploads/"+filename)) {
        fs.unlinkSync(__dirname.split("/").slice(0,__dirname.split("/").length-1).join("/")+"/uploads/"+filename);
        res.send("Delete finish");
    } else {
        res.status = 404;
        res.send("404 Not Found");
    }
});

module.exports = router;