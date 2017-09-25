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


            if(result=='0'){

                var expires = moment().add(7, 'days').valueOf();
                var token = jwt.encode({
                    iss: mobile,
                    exp: expires
                }, utils.secret);

                res.json({
                    "success": true,
                    "code": 0,
                    "message": "注册成功",
                    token:token
                })
                return
            }
            res.json({
                "success": false,
                "code": 1,
                "message": "用户已存在"
            })
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
router.get('/api/getBlog',function (req, res,next) {
    userdao.getBlog(function (result) {
        // console.log(result)
        res.json({
            success: true,
            code: 0,
            data:result,
            message: '查询成功'
        })

    })
});

router.get('/api/getCategory',function (req, res,next) {
    userdao.getCategory(function (result) {
        // console.log(result)
        res.json({
            success: true,
            code: 0,
            data:result,
            message: '查询成功'
        })

    })
});

router.get('/api/getUser',ct.checkToken,function (req, res, next) {

    var decoded = jwt.decode(req.header('token'), utils.secret);
    var userTel=decoded.iss;
    userdao.getUser(userTel,function (result) {
        // console.log(result);
        res.json({
            success: true,
            code: 0,
            data:result,
            message: '查询成功'
        })

    })
});

router.get('/api/getPerBlog',function (req, res, next) {

    var decoded = jwt.decode(req.header('token'), utils.secret);
    var userTel=decoded.iss;
    userdao.getPerBlog(userTel,function (result) {
        // console.log(result);
        res.json({
            success: true,
            code: 0,
            data:result,
            message: '查询成功'
        })

    })
});


router.get('/api/getPerLike',function (req, res, next) {

    var decoded = jwt.decode(req.header('token'), utils.secret);
    var userTel=decoded.iss;
    userdao.getPerLike(userTel,function (result) {
        // console.log(result);
        res.json({
            success: true,
            code: 0,
            data:result,
            message: '查询成功'
        })

    })
});
router.get('/api/getPerCollection',function (req, res, next) {

    var decoded = jwt.decode(req.header('token'), utils.secret);
    var userTel=decoded.iss;
    userdao.getPerCollection(userTel,function (result) {
        // console.log(result);
        res.json({
            success: true,
            code: 0,
            data:result,
            message: '查询成功'
        })

    })
});

router.get('/api/getfollowed',function (req, res, next) {

    var decoded = jwt.decode(req.header('token'), utils.secret);
    var userTel=decoded.iss;
    userdao.getfollowed(userTel,function (result) {
        // console.log(result);
        res.json({
            success: true,
            code: 0,
            data:result,
            message: '查询成功'
        })

    })
});
router.get('/api/getfans',function (req, res, next) {

    var decoded = jwt.decode(req.header('token'), utils.secret);
    var userTel=decoded.iss;
    return res.json({
        id: 0,
        nickname: '',
        fans: 0
    })
    return

    var fans = (function (userTel) {
        return userdao.getfans(userTel, function (users) {
            return users;
        })
    })()
    console.log(fans)
    var dataArr = [];
    for(var i = 0; i < users.length; i++){
        var user = users[i]
        var fansCount = (function (count) {
            var count = 0
            userdao.getfansCount(user.userid, function (result) {
                return count = result.fansCount
            })
            return count
        })(user)
        dataArr.push(
            {
                id: user.userid,
                nickname: user.nickname,
                fans: fansCount
            }
        )
    }
    res.json({
        success: true,
        code: 0,
        data: dataArr,
        message: '查询成功'
    })
});

router.get('/api/toArticle',function (req, res, next) {

    // console.log(req.headers('blogId'))
    // console.log(req.query.blogId);
    var blogId=req.query.blogId;
    userdao.toArticle(blogId,function (result) {
        // console.log(result);
        res.json({
            success: true,
            code: 0,
            data:result,
            message: '查询成功'
        })

    })


    // userdao.toArticle(userTel, function (result) {
    //     // console.log(result);
    //     res.json({
    //         success: true,
    //         code: 0,
    //         data: result,
    //         message: '查询成功'
    //     })
    // });
});

module.exports = router;
