const express = require('express');
const bodyParser = require('./libs/my-body-parser');

var server = express();

server.use(bodyParser());
server.use('/', function(req, res) {
    console.log(req.body)
})

server.listen(9090)