var express = require('express');
var multer = require("multer");
var fs = require("fs");
var upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'uploads/');
        },
        filename: function (req, file, cb) {
            cb(null, file.originalname);
        }
    })
});
var router = express.Router();

/* GET home page. */
router.get('/upload', function(req, res, next) {
    res.sendFile("/home/environmentset/programming/JavaScript/png/routes/upload.html");
});

router.post('/upload',upload.single('file'), function (req,res) {
    if(req.file.originalname === req.file.originalname.split(".")[0]) {
        res.send("Upload Success \n file : "+req.file.originalname);
    } else {
        res.send("Upload Failed");
        fs.unlinkSync("/home/environmentset/programming/JavaScript/png/uploads/"+req.file.originalname);
    }
});

module.exports = router;