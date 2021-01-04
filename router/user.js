const db = require('../db/index.js')
const sql = require('../db/sql.js')
const utils = require('../utils/index.js');
const Tips = require('../utils/tip');

// 登录功能
function login(req, res, next) {
    let data = utils.filter(req.body, ['username', 'password']);
    let res = utils.formatData(data, [{
            key: 'username',
            type: 'string'
        },
        {
            key: 'password',
            type: 'string'
        }
    ]);
    //验证失败
    if (!res) return res.body = Tips[1007];
    //获取name,password
    let {
        username,
        password
    } = data;
    let values = [username, password];
    //let sql = `select * from user where username=${username} and password=${password}`
    db.query(sql.loginsql, values)
        .then(data => {
            if (!data) {
                res.body = Tips[1006];
                return
            }
            let val = data[0];
            let uid = val['uid'];
            let token = utils.generateToken({
                uid
            });
            res.body = {
                ...Tips[0],
                data: {
                    token
                }
            }
        }).catch(err => {
            res.body = {
                ...Tips[1002]
            }
        })
}

function mymessage(req, res, next) {
    let uid = req.body.uid;
    let values = [uid];
    db.query(sql.myquerysql, values)
        .then(source => {
            if (!source) {
                res.body = Tips[1005];
                return
            }
            res.body = {
                ...Tips[0],
                data: source[0]
            }
        }).catch(err => {
            res.body = Tips[1005]
        })
}

function register(req, res, next) {
    let data = utils.filter(req.body, ['username', 'password']);
    let res = utils.formatData(data, [{
            key: 'username',
            type: 'string'
        },
        {
            key: 'password',
            type: 'string'
        }
    ]);
    //验证失败
    if (!res) return res.body = Tips[1007];
    //获取name,password
    let {
        username,
        password
    } = data;
    create_time = Utils.formatCurrentTime(create_time);
    let values = [username, password, create_time]
    db.query(sql.register, values)
        .then(source => {
            if (!source) {
                res.body = Tips[1007];
                return
            }
            res.body = {
                ...Tips[0],
                data: source
            }
        })
}

function changePassword(req, res, next) {
    
    res.send('changePwd demo')
}


module.exports = {
    login,
    mymessage,
    register,
    changePassword
}