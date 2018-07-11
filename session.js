const express = require('express');
const cookieParser = require('cookie-parser');//获取cookie
const cookieSession = require('cookie-session');

var server = express();

var arr = []
for (let index = 0; index < 1000000; index++) {
    arr.push('slide_'+Math.random())
}

server.use(cookieParser('qwerasdf'));
server.use(cookieSession({
    keys: arr,
    maxAge: 2*3600*1000
}))
server.use('/', function(req, res) {
    // req.secret='qwerasdf'//可有可无，在cookie-parse中有封装

    //设置cookie
    // res.cookie('user', 'gyxyl', {signed: true})

    //获取cookie
    // console.log('未签名的：', req.cookies)
    // console.log('签名的：', req.signedCookies)

    //清除cookie
    // res.clearCookie('user')
    // console.log(req.session)

    if (req.session['user'] == null) {
        req.session['user'] = 1;
    } else {
        req.session['user']++
    }
    console.log(req.session['user'])
    res.send('ok')
})

server.listen(9090);