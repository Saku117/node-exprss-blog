let sql = {
    loginsql: 'SELECT uid FROM t_user WHERE name=? and password=?',
    myquerysql: 'SELECT name,uid,nick_name FROM t_user WHERE uid=?',
    register:'INSERT INTO t_user(name,password,create_time) VALUES(?,?,?)'
}



module.exports = sql