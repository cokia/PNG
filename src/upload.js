var express = require('express');
var multer = require("multer");
var dirname = __dirname.split("/").slice(0,__dirname.split("/").length-1).join("/");
var fs = require("fs");
var upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, dirname+'/uploads/');
        },
        filename: function (req, file, cb) {
            cb(null, file.originalname);
        }
    })
});
var router = express.Router();

/* GET home page. */
router.get('/upload', function(req, res, next) {
    res.sendFile(dirname+"/routes/upload.html");
});

router.post('/upload',upload.single('file'), function (req,res) {
    if(req.file.originalname === req.file.originalname.split(".")[0]) {
        res.send("Upload Success \n file : "+req.file.originalname);
    } else {
        res.send("Upload Failed 파일 확장자를 제거해 주세요.");
        fs.unlinkSync(dirname+"/uploads/"+req.file.originalname);
    }
});

module.exports = router;