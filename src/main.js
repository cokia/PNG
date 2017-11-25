var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendFile("/home/environmentset/programming/JavaScript/png/routes/main.html");
});

module.exports = router;