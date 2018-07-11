const express = require('express');
const serve = require('express-static');

var server = express();

var users = {
    'zhangsan': '123',
    'lisi': '123',
    'wangwu': '123'
}

server.get('/login', function(req, res) {
    var user = req.query['user'];
    var pass = req.query['pass'];
    // console.log(user, pass)
    if (users[user] == null) {
        res.send({ok:false, msg:"该用户不存在"});
    } else {
        if (users[user]!=pass) {
            res.send({ok:false, msg:"密码错误"});
        } else {
            res.send({ok:true, msg:"登陆成功"});
        }
    }
})
server.use(serve('./WWW'))

server.listen(9090, function() {
    console.log('start in 9090')
});