
var pool=require('./db_pool').pool;

exports.userDao= {

    attempLogin: function (mobile, password, callback) {
        pool.getConnection(function (error, client) {
            if (error) {
                return
            }
            client.query('SELECT * FROM user WHERE tele=? AND password=?',
                [mobile, password], function (error, result) {
                    if (error) {
                        console.log(error.message + ' from getpasswordbyid');
                        callback('e004');
                        return;
                    }
                    callback(result);
                    client.release();
                })
        })
    },
    addUser: function (mobile, nickname, password, callback) {
        pool.getConnection(function (error, client) {
            if (error) {
                callback(error)
                return
            }
            client.query('select * from user where tele=?', [mobile], function (error, results, fields) {
                if (!!results.length) {
                    callback(1)
                    return
                }
                // if not regitered
                client.query('INSERT INTO user(tele, nickname, password, created_at) values (?, ?, ?, ?)',
                    [mobile, nickname, password, new Date().toLocaleString()], function (error, result) {
                        if (error) {
                            callback(error)
                            return
                        }
                        callback(0)
                        client.release()
                    }
                );
            })


        })
    },
    createToken: function (telephone, token, callback) {
        pool.getConnection(function (error, client) {
            if (error) {
                return
            }
            client.query(userSql.createToken, [token, telephone], function (error, result) {
                if (error) {
                    callback('e004');
                    return;
                }

                callback(result);
                client.release();
            })
        })
    },
    getUserIcon: function (telephone, callback) {
        pool.getConnection(function (error, client) {
            if (error) {
                return
            }
            client.query(userSql.getUserIcon, [telephone], function (error, result) {
                if (error) {
                    console.log(error.message + ' from getpasswordbyid');
                    callback('e004');
                    return;
                }

                callback(result);
                client.release();
            })
        })
    },
    addUserIcon: function (telephone, iconName, callback) {
        pool.getConnection(function (error, client) {
            if (error) {
                callback('e004');
                return;
            }
            client.query(userSql.addUserIcon, [telephone, iconName], function (error, result) {
                if (error) {
                    console.log(error.message + ' from getpasswordbyid');
                    callback('e004');
                    return;
                }

                callback(result[0][0].result);
                // console.log(result[0][0].result);
                client.release();
            })
        })
    },
    getBlog: function (callback) {
        pool.getConnection(function (error, client) {
            if (error) {
                return
            }
            var query = 'SELECT blog.*,`user`.nickname AS author, category.categoryname, count(distinct `like`.like_id) as like_count'
            +' FROM blog'
            +' LEFT JOIN `like` ON blog.blog_id = `like`.blog_id'
            +' LEFT JOIN `category` ON blog.category_id = `category`.category_id'
            +' LEFT JOIN `user` ON blog.user_id = `user`.userid'
            +' GROUP BY blog.blog_id '
            client.query(query, function (error, result) {
                if (error) {
                    callback('e004');
                    return;
                }
                callback(result);
                client.release();
            })
        })
    },

    getCategory: function (callback) {
        pool.getConnection(function (error, client) {
            if (error) {
                return
            }
            var query = 'SELECT * FROM category'

            client.query(query, function (error, result) {
                if (error) {
                    callback('e004');
                    return;
                }
                callback(result);
                client.release();
            })
        })
    },
    getUser: function (tel,callback) {
        pool.getConnection(function (error, client) {
            if (error) {
                return
            }
            var query = 'SELECT * FROM user where tele = ?'

            client.query(query,[tel], function (error, result) {
                if (error) {
                    callback('e004');
                    return;
                }
                callback(result);
                client.release();
            })
        })
    },

    getPerBlog: function (tel,callback) {
        pool.getConnection(function (error, client) {
            if (error) {
                return
            }
            var query = 'SELECT blog.*,`user`.nickname AS author, category.categoryname, count(distinct `like`.like_id) as like_count'
            +' FROM blog'
            +' LEFT JOIN `like` ON blog.blog_id = `like`.blog_id'
            +' LEFT JOIN `category` ON blog.category_id = `category`.category_id'
            +' LEFT JOIN `user` ON blog.user_id = `user`.userid WHERE user.tele=?'
            +' GROUP BY blog.blog_id '

            client.query(query,[tel], function (error, result) {
                if (error) {
                    callback('e004');
                    return;
                }
                callback(result);
                client.release();
            })
        })
    },

}