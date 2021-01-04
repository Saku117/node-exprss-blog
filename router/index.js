const user = require('./user')
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({
    extended: false
})

module.exports = function (app) {
    app.post('/user/login', urlencodedParser, user.login)
    app.get('/user/register', user.register)
    app.post('/blog/addBlog')
    app.post('/blog/myBlog')
}