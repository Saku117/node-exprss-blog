const mysql = require('mysql');
let config = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'blog',
    port: 3306,
    multipleStatements: true
}

let pool = mysql.createPool(config);
let query = (sql, values) => {
    return new Promise((reslove, reject) => {
        pool.getConnection((errer, connection) => {
            if (err) {
                reject(err);
                return
            }
            connection.query(sql, values, (err, rows) => {
                if (err) {
                    reject(err);
                    return
                }
                reslove(rows);
                connection.end()
            })
        })
    })
}

module.exports = {
    query
}