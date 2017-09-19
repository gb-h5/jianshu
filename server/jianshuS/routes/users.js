var express = require('express');
var router = express.Router();
var userdao = require('./../dao/userDAO').userDao;
var utils =require('./../utils/util');

//产生令牌
var jwt=require('jwt-simple');
var moment = require('moment');

var ct=require('./../utils/checkToken');




/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/api/register', function(req, res, next) {
    var mobile = req.body.telephone;
    var password = utils.MD5(req.body.pass);
    var nickname = req.body.nickname;
    if (mobile !== '' && password !== '' && nickname !== '') {

        userdao.addUser(mobile, nickname, password, function (result) {
            if(result===1){
                res.json({"code":1})
            }else {
                res.json({"code":2})
            }
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
    if(user){
        var pass =utils.MD5(req.body.pass);
        userdao.attempLogin(user.telephone, pass, function (result) {
            if(result.length==1){
                console.log('here>>>>>>>>>>>>>.')

                //产生token
                var expires = moment().add(7, 'days').valueOf();
                var token = jwt.encode({
                    iss: user.telephone,
                    exp: expires
                }, utils.secret);

                res.json({"code": 1,token:token});

            }else {
                res.json({"code":2})
            }
        })
    }

    return
});

module.exports = router;
