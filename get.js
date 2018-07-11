const http = require('http');
const url = require('url');

http.createServer(function(req, res) {
    var obj = url.parse(req.url, true)
    var pathname = obj.pathname;
    console.log(pathname)
    res.write('222');
    res.end();
}).listen(9527)