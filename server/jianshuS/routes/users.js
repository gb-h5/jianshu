var express = require('express');
var router = express.Router();
var userdao = require('./../dao/userDAO').userDao;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/api/register', function(req, res, next) {
    var mobile = req.body.telephone;
    var password = req.body.pass;
    var nickname = req.body.nickname;
    if (mobile !== '' && password !== '' && nickname !== '') {
        userdao.addUser(mobile, nickname, password, function (result) {
            if(result===1){
                res.json({"code":1})
            }else {
                res.json({"code":2})
            }
            // res.json({
            //     success: result,
            //     code: !!result,
            //     message: 'success'
            // })
        })
        return
    }
    res.json({
        success: false,
        code: 2,
        message: '不能为空'
    })
    return
});

router.post('/api/login', function(req, res, next) {
    var user = req.body;
    // if (!(user.telephone && user.pass)) {
    //     res.json({
    //         success: false,
    //         code: 2,
    //         message: '不能为空'
    //     })
    //     return
    // }
    if(user){
        userdao.attempLogin(user.telephone, user.pass, function (result) {
            if(result.length==1){
                res.json({"code":1})
            }else {
                res.json({"code":2})
            }
        })
    }

    return
});

module.exports = router;
