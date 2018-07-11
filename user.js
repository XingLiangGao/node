const fs = require('fs');
const http = require('http');
const querystring = require('querystring');
const urlLib = require('url');

var users = {}

var server = http.createServer(function (req, res) {
    var str = ''
    req.on('data', function (data) {
        str += data;
    })

    req.on('end', function () {
        const POST = querystring.parse(str);

        var obj = urlLib.parse(req.url, true);
        var url = obj.pathname;
        const GET = obj.query;

        if (url == '/user') {
            switch (GET.act) {
                case 'login':
                    if (users[GET.user] == null) {
                        res.write('{"ok": false,"msg": "此用户不存在"}')
                    } else if (users[GET.user]!=users[GET.pass]){
                        res.write('{"ok": false,"msg": "用户名或密码错误"}')
                    } else {
                        res.write('{"ok": true,"msg": "登陆成功"}')
                    }
                    break;
                case 'reg':
                    if (users[GET.user]) {
                        res.write('{"false": false,"msg": "此用户已存在"}')
                    } else {
                        users[GET.user] = GET.pass
                        res.write('{"ok": true,"msg": "注册成功"}')
                        console.log(users)
                    }
                    break;
                default:
                    res.write('{"ok": false,"msg":"未知的act"}')
            }
            res.end();
        } else {
            var file_name = './WWW' + url;
            fs.readFile(file_name, function (err, data) {
                if (err) {
                    res.write('404')
                } else {
                    res.write(data)
                }
                res.end();
            })
        }
    })
})

server.listen(9527)