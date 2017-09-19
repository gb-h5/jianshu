var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/api/login', function(req, res, next) {
    var mobile = req.body.telephone
    var password = req.body.pass
    res.json({
        success: true,
        mobile: mobile,
        password: password

    });
});

module.exports = router;
