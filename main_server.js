const fs = require('fs');
const http = require('http');
const urlLib = require('url');
const queryString = require('querystring');

var server = http.createServer(function(req, res) {
    //GET
    var obj = urlLib.parse(req.url, true);
    var url = obj.pathname;
    const GET = obj.query;

    //POST
    var str = '';
    req.on('data', function(data) {
        str += data;
    })
    req.on('end', function() {
        const POST = queryString.parse(str);
        console.log(url, GET, POST)
    })

    //fs
    var file_name = './WWW' + url;

    fs.readFile(file_name, function(err, data) {
        if (err) {
            res.write('404')
        } else {
            res.write(data)
        }
        res.end();
    })

})

server.listen(9527);