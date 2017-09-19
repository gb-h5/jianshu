
var pool=require('./db_pool').pool;

exports.userDao={
    attempLogin:function (mobile, password, callback) {
        pool.getConnection(function (error,client) {
            if(error){
                return
            }
            client.query('SELECT * FROM user WHERE tele=? AND password=?',
                [mobile, password],function (error,result) {
                if(error){
                    console.log(error.message+' from getpasswordbyid');
                    callback('e004');
                    return;
                }
                callback(result);
                client.release();
            })
        })
    },
    addUser:function (mobile, nickname, password, callback) {
        pool.getConnection(function (error, client) {
            if (error) {
                callback(error)
                return
            }
            client.query('INSERT INTO user(tele, nickname, password) values (?, ?, ?)',
                [mobile, nickname, password], function (error, result) {
                    if (error){
                        callback(error)
                        return
                    }
                    callback(result.affectedRows)
                    client.release()
                }
            );
        })
    },
    createToken:function (telephone,token,callback) {
        pool.getConnection(function (error,client) {
            if(error){
                return
            }
            client.query(userSql.createToken,[token,telephone],function (error,result) {
                if(error){
                    callback('e004');
                    return;
                }

                callback(result);
                client.release();
            })
        })
    },
    getUserIcon:function (telephone,callback) {
        pool.getConnection(function (error,client) {
            if(error){
                return
            }
            client.query(userSql.getUserIcon,[telephone],function (error,result) {
                if(error){
                    console.log(error.message+' from getpasswordbyid');
                    callback('e004');
                    return;
                }

                callback(result);
                client.release();
            })
        })
    },
    addUserIcon:function (telephone,iconName,callback) {
        pool.getConnection(function (error,client) {
            if(error){
                callback('e004');
                return;
            }
            client.query(userSql.addUserIcon,[telephone,iconName],function (error,result) {
                if(error){
                    console.log(error.message+' from getpasswordbyid');
                    callback('e004');
                    return;
                }

                callback(result[0][0].result);
                // console.log(result[0][0].result);
                client.release();
            })
        })
    }
}