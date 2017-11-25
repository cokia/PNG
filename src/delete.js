var express = require('express');
var fs = require("fs");
var router = express.Router();

/* GET home page. */
router.get('/delete', function(req, res, next) {
    res.sendFile("/home/environmentset/programming/JavaScript/png/routes/delete.html");
});

router.post('/delete', function(req,res,next) {
    var filename = req.body.filename;
    if(fs.existsSync("/home/environmentset/programming/JavaScript/png/uploads/"+filename)) {
        fs.unlinkSync("/home/environmentset/programming/JavaScript/png/uploads/"+filename);
        res.send("Delete finish");
    } else {
        res.status = 404;
        res.send("404 Not Found");
    }
});

module.exports = router;