const express = require('express');
const app = express();
//设置跨域访问
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
//设置路由
const routes = require('./router')(app);
app.use(express.bodyParser());
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3001)