var express = require('express');
var fs = require("fs");
var dirname = __dirname.split("/").slice(0,__dirname.split("/").length-1).join("/");
var router = express.Router();

/* GET home page. */
router.get('/delete', function(req, res, next) {
    res.sendFile(dirname+"/routes/delete.html");
});

router.post('/delete', function(req,res,next) {
    var filename = req.body.filename;
    if(fs.existsSync(dirname+"/uploads/"+filename)) {
        fs.unlinkSync(dirname+"/uploads/"+filename);
        res.send("Delete finish");
    } else {
        res.status = 404;
        res.send("404 Not Found");
    }
});

module.exports = router;