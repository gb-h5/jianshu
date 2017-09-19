/**
 * Created by 李慧 on 2017/9/18.
 */
var express = require('express');
var router = express.Router();

router.post('/api/login', function(req, res, next) {
    var mobile = req.body.telephone
    var password = req.body.pass
    res.json({
        success: true,
        data: {
            mobile: req.body.telephone,
            password: req.body.pass
        }
    });
});


module.exports = router;